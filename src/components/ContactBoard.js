import './ContactBoard.css';
import React from "react";
import Tilt from "react-vanilla-tilt";
import { BsGithub, BsFillEnvelopeFill, BsLinkedin } from "react-icons/bs";


function Board (props) {

  return (

    <Tilt options = {{ scale: 0.5, max: 1, glare: true }}
          style = {{ minWidth: "32.5vh", minHeight: "54.5vh" }}>
                            
        <div className = "Board"
             style = {{ minWidth: "32.5vh", minHeight: "54.5vh", padding: "0" }}>

            <div className = "Board-Header"
                 style = {{ margin: "4vh" }}>

              Links

            </div>

              <img src = { require("../images/aryan.jpg") }
                   style = {{ width: "23vh" }}
                   className = "Hoverable-Image Fancy-Border"
                   draggable = "false"
                   alt = ""/>

                    <div className = "Links-Tray">

                    <button onClick = {() => window.open("https://github.com/aryan-cs", '_blank', 'noopener, noreferrer')}
                            className = "Link-Button Fancy-Border"
                            href = {"https://github.com/aryan-cs"}>

                            <BsGithub className = "Link-Icon"/>

                    </button>

                    <button onClick = {() => window.open("", '_blank', 'noopener, noreferrer')}
                            className = "Link-Button Fancy-Border"
                            disabled = {true}
                            href = {""}>

                            <BsFillEnvelopeFill className = "Link-Icon"/>

                    </button>

                    <button onClick = {() => window.open("", '_blank', 'noopener, noreferrer')}
                            className = "Link-Button Fancy-Border"
                            disabled = {true}
                            href = {""}>

                            <BsLinkedin className = "Link-Icon"/>

                    </button>

                    </div>

        </div>

    </Tilt>

  );

}

export default Board;