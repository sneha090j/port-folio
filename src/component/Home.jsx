import React, { useEffect, useRef } from "react";
import pdf from "../pdf/sneharesume.pdf";
import photo from "./data/photo.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "MySelf Sneha Jaiswal",
        "I'm B.Tech final year Student",
        
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <div className="resume">
          <a
            href={pdf}
            download="SnehaResume.pdf"
            className="resumebtn"
          >

            Download Resume
            
          </a>
          </div>
        </div>
        <div className="right">
          <div className="img" >
            <img src={`/assets/${photo.imgSrc}`} alt="pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;