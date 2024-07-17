import React from "react";
import { SiCodechef } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

         <a href="https://www.linkedin.com/in/sneha-jaiswal-3b8a74230/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
        <a href="https://www.google.com" target="_blank" className="items">
            <SiCodechef 
            className="icons" />
          </a>
          <a href="https://leetcode.com/u/sneha063j/" target="_blank" className="items">
            <SiLeetcode  className="icons" />
          </a>
          
          <a href="https://github.com/sneha090j" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:sneha090j@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;