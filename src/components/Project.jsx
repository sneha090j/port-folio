import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const project = [
    { name: 'E-learning Website', img: 'assets/projects/learn.jpg', description: "This is a project made with complete HTML,CSS JAVASCRIPT , PHP and MYSQL.", live: "https://github.com/sneha090j/E-Learning-website", code: "https://github.com/sneha090j/E-Learning-website" },
    { name: 'Age Calculator', img: 'assets/projects/calc.jpg', description: "Implement Voice system which tells your age by calculating on the basis of your Date of Birth.", live: "https://github.com/sneha090j/Age-Calculator", code: "https://github.com/sneha090j/Age-Calculator" },
    { name: 'Weather App', img: 'assets/projects/weather.jpg', description: "Using weather api we are able know temperature of each city.", live: "https://weather-2ukx.onrender.com/", code: "https://github.com/sneha090j/weather" },
    { name: 'Quotes App', img: 'assets/projects/quote.jpg', description: "Using Html,CSS,JS and quotes api, created a website which tells the code and even we can post on twitter just clicking on twitter logo.", live: "https://quotes-blue.vercel.app/", code: "https://github.com/sneha090j/Quotes" },
  ];

  useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);

  const handleMouseEnter = (name) => {
    setHoveredProject(name);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className='project'>
      <div className="name">
        <h1>My Projects</h1>
      </div>
      <div className="projectname">
        {project.map((project) => (
          <div
            key={project.name}
            className="projectname"
            id='Project'
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
