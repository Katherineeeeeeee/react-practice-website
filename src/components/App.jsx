import Header from './Header/Header';
import Hero from './Hero/Hero';
import Section1 from './Section1/Section1';

import SectionTemplateList from './SectionTemplate/SectionTemplateList';
import items from '../database/array.js';

import SectionPrice from './SectionPrice/SectionPrice';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <SectionTemplateList items={items} />
      <SectionPrice />
      <Footer />
    </div>
  );
};
