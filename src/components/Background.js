import { ReactP5Wrapper } from "react-p5-wrapper";
import "./Background.css";

function sketch (p5) {

	let UNIVERSAL_Z = 0;
	let MOUSING = false;
	let ELASTICITY_ISH = 0.01;
	let GRAVITY = 0.01;
	let BACKGROUND_COLOR = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
	let PRESET_COLORS = [

		// rubystone red
		"#F3037E",
  		"#c20666",
  		"#b01e68",
		"#ad055a",

		// curacao blue
		"#00B8EE",
		"#1b9cc2",
		"#067ea1",
		"#1198bf"

	];

	let bodies = [];
	let mouseVector = null;
	
	function Body (x, y, z) {
    
		this.pos = p5.createVector(x, y, z);
		this.vel =  p5.createVector(0, 0, 0);	
		this.speed = 150;
		this.size = Math.min(window.innerHeight, window.innerWidth) / 75;
		this.angularVel =  p5.random(0.005, 0.025);
		this.color = PRESET_COLORS[p5.floor(p5.random(0, PRESET_COLORS.length))];
	
		mouseVector =  p5.createVector(window.innerWidth / 2, window.innerHeight / 2, UNIVERSAL_Z);
	
		mouseVector.x = window.innerWidth / 2;
		mouseVector.y = window.innerHeight / 2;
		mouseVector.z = UNIVERSAL_Z;
	
	}
	
	Body.prototype.update = function () {
	
		if (MOUSING) { mouseVector =  p5.createVector( p5.mouseX - (window.innerWidth / 2),  p5.mouseY - (window.innerHeight / 2), UNIVERSAL_Z); }
	
		else {
			
			mouseVector =  p5.createVector(p5.sin(p5.frameCount / 40) * (Math.min(window.innerHeight, window.innerWidth) / 4),
										   p5.cos(p5.frameCount / 40) * (Math.min(window.innerHeight, window.innerWidth) / 4),
										   UNIVERSAL_Z);
		
		}
	
		mouseVector.sub(this.pos);
		mouseVector.normalize();
		mouseVector.mult(this.speed);
		this.vel.lerp(mouseVector, GRAVITY);
	
		let seperation =  p5.createVector(0, 0, 0);
		let seperationCount = 0;
	
		bodies.forEach(body => {
	
			if (body !== this) {

				let distance = p5.dist(this.pos.x, this.pos.y, body.pos.x, body.pos.y);
					
				if (distance < 50) {
	
					let difference =  p5.createVector(this.pos.x - body.pos.x, this.pos.y - body.pos.y, 0);
	
					difference.normalize();
					seperation.add(difference);
					seperation.mult(99);
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
		p5.scale(2);
		p5.noFill();
		p5.stroke(this.color);
		p5.strokeWeight(2);
		p5.box(this.size);
	
		p5.pop();
	
	}

	p5.preload = function () {}

	p5.setup = () => {
		
		p5.createCanvas(window.innerWidth, window.innerHeight,  p5.WEBGL);

  		for (var b = 0; b < window.innerWidth / 100; b++) {
    
    		bodies.push(new Body(p5.random(-window.innerWidth, window.innerWidth),
								 p5.random(-window.innerHeight, window.innerHeight),
								 UNIVERSAL_Z + p5.random(-200, 200)));
  
  		}

		document.body.addEventListener("mouseenter", () => { MOUSING = true; });
		document.body.addEventListener("mouseleave", () => { MOUSING = false; });
		document.body.addEventListener("mouseover", () => { MOUSING = true; });

		if (document.getElementsByTagName("canvas").length > 1) { document.getElementsByTagName("canvas")[0].remove(); }

		p5.resizeCanvas(window.innerWidth, window.innerHeight);
		window.addEventListener("resize", () => { p5.resizeCanvas(window.innerWidth, window.innerHeight); });

	}

	p5.draw = () => {

	  	p5.background(BACKGROUND_COLOR);
  		bodies.forEach(body => { body.update(); body.render(); });
		
	};

	p5.mousePressed = () => {

		bodies.forEach(body => {

			let pushy = p5.createVector(p5.mouseX - (window.innerWidth / 2), p5.mouseY - (window.innerHeight / 2), UNIVERSAL_Z);
			pushy.sub(body.pos);
			pushy.normalize();
			pushy.mult(Math.min(window.innerHeight, window.innerWidth) / -30);
			body.vel.add(pushy);
			
		});

	}

}

export default function Background () { return <ReactP5Wrapper sketch = {sketch}/>; }