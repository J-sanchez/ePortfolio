import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio';
import AlsoBuilt from '../../components/AlsoBuilt';

const HomePage = () => {
  return (
    <div className="relative z-0 bg-bg">
      {/* Fixed ambient glow -- stays anchored to the viewport as the page scrolls,
          so the whole site reads as one continuous background, not separate sections */}
      <div className="fixed inset-0 -z-10 hero-glow pointer-events-none" aria-hidden="true" />
      <Hero />
      <AboutMe />
      <Portfolio />
      <AlsoBuilt />
    </div>
  );
};

export default HomePage;
