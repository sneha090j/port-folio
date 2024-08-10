// src/components/Skills.js
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
  const skills = [
    { logo: 'assets/photo/java.png', name: 'Java'},
    { logo: 'assets/photo/c++.png', name: 'C++'  },
    { logo: 'assets/photo/html.png', name: 'HTML' },
    { logo: 'assets/photo/css.png', name: 'CSS' },
    { logo: 'assets/photo/bootstrap.png', name: 'Bootstrap'},
    { logo: 'assets/photo/js.png', name: 'JavaScript'},
    { logo: 'assets/photo/react.png', name: 'React',  },
    { logo: 'assets/photo/tailwind.png', name: 'Tailwind',  },
    { logo: 'assets/photo/nodejs.png', name: 'NodeJS'},
    { logo: 'assets/photo/mongodb.png', name: 'MongoDB' },

    // Add more skills here
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='myskills' id='Skills'>
      <h1 >My Skills</h1>
      <div className="skills" >
        {skills.map(skill => (

          <div key={skill.name} className="skill" data-aos="zoom-in"   >
          
              <div className="logo" >
                <img src={skill.logo} alt={skill.name} />
              </div>
              <div className="name">
                <h2>{skill.name}</h2>
              </div>



          </div>

        ))}
      </div>
    </div>
  );
};

export default Skills;
