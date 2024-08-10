import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import About from './About'
import Project from './Project'

function Header() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/Home" element={<Home/>}></Route>
     <Route path="/About" element={<About/>}></Route>
     <Route path="/Skills" element={<Skills/>}></Route>
     <Route path="/Project" element={<Project/>}></Route>
     <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    
    </BrowserRouter> 
    </>
  )
}

export default Header
