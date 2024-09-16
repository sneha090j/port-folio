import React from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
  return (
    <>
    <div className="navbar">
      
        <div className="head" data-aos="fade-right">
       

        <h1>PortFolio</h1>
        </div>
     
        <div className="nvlink" data-aos="fade-left">
      
       <a className="links" href="#Home">Home</a>
       <a className="links" href="#About">About</a>
       <a className="links" href="#Skills">Skills</a>
       <a className="links" href="#Project">Project</a>
       <a className="links" href="#Contact">Contact</a>
       
        </div>
       
    </div>
    </>
  )
}

export default Navbar
