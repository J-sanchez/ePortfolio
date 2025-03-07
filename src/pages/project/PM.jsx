import React from 'react';

const experience = [
  {
    title: "Service Owner - EPC",
    company: "EPC Agile Scrum Team",
    date: "2022 - Present",
    details: [
      "As a hands-on Service Owner and active member of the Scrum team, I guide the development and delivery of products. My role involves managing budgets, leading teams, and diving into technical tasks.",
      "I oversee the entire product lifecycle from start to finish, collaborating with stakeholders to define features, prioritize needs, and ensure the team has everything required to build successful products. I'm always available for clarifications and decision-making.",
      "I actively participate in daily standups, sprint planning, and retrospectives, helping the team stay aligned on goals and ensuring progress across all workstreams.",
      "I manage a $1.0+ million budget for various applications, while also supporting the $1.7 million ECMS project, where I manage 8+ swimlanes for system implementation, including data entry, Q&A, system configurations, and integrations."
    ]
  },
  {
    title: "ECMS",
    company: "EPC",
    date: "2022 - Present",
    details: [
      "My primary responsibility within ECMS is ensuring the Srum Team is aligned with Project goals. Which involves overseeing 7 completed data integrations via APIs, migrating Access databases, and ensuring system configurations are set up correctly.",
      "Additionally, I manage multiple workstreams across the project, ensuring smooth progress and timely implementation of the environmental compliance system, which tracks and reports on key metrics and maintains up-to-date compliance records."
    ]
  },
  {
    title: "Environmental Compliance Tracking",
    company: "ECMS Project",
    date: "2022 - Present",
    details: [
      "As part of the ECMS project, I am one of many responsible for configuring the app to monitor and report on environmental compliance data, ensuring all regulatory requirements are met.",
      "I work closely with EPC SMEs, Cority, and the development team to ensure the app supports all compliance tracking needs and integrates seamlessly with other systems to provide accurate, real-time data."
    ]
  },
  {
    title: "Stakeholder Management & Reporting",
    company: "ECMS Project",
    date: "2022 - Present",
    details: [
      "I keep stakeholders informed with regular updates on project progress, risks, and any changes. I'm the go-to person for managing expectations and ensuring transparent communication throughout the lifecycle of the ECMS project."
    ]
  },
  {
    title: "Team Collaboration & Leadership",
    company: "EPC Agile Scrum Team",
    date: "2022 - Present",
    details: [
      "Collaboration is essential in my role. I work closely with customers, developers, and systems analysts to deliver high-quality outcomes. I ensure the team is aligned on priorities, timelines, and deliverables, ensuring that we hit all our milestones."
    ]
  }
];

const ProjectManagerExperience = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white px-8 md:px-16 min-h-screen relative py-12">
      <h2 className="text-4xl font-semibold text-white mb-12 mt-12 text-left">Project Management & Service Owner Experience</h2>
      
      {/* Experience Section */}
      <div className="max-w-6xl mx-auto space-y-8">
        {experience.map((item, index) => (
          <div key={index} className="border-b border-white pb-6">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-2">{item.title}</h3>
            <p className="text-lg font-semibold text-white mb-2">{item.company} <span className="text-sm text-white">{item.date}</span></p>
            <ul className="text-white list-disc pl-5 space-y-2">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectManagerExperience;
