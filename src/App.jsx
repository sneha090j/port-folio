import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import Skills from "./component/Skill";
import Projects from "./component/Project";
import Contact from './component/Contact'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;