import { Link, useParams } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import CountUp from '../../components/CountUp';
import PhotoAccent from '../../components/PhotoAccent';
import caseStudies from '../../data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const study = caseStudies[index];

  if (!study) {
    return (
      <>
        <title>Case Study Not Found | Jonathan Sanchez</title>
        <div className="relative z-0 bg-bg">
          <div className="fixed inset-0 -z-10 hero-glow pointer-events-none" aria-hidden="true" />
          <section className="relative min-h-screen text-text px-6 md:px-10 pt-32 pb-24 flex items-center justify-center">
            <div className="text-center">
              <p className="field-stamp text-xs text-text-muted mb-4">Not found</p>
              <Link to="/" className="text-accent hover:underline">
                ← Back to Home
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }

  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <title>{study.title} | Jonathan Sanchez</title>
      <meta name="description" content={study.tagline} />
      <div className="relative z-0 bg-bg">
      <div className="fixed inset-0 -z-10 hero-glow pointer-events-none" aria-hidden="true" />
      <section className="relative min-h-screen text-text px-6 md:px-10 pt-32 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="field-stamp inline-block text-xs text-text-muted hover:text-accent transition-colors duration-200 mb-10"
        >
          ← Back to Home
        </Link>

        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="badge text-xs">Case {study.number}</span>
            <span className="field-stamp text-xs text-text-muted">
              {study.number} / 0{caseStudies.length}
            </span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-6xl text-text mb-5 leading-[1.05]">
            {study.title}
          </h1>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-6">
            {study.tagline}
          </p>
          <p className="field-stamp text-xs text-accent">
            {study.role} · {study.period}
          </p>
        </Reveal>

        {study.photo && (
          <PhotoAccent
            name={study.photo.name}
            alt={study.photo.alt}
            aspect={study.photo.aspect || 'aspect-[21/9]'}
            delay={60}
            className="mt-10"
          />
        )}

        <div className="mt-16 space-y-16">
          <Reveal>
            <span className="field-stamp text-xs text-text-muted mb-3 block">
              The Problem
            </span>
            <p className="font-display italic text-xl md:text-2xl text-text leading-snug">
              {study.problem}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <span className="field-stamp text-xs text-text-muted mb-5 block">
              The Approach
            </span>
            <ol className="space-y-5">
              {study.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="field-stamp text-xs text-accent pt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-muted text-base md:text-lg leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <span className="field-stamp text-xs text-text-muted mb-5 block">
              The Result
            </span>
            <p className="text-text text-lg md:text-xl leading-relaxed mb-8">
              {study.result}
            </p>
            {study.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-8">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-semibold text-3xl md:text-4xl text-beige">
                      <CountUp
                        value={stat.value}
                        decimals={stat.decimals || 0}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix || ''}
                      />
                    </div>
                    <p className="field-stamp text-xs text-text-muted mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={160} className="border-t border-border pt-8">
            <span className="field-stamp text-xs text-text-muted mb-3 block">
              Stack
            </span>
            <p className="field-stamp text-sm text-text-muted">
              {study.stack.join('  ·  ')}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <Link
            to={`/work/${prev.slug}`}
            className="group max-w-[45%]"
          >
            <span className="field-stamp text-xs text-text-muted block mb-1">
              ← Previous
            </span>
            <span className="text-text group-hover:text-accent transition-colors duration-200">
              {prev.title}
            </span>
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group max-w-[45%] text-right"
          >
            <span className="field-stamp text-xs text-text-muted block mb-1">
              Next →
            </span>
            <span className="text-text group-hover:text-accent transition-colors duration-200">
              {next.title}
            </span>
          </Link>
        </div>
      </div>
      </section>
    </div>
    </>
  );
};

export default CaseStudy;
