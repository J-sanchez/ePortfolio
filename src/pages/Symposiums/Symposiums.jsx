import React from 'react';

const skills = [
    "Software Development",
    "Agile Scrum Methodologies",
    "Project Planning & Management",
    "System Implementation",
    "System Interface Development",
    "Testing & Quality Assurance",
    "Technical Integration",
    "Research, Analysis, and Reporting"
  ];

const softskills = [
    "Process Improvement",
    "Leadership",
    "Client Relations & Management",
    "Stakeholder Communication",
    "Time Management",
    "Risk Management",
    "Cross-functional Collaboration",
    "Public Speaking",
    "Innovation & Creativity"
  ];

  const toolsAndTechnologies = [
    "Jira", "Confluence", "ArcGIS", "Jupyter", "Integrify", "APEX", "Slack", "GitHub", "GitLab", "VS Code", "Adobe", "Microsoft Office Suite (Word, Excel, PowerPoint, Visio, Outlook, Teams)"
  ];

const projects = [
  {
    title: "'Going Paperless' at LANL (2018)",
    summary: "During an annual EMS (Environmental Management System) audit, an opportunity for improvement was identified regarding the paperless capabilities available to the LANL workforce. The objective was to assess the current systems in place that support paperless operations and to develop strategies for improving awareness across the lab. With the help of my mentor, Mary Rose Montalvo, I researched the current systems in place that support paperless operations and looked into ongoing efforts to move the lab toward a more paperless environment. I presented my findings at UNM-Taos and the LANL Student Symposium to help increase awareness and encourage further adoption of paperless practices throughout the institution. These findings were later published in LANL's MIRROR magazine, further extending the reach of the paperless initiative.",
    skills: [
        "Research and Analysis",
        "Problem Identification",
        "Communication and Presentation",
        "Project Development and Implementation"
    ],
    imageSrc: ["paper.png", "mirror.png"] 
    },
  {
    title: "The Future of Waste Tracking Operations at Los Alamos National Laboratory (2019)",
    summary: "Building on my research into paperless capabilities at LANL, I worked with two fellow students on 'The Future of Waste Tracking Operations at Los Alamos National Laboratory.' We explored tools and initiatives for tracking waste packaging and diversion efforts, focusing on systems like the Waste Compliance and Tracking System (WCATS), handheld data collection devices, and recycling strategies. Our findings aligned with the paperless initiative by highlighting how digital solutions can improve waste tracking and reduce paper usage.",
    skills: [
        "Collaboration",
        "Research and Analysis",
        "Problem-Solving",
        "Communication and Presentation"
    ],
    imageSrc: "waste.png"
  },

];

const Symposium = () => {
  return (
        <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white px-8 md:px-16 min-h-screen relative py-12">
          <h1 className="text-5xl font-bold text-white mt-12 mb-12 text-left">Research & Symposiums</h1>
          
          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-emerald-600 mb-4">Key Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="bg-emerald-700 text-white text-xl px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-emerald-600 mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-3">
              {softskills.map((lang, index) => (
                <span key={index} className="bg-blue-700 text-white text-xl px-3 py-1 rounded-full">{lang}</span>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-emerald-600 mb-4">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {toolsAndTechnologies.map((tool, index) => (
                <span key={index} className="bg-gray-700 text-white text-xl px-3 py-1 rounded-full">{tool}</span>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="mt-12">
            <h2 className="text-4xl font-semibold text-emerald-600 mb-6">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-12 border-b border-white pb-6">
                <h3 className="text-3xl font-semibold text-emerald-400 mb-2">{project.title}</h3>
                <p className="text-white text-xl mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-700 text-white text-xl px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
                {project.iframeSrc ? (
                  <iframe src={project.iframeSrc} className="w-full h-96 border-2 border-white rounded-lg"></iframe>
                ) : (
                    <div className="flex flex-col justify-center items-center gap-6">
                    {/* If imageSrc is an array, display both images vertically */}
                    {Array.isArray(project.imageSrc) ? (
                      project.imageSrc.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} alt={project.title} className="w-4/5 h-auto border-8 border-emerald-600 rounded-2xl" />
                      ))
                    ) : (
                      <img src={project.imageSrc} alt={project.title} className="w-4/5 h-auto border-8 border-emerald-600 rounded-2xl" />
                    )}
                  </div>
                    )
                    }
              </div>
            ))}
          </div>
      </section>
      
  );
};

export default Symposium;