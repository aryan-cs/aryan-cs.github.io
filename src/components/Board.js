import './Board.css';
import React from "react";
import Tilt from "react-vanilla-tilt";


function Board (props) {

  return (

    <Tilt options = {{ scale: 0.5, max: 10, glare: true }}
          style = {{ minWidth: props.width, minHeight: props.height }}>

      <div className = "Board" style = {{ minWidth: props.width, minHeight: props.height }}>

        <div className = "Board-Header"> {props.header} </div>

        {props.text}

      </div>

    </Tilt>

  );

}

export default Board;