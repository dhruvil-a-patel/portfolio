import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Education />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
    </footer>
  );
};

export default App;
