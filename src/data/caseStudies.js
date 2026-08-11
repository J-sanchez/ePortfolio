/**
 * The four flagship case studies shown on the homepage and rendered at
 * /work/:slug via CaseStudy.jsx. Keep this file plain data (no JSX) so
 * content edits never require touching the template.
 *
 * Order matters: this array drives both the homepage grid and the
 * prev/next navigation on the case study pages. ECMS leads intentionally --
 * it's the flagship program management story.
 *
 * Every fact here traces back to the resume / existing portfolio copy, and
 * has been fact-checked directly with Jonathan. Nothing invented.
 * `stats` is optional and only used when a section has genuinely
 * quantifiable outcomes (CountUp animates these on scroll).
 */

const caseStudies = [
  {
    slug: 'ecms-modernization',
    number: '01',
    title: 'ECMS Modernization',
    photo: { name: 'photo-trestle', alt: 'An old wooden rail trestle, partially collapsed, in a foggy forest' },
    role: 'Product Owner & Project Lead | Program Management',
    period: 'Leading since 2022 · six-year, $9M program',
    tagline:
      "Leading the six-year modernization of LANL's environmental compliance system, off legacy Access databases and onto a unified platform.",
    problem:
      "LANL's environmental compliance tracking was split across 3 groups, each running its own siloed processes and databases, with no unified system connecting compliance data to the tools that depend on it. That fragmentation made reporting harder and left the institution exposed to audit and compliance risk.",
    approach: [
      'Led and supported the rollout of the Environmental Compliance Management System (ECMS) for the Environmental Protection and Compliance Division, migrating 8 Access databases and numerous manual processes.',
      'Directed development of 9 API integrations enabling two-way data flow between ECMS and other institutional systems across the division.',
      "Manage a $1.3M annual budget for EPC's Agile Scrum Team and support the broader six-year ECMS program, roughly $1.3M–$1.5M a year in contractor and developer funding (~$9M cumulative, a clean estimate), across 20+ implementation swimlanes a year.",
      'Coordinate across ADS, OSH, NPI, and WM divisions plus external consultants to keep implementation and system alignment on track.',
      'Delivered a proof-of-concept application projected to save LANL $140,000 in its first year by eliminating roughly 100 redundant software licenses.',
      'Stepped into the lead role over the past year, after supporting ECMS in a junior PM capacity while also serving as Product Owner of the Scrum Team.',
    ],
    result:
      'Eight Access databases retired, nine integrations delivered, and a proof-of-concept projected to save six figures in its first year, all while keeping the broader division wide portfolio on track.',
    stats: [
      { value: 20, suffix: '+', label: 'Swimlanes/year' },
      { value: 8, suffix: '', label: 'Access databases migrated' },
      { value: 9, suffix: '', label: 'API integrations delivered' },
      { value: 140, prefix: '$', suffix: 'K', label: 'Projected first-year savings' },
    ],
    stack: ['Program Management', 'API Integration', 'ArcGIS', 'Access Migration', 'Stakeholder Management'],
  },
  {
    slug: 'epc-ai-compliance-assistant',
    number: '02',
    title: 'EPC AI Compliance Assistant',
    photo: { name: 'photo-butterfly', alt: 'A butterfly resting on a cluster of yellow wildflowers' },
    role: 'Product Owner & Project Lead | AI Products Portfolio',
    period: '2024 – Present',
    tagline:
      'A RAG-powered assistant that gives compliance staff fast, defensible answers against live federal regulations, built and security cleared for a secure network.',
    problem:
      "EPC's compliance staff needed fast, reliable answers to environmental regulatory questions, both against internal procedures and the Electronic Code of Federal Regulations (eCFR), which changes over time. Manual research was slow, and any AI tool touching this workflow had to clear a strict security review before it could run on a secure network.",
    approach: [
      'Architected and built a full-stack application: FastAPI backend, React/TypeScript frontend, Claude API integration.',
      'Built the core workflow around uploaded procedures: users upload one or more procedures for the app to analyze individually or compare against each other, powered by a RAG pipeline with a FAISS vector store for semantic search.',
      'Built a separate chat page where users reference their selected procedure(s) directly and ask questions against the eCFR, backed by a live XML integration so answers reflect current federal regulations, not a stale snapshot.',
      'Designed a dual-prompt architecture, separate Analysis and Comparison modes, with configurable system prompts and context management tuned for compliance-specific queries.',
      'Added request rate limiting and built topic relevance guardrails so the chatbot could detect and reject off-scope questions, hardening the application for deployment on a secure network.',
      'Built E2E test coverage with Playwright to validate reliability before releases to the secure-network environment.',
    ],
    result:
      'Currently in active testing with EPC staff ahead of full rollout, positioned as a complementary tool for compliance staff rather than a replacement for their judgment.',
    stats: [],
    stack: ['FastAPI', 'React', 'TypeScript', 'Claude API', 'RAG / FAISS', 'Playwright'],
  },
  {
    slug: 'ai-sprint-executive',
    number: '03',
    title: 'AI Sprint Executive',
    photo: {
      name: 'photo-jay',
      alt: "A Steller's jay perched on a bare branch, watching from a pine tree",
      aspect: 'aspect-[16/9]',
    },
    role: 'Product Owner | AI Products Portfolio',
    period: '2024 – Present',
    tagline:
      'A Claude-powered sprint analyst that catches duplicate work and surfaces risk across a 12-app portfolio, used daily, not just demoed.',
    problem:
      "Managing a 12-application portfolio across rolling agile sprints made it hard to track key decisions, catch emerging risk, and spot duplicate work before it wasted the team's time. Manual review across dozens of sprints did not scale.",
    approach: [
      'Built an automated sprint analysis system using the Claude API to extract key decisions, identify risks, and flag duplicate work across agile development cycles.',
      'Implemented ML/NLP duplicate detection using TF-IDF vectorization and cosine similarity (scikit-learn) instead of simple keyword matching.',
      'Integrated with the Jira REST API and built a custom storage layer for historical sprint data, enabling trend analysis across a rolling 50-sprint lookback.',
    ],
    result:
      "In daily use as the tool for managing EPC's 12-application portfolio as Product Owner: ECMS, WCTS, RFA, WATS, RUA, MSGP-CAR, NDA, WSSA, PRS, Weather Machine, and Lab Pack, among others — cutting manual backlog review by ~3 hours per sprint and enabling faster status updates to stakeholders without pinging developers directly.",
    stats: [
      { value: 50, suffix: '', label: 'Sprint rolling lookback' },
      { value: 12, suffix: '+', label: 'Apps in the portfolio it tracks' },
    ],
    stack: ['Claude API', 'Python', 'scikit-learn', 'Jira REST API', 'NLP'],
  },
  {
    slug: 'algorithmic-trading-system',
    number: '04',
    title: 'Algorithmic Trading System',
    photo: { name: 'photo-aspen-creek', alt: 'A mountain creek running through golden aspen trees' },
    role: 'Personal project',
    period: 'Ongoing · currently paper trading',
    tagline:
      'A rules-based day-trading bot with a Claude layer for catalyst scoring, deliberately kept out of the trade-execution loop.',
    problem:
      "Wanted to test whether a disciplined, rules-based trading strategy augmented by an LLM's judgment could outperform manual, emotion-driven trading, without letting the AI anywhere near actual execution risk.",
    approach: [
      'Built a Python day-trading bot (Lumibot + Alpaca API) automating a momentum trading strategy.',
      'Added a Claude API layer for catalyst scoring, market-context checks, and weekly performance review, kept out of real-time trade execution by design.',
      'Deployed as a systemd service on a DigitalOcean droplet, monitored via logs with no frontend or UI.',
      'Built in circuit breakers enforcing a 2% max risk per trade and a 2:1 target reward-to-risk ratio.',
    ],
    result:
      'Currently running in paper trading to validate the strategy and risk controls before any live capital is at risk.',
    stats: [
      { value: 2, suffix: '%', label: 'Max risk per trade' },
      { value: 2, suffix: ':1', label: 'Target reward-to-risk' },
    ],
    stack: ['Python', 'Lumibot', 'Alpaca API', 'Claude API', 'DigitalOcean', 'systemd'],
  },
];

export default caseStudies;
