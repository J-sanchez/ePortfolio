import React from 'react';

const education = [
  {
    title: "Southern New Hampshire University (SNHU)",
    course_name: "Computer Science",
    date: "2023 - 2025",
    details: [
      "At Southern New Hampshire University (SNHU), I strengthened my skills in Software Design, Agile Scrum methodologies, UI/UX principles, and overall software development.",
      "I gained experience in software architecture, database design, and API development, equipping me with a well-rounded understanding of building scalable, efficient, and user-centered applications."
    ]
  },
  {
    title: "University of New Mexico",
    course_name: "Math & Computer Science",
    date: "2022 - 2023",
    details: [
      "At the University of New Mexico, my coursework focused on Math, Physics, Algorithms, and Logic, which honed my analytical thinking and problem-solving abilities."
    ]
  },
  {
    title: "Adams State University",
    course_name: "Applied Mathematical Sciences",
    date: "2018 - 2021",
    details: [
      "At Adams State University, I built the foundation of my Computer Science studies while balancing the demands of playing college baseball. This taught me discipline, teamwork, and resilience, which have shaped my academic journey.",
      "Though my time at Adams State was challenging, it was crucial for developing my adaptability, communication skills, and personal growth."
    ]
  },
  {
    title: "University of Arizona",
    course_name: "Certificate - Fullstack Web Development",
    date: "2020 - 2021",
    details: [
      "The Fullstack Web Development Bootcamp at the University of Arizona equipped me with hands-on experience in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js.",
      "The fast-paced curriculum and collaborative projects helped me strengthen my coding skills, preparing me to build dynamic, full-featured web applications from scratch."
    ]
  },
  {
    title: "University of New Mexico",
    course_name: "Certificate - Emergency Medical Technician (EMT)",
    date: "2017",
    details: [
      "I earned my EMT certificate at the University of New Mexico, gaining invaluable life-saving skills and the ability to manage high-pressure situations.",
      "This course emphasized quick decision-making, critical thinking, and staying calm under stress, improving my performance in challenging environments."
    ]
  },
  {
    title: "Santa Fe Community College",
    course_name: "Certificate - Engineering Tech 1/2",
    date: "2015",
    details: [
      "At Santa Fe Community College, I trained to become a certified Engineering Technician, gaining hands-on technical skills in engineering principles and tools.",
      "Through mock interviews for Los Alamos National Laboratory, I developed valuable real-world interviewing skills, strengthening both my technical and communication abilities."
    ]
  }
];

const accolades = [
  "STEM Program (2014)",
  "Bridge to Success Program (2015)",
  "Volunteer Firefighter (2017)",
  "2 SPOT Awards",
  "National Honor Society",
  "80+ GitHub Repositories / Projects",
  "Alpaca API Algorithmic Trading Bot",
  "Research in Machine Learning",
  "Research in Green Technology",
  "Collegiate Athlete"
];

const Education = () => {
    return (
      <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white px-8 md:px-16 min-h-screen relative py-12">
        <h2 className="text-4xl font-semibold text-white mt-12 mb-12 text-left">Education & Accolades</h2>
        
        {/* Education Section */}
        <div className="max-w-6xl mx-auto space-y-8">
          {education.map((item, index) => (
            <div key={index} className="border-b border-white pb-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-2">{item.title}</h3>
              <p className="text-lg font-semibold text-white mb-2">{item.course_name} <span className="text-sm text-white">{item.date}</span></p>
              <ul className="text-white list-disc pl-5 space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* Accolades Section */}
        <div className="mt-12 flex justify-center">
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Accolades</h3>
            <ul className="text-white text-lg list-disc pl-5 space-y-2 inline-block text-left">
              {accolades.map((accolade, index) => (
                <li key={index}>{accolade}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };

export default Education;
