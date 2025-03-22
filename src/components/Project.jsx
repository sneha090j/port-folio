import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style/style.css';

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: 'E-learning Website', img: 'assets/projects/learn.jpg', description: "This is a project made with HTML, CSS, JavaScript, PHP, and MySQL.", techStack: "HTML, CSS, JavaScript, PHP, MySQL", live: "https://github.com/sneha090j/E-Learning-website", code: "https://github.com/sneha090j/E-Learning-website" },
    { name: 'Age Calculator', img: 'assets/projects/calc.jpg', description: "Voice system that tells your age by calculating your Date of Birth.", techStack: "JavaScript, HTML, CSS", live: "https://github.com/sneha090j/Age-Calculator", code: "https://github.com/sneha090j/Age-Calculator" },
    { name: 'Weather App', img: 'assets/projects/weather.jpg', description: "Using weather API to know the temperature of any city.", techStack: "Node.js, Express, Weather API", live: "https://weather-2ukx.onrender.com/", code: "https://github.com/sneha090j/weather" },
    { name: 'Quotes App', img: 'assets/projects/quote.jpg', description: "Website to show quotes using API. Users can share to Twitter.", techStack: "React, API", live: "https://quotes-blue.vercel.app/", code: "https://github.com/sneha090j/Quotes" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-start text-white py-16 px-15" id="Project">
    {/* Projects Heading Aligned Left */}
    <h1 className="text-4xl font-bold mb-2 text-cyan-400">My Projects</h1>
    <hr className="mb-60" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 w-full max-w-10xl" data-aos="zoom-in">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-110 hover:shadow-cyan-400 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-xl font-semibold text-cyan-500 mb-3 text-left">{project.name}</h2>
            <img src={project.img} alt={project.name} className="w-full h-40 object-cover rounded-md" />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center p-6 z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-3xl w-full">
            <button className="text-white text-3xl font-bold float-right mb-4" onClick={() => setSelectedProject(null)}>✖</button>
            <div className="flex flex-col md:flex-row items-center">
              <img src={selectedProject.img} alt={selectedProject.name} className="w-80 h-48 object-cover rounded-md shadow-lg mb-4 md:mb-0 md:mr-6" />
              <div className="text-left text-white">
                <h2 className="text-2xl font-semibold text-cyan-500 mb-2">{selectedProject.name}</h2>
                <h3 className="text-lg font-semibold">Tech Stack:</h3>
                <p className="mb-2 text-lg">{selectedProject.techStack}</p>
                <h3 className="text-lg font-semibold">Description:</h3>
                <p className="mb-4 text-lg">{selectedProject.description}</p>
                <div className="flex gap-6">
                  <a href={selectedProject.live} className="bg-cyan-500 text-white px-5 py-2 rounded-lg shadow-lg text-lg hover:bg-cyan-700 transition">Live</a>
                  <a href={selectedProject.code} className="bg-cyan-500 text-white px-5 py-2 rounded-lg shadow-lg text-lg hover:bg-cyan-700 transition">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      )}
       <div className="w-full border-b-3 border-white text-600 mt-60"></div>
    </div>
  );
}

export default Project;