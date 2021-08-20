import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cassia Melvin | FronEnd Developer', // e.g: 'Name | Developer'
  lang: 'en,pt', // e.g: en, es, fr, jp
  subtitle: 'Welcome to my Website Portfolio',
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cassia Melvin',
  subtitle: 'I am a Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://ccmelvin.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ayrton-senna-website.jpg',
    title: 'Ayrton Senna',
    info: 'Ayrton Senna da Silva was a Brazilian racing driver who won  the Formula 1 World Driver\'s Championship in 1988, 1990 and 1991.',
    info2: '',
    url: 'https://ccmelvin.github.io',
    repo: 'https://github.com/ccmelvin/react-ayrton-senna-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brazilian-recipes.jpg',
    title: 'Brazilian Recipes',
    info: 'Coming Soon',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'saopaulo.jpg',
    title: 'Sao Paulo - My Hometown',
    info: 'Coming Soon',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cassiamelvin',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/cassiamelvin',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ccmelvin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to true to able the GitHub stars/fork buttons
};
