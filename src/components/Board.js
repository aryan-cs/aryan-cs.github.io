import './Board.css';
import React from "react";
import Tilt from "react-vanilla-tilt";


function Board (props) {

  return (

    <Tilt options = {{ scale: 0.5, max: 1, glare: true, "max-glare": 1 }}
          style = {{ minWidth: props.width, minHeight: props.height }}>

      <div className = "Board" style = {{ minWidth: props.width, minHeight: props.height, transform: "perspective(1000px)", transformStyle: "preserve-3d" }}>

        <div className = "Board-Header"> {props.header} </div>

        {props.text}

      </div>

    </Tilt>

  );

}

export default Board;