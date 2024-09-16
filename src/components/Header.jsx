import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import Project from './Project';

function Header() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <hr className="divider" />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
 
    </>
  );
}

export default Header;
