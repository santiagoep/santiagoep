import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="custom-general-container text-center flex flex-col items-center md:py-24">
      <h1 className="custom-main-gradient-text font-extrabold text-2xl md:text-5xl mt-6 pb-1">
        Fullstack Web Developer & Marketing Lover
      </h1>
      <p className="text-sm font-extralight mx-10 md:mx-0 mt-3 md:mt-6 md:text-2xl">
        I code amazing software solutions and I love what I do.
      </p>
      <div className="relative mt-6 md:mt-10 w-[118.2px] h-[152.1px] md:w-[197px] md:h-[253.6px]">
        <Image
          src="/images/me.png"
          alt="Me @SantiagoEP"
          layout="fill"
          className="rounded-full object-fill"
        />
      </div>
    </section>
  );
};
