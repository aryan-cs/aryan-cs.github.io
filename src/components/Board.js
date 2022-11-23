import './Board.css';
import React from "react";


function Board (props) {

  return (

    <div className = "Board" style = {{ minWidth: props.width, minHeight: props.height }}>

      <div className = "Board-Header"> {props.header} </div>

      {props.text}

    </div>

  );

}

export default Board;