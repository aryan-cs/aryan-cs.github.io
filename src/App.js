import React from "react";
import "./App.css";
import Board from "./components/Board";
import ContactBoard from "./components/ContactBoard";

export default class App extends React.Component {

       render () {

              return (
              
                 <div className = "App">
              
                 <div className = "Vertical-Set">
              
                     <Board width = "32.5vh"
                            height = "10vh"
                            header = "Welcome!"
                            text = { <> My name is <small>Aryan Gupta</small>. </> } />

                     <ContactBoard />
       
                 </div>
              
                 <div className = "Vertical-Set">
              
                        <Board width = "40vh"
                               height = "68vh"
                               header = "About Me"
                               text = "start here..." />
       
                 </div>
              
                 <div className = "Vertical-Set">
                        
                        <div className = "Horizontal-Set">
              
                               <Board width = "30vh"
                                      height = "30vh"
                                      header = "box 4"
                                      text = "start here..." />
                        
                               <Board width = "30vh"
                                      height = "30vh"
                                      header = "box 5"
                                      text = "start here..." />
       
                        </div>
              
                        <Board width = "72vh"
                               height = "26vh"
                               header = "box 6"
                               text = "start here..." />
       
                        </div>
              
                 </div>
       
              );

       }

}