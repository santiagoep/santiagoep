import Image from 'next/image';

import { useCompanies } from 'hooks/useCompanies';
import React from 'react';

export const Companies: React.FC = () => {
  const companies = useCompanies();
  return (
    <section className="c_general-container c_top-section-margin">
      <h2 className="c_sub-title md:w-1/2 mx-auto">
        I have collaborated with some awesome companies:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-20 md:gap-x-32 md:gap-y-10 mx-32 md:mx-0 mt-16 text-center">
        {companies.map(({ image }) => (
          <Image
            key={`${image.url}-${image.alt}`}
            src={image.url}
            alt={image.alt}
            className="my-auto mx-auto"
            width={image.width}
            height={image.height}
            objectFit="contain"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
