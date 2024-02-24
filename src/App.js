import React from "react";
import "./App.css";
import Board from "./components/Board";
import ContactBoard from "./components/ContactBoard";
import Project from "./components/Project";
import {
       
       SiTailwindcss,
       SiBootstrap,
       SiPython,
       SiJava,
       SiCplusplus,
       SiFirebase,
       SiReact,
       SiNodedotjs,
       SiGit,
       SiAmazonaws,
       SiTensorflow,
       SiArduino,
       SiRaspberrypi 

} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { DiSqllite } from "react-icons/di";
import { TbCSharp } from "react-icons/tb";
import { BiLink } from "react-icons/bi";

export default class App extends React.Component {

       render () {

              return (
                     
                 <div className = "App" onLoad = {() => {

                     document.getElementById("toggle").checked = true;
                     document.querySelector(":root").addEventListener("wheel", function (e) { document.querySelector(":root").scrollBy(e.deltaY / 1, 0); });

                 }}>
              
                 <div className = "Vertical-Set">
              
                     <Board width = "32.5vh"
                            height = "18vh"
                            id = "welcome"
                            header = "Welcome!"
                            text = { <> My name is <small>Aryan Gupta</small> </> } />

                     <ContactBoard />
       
                 </div>
              
                 <div className = "Vertical-Set">
              
                        <Board width = "40vh"
                               height = "76vh"
                               header = "About Me"
                               id = "about"
                               text = {<>
                               
                                   &#8195;Hi there! My name is <span>Aryan</span>, and I'm currently a senior at James B. Conant 
                                   High school interested in computer science & engineering. I'm a self-taught programmer and an avid builder.
                                   
                                   <br/><br/>
                                   
                                   &#8195;I'm interested in <small>HCI</small> & <span>AI</span>, and their 
                                   applications in future <small>integrated smart systems</small>.                                   
                                   
                                   <br/><br/>
                                   
                                   &#8195;I'm also interested in <span>electrical physics</span>, and its 
                                   applications in <small>quantum computing</small>.

                                   <br/><br/>

                                   {/* &#8195;I'm currently woring on a research project working
                                   with <span>aerodynamics</span> and <small>flight efficiency</small>! */}

                               </>} />
       
                 </div>
              
                 <div className = "Vertical-Set">
                        
                        <div className = "Horizontal-Set">
              
                               <Board width = "30vh"
                                      height = "32vh"
                                      header = "I used to be a..."
                                      text = {<>
                                      
                                          <span>research intern</span> at the <small>University of
                                          Chicago</small>, where I engineered <span>integrated meshes</span> and published my findings. I am the <small>youngest researcher</small> to be accepted for the conference.<br />
                                          {/* Read about it <span>here</span>. */}

                                          </>} />
                        
                               <Board width = "34vh"
                                      height = "32vh"
                                      header = "Currently..."
                                      text = {<>

                                          I'm researching <small>mealworms</small> for <span>plastic
                                          decomposition</span>, and I'm designing a system
                                          to <small>upcycle plastic</small> into <span>3D printing filament</span>. <br />
                                          
                                          </>} />
       
                        </div>
              
                        <Board width = "84vh"
                               height = "40vh"
                               id = "skills"
                               header = "I've worked with..."
                               text = {<div className = "Skills">

                                   <div className = "Row">

                                          <div className = "Skill"> <IoLogoJavascript className = "Fancy-Border" /> Javascript </div>
                                          <div className = "Skill"> <SiReact className = "Fancy-Border" /> React </div>
                                          <div className = "Skill"> <SiPython className = "Fancy-Border" /> Python </div>
                                          <div className = "Skill"> <SiJava className = "Fancy-Border" /> Java </div>
                                          {/* <div className = "Skill"> <TbCSharp className = "Fancy-Border" /> C# </div> */}
                                          {/* <div className = "Skill"> <SiCplusplus className = "Fancy-Border" /> C++ </div> */}
                                          <div className = "Skill"> <SiTensorflow className = "Fancy-Border" /> Tensorflow</div>
                                          <div className = "Skill"> <SiAmazonaws className = "Fancy-Border" /> AWS </div>
                                          <div className = "Skill"> <SiNodedotjs className = "Fancy-Border" /> Node.js </div>
                                          

                                   </div>
                                   
                                          <div className = "Row">
                                          <div className = "Skill"> <SiArduino className = "Fancy-Border" /> Arduino </div>
                                          <div className = "Skill"> <SiRaspberrypi className = "Fancy-Border" /> RaspberryPi </div>
                                          <div className = "Skill"> <SiFirebase className = "Fancy-Border" /> Firebase </div>
                                          <div className = "Skill"> <DiSqllite className = "Fancy-Border" /> SQLite</div>
                                          <div className = "Skill"> <SiGit className = "Fancy-Border" /> Git </div>
                                          <div className = "Skill"> <SiTailwindcss className = "Fancy-Border" /> Tailwind </div>
                                          <div className = "Skill"> <SiBootstrap className = "Fancy-Border" /> Bootstrap </div>
                                   
                                   </div>
                                   
                                   </div>} />
       
                 </div>

                 <div className = "Horizontal-Set"
                      style = {{ width: "155vh" }}>

                        <div className = "Timeline">
                            
                            <div className = "Line"></div>

                            <div className = "Events"
                                   style = {{ paddingLeft: "3vh", paddingRight: "2vh" }}>

                                   <div className = "Timeline-Header">Related Work</div>

                                   <a href = "https://github.com/aryan-cs/hand-e"
                                      target = "_blank"
                                      rel = "noreferrer"
                                      className = "Event">OpenCV & Arduino<br /><span>Hand-E</span><BiLink /></a>

                                   <a href = "https://github.com/aryan-cs/project-plastic"
                                      target = "_blank"
                                      rel = "noreferrer"
                                      className = "Event">Plastic Decomposition<br /><span>Project Plastic</span><BiLink /></a>

                                   <a href = "https://github.com/aryan-cs/red-line"
                                      target = "_blank"
                                      rel = "noreferrer"
                                      className = "Event"> App for car guys,<br /><span>Red Line</span><BiLink /></a>

                                   {/* <a href = "https://github.com/aryan-cs/travelling-salesman"
                                      target = "_blank"
                                      rel = "noreferrer"
                                      className = "Event"> Gave a presentation on <br /><span>Quantum Computing</span><BiLink /></a> */}

                                   <a href = "https://runforwater5k.org"
                                      target = "_blank"
                                      rel = "noreferrer"
                                      className = "Event">Co-founded <br /><span>Run For Water</span><BiLink /></a>

                                   <div className = "Event">Research Intern at the University of Chicago HCI Lab</div>

                            </div>

                        </div>
              
                        <div className = "Projects">

                            <div className = "Board-Header Projects-Header">Projects</div>

                            <div className = "Row">

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Run For Water Website"
                                            repo = "https://github.com/aryan-cs/run-for-water-5k"
                                            src = "https://runforwater5k.org"
                                            desc = "A website for the 5K event I helped organize!"/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Red Line"
                                            id = "noSite"
                                            repo = "https://github.com/aryan-cs/red-line"
                                            src = ""
                                            desc = "An app for car guys, by a car guy."/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Sudoku Solver"
                                          //   id = "noSite"
                                            repo = "https://github.com/aryan-cs/sudoku"
                                            src = "https://aryan-cs.github.io/sudoku/"
                                            desc = "Entropy-based vs. brute force solving methods for sudoku."/>

                            </div>

                            <div className = "Row">

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Travelling Salesman Visualizer"
                                            repo = "https://github.com/aryan-cs/travelling-salesman"
                                            src = "https://aryan-cs.github.io/travelling-salesman/"
                                            desc = "A travelling salesman algorithm I used in my Quantum Computing lecture!"/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Maze Pathfinder"
                                            repo = "https://github.com/aryan-cs/maze"
                                            src = "https://aryan-cs.github.io/maze/"
                                            desc = "A maze generator & depth-first-search solver."/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            id = "noSite"
                                            title = "Hand-E"
                                            repo = "https://github.com/aryan-cs/hand-e"
                                            src = ""
                                            desc = "A system which uses OpenCV & Mediapipe for hand gesture and pose detection, relayed to an Arduino to control a robotic arm. based on Tony Stark's Dum-e!"/>

                            </div>

                            {/* <div className = "Row">
                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Chess AI"
                                            id = "noSite"
                                            repo = "https://github.com/aryan-cs/chess-cracker"
                                            src = "https://aryan-cs.github.io/chess-cracker/"
                                            desc = "Work In Progress: Chess algorithm using the Minimax Algorithm & Alpha-Beta pruning"/>
                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Chrome Dino AI"
                                            id = "noSite"
                                            repo = "https://github.com/aryan-cs/chrome-dino"
                                            src = "https://aryan-cs.github.io/chrome-dino/"
                                            desc = "My First AI project! A handmade AI system that generates pseudo-random numbers & learns the perfect jumping range based on dino speed & distance"/>
                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "White Point"
                                            repo = "https://github.com/aryan-cs/white-point"
                                            src = "https://aryan-cs.github.io/white-point/"
                                            desc = "My first web game!"/>
                            </div> */}

                     </div>
                     
                 </div>

                 {/* <div className = "Horizontal-Set">

                     <Board width = "43vh"
                            height = "76vh"
                            id = "background"
                            header = {<>Learn about<br />this background!</>}
                            text = {<>
                            
                            &#8195;This is a 3D background made using <small>p5.js</small> & implemented via <span>react-p5-wrapper</span>.
                            It was originally inspired by <small>Craig Reynold's Boids algorithm</small>, but I made
                            it my own by adding a few features.
                            <br />
                            &#8195;I render cubes in a 3D space, and then apply a few rules to them. The cubes
                            are attracted to the mouse, and repelled from each other. Each cube has a velocity,
                            and the velocity is updated based on the rules through <span>linear interpolation</span>.
                            <br />
                            &#8195;When you click on the mouse, a velocity facing opposite to the mouse from the cube
                            is applied to each cube. Keep scrolling for some empty space to see it in action.
                            <br /><br />
                            Thank you for visiting my site, good bye!
                            
                            </>}/>   

                 </div> */}

                     

                 </div>

              );

       }

}