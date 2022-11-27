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
       SiTensorflow

} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { DiSqllite } from "react-icons/di";
import { TbCSharp } from "react-icons/tb";
import { BiLink } from "react-icons/bi";

export default class App extends React.Component {

       render () {

              return (
              
                 <div className = "App" onLoad = {() => {

                     document.querySelector(":root").addEventListener("wheel", function (e) { document.querySelector(":root").scrollBy(e.deltaY, 0); });

                 }}>
              
                 <div className = "Vertical-Set">
              
                     <Board width = "32.5vh"
                            height = "18vh"
                            id = "welcome"
                            header = "Welcome!"
                            text = { <> My name is <small>Aryan Gupta</small> 🍌 </> } />

                     <ContactBoard />
       
                 </div>
              
                 <div className = "Vertical-Set">
              
                        <Board width = "40vh"
                               height = "76vh"
                               header = "About Me"
                               text = {<>
                               
                                   Hi there! My name is <span>Aryan</span>, and I'm currently a junior at James B. Conant 
                                   High school interested in computer science & physics. I'm a self-taught programmer, and I'm
                                   currently learning <small>C#</small> and <span>C++</span>.
                                   
                                   <br/><br/>
                                   
                                   I'm interested in <small>AI/ML</small> & <span>computer vision</span>, and their 
                                   applications in future <small>automative</small> & <span>aeronautical technology</span>.                                   
                                   
                                   <br/><br/>
                                   
                                   I'm also interested in <small>quantum computing</small>, and its applications in
                                   <span> cryptography</span> & <small>quantum physics</small>.

                               </>} />
       
                 </div>
              
                 <div className = "Vertical-Set">
                        
                        <div className = "Horizontal-Set">
              
                               <Board width = "39vh"
                                      height = "32vh"
                                      header = "I'm a..."
                                      text = {<>
                                      
                                          Varsity <small>cross country </small> & <span>track</span> runner, <br />
                                          Instructor for Conant's <small>CompSciKids</small>, <br />
                                          Teacher at <span>Mathnasium</span>, <br />
                                          <small>3rd degree</small> black belt holder, <br />
                                          and <span>Math & Science Tutor</span>. <br />

                                          </>} />
                        
                               <Board width = "34vh"
                                      height = "32vh"
                                      header = "I also like..."
                                      text = {<>

                                          working on my <small>cars</small> & <span>planes</span>, <br />
                                          <small>photography</small>, <span>digital</span> & <small>pixel</small> art, <br />
                                          & <span>programming</span>!
                                          
                                          <br />

                                          </>} />
       
                        </div>
              
                        <Board width = "90%"
                               height = "40vh"
                               id = "skills"
                               header = "I've worked with..."
                               text = {<div className = "Skills">

                                   <div className = "Row">

                                          <div className = "Skill"> <IoLogoJavascript className = "Fancy-Border" /> Javascript </div>
                                          <div className = "Skill"> <SiReact className = "Fancy-Border" /> React </div>
                                          <div className = "Skill"> <SiPython className = "Fancy-Border" /> Python </div>
                                          <div className = "Skill"> <SiJava className = "Fancy-Border" /> Java </div>
                                          <div className = "Skill"> <TbCSharp className = "Fancy-Border" /> C# </div>
                                          <div className = "Skill"> <SiCplusplus className = "Fancy-Border" /> C++ </div>
                                          <div className = "Skill"> <SiTensorflow className = "Fancy-Border" /> Tensorflow</div>
                                          

                                   </div>
                                   
                                          <div className = "Row">
                                          
                                          <div className = "Skill"> <SiAmazonaws className = "Fancy-Border" /> AWS </div>
                                          <div className = "Skill"> <SiNodedotjs className = "Fancy-Border" /> Node.js </div>
                                          <div className = "Skill"> <SiFirebase className = "Fancy-Border" /> Firebase </div>
                                          <div className = "Skill"> <DiSqllite className = "Fancy-Border" /> SQLite</div>
                                          <div className = "Skill"> <SiGit className = "Fancy-Border" /> Git </div>
                                          <div className = "Skill"> <SiTailwindcss className = "Fancy-Border" /> Tailwind </div>
                                          <div className = "Skill"> <SiBootstrap className = "Fancy-Border" /> Bootstrap </div>
                                   
                                   </div>
                                   
                                   </div>} />
       
                 </div>

                 <div className = "Horizontal-Set">

                        <div className = "Timeline">
                            
                            <div className = "Line"></div>

                            <div className = "Events">

                                   <div className = "Timeline-Header">Notable Moments</div>

                                   <div className = "Event">2015, Started my journey!</div>

                                   <div className = "Event">2020, Made my first AI project</div>

                                   <div className = "Event">2021, Started working on <br />planes & cars</div>

                                   <a href = "https://www.graaphene.com/" target = "_blank" rel = "noreferrer" className = "Event">2021, Intern at<br /><span>Graaphene</span><BiLink /></a>

                                   <a href = "https://runforwater5k.org" target = "_blank" rel = "noreferrer" className = "Event">2022, Co-founded the<br /><span>Run For Water 5K</span><BiLink /></a>

                                   <div className = "Event">2022, Conant's XC team<br />qualified for state</div>

                            </div>

                        </div>
              
                        <div className = "Projects">

                            <div className = "Board-Header Projects-Header">Projects</div>

                            <div className = "Row">

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Run For Water 5K Website"
                                            repo = "https://github.com/aryan-cs/run-for-water-5k"
                                            src = "https://runforwater5k.org"
                                            desc = "A website for the 5K event I helped organize!"/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Uno-Dos"
                                            repo = "https://github.com/aryan-cs/uno-dos"
                                            src = "https://aryan-cs.github.io/uno-dos/"
                                            desc = "An interactive handwritten digit detection AI!"/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Sudoku Solver"
                                            repo = "https://github.com/aryan-cs/sudoku"
                                            src = "https://aryan-cs.github.io/sudoku/"
                                            desc = "Entropy-based vs. brute force solving methods for sudoku"/>

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
                                            desc = "A maze generator & depth-first-search solver"/>

                                   <Project width = "30vh"
                                            height = "20vh"
                                            title = "Rube Goldberg Machine"
                                            repo = "https://github.com/aryan-cs/my-goldberg"
                                            src = "https://aryan-cs.github.io/my-goldberg/"
                                            desc = "A physics-based Rube Goldberg machine using Matter.js!"/>

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

                 </div>

              );

       }

}