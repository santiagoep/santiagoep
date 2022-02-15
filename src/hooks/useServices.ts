import React from 'react';
import { RiDatabaseLine, RiLayoutLeft2Line, RiToolsLine } from 'react-icons/ri';

export const useServices = () => [
  {
    title: 'Backend',
    description:
      'Scalable services with best development practices, architectures and modern standards.',
    stack: [
      'NodeJS',
      'Typescript',
      'Express',
      'Micro-services',
      'CQRS',
      'Clean Architectures',
      'PosgreSQL',
      'Redis',
      'MongoDB',
    ],
    icon: RiDatabaseLine,
  },
  {
    title: 'Frontend',
    description:
      'Websites with a simple content structure, clean design patterns and well thought out interactions.',
    stack: [
      'ReactJS',
      'NextJS',
      'Javascript',
      'Typescript',
      'Micro-frontends',
      'Realtime',
      'SEO',
      'Mobile first',
      'CSS',
      'Tailwind',
      'HTML',
    ],
    icon: RiLayoutLeft2Line,
  },
  {
    title: 'Marketing',
    description:
      'I design and create digital marketing campaigns, analyze user interaction and optimize SEO.',
    stack: [
      'SEO',
      'Web Vitals',
      'Facebook for Business',
      'Google Tag Manager',
      'Facebook Pixel',
      'Google Analytics',
      'Design',
    ],
    icon: RiToolsLine,
  },
];

export interface Services {
  title: string;
  description: string;
  stack: string[];
  icon: React.FC;
}
