import {
  Hero,
  Services,
  Projects,
  CoverLetter,
  Companies,
} from 'components/@sections';
import { Footer, Header } from 'components/@layout';
import { SectionDivider } from 'components/@ui/SectionDivider';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CoverLetter />
      <Services />
      <Projects />
      <SectionDivider />
      <Companies />
      <Footer />
    </>
  );
};
