import React from 'react';

const skills = [
  "Project Planning & Management", "System Implementation", "System Interface Development",
  "Technical Integration", "Process Improvement", "Software Development",
  "Agile Scrum Methodologies",
  "Testing & Quality Assurance", "Research, Analysis, and Reporting"
];

const programmingLanguages = [
  "Java", "JavaScript", "SQL", "HTML", "Python", "C++", "C#", "C", "CSS"
];

const toolsAndTechnologies = [
  "Jira", "Confluence", "ArcGIS", "Word", "RegEx",
  "Jupyter", "Integrify", "APEX", "MS Access", "Putty", "Slack", "GitHub", "GitLab", "VS Code"
];

const projects = [
  {
    title: "Travelogy",
    summary: "The enhanced version transformed the Java app into a modern web tool using Vite, React, Tailwind CSS, Express.js, and the Amadeus API. Key features include flight search, hotel search, and experience search with an intuitive user-friendly interface.",
    skills: ["API Integration", "React & Web Development", "User Interface Design", "Problem-Solving"],
    iframeSrc: "https://travelogy-frontend-3f9bc06f0a5e.herokuapp.com/",
    projectLink: "https://travelogy-frontend-3f9bc06f0a5e.herokuapp.com/"
  },
  {
    title: "Binary Search Tree Traversal",
    summary: "This interactive visualization tool for BST traversal uses React, react-d3-tree, and Tailwind CSS. It allows users to generate random trees, visualize traversals in real time, and understand tree algorithms.",
    skills: ["React & react-d3-tree Integration", "Web Development Practices", "Data Structure Understanding", "UI/UX Design"],
    iframeSrc: "https://bst-treetraversal-0a629bc8dd79.herokuapp.com/",
    projectLink: "https://bst-treetraversal-0a629bc8dd79.herokuapp.com/"
  },
  {
    title: "Inventory Tracking",
    summary: "An Oracle APEX application for managing inventory, orders, and customer data. It features database implementation, CRUD operations, reporting dashboards, and a user-friendly interface.",
      skills: ["Database Design", "SQL Querying", "Application Development", "Security Considerations"],
      imageSrc: "/apex.png",
    projectLink: "https://apex.oracle.com/pls/apex/r/test_jcs/inventory-app/home?session=7419471027968"
  }
];

const Dev = () => {
  return (
        <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white px-8 md:px-16 min-h-screen relative py-12">
          <h1 className="text-4xl font-bold text-white mt-12 mb-12 text-left">Software Development & Skills</h1>
          
          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-emerald-600 mb-4">Key Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="bg-emerald-700 text-white px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-emerald-600 mb-4">Programming Languages</h2>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((lang, index) => (
                <span key={index} className="bg-blue-700 text-white px-3 py-1 rounded-full">{lang}</span>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-emerald-600 mb-4">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {toolsAndTechnologies.map((tool, index) => (
                <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full">{tool}</span>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="mt-12">
            <h2 className="text-4xl font-semibold text-emerald-600 mb-6">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-12 border-b border-white pb-6">
                <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-700 text-white px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
                {project.iframeSrc ? (
                  <iframe src={project.iframeSrc} className="w-full h-96 border-2 border-white rounded-lg"></iframe>
                ) : (
                  <img src={project.imageSrc} alt={project.title} className="w-full h-auto border-2 border-white rounded-lg" />
                )}
                <div className="mt-4">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">View the Web Page</a>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
};

export default Dev;