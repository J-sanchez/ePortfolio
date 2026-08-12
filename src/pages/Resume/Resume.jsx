import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import PhotoAccent from '../../components/PhotoAccent';

/**
 * A styled, in-site version of the standalone resume.html -- same facts,
 * restyled to match the portfolio's design system so a recruiter never
 * has to leave the site to see the full picture. Cross-links to the
 * relevant case studies for anyone who wants the deeper story.
 */

const jobs = [
  {
    title: 'Product Owner & Project Lead | EPC',
    company: 'Los Alamos National Laboratory',
    date: '07.2022 – Present',
    aiProducts: [
      {
        name: 'EPC AI Compliance Assistant',
        bullets: [
          'Architected and developed a full-stack AI application using FastAPI, React, TypeScript, and Claude API integration, implementing a RAG system with a FAISS vector store for semantic search across environmental procedures.',
          'Integrated the Electronic Code of Federal Regulations (eCFR) XML feed, giving users the ability to ask specific regulatory questions against the most current federal compliance data.',
          "Designed a dual-prompt architecture (Analysis vs. Comparison modes) with configurable system prompts and context management to optimize Claude's responses for environmental compliance queries.",
          'Added request rate limiting and built topic relevance guardrails so the chatbot could detect and reject off-scope questions, hardening the application for deployment on a secure network.',
          'Built E2E test coverage with Playwright to validate reliability before releases to the secure-network environment.',
        ],
        link: 'epc-ai-compliance-assistant',
      },
      {
        name: 'AI Sprint Executive',
        bullets: [
          'Built an automated sprint analysis system using the Claude API to extract key decisions, identify risks, and flag duplicate work across agile development cycles.',
          'Implemented ML/NLP duplicate detection using TF-IDF vectorization and cosine similarity (scikit-learn), rather than simple keyword matching.',
          'Integrated with the Jira REST API and built a custom storage layer for historical sprint data, enabling trend analysis across a rolling 50-sprint lookback.',
          "Use daily to track EPC's 12-application portfolio, cutting manual backlog review by ~3 hours per sprint and enabling faster status updates to stakeholders without pinging developers directly.",
        ],
        link: 'ai-sprint-executive',
      },
    ],
    programManagement: [
      "Budget & Resource Management: Indirectly manage a $1.3M annual budget for EPC's Agile Scrum Team and support the six-year, $9M ECMS project across 20+ swimlanes annually.",
      'System Integration: Direct development of 9 API integrations connecting ECMS with tools like ArcGIS, IRT, and EDRMS to enhance compliance tracking and transparency.',
      'Cross-Functional Coordination: Collaborate with stakeholders across the division (ADS, OSH, NPI, WM) and external consultants to ensure smooth implementation and system alignment.',
      'Cost Optimization: Delivered a proof-of-concept application projected to save LANL $140,000 in its first year by eliminating roughly 100 redundant software licenses ($1,400/license).',
      'Process Improvement: Support process automation initiatives using Integrify, improving workflows across multiple teams.',
      'Stakeholder Communication: Provide regular updates to stakeholders, addressing risks, progress, and project changes proactively.',
    ],
    programManagementLink: 'ecms-modernization',
  },
];

