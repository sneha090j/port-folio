import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pdf from "../pdf/sneha.pdf";
import photo from "./data/photo.json";
import './style/style.css';
function Home() {
  const typedRef = useRef(null);

  // Typed.js effect
  useEffect(() => {
    if (typedRef.current) {
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
    <>
    <div id="Home" className="flex flex-col md:flex-row items-center justify-around w-full min-h-screen text-white mt-10">
      <div className="flex justify-center" data-aos="zoom-in-up">
        <img src={`/assets/${photo.imgSrc}`} alt="Profile" className="rounded-full h-55 w-55 md:h-80 md:w-80 object-cover border-4 border-cyan-400" />
      </div>
      <div className="text-center md:text-left" data-aos="fade-left">
        <h1 className="text-2xl md:text-4xl font-bold">Hii! I'm <span className="text-cyan-400 font-cursive">Sneha Jaiswal</span></h1>
        <h2 ref={typedRef} className="text-lg md:text-2xl mt-2"></h2>
        <div className="mt-4">
          <a href={pdf} download="Sneha-2025.pdf" className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition">Download Resume</a>
        </div>
        
      </div>
      
    </div>
    <div className="w-full border-b-3 border-white text-600 mt-10"></div>
      </>
  );
}

export default Home;
