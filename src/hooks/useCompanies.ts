export const useCompanies = (): Company[] => [
  {
    image: {
      url: '/img/companies/spot.png',
      alt: 'Spot',
      width: 210,
      height: 105,
    },
  },
  {
    image: {
      url: '/img/companies/austin-software.png',
      alt: 'Spot',
      width: 210,
      height: 82,
    },
  },
  {
    image: {
      url: '/img/companies/playstation.png',
      alt: 'PlayStation',
      width: 210,
      height: 38,
    },
  },
  {
    image: {
      url: '/img/companies/imagemaker.png',
      alt: 'ImageMaker',
      width: 210,
      height: 41,
    },
  },
  {
    image: {
      url: '/img/companies/zemoga.png',
      alt: 'Zemoga',
      width: 210,
      height: 65,
    },
  },
  {
    image: {
      url: '/img/companies/grability.png',
      alt: 'Grability',
      width: 210,
      height: 53,
    },
  },
  {
    image: {
      url: '/img/companies/montechelo.png',
      alt: 'Montechelo',
      width: 210,
      height: 81,
    },
  },
  {
    image: {
      url: '/img/companies/lsj.png',
      alt: 'LSJ',
      width: 210,
      height: 81,
    },
  },
];

export interface Company {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
