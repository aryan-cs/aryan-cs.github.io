import { ReactP5Wrapper } from "react-p5-wrapper";
import "./Background.css";

function sketch (p5) {

	// let COLUMNS, ROWS;
	// let SCALE = 50;
	// let AMPLITUDE = 25;

	// let flying = 0;
	// let terrain = [];

	// p5.setup = () => {
	  
	// 	p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
	// 	// p5.frameRate(60);

  	// 	COLUMNS = window.innerWidth / (0.5 * SCALE);
  	// 	ROWS = window.innerHeight / SCALE;

  	// 	for (var x = 0; x < COLUMNS; x++) {

  	// 	  terrain[x] = [];
  	// 	  for (var y = 0; y < ROWS; y++) { terrain[x][y] = 0; }

  	// 	}

	// }

	// p5.draw = () => {

	// 	flying -= 0.05;
	// 	var deltaY = flying;

	// 	for (let r = 0; r < ROWS; r++) {

	// 	  	var deltaX = 0;

	// 		for (let c = 0; c < COLUMNS; c++) {

	// 			terrain[c][r] = p5.map(p5.noise(deltaX, deltaY), 0, 1, -AMPLITUDE, AMPLITUDE);
	// 			deltaX += 0.2;

	// 		}

	// 	  	deltaY += 0.2;

	// 	}
	  
	// 	p5.background(0);
	// 	p5.translate(0, 100);
	// 	p5.rotateX(p5.PI / 3);
	// 	p5.stroke(255);
	// 	p5.strokeWeight(1);
	// 	p5.noFill();
	// 	p5.translate(-window.innerWidth, -window.innerHeight / 2);

	// 	for (let r = 0; r < ROWS - 1; r++) {

	// 		p5.beginShape(p5.TRIANGLE_STRIP);

	// 		for (let c = 0; c < COLUMNS; c++) {

	// 			p5.vertex(c * SCALE, r * SCALE, terrain[c][r]);
	// 			p5.vertex(c * SCALE, (r + 1) * SCALE, terrain[c][r + 1]);

	// 		}

	// 		p5.endShape();

	// 	}

	// }

	let UNIVERSAL_Z = 0;
	let MOUSING = false;
	let ELASTICITY_ISH = 0.01;
	let GRAVITY = 0.01;
	let BACKGROUND_COLOR = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
	let PRESET_COLORS = [

		// rubystar
		"#b01558",
  		"#d10d62",
  		"#d43379",
		"#911149",

		// ice
		"#8ab9d1",
		"#8ac1de",
		"#74bde3",
		"#89b2c7"

	];

	let bodies = [];
	let mouseVector = null;
	
	function Body (x, y, z) {
    
		this.pos = p5.createVector(x, y, z);
		this.vel =  p5.createVector(0, 0, 0);	
		this.speed = 50;
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
		p5.box(10);
	
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
			pushy.mult(Math.min(window.innerHeight, window.innerWidth) / -40);
			body.vel.add(pushy);
			
		});

	}

}

export default function Background () { return <ReactP5Wrapper sketch = {sketch}/>; }