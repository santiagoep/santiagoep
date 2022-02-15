import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="c_general-container c_top-section-margin text-center flex flex-col items-center">
      <h1 className="c_main-gradient-text font-extrabold text-3xl md:text-5xl mt-6 pb-1">
        Fullstack Web Developer & Marketing Lover
      </h1>
      <p className="text-xl md:text-2xl font-extralight mx-10 md:mx-0 mt-3 md:mt-6">
        I code amazing software solutions and I love what I do.
      </p>
      <div className="relative mt-6 md:mt-10 w-[118.2px] h-[152.1px] md:w-[197px] md:h-[253.6px]">
        <Image
          src="/img/me.png"
          alt="Me @SantiagoEP"
          layout="fill"
          className="rounded-full object-fill"
          priority
        />
      </div>
    </section>
  );
};
