import './App.css'
import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

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
