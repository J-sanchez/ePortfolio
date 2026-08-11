import Reveal from '../Reveal';
import PhotoAccent from '../PhotoAccent';

const Em = ({ children }) => (
  <strong className="font-semibold italic text-beige">{children}</strong>
);

const AboutMe = () => {
  return (
    <section id="about" className="text-text px-6 md:px-10 py-16 md:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="badge text-xs mb-4">About</span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text mb-4 mt-3">
            How I Got Here
          </h2>
          <p className="font-display italic text-xl md:text-2xl text-text-muted mb-12">
            People, code, and the outdoors.
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          <div className="flex-1 max-w-3xl space-y-5 text-lg md:text-xl text-text-muted leading-relaxed">
            <Reveal as="p" delay={0}>
              <Em>The Start.</Em> I began at LANL in the field, tracking
              waste and environmental data with paper, pen, and filing
              cabinets. That work turned into published research and a
              career building the software that replaced those cabinets.
            </Reveal>
            <Reveal as="p" delay={40}>
              <Em>The People.</Em> I like solving problems alongside the
              people who live with them: SMEs, stakeholders, and the same Scrum
              Team I have supported for years. The most memorable wins are when my team
              hits a deadline nobody thought was realistic.
            </Reveal>
            <Reveal as="p" delay={120}>
              <Em>Now.</Em> I run EPC&apos;s Software Portfolio at LANL,
              spanning environmental compliance, AI, and Agile program
              management. The newest effort is an AI compliance assistant
              built to leverage <Em>Claude&apos;s API</Em> and a{' '}
              <Em>RAG pipeline with vector search</Em>, currently being staged for release. (More on the scale of what I run in the case studies
              below.)
            </Reveal>
            <Reveal as="p" delay={200}>
              <Em>Outside.</Em> When I am not at work, I am traveling, working on my family&apos;s property, hiking, or off-roading through
              northern New Mexico. That is usually
              where the next idea or solution shows up.
            </Reveal>
          </div>

          <PhotoAccent
            name="photo-waterfall"
            alt="A small waterfall running over mossy rocks in a forest"
            aspect="aspect-[3/4]"
            delay={240}
            className="w-full md:w-72 lg:w-80 shrink-0"
          />
        </div>

        <Reveal delay={100} className="mt-14">
          <p className="field-stamp text-base text-accent">
            Still building. Still outside.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
