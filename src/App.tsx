import './App.css';
import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
