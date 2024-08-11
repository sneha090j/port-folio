// src/components/Skills.js
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
  const skills = [
    { logo: 'assets/skills/java.png', name: 'Java'},
    { logo: 'assets/skills/c++.jpeg', name: 'C++'  },
    { logo: 'assets/skills/HTML.jpeg', name: 'HTML' },
    { logo: 'assets/skills/css.jpeg', name: 'CSS' },
    { logo: 'assets/skills/bottstrap.jpg', name: 'Bootstrap'},
    { logo: 'assets/skills/js.png', name: 'JavaScript'},
    { logo: 'assets/skills/react.jpeg', name: 'React',  },
    { logo: 'assets/skills/tailwind.jpeg', name: 'Tailwind',  },
    { logo: 'assets/skills/node.jpeg', name: 'NodeJS'},
    { logo: 'assets/skills/mongo.jpeg', name: 'MongoDB' },

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
