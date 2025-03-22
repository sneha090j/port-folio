import React, { useState, useEffect } from "react";
import './style/style.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#About" },
    { name: "Skills", link: "#Skills" },
    { name: "Project", link: "#Project" },
    { name: "Contact", link: "#Contact" },
  ];

  useEffect(() => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 1000,
      });
    }
  }, []);

  let [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 shadow-md">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7 border-b-3 border-white text-600">
        {/* Logo */}
        <div
          className="font-bold text-5xl cursor-pointer flex items-center font-sans text-cyan-400"
          data-aos={window.innerWidth >= 768 ? "fade-right" : ""}
        >
          Portfolio
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-5 top-1.5 cursor-pointer md:hidden text-cyan-400"
          data-aos={window.innerWidth >= 768 ? "fade-left" : ""}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Menu List */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 p-6 transition-all duration-500 ease-in 
            ${open ? "top-14 opacity-100" : "top-[-490px] opacity-0"} md:opacity-100 md:top-auto md:flex`}
          data-aos={window.innerWidth >= 768 ? "fade-left" : ""}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:mx-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white text--400 font-bold hover:text-cyan-400 duration-500"
                onClick={() => setOpen(false)} // Close menu on click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
