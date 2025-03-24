import React from 'react';
import { useState, useRef } from 'react';

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


  const experiences = [
    {
      title: "Undergraduate Student - Service Owner",
      date: "07.2022 - Present",
      location: "Los Alamos National Laboratory, EPC - CP & EPC - ES",
      details: [
        "Prioritized bug fixes, enhancements, and development tasks for applications by communicating with stakeholders and managers.",
        "Gathered and analyzed functional and non-functional requirements; performed testing and Q/A to enhance application quality.",
        "Collaborated with developers and cross-functional teams to ensure timely and high-quality product delivery.",
        "Planned and managed environmental stewardship’s implementation of a commercial off-the-shelf Compliance Management System; successfully migrated 8 programs and their processes and decommissioned 6 Microsoft Access Databases.",
        "Contributed to the development and implementation of a process automation platform (Integrify).",
        "Developed a REST API interface to integrate the Compliance Management System with ArcGIS for spill tracking."
      ]
    },
    {
      title: "Undergraduate Student - Waste Management",
      date: "01.2019 - 07.2022",
      location: "Los Alamos National Laboratory, EPC - WMS",
      details: [
        "Participated in the pickup, storage, tracking, and delivery of waste containers.",
        "Ensured compliance with regulations and guidelines for handling and disposal of waste.",
        "Collaborated with waste management coordinators and presented findings at a student symposium.",
        "Participated in the collection, segregation, storage, and shipping of various waste types and containers.",
        "Tracked various waste types, volumes, containers, locations, and shipping dates to ensure regulatory compliance.",
        "Collaborated with waste management coordinators, contractors, and teams across different organizations and facilities to learn waste management processes, identify lessons learned, and presented findings during a student-symposium."
      ]
    },
    {
      title: "Undergraduate Student - Environmental Sustainability",
      date: "07.2017 - 01.2019",
      location: "Los Alamos National Laboratory, EPC - ES",
      details: [
        "Contributed to projects aimed at reducing waste generation and promoting pollution prevention.",
        "Analyzed site data to assess waste disposal, and levels of pollutants to identify trends and develop waste mitigation plans and strategies.",
        "Collected vegetation to send for analysis and analyzed data to ensure contaminant levels were below reportable levels.",
        "Participated in the banding and tracking of bird species to support wildlife monitoring and conservation efforts, contributing to data collection that can be used to identify short-term and long-term trends.",
        "Conducted research on safe and secure document and record storage and management systems to close out an opportunity for improvement identified during an Environmental Management System audit. Presented findings at UNM - Taos, a LANL student-symposium, and published findings in an internal scientific magazine."
      ]
    }
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

  const WorkExperience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
  
    // Create an array of refs for each experience and project
    const experienceRefs = useRef([]);
    const projectRefs = useRef([]);
  
    // Add ref for each experience and project dynamically
    experienceRefs.current = experiences.map((_, i) => experienceRefs.current[i] ?? React.createRef());
    projectRefs.current = projects.map((_, i) => projectRefs.current[i] ?? React.createRef());
  
    const handleExperienceClick = (index) => {
      setSelectedExperience(index);
  
      // Scroll the content into view
      experienceRefs.current[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  
    const handleProjectClick = (index) => {
      setSelectedProject(index);
  
      // Scroll the content into view
      projectRefs.current[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
  
    return (
      <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white px-8 md:px-16 min-h-screen relative py-12">
        <h1 className="text-5xl font-bold text-white mt-12 mb-12 text-left">Work Experience & Skills</h1>
  
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
  
        {/* Work Experience Section */}
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-emerald-600 mb-8">Work Experience</h1>
  
          {/* Sidebar Menu */}
          <div className="flex w-full">
            {/* Sidebar Menu */}
            <div className="flex flex-col p-6 rounded-lg w-1/4 space-y-4">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleExperienceClick(index)}
                    className="w-full text-left bg-emerald-700 text-2xl font-semibold text-white hover:bg-emerald-600 rounded-lg px-4 py-4"
                  >
                    {exp.title}
                  </button>
                </div>
              ))}
            </div>
  
            {/* Content Area */}
            <div className="w-3/4 pl-8 mb-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={experienceRefs.current[index]}
                  className={selectedExperience === index ? 'space-y-6' : 'hidden'}
                >
                  <h2 className="text-4xl font-semibold text-emerald-400">{exp.title}</h2>
                  <p className="text-lg text-gray-400 mb-2">{exp.location} | {exp.date}</p>
                  <ul className="list-disc pl-5 space-y-2 text-xl text-white">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Projects Section */}
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-emerald-600 mb-8">Previous Projects & Symposiums</h1>
  
          {/* Sidebar Menu */}
          <div className="flex w-full">
            {/* Sidebar Menu */}
            <div className="flex flex-col p-6 rounded-lg w-1/4 space-y-4">
              {projects.map((proj, indexes) => (
                <div key={indexes}>
                  <button
                    onClick={() => handleProjectClick(indexes)}
                    className="w-full text-left bg-emerald-700 text-2xl font-semibold text-white hover:bg-emerald-600 rounded-lg px-4 py-4"
                  >
                    {proj.title}
                  </button>
                </div>
              ))}
            </div>
  
            {/* Content Area */}
            <div className="w-3/4 pl-8 mb-2">
              {projects.map((proj, indexes) => (
                <div
                  key={indexes}
                  ref={projectRefs.current[indexes]}
                  className={selectedProject === indexes ? 'space-y-6' : 'hidden'}
                >
                  <h2 className="text-4xl font-semibold text-emerald-400">{proj.title}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-xl text-white">
                    {proj.summary}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {proj.skills.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-700 text-white text-xl px-3 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    {proj.iframeSrc ? (
                      <iframe src={proj.iframeSrc} className="w-full h-96 border-2 border-white rounded-lg"></iframe>
                    ) : (
                      <div className="flex flex-col justify-center items-center gap-6">
                        {/* If imageSrc is an array, display both images vertically */}
                        {Array.isArray(proj.imageSrc) ? (
                          proj.imageSrc.map((imgSrc, idx) => (
                            <img key={idx} src={imgSrc} alt={proj.title} className="w-4/5 h-auto border-8 border-emerald-600 rounded-2xl" />
                          ))
                        ) : (
                          <img src={proj.imageSrc} alt={proj.title} className="w-4/5 h-auto border-8 border-emerald-600 rounded-2xl" />
                        )}
                      </div>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkExperience;
  