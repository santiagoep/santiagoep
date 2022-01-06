import { Hero } from 'components/Hero';
import { Header } from 'components/Header';
import { Services } from 'components/Services';
import { CoverLetter } from 'components/CoverLetter';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CoverLetter />
      <div className="bg-blue-500 w-full h-28" />
      <section className="custom-general-container mt-[-112px]">
        <Services />
      </section>
    </>
  );
};
