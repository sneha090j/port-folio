import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
   
    </div>
  );
}

export default App;
