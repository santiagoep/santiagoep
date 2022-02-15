export const useProjects = (): Project[] => [
  {
    url: 'https://www.getspot.com/',
    image: {
      url: '/img/projects/spot.jpg',
      alt: 'Spot',
    },
    description:
      'Web application that manages the complete workflow of an insurance startup in the U.S.',
  },
  {
    url: 'https://compete.playstation.com/',
    image: {
      url: '/img/projects/competition-center.jpg',
      alt: 'Sony Competition Center',
    },
    description:
      'Web to elevate your competitive play to the next level by offering tournaments and content.',
  },
  {
    url: 'https://bvc.co/',
    image: {
      url: '/img/projects/bvc.jpg',
      alt: 'Bolsa de Valores de Colombia',
    },
    description:
      'Project for the Colombian Stock Exchange that seeks to transform the way Colombians invest.',
  },
  {
    url: 'https://lsjsas.com',
    image: {
      url: '/img/projects/lsj.jpg',
      alt: 'LSJ E-Commerce',
    },
    description:
      'E-commerce, POS and administrative system to manage the entire LSJ operation.',
  },
  {
    url: 'https://www.montechelo.com.co/',
    image: {
      url: '/img/projects/montechelo.jpg',
      alt: 'Montechelo',
    },
    description:
      'Platform that connects consumers with commercial advisors in different communication channels.',
  },
  {
    url: 'https://www.montechelo.com.co/',
    image: {
      url: '/img/projects/chatbots.jpg',
      alt: 'Chatbots',
    },
    description:
      'AI Chatbots using state-of-the-art technologies such as IBM Watson and Google Dialogflow.',
  },
];

export interface Project {
  url: string;
  image: {
    url: string;
    alt: string;
  };
  description: string;
}
