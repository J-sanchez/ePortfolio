import Reveal from './Reveal';

/**
 * Lightweight companion to the case-study grid -- smaller side projects
 * that don't merit a full narrative but are worth a link. Deliberately
 * lower visual weight than Portfolio.jsx's case study cards so the
 * hierarchy between flagship and supporting work stays obvious.
 */
const projects = [
  {
    title: 'Travelogy',
    summary:
      'Full-stack travel search app (Express, React/Vite) integrating the Amadeus API for flight, hotel, and experience search, with an interactive Leaflet map for hotel results.',
    link: 'https://travelogy-frontend-3f9bc06f0a5e.herokuapp.com/',
  },
  {
    title: 'Binary Search Tree Traversal',
    summary:
      'Interactive BST visualizer (React, react-d3-tree) that generates random trees and animates pre-order, in-order, and post-order traversal in real time.',
    link: 'https://bst-treetraversal-0a629bc8dd79.herokuapp.com/',
  },
];

const AlsoBuilt = () => {
  return (
    <section className="text-text px-6 md:px-10 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="field-stamp text-xs text-text-muted mb-6 block">
            Also Built
          </span>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-border py-4 md:border-0 md:py-0"
              >
                <h3 className="text-text group-hover:text-accent transition-colors duration-200 mb-1">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.summary}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoBuilt;
