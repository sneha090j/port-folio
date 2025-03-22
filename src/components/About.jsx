import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style/style.css';

function About() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const aboutSection = document.getElementById('About');
      if (navbar && aboutSection) {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop < navbarBottom) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='About' className={`w-full mt-20 text-white relative min-h-screen transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
   
      <h1 className="text-4xl font-bold mb-6 text-cyan-400 text-left px-15">About Me</h1>

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        
     
        <div className="md:w-2/5 text-base md:text-lg leading-relaxed text-left mt-20" data-aos="fade-right">
          <p>
            I am Sneha Jaiswal, currently pursuing B.Tech from Institute of Engineering and Rural Technology, Prayagraj.
            I am in my final year of Graduation.
            I have high interest in front-end web development.
            I am a skilled individual who always aims to learn and grow.
            I specialize in front-end using React.js.
            I excel in teamwork and always strive to give my 100%. I am a quick learner who adapts to all kinds of situations.
            I don't give up when stuck in a problem and work on it, no matter how much time it takes.
            <br></br>
            Thank you!
          </p>
        </div>

        {/* Social & Coding Profiles */}
        <div className="flex flex-col gap-3" data-aos="fade-left">
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-800 transition">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex-shrink-0">
              <img src="assets/urls/github.jpeg" alt="GitHub" className="w-full h-full rounded-full" />
            </div>
            <a href='https://github.com/sneha090j' className="text-white ml-6 text-lg font-semibold hover:text-cyan-400 transition">My Projects</a>
            <div className="text-lg font-bold text-right w-12">7</div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-800 transition">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex-shrink-0">
              <img src="assets/urls/leetcode.png" alt="LeetCode" className="w-full h-full rounded-full" />
            </div>
            <a href='https://leetcode.com/u/sneha063j/' className="text-white ml-6 text-lg font-semibold hover:text-cyan-400 transition">LeetCode Rating</a>
            <div className="text-lg font-bold text-right w-12">1486</div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-800 transition">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex-shrink-0">
              <img src="assets/urls/codechef.jpeg" alt="CodeChef" className="w-full h-full rounded-full" />
            </div>
            <a href='https://www.codechef.com/users/sneha090j' className="text-white ml-6 text-lg font-semibold hover:text-cyan-400 transition">CodeChef</a>
            <div className="text-lg font-bold text-right w-12">1326</div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