const earlierRoles = [
  {
    title: 'Undergrad Student – Waste Management',
    company: 'Los Alamos National Laboratory',
    bullets: [
      'Researched and evaluated waste tracking systems (WCATS, handheld devices) to optimize operational efficiency and data accuracy for enterprise waste management operations.',
      'Ensured regulatory compliance for diverse waste types across federal and state requirements, supporting environmental stewardship objectives.',
      "Presented research findings on waste reduction strategies at LANL's Student Symposium.",
    ],
  },
  {
    title: 'Undergrad Student – Environmental Stewardship',
    company: 'Los Alamos National Laboratory',
    bullets: [
      'Conducted environmental research on pollution prevention and waste reduction, contributing to site-wide sustainability initiatives.',
      'Authored and published research on paperless document storage solutions in MIRROR Magazine. Presented findings at UNM-Taos and LANL symposiums.',
      'Analyzed vegetation and contamination data to ensure compliance with regulatory safety standards.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Technical Skills',
    items: [
      'Project & Program Management',
      'Agile/Scrum',
      'AI/ML Integration',
      'Software Development & System Integration',
      'Testing & QA',
      'Research & Analysis',
    ],
  },
  {
    label: 'AI/ML Tools & Libraries',
    items: [
      'Claude API',
      'RAG Architecture',
      'FAISS Vector Store',
      'Prompt Engineering',
      'Semantic Search',
      'scikit-learn (TF-IDF / Cosine Similarity)',
    ],
  },
  {
    label: 'Soft Skills',
    items: [
      'Leadership',
      'Stakeholder Communication',
      'Cross-Functional Collaboration',
      'Risk Management',
      'Process Improvement',
    ],
  },
  {
    label: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Java'],
  },
  {
    label: 'Tools & Technologies',
    items: [
      'FastAPI',
      'React',
      'Node',
      'GitHub',
      'Postman',
      'Streamlit',
      'Oracle APEX',
      'ArcGIS',
      'Digital Ocean',
      'AWS RDS',
      'PostgreSQL',
      'Prisma',
      'Integrify',
      'Jira',
      'Confluence',
      'Microsoft Office Suite',
    ],
  },
];

const education = [
  {
    title: 'BS, Computer Science',
    school: 'Southern New Hampshire University',
  },
  {
    title: 'AS, Applied Mathematical Sciences',
    school: 'Adams State University',
  },
  {
    title: 'Computer Science',
    school: 'University of New Mexico – Los Alamos',
  },
];

const certificates = [
  'Fullstack Web Development – University of Arizona',
  'EMT-B – University of New Mexico - Los Alamos',
  'Engineer Technician I/II – SFCC',
];

const accolades = [
  'Volunteer Firefighter',
  '80+ GitHub Repositories',
  'Research in Machine Learning and Green Technology',
  'National Honor Society',
  'Collegiate Baseball Player',
];

const supportingProjects = [
  {
    title: 'Algorithmic Trading System',
    summary:
      'Built a Python day-trading bot (Lumibot + Alpaca API) automating a momentum trading strategy, with a Claude API layer for catalyst scoring, market-context checks, and weekly performance review, kept out of real-time trade execution by design. Deployed as a systemd service on a Digital Ocean droplet, monitored via logs. Circuit breakers enforce a 2% max risk per trade and a 2:1 target reward-to-risk ratio. Currently paper trading.',
    link: 'algorithmic-trading-system',
  },
  {
    title: 'Travelogy',
    summary:
      'Full-stack travel search app (Express backend, React/Vite frontend) integrating the Amadeus API for flight, hotel, and experience search, with an interactive Leaflet map for hotel results.',
  },
  {
    title: 'BST Traversal Tool',
    summary:
      'Full-stack visualization tool (Express backend, React/react-d3-tree frontend) implementing pre-order, in-order, and post-order traversal algorithms as a REST API, rendering results as interactive tree diagrams.',
  },
  {
    title: 'BuildRight',
    summary:
      'Full-stack quoting tool for contractors (Express/TypeScript backend, React/TypeScript frontend) using the Claude API to generate structured quotes from a guided intake flow, with AWS RDS (PostgreSQL via Prisma) powering a multi-tenant contractor/client/job data model. Pre-launch.',
  },
];

const CaseStudyLink = ({ slug }) => (
  <Link
    to={`/work/${slug}`}
    className="field-stamp inline-block text-xs text-accent hover:underline mt-2"
  >
    Full case study →
  </Link>
);

const Resume = () => {
  return (
    <>
      <title>Résumé | Jonathan C. Sanchez</title>
      <meta
        name="description"
        content="Full résumé for Jonathan C. Sanchez — Product Owner & Project Lead at Los Alamos National Laboratory, covering AI products, program management, skills, and education."
      />
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
          <span className="badge text-xs mb-4">Résumé</span>
          <h1 className="font-display font-semibold text-4xl md:text-6xl text-text mb-3">
            Jonathan C. Sanchez
          </h1>
          <p className="text-text-muted text-lg md:text-xl mb-6">
            Product Owner & Project Lead | Environmental Compliance Systems
          </p>
          <p className="field-stamp text-xs text-accent">
            (505) 929-3436 &nbsp;·&nbsp; jonathan.sanchez@windstream.net &nbsp;·&nbsp; github.com/J-sanchez
          </p>
        </Reveal>

        <PhotoAccent
          name="photo-boat"
          alt="An old wooden boat resting on the shore of a lake, mountains and storm clouds behind it"
          aspect="aspect-[21/9]"
          delay={30}
          className="mt-8"
        />

        <Reveal delay={40} className="mt-12">
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">
            Product owner and project lead with 4+ years managing application
            portfolios and large-scale programs at Los Alamos National
            Laboratory. Along the way, built three AI applications using the
            Claude API and managed cross-functional teams, vendor
            relationships, and $1M+ budgets. Comfortable moving between
            strategy and hands-on technical work. Known for resilience,
            clear communication, and following through on complex,
            multi-stakeholder projects.
          </p>
        </Reveal>

        {/* Work Experience */}
        <div className="mt-16">
          <span className="field-stamp text-xs text-text-muted mb-5 block">
            Work Experience
          </span>

          {jobs.map((job) => (
            <Reveal
              key={job.title}
              className="bg-surface border border-border rounded-xl p-8 mb-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-text">
                  {job.title}
                </h3>
                <span className="field-stamp text-xs text-text-muted">
                  {job.date}
                </span>
              </div>
              <p className="field-stamp text-xs text-accent mb-6">
                {job.company}
              </p>

              <p className="field-stamp text-xs text-text-muted mb-3">
                AI Products Portfolio
              </p>
              <div className="space-y-6 mb-8">
                {job.aiProducts.map((product) => (
                  <div key={product.name}>
                    <p className="text-text font-semibold mb-2">
                      {product.name}
                    </p>
                    <ul className="space-y-2 text-text-muted leading-relaxed list-disc marker:text-accent pl-5">
                      {product.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <CaseStudyLink slug={product.link} />
                  </div>
                ))}
              </div>

              <p className="field-stamp text-xs text-text-muted mb-3">
                Program Management & Technical Leadership
              </p>
              <ul className="space-y-2 text-text-muted leading-relaxed list-disc marker:text-accent pl-5">
                {job.programManagement.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <CaseStudyLink slug={job.programManagementLink} />
            </Reveal>
          ))}

          {earlierRoles.map((job) => (
            <Reveal
              key={job.title}
              className="bg-surface border border-border rounded-xl p-8 mb-6"
            >
              <h3 className="font-display font-semibold text-xl md:text-2xl text-text mb-1">
                {job.title}
              </h3>
              <p className="field-stamp text-xs text-accent mb-5">
                {job.company}
              </p>
              <ul className="space-y-2 text-text-muted leading-relaxed list-disc marker:text-accent pl-5">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16">
          <span className="field-stamp text-xs text-text-muted mb-5 block">
            Skills
          </span>
          {skillGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="field-stamp text-xs text-accent mb-2">
                {group.label}
              </p>
              <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                {group.items.join('  ·  ')}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <span className="field-stamp text-xs text-text-muted mb-5 block">
            Education
          </span>
          <div className="space-y-3 mb-6">
            {education.map((item) => (
              <p key={item.title} className="text-text">
                <span className="font-semibold">{item.title}</span>
                <span className="text-text-muted">, {item.school}</span>
              </p>
            ))}
          </div>
          <p className="field-stamp text-xs text-accent mb-2">Certificates</p>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">
            {certificates.join('  ·  ')}
          </p>
        </div>

        {/* Accolades */}
        <div className="mt-16">
          <span className="field-stamp text-xs text-text-muted mb-5 block">
            Accolades & Community
          </span>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">
            {accolades.join('  ·  ')}
          </p>
        </div>

        {/* Supporting Projects */}
        <div className="mt-16">
          <span className="field-stamp text-xs text-text-muted mb-5 block">
            Supporting Projects
          </span>
          <div className="space-y-6">
            {supportingProjects.map((project) => (
              <Reveal key={project.title}>
                <p className="text-text font-semibold mb-1">{project.title}</p>
                <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                  {project.summary}
                </p>
                {project.link && <CaseStudyLink slug={project.link} />}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      </section>
    </div>
    </>
  );
};

export default Resume;
