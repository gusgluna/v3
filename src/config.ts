import pokedex from '@/assets/img/pokedex_v2.jpg';
import wordle from '@/assets/img/wordle_gusgluna.jpg';
import calculator from '@/assets/img/calculator.jpg';

function srConfig(delay: number) {
  return ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}

const languages: string[] = [
  'JavaScript & Node',
  'HTML & CSS',
  'React',
  'Express',
  'SQL / PostgreSQL',
  'MongoDB',
  'Python',
  'Java'
];
const tools: string[] = [
  'Git & GitHub',
  'NPM',
  'Linux Terminal',
  'Webpack',
  'Tailwind',
  'Bootstrap',
  'Chakra-UI',
];

const navBarLinks: string[] = ['About', 'Skills', 'Projects', 'Contact'];


const courses: { title: string, link: string; }[] = [
  {
    title: 'JavaScript School',
    link: 'https://platzi.com/p/gusgluna/ruta/100-escuela-javascript/diploma/detalle/'
  },
  {
    title: 'Git & GitHub Course',
    link: 'https://platzi.com/p/gusgluna/curso/1557-git-github/diploma/detalle/'
  },
  {
    title: 'Next.js Course',
    link: 'https://platzi.com/p/gusgluna/curso/1991-next/diploma/detalle/'
  },
  {
    title: 'TypeScript Fundamentals',
    link: 'https://platzi.com/p/gusgluna/curso/2878-typescript/diploma/detalle/'
  },
  {
    title: 'SQL (Basic) Certification',
    link: 'https://www.hackerrank.com/certificates/df774fd39c89'
  },
];

type projectsType = {
  title: string,
  description: string,
  tags: string[],
  linkRepo: string,
  linkDeployed: string,
  img: any;
}[];



const projects: projectsType = [
  {
    title: 'Pokedex',
    description: 'I code a Pokedex using the pokeAPI, whit vanilla JS, Bootstrap and HTML. Deploy on Netlify with Webpack.',
    tags: ['HTML', 'JavaScript', 'Webpack'],
    linkRepo: 'https://github.com/gusgluna/pokedex_v2',
    linkDeployed: 'https://agitated-heisenberg-d4fc96.netlify.app/',
    img: pokedex
  },
  {
    title: 'Wordle Clone',
    description: 'I code a Wordle clone whit React.js, Deploy on Netlify.',
    tags: ['React', 'JavaScript', 'Webpack'],
    linkRepo: 'https://github.com/gusgluna/wordle-clone',
    linkDeployed: 'https://poetic-duckanoo-ad1534.netlify.app/',
    img: wordle
  },
  {
    title: 'Calculator',
    description: 'I code a calculator with React using hooks like useReducer, useContext',
    tags: ['React', 'JavaScript', 'Webpack'],
    linkRepo: 'https://github.com/gusgluna/calculator-reactjs',
    linkDeployed: 'https://stunning-sunburst-fba57a.netlify.app/',
    img: calculator
  },
];

export { srConfig, languages, tools, courses, projects, navBarLinks};