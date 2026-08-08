import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import caseStudies from '../data/caseStudies';

const Portfolio = () => {
  return (
    <section className="text-text px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="badge text-xs mb-3">Selected Work</span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text mb-12 md:mb-16 mt-3">
            Case Studies
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 80}>
              <Link
                to={`/work/${study.slug}`}
                className="group block bg-surface border border-border rounded-xl p-8 h-full transition-colors duration-300 hover:border-accent"
              >
                <span className="badge text-[11px] mb-3">
                  Case {study.number}
                </span>
                <h3 className="font-display font-semibold text-3xl text-text mb-3 transition-colors duration-300 group-hover:text-accent">
                  {study.title}
                </h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {study.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
