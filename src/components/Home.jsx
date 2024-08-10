import React from 'react'
import { useEffect, useRef } from 'react';
import pdf from "../pdf/sneha.pdf";
import photo from "./data/photo.json";
import Typed from "typed.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
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
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []);


  return (
    <div>
      <div className="home">
        <div className="img" data-aos="zoom-in-up">
          <img src={`/assets/${photo.imgSrc}`}></img>

        </div>
        <div className="intro" data-aos="fade-left">
          <h1>Hii! I'm Sneha Jaiswal</h1>
          <h2 ref={typedRef}></h2>

          <div className="resume">
            <a href={pdf} download="Sneha-2025.pdf" className='resumebtn'>Download Resume</a>
          </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Home
