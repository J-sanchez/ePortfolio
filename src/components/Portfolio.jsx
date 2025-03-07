import React from "react";

const Portfolio = () => {
  return (
    <section className=" text-white px-8 md:px-16 min-h-screen relative">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-left mb-12 text-white">My Journey</h1>

      {/* Container with responsive flex layout */}
      <div className="max-w-6xl mx-auto space-y-16">

        {/* School Card */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300"
          onClick={() => window.location.href = "/education"}
        >
          <img
            src="school.png"
            alt="School Icon"
            className="w-1/3 h-auto object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-semibold text-emerald-600">Education</h2>
            <p className="text-gray-600 mt-2">
              Learn more about my academic background, achievements, and educational journey.
            </p>
          </div>
        </div>

        {/* Software Development Card */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300"
          onClick={() => window.location.href = "/software-dev"}
        >
          <img
            src="sd.png"
            alt="Software Development Icon"
            className="w-1/3 h-auto object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-semibold text-emerald-600">Software Development</h2>
            <p className="text-gray-600 mt-2">
              Explore my projects, skills, and experience in software development.
            </p>
          </div>
        </div>

        {/* Project Management Card */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300"
          onClick={() => window.location.href = "/project-management"}
        >
          <img
            src="pm.png"
            alt="Project Management Icon"
            className="w-1/3 h-auto object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-semibold text-emerald-600">Project Management</h2>
            <p className="text-gray-600 mt-2">
              See how I manage 13 Web Applications as a Service Owner in an Agile environment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

