import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const project = [
    { name: 'E-learning Website', img: 'assets/projects/learn.jpg', description: "This is a project made with HTML, CSS, JavaScript, PHP, and MySQL.", live: "https://github.com/sneha090j/E-Learning-website", code: "https://github.com/sneha090j/E-Learning-website" },
    { name: 'Age Calculator', img: 'assets/projects/calc.jpg', description: "Voice system that tells your age by calculating your Date of Birth.", live: "https://github.com/sneha090j/Age-Calculator", code: "https://github.com/sneha090j/Age-Calculator" },
    { name: 'Weather App', img: 'assets/projects/weather.jpg', description: "Using weather API to know the temperature of any city.", live: "https://weather-2ukx.onrender.com/", code: "https://github.com/sneha090j/weather" },
    { name: 'Quotes App', img: 'assets/projects/quote.jpg', description: "Website to show quotes using API. Users can share to Twitter.", live: "https://quotes-blue.vercel.app/", code: "https://github.com/sneha090j/Quotes" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseEnter = (name) => {
    setHoveredProject(name);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className='project' id="Project">
       <hr className="divider" />
      <div className="name">
        <h1>My Projects</h1>
      </div>
      <div className="projectname">
        {project.map((project) => (
          <div
            key={project.name}
            className="projectname"
            onMouseEnter={() => handleMouseEnter(project.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="projname" data-aos="flip-right">
              <h1>{project.name}</h1>
            </div>
            <div className="projectimg" data-aos="zoom-in">
              <img src={project.img} alt={project.name} />
              {hoveredProject === project.name && (
                <div className="description">
                  <h2>{project.description}</h2>
                </div>
              )}
            </div>
            <div className='live'>
              <a href={project.live}>Live</a>
              <span>/</span>
              <a href={project.code}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
