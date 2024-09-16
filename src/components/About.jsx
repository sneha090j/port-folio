import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {

  
  return (
    <div  id='About'>
 <hr className="divider" />
      <div className="about">

        <h1 data-aos="fade-right">About Me</h1>
        <div className="main">
        
          <div className="me" data-aos="fade-right">
            <p>
              I am Sneha Jaiswal, currently persuing B.Tech from Institute of Engineering and Rural Technology,Prayagraj.
              I am in my final year of Graduation.
              I have high interest in front-end web development.
              I am skilled individual who always aims to learn and grow.
              I am specialised in front-end using React.js.
              I am great at team work and always aims to give my 100% . I am quick learner who always aims to learn more and adapts all kinds of situations.
              I don't give up when stuck in a problem and work on it , no matter how much time it takes.
              <br></br>
              Thank you!
            </p>

          </div>
          <div className="myself" data-aos="fade-left">

            <div className="name">
              <div className="img">
                <img src="assets\urls\github.jpeg"></img>
              </div>
              <a href='https://github.com/sneha090j'>My Projects</a>
              <div className="count">7</div>
            </div>
            <div className="name">
              <div className="img">
                <img src="assets/urls/leetcode.png"></img>
              </div>
              <a href='https://leetcode.com/u/sneha063j/'>LeetCode Rating</a>
              <div className="count">1486</div>
            </div>
            <div className="name">
              <div className="img">
                <img src="assets/urls/codechef.jpeg" />
              </div>
              <a href='https://www.codechef.com/users/sneha090j'>CodeChef</a>
              <div className="count">1326</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
