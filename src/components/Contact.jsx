// import React from 'react';
// import { SiCodechef } from "react-icons/si";
// import { CiLinkedin } from "react-icons/ci";
// import { SiLeetcode } from "react-icons/si";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// function Contact() {
//   return (
//     <div className="contact" id="Contact">
//       <div className="title">
//         <h1>Contact</h1>
//       </div>
//       <div
//           className="contact-icon"
//           data-aos="zoom-in-up"
//           data-aos-duration="1000"
//         >

//          <a href="https://www.linkedin.com/in/sneha-jaiswal-3b8a74230/" target="_blank" className="items">
//             <CiLinkedin className="icons" />
//           </a>
//         <a href="https://www.codechef.com/users/sneha090j" target="_blank" className="items">
//             <SiCodechef 
//             className="icons" />
//           </a>
//           <a href="https://leetcode.com/u/sneha063j/" target="_blank" className="items">
//             <SiLeetcode  className="icons" />
//           </a>
          
//           <a href="https://github.com/sneha090j" target="_blank" className="items">
//             <FaGithubSquare className="icons" />
//           </a>
//           <a
//             href="mailto:sneha090j@gmail.com"
//             target="_blank"
//             className="items"
//           >
//             <SiGmail className="icons" />
//           </a>
//         </div>

//       <div className="contacts">
//       <div className="form">
//         <form
//           action="https://formspree.io/f/xwpebqwk" // Replace with your Formspree endpoint
//           method="POST"
//           onSubmit={(e) => {
//             e.preventDefault();
//             // Use fetch to handle form submission and catch errors
//             const form = e.target;
//             fetch(form.action, {
//               method: form.method,
//               body: new FormData(form),
//               headers: {
//                 'Accept': 'application/json',
//               },
//             })
//               .then(response => {
//                 if (response.ok) {
//                   alert('Message sent successfully! I will contact you soon : )');
//                   form.reset();
//                 } else {
//                   throw new Error('Error sending message.');
//                 }
//               })
//               .catch(error => {
//                 alert('Failed to send message. Please try again.');
//                 console.error('Form submission error:', error);
//               });
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your Email"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             required
//           ></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Contact;
//contact component                                                                                                     
import React from 'react'; 
import { SiCodechef } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="contact" id="Contact">
       <hr className="divider" />
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.linkedin.com/in/sneha-jaiswal-3b8a74230/" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://www.codechef.com/users/sneha090j" target="_blank" className="items">
          <SiCodechef className="icons" />
        </a>
        <a href="https://leetcode.com/u/sneha063j/" target="_blank" className="items">
          <SiLeetcode className="icons" />
        </a>
        <a href="https://github.com/sneha090j" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:sneha090j@gmail.com" target="_blank" className="items">
          <SiGmail className="icons" />
        </a>
      </div>

      <div className="contacts">
        <div className="form">
          <form
            action="https://formspree.io/f/xwpebqwk" // Replace with your Formspree endpoint
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
            <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter your Email" required />
            <textarea name="message" placeholder="Enter your message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

