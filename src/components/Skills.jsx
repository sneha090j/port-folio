import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style/style.css';
const Skills = () => {
  const skills = [
    { logo: 'assets/skills/java.svg', name: 'Java' },
    { logo: 'assets/skills/c++.svg', name: 'C++' },
    { logo: 'assets/skills/HTML.svg', name: 'HTML' },
    { logo: 'assets/skills/css.svg', name: 'CSS' },
    { logo: 'assets/skills/bootstrap.svg', name: 'Bootstrap' },
    { logo: 'assets/skills/javascript.svg', name: 'JavaScript' },
    { logo: 'assets/skills/react.svg', name: 'React' },
    { logo: 'assets/skills/tailwind.svg', name: 'Tailwind' },
    { logo: 'assets/skills/node.svg', name: 'NodeJS' },
    { logo: 'assets/skills/mongo.svg', name: 'MongoDB' },
    { logo: 'assets/skills/php.svg', name: 'PHP' },
    { logo: 'assets/skills/sql.svg', name: 'MySQL' },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const Card = ({ img, title }) => {
    return (
      <div
        className="bg-black rounded-lg p-5 w-44 text-center transform transition-all duration-300 border border-cyan-400 700  hover:scale-110 "
        data-aos="zoom-in"
      >
        <img src={img} alt={title} className="w-20 h-20 object-contain mb-3 rounded-full mx-auto" />
        <h2 className="text-lg font-mono text-white hover:text-cyan-400">{title}</h2>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-start text-white py-16 px-15" id="Skills">
     
      <h1 className="text-4xl font-bold mb-2 text-cyan-400">My Skills</h1>
      <hr className="mb-10" />

      {/* Skills Grid with Adjusted Spacing & Shadow Effect */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-items-center w-full">
        {skills.map((skill) => (
          <Card key={skill.name} img={skill.logo} title={skill.name} />
        ))}
      </div>

      <div className="w-full border-b border-white opacity-50 mt-20"></div>
    </div>
  );
};

export default Skills;
