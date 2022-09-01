import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;