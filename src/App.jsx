import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
