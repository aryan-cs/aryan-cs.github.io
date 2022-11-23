import React from "react";
import "./App.css";
import Board from "./components/Board";

export default class App extends React.Component {

  render () {

    return (

      <div className = "App">

        <div className = "Set">

              <Board width = "30vh"
                     height = "10vh"
                     header = "box 1"
                     text = "start here..." />

              <Board width = "30vh"
                     height = "45vh"
                     header = "box 2"
                     text = "start here..." />

        </div>

        <Board width = "25rem"
               height = "35rem"
               header = "box 3"
               text = "start here..." />

        <Board width = "10rem"
               height = "10rem"
               header = "box 4"
               text = "start here..." />

        <Board width = "10rem"
               height = "10rem"
               header = "box 5"
               text = "start here..." />

      </div>

    );

  }

}