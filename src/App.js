import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App () {

       return (

              <div className = "App">

                     <Landing />
                     <About />
                     <Projects />
                     <Contact />

              </div>

       );

}

export default App;