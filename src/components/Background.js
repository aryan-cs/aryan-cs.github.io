import { ReactP5Wrapper } from "react-p5-wrapper";
import "./Background.css";

function sketch (p5) {

	let bodies = [];
	let universalZ = 0;
	let mousing = false, ELASTICITY_ISH = 0.01, GRAVITY = 0.01;

	let ELECTRON_MODE = false;
	let mouseVector = null;
	let presetPurples = [

		"#732e8f",
  		"#722391",
  		"#870096",
  		"#aa30b8",
  		"#700a7d",
  		"#9d51a6"

	];

	if (ELECTRON_MODE) { ELASTICITY_ISH = 0.01; GRAVITY = 0.01; }

	function Body (x, y, z) {
    
		this.pos = p5.createVector(x, y, z);
		this.vel =  p5.createVector(0, 0, 0);
	
		if (ELECTRON_MODE) { this.scale =  p5.random(1.75, 2); } else { this.scale =  p5.random(2, 6); }
	
		this.speed = 150 * (2 / this.scale);
		this.angularVel =  p5.random(0.005, 0.025);
		this.color = presetPurples[p5.floor(p5.random(0, presetPurples.length))];
	
		mouseVector =  p5.createVector(window.innerWidth / 2, window.innerHeight / 2, universalZ);
	
		mouseVector.x = window.innerWidth / 2;
		mouseVector.y = window.innerHeight / 2;
		mouseVector.z = universalZ;
	
	}
	
	Body.prototype.update = function () {
	
		if (mousing) { mouseVector =  p5.createVector( p5.mouseX - (window.innerWidth / 2),  p5.mouseY - (window.innerHeight / 2), universalZ); }
	
		else {
			
			mouseVector =  p5.createVector(p5.sin(p5.frameCount / 50) * (window.innerWidth / 4),
										   p5.cos(p5.frameCount / 50) * (window.innerHeight / 4),
										   universalZ);
		
		}
	
		mouseVector.sub(this.pos);
		mouseVector.normalize();
		mouseVector.mult(this.speed);
		this.vel.lerp(mouseVector, GRAVITY);
	
		var seperation =  p5.createVector(0, 0, 0);
		var seperationCount = 0;
	
		bodies.forEach(body => {
	
			if (body !== this) {

				var distance = p5.dist(this.pos, body.pos);
	
				if (distance < 20 * this.scale) {
	
					var difference = p5.Vector.sub(this.pos, body.pos);
	
					difference.normalize();
					difference.div(distance);
					seperation.add(difference);
					seperationCount++;
	
				}
	
			}
	
		});
	
		if (seperationCount > 0) { seperation.div(seperationCount); }
		seperation.normalize();
		seperation.mult(this.speed);
		this.vel.lerp(seperation, ELASTICITY_ISH);
		this.pos.add(this.vel);
	
	}
	
	Body.prototype.render = function () {
	
		p5.push();
	
		p5.translate(this.pos.x, this.pos.y, this.pos.z);
		p5.rotateX(p5.frameCount * this.angularVel);
		p5.rotateY(p5.frameCount * this.angularVel);
		p5.scale(this.scale);
		p5.noFill();
		p5.stroke(this.color);
		p5.strokeWeight(2);
		p5.box(10);
	
		p5.pop();
	
	}

	p5.preload = function () {}

	p5.setup = () => {
		
		p5.createCanvas(window.innerWidth, window.innerHeight,  p5.WEBGL);
		p5.frameRate(120);

  		for (var b = 0; b < window.innerWidth / 200; b++) {
    
    		bodies.push(new Body(p5.random(-window.innerWidth, window.innerWidth),
								 p5.random(-window.innerHeight, window.innerHeight),
								 universalZ + p5.random(-200, 200)));
  
  		}

		for (let canv of document.getElementsByTagName("canvas")) {
			
			canv.addEventListener("mouseenter", () => { mousing = true; });
  			canv.addEventListener("mouseleave", () => { mousing = false; });
		
		}

		// for some reason, two canvases are created on certain devices
		if (document.getElementsByTagName("canvas").length > 1) { document.getElementsByTagName("canvas")[0].remove(); }

		p5.resizeCanvas(window.innerWidth, window.innerHeight);
		window.addEventListener("resize", () => { p5.resizeCanvas(window.innerWidth, window.innerHeight); });

	}

	p5.draw = () => {

	  	p5.background("black");
  		bodies.forEach(body => { body.update(); body.render(); });
		
	};

	p5.mousePressed = () => {

		bodies.forEach(body => {

			let pushy = p5.createVector(p5.mouseX - (window.innerWidth / 2), p5.mouseY - (window.innerHeight / 2), universalZ);
			pushy.sub(body.pos);
			pushy.normalize();
			pushy.mult(-50);
			body.vel.add(pushy);
			
		});

	}

}

export default function Background () {

	return <ReactP5Wrapper sketch = {sketch}/>;

}