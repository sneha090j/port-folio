import React from 'react'; 
import { SiCodechef, SiLeetcode, SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import './style/style.css';

function Contact() {
  return (
    <div className="relative w-full min-h-screen flex flex-col text-white py-14 px-15 items-center" id="Contact">
      

      <h1 className="text-4xl font-bold mb-2 text-cyan-400 self-start px-10">Contact Me</h1>
      <hr className="mb-6" />

      <div className="flex space-x-6 mb-10 items-center justify-center" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.linkedin.com/in/sneha-jaiswal-3b8a74230/" target="_blank" className="flex items-center justify-center w-15 h-15 bg-white text-cyan-400 rounded-full border-2 border-cyan-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all">
          <CiLinkedin className="text-3xl" />
        </a>
        <a href="https://www.codechef.com/users/sneha090j" target="_blank" className="flex items-center justify-center w-15 h-15 bg-white text-cyan-400 rounded-full border-2 border-cyan-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all">
          <SiCodechef className="text-3xl" />
        </a>
        <a href="https://leetcode.com/u/sneha063j/" target="_blank" className="flex items-center justify-center w-15 h-15 bg-white text-cyan-400 rounded-full border-2 border-cyan-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all">
          <SiLeetcode className="text-3xl" />
        </a>
        <a href="https://github.com/sneha090j" target="_blank" className="flex items-center justify-center w-15 h-15 bg-white text-cyan-400 rounded-full border-2 border-cyan-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all">
          <FaGithubSquare className="text-3xl" />
        </a>
        <a href="mailto:sneha090j@gmail.com" target="_blank" className="flex items-center justify-center w-15 h-15 bg-white text-cyan-400 rounded-full border-2 border-cyan-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all">
          <SiGmail className="text-3xl" />
        </a>
      </div>

    
      <div className="w-full flex items-center justify-center mt-10">
        <div className="w-full max-w-lg bg-black p-6 rounded-lg shadow-lg">
          <form
            action="https://formspree.io/f/xayrnzrk"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                  'Accept': 'application/json',
                },
              })
                .then(response => {
                  if (response.ok) {
                    alert('Message sent successfully! I will contact you soon : )');
                    form.reset();
                  } else {
                    throw new Error('Error sending message.');
                  }
                })
                .catch(error => {
                  alert('Failed to send message. Please try again.');
                  console.error('Form submission error:', error);
                });
            }}
          >
            <input type="text" name="name" placeholder="Enter your name" required className="w-full p-3 mb-4 border border-gray-600 rounded focus:border-cyan-400 focus:outline-none bg-black text-white" />
            <input type="email" name="email" placeholder="Enter your Email" required className="w-full p-3 mb-4 border border-gray-600 rounded focus:border-cyan-400 focus:outline-none bg-black text-white" />
            <textarea name="message" placeholder="Enter your message" required className="w-full p-3 mb-4 border border-gray-600 rounded focus:border-cyan-400 focus:outline-none bg-black text-white h-32" ></textarea>
            <button type="submit" className="w-1/2 bg-cyan-400 text-black font-bold py-3 rounded hover:bg-white hover:text-cyan-400 transition-all block mx-auto">
  Send
</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
