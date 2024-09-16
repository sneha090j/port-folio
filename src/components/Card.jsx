import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ img, title, description, links, hovered, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className="card" 
      data-aos="zoom-in"
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <hr className="divider" /> {/* Divider between image and content */}
      <div className="card-content">
        <h2>{title}</h2>
        {hovered && description && <p>{description}</p>}
        <hr className="divider" /> {/* Divider between description and links */}
        {links && (
          <div className="card-links">
            {links.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
        )}
      </div>
    </div>
     

  );
}

export default Card;
