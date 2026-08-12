import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio';
import AlsoBuilt from '../../components/AlsoBuilt';

const HomePage = () => {
  return (
    <>
      <title>Jonathan Sanchez | Product Owner & Project Lead</title>
      <meta
        name="description"
        content="Product Owner & Project Lead at Los Alamos National Laboratory. Case studies on ECMS modernization, AI compliance tooling built with the Claude API, and program management at scale."
      />
      <div className="relative z-0 bg-bg">
        {/* Fixed ambient glow -- stays anchored to the viewport as the page scrolls,
            so the whole site reads as one continuous background, not separate sections */}
        <div className="fixed inset-0 -z-10 hero-glow pointer-events-none" aria-hidden="true" />
        <Hero />
        <AboutMe />
        <Portfolio />
        <AlsoBuilt />
      </div>
    </>
  );
};

export default HomePage;
