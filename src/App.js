import React from "react";
import "./App.css";
import Board from "./components/Board";
import ContactBoard from "./components/ContactBoard";
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
                            height = "10vh"
                            header = "Welcome!"
                            text = { <> My name is <small>Aryan Gupta</small> 🍌 </> } />

                     <ContactBoard />
       
                 </div>
              
                 <div className = "Vertical-Set">
              
                        <Board width = "40vh"
                               height = "75vh"
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

                                   <br/><br/>

                                   I'm currently working on a <small>self-driving car algorithm</small> for a research project.

                               </>} />
       
                 </div>
              
                 <div className = "Vertical-Set">
                        
                        <div className = "Horizontal-Set">
              
                               <Board width = "38vh"
                                      height = "90%"
                                      header = "I'm a..."
                                      text = {<>
                                      
                                          Varsity <small>cross country </small> & <span>track</span> runner, <br />
                                          Instructor for Conant's <small>CompSciKids</small>, <br />
                                          Teacher at <span>Mathnasium</span>, <br />
                                          <small>3rd degree</small> black belt holder, <br />
                                          and <span>Math & Science Tutor</span>. <br />

                                          </>} />
                        
                               <Board width = "34vh"
                                      height = "90%"
                                      header = "I also like..."
                                      text = {<>

                                          working on my <small>cars</small> & <span>planes</span>, <br />
                                          <small>photography</small>, <span>digital</span> & <small>pixel</small> art, <br />
                                          & <span>programming</span>!
                                          
                                          <br />

                                          </>} />
       
                        </div>
              
                        <Board width = "90%"
                               height = "42vh"
                               header = "I've worked with..."
                               text = {<div className = "Skills">

                                   <div className = "Row">

                                          <IoLogoJavascript className = "Fancy-Border" />
                                          <SiReact className = "Fancy-Border" />
                                          <SiPython className = "Fancy-Border" />
                                          <SiJava className = "Fancy-Border" />
                                          <TbCSharp className = "Fancy-Border" />
                                          <SiCplusplus className = "Fancy-Border" />
                                          <SiTensorflow className = "Fancy-Border" />
                                          

                                   </div>
                                   
                                          <div className = "Row">
                                          
                                          <SiAmazonaws className = "Fancy-Border" />
                                          <SiNodedotjs className = "Fancy-Border" />
                                          <SiFirebase className = "Fancy-Border" />
                                          <DiSqllite className = "Fancy-Border" />
                                          <SiGit className = "Fancy-Border" />
                                          <SiTailwindcss className = "Fancy-Border" />
                                          <SiBootstrap className = "Fancy-Border" />
                                   
                                   </div>
                                   
                                   </div>} />
       
                 </div>

                 <div className = "Horizontal-Set">
                        
                        {/* <div className = "Vertical-Set">
              
                               <Board width = "30vh"
                                      height = "22.8vh"
                                      header = "box 7"
                                      text = "start here..." />
                        
                               <Board width = "30vh"
                                      height = "22.8vh"
                                      header = "box 8"
                                      text = "start here..." />

                               <Board width = "30vh"
                                      height = "22.8vh"
                                      header = "box 9"
                                      text = "start here..." />
       
                        </div> */}

                        <div className = "Timeline">
                            
                            <div className = "Line"></div>

                            <div className = "Events">

                                   <div className = "Timeline-Header">Notable Moments</div>

                                   <div className = "Event">2015, Started my journey!</div>

                                   <div className = "Event">2020, Made my first AI project</div>

                                   <div className = "Event">2021, Started working on <br />planes & cars</div>

                                   <div className = "Event">2021, Intern at Graaphene</div>

                                   <a href = "https://runforwater5k.org" target = "_blank" rel = "noreferrer" className = "Event">2022, Co-founded the<br /><span>Run For Water 5K</span><BiLink /></a>

                                   <div className = "Event">2022, Conant's XC team<br />qualified for state</div>

                            </div>

                        </div>
              
                        <Board width = "30vh"
                               height = "76vh"
                               header = "box 10"
                               text = "start here..." />
       
                 </div>
              
                 </div>

              );

       }

}