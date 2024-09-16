import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from "../pdf/sneha.pdf";
import photo from "./data/photo.json";

function Home() {
  const typedRef = useRef(null);

  // Typed.js effect
  useEffect(() => {
    if (typedRef.current) {  // Ensure typedRef.current is not null
      const options = {
        strings: [
          "Welcome to My Profile",
          "I'm B.Tech final year Student"
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      const typed = new Typed(typedRef.current, options);
      
      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  // AOS (Animate On Scroll) effect
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
   

    <div id="Home">
      
      <div className="home">
     
        <div className="img" data-aos="zoom-in-up">
          <img src={`/assets/${photo.imgSrc}`} alt="Profile" />
        </div>
        <div className="intro" data-aos="fade-left">
          <h1>Hii! I'm <span>Sneha Jaiswal</span></h1>
      
          <h2 ref={typedRef}></h2>

          <div className="resume">
            <a href={pdf} download="Sneha-2025.pdf" className='resumebtn'>Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
