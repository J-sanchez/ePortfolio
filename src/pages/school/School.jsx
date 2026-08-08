import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import PhotoAccent from '../../components/PhotoAccent';

const education = [
  {
    title: 'Southern New Hampshire University',
    course_name: 'B.S. Computer Science',
    details: [
      'Focused on software design, Agile Scrum methodologies, UI/UX principles, and full software development.',
      'Built a foundation in software architecture, database design, and API development for scalable, user-centered applications.',
    ],
  },
  {
    title: 'University of New Mexico',
    course_name: 'Math & Computer Science',
    details: [
      'Coursework in math, physics, algorithms, and logic that sharpened my analytical thinking and problem-solving.',
    ],
  },
  {
    title: 'Adams State University',
    course_name: 'Applied Mathematical Sciences',
    details: [
      'Built the foundation of my computer science studies while playing college baseball, balancing both with discipline and time management.',
    ],
  },
  {
    title: 'University of Arizona',
    course_name: 'Certificate: Full-Stack Web Development',
    details: [
      'A fast-paced bootcamp in front-end and back-end development (HTML, CSS, JavaScript, React, and Node.js) through collaborative projects.',
    ],
  },
  {
    title: 'University of New Mexico',
    course_name: 'Certificate: Emergency Medical Technician (EMT)',
    details: [
      'Trained in life-saving skills and high-pressure decision-making.',
    ],
  },
  {
    title: 'Santa Fe Community College',
    course_name: 'Certificate: Engineering Tech I/II',
    details: [
      'Trained as a certified Engineering Technician, with hands-on coursework in engineering principles and tools.',
    ],
  },
];

const accolades = [
  'STEM Program',
  'Bridge to Success Program',
  'Volunteer Firefighter',
  '2 SPOT Awards',
  'National Honor Society',
  '80+ GitHub Repositories / Projects',
  'Alpaca API Algorithmic Trading Bot',
  'Research in Machine Learning',
  'Research in Green Technology',
  'Collegiate Athlete',
];

const Education = () => {
  return (
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

        <span className="badge text-xs mb-4">Log 02</span>
        <h1 className="font-display font-semibold text-4xl md:text-6xl text-text mb-4 mt-3">
          Education & Accolades
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10">
          Computer Science, Mathematics, and the coursework behind the
          compliance software and AI work.
        </p>

        <PhotoAccent
          name="photo-glacier"
          alt="A glacier flowing between mountains under a moody sky"
          aspect="aspect-[21/9]"
          delay={30}
          className="mb-16"
        />

        <div className="space-y-6 mb-20">
          {education.map((item, i) => (
            <Reveal
              key={item.title}
              delay={Math.min(i, 4) * 70}
              className="bg-surface border border-border rounded-xl p-8"
            >
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-text mb-1">
                {item.title}
              </h3>
              <p className="field-stamp text-xs text-accent mb-5">
                {item.course_name}
              </p>
              <ul className="space-y-3 text-text-muted leading-relaxed list-disc marker:text-accent pl-5">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <span className="badge text-xs mb-4">Accolades</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-text mb-8 mt-3">
            Along the Way
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            {accolades.join('  ·  ')}
          </p>
        </Reveal>
      </div>
      </section>
    </div>
  );
};

export default Education;
