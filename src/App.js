import React from "react";
import "./App.css";
import Board from "./components/Board";
import ContactBoard from "./components/ContactBoard";

export default class App extends React.Component {

       render () {

              return (
              
                 <div className = "App" onLoad = {() => {
              
                     document.querySelector(":root").addEventListener("wheel", function (e) {
                            
                            document.querySelector(":root").scrollBy(e.deltaY, 0);
                     
                     });

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
                               height = "76vh"
                               header = "Interests"
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
              
                               <Board width = "38vh"
                                      height = "39vh"
                                      header = "I'm a..."
                                      text = {<>
                                      
                                          Varsity <small>cross country </small> & <span>track</span> runner, <br />
                                          Instructor for Conant's <small>CompSciKids</small>, <br />
                                          Teacher at <span>Mathnasium</span>, <br />
                                          <small>3rd Degree</small> Black Belt Holder, <br />
                                          & <span>Math and Science Tutor</span>. <br />

                                          </>} />
                        
                               <Board width = "34vh"
                                      height = "34vh"
                                      header = "I also like..."
                                      text = {<>

                                          working on my <small>cars</small> & <span>planes</span>, <br />
                                          <small>photography</small>, <br />
                                          <span>digital</span> & <small>pixel</small> art, <br />
                                          & <span>programming</span>!
                                          
                                          <br /><br />

                                          I'm currently working on a <br />
                                          <small>self-driving car algorithm</small>!

                                          </>} />
       
                        </div>
              
                        <Board width = "72vh"
                               height = "33vh"
                               header = "box 6"
                               text = "start here..." />
       
                 </div>

                 <div className = "Horizontal-Set">
                        
                        <div className = "Vertical-Set">
              
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