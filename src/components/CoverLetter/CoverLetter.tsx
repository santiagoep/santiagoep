const FIRST_EXPERIENCE_YEAR = 2017;
const EXPERIENCE_TIME = new Date().getFullYear() - FIRST_EXPERIENCE_YEAR;

export const CoverLetter = () => {
  return (
    <section className="bg-blue-500 mt-10 py-10 curvy-top-border">
      <div className="text-center mx-10 md:max-w-2xl md:mx-auto">
        <h2 className="font-extrabold text-xl md:text-4xl mt-6 text-white">
          Hi, I&apos;m Santiago
        </h2>
        <p className="text-white font-light mt-5 md:text-lg">
          {`For ${EXPERIENCE_TIME} years ago I've been working in the web development world and the truth is that I can't love what I do more. Learning on my own and teaching have been my mindset. I am also passionate about the world of design and digital marketing. I personally believe that the intersection of these worlds has made me a great developer.`}
        </p>
      </div>
    </section>
  );
};
