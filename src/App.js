import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import background from "./assets/videos/background.mp4";
// import background from "https://player.vimeo.com/video/804348447?background=1";

function App () {

       return (

              <div className = "App">

                     <video autoPlay loop muted className = "bg-vid">
                            <source src = {background} />
                     </video>

                     <Landing />
                     <About />
                     <Projects />
                     <Contact />

              </div>

       );

}

export default App;