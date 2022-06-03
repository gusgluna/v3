import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
