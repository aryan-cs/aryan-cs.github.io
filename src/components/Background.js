import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./Background.css";

function sketch (p5) {

	let rotation = 0;

	p5.setup = () => {
		
		p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);

		window.addEventListener("resize", () => { p5.resizeCanvas(window.innerWidth, window.innerHeight); });

	}

	p5.updateWithProps = props => {

	  if (props.rotation) {
	    rotation = (props.rotation * Math.PI) / 180;
	  }

	};

	p5.draw = () => {

	  p5.background(100);
	  p5.normalMaterial();
	  p5.noStroke();
	  p5.push();
	  p5.rotateY(rotation);
	  p5.box(100);
	  p5.pop();

	};

}

export default function Background () {

	const [rotation, setRotation] = useState(0);	

	useEffect(() => {

	  const interval = setInterval(() => setRotation(rotation => rotation + 1), 10);

	  return () => { clearInterval(interval); };

	}, []);	

	return <ReactP5Wrapper sketch = {sketch}
						   rotation = {rotation} />;

}