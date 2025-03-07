import React from 'react';
import AboutMePhotos from './AboutMePhotos'; // Assuming you have this component

const AboutMe = () => {
  
    return (
        <section className=" text-white px-8 md:px-16 min-h-screen relative items-center justify-evenly">
            <h1 className="text-4xl pt-16 -mb-12 font-semibold text-left text-white">About Me</h1>
      {/* Container with responsive grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
                {/* Left Side - Image Slider */}
                <div className='w-11/12'>
        <div className="mt-32 w-full">
          <AboutMePhotos />
                    </div>
                    </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left">
  {/* Name */}
  <h2 className="text-4xl font-semibold mb-4 text-emerald-600">
    Hi there!
  </h2>

  {/* First Description */}
  <p className="text-xl mb-4 leading-relaxed">
    My name is <span className="font-bold text-emerald-600">Jonathan C. Sanchez</span>. I am an enthusiastic and driven individual with a background in Computer Science, Math, Environmental Compliance, and Project Management. Over the past 7 years, I have worked at the Los Alamos National Laboratory, where I have had the opportunity to collaborate with dedicated and knowledgeable individuals. This experience has shaped my passion for ensuring environmental regulations are met while driving efficient, sustainable solutions.
  </p>

  {/* Second Description */}
  <p className="text-xl mb-4 leading-relaxed">
    Throughout my career, I have developed skills and knowledge in Environmental Compliance, Agile Scrum, Software Development, Project Management, Data Analysis, and more. I have demonstrated resilience, efficiency, and results in various roles and I am always learning and expanding my skill set, whether it is through my job, personal projects, coursework, or certifications. I thrive in team environments, enjoy tackling complex challenges, and take pride in what I do. 
  </p>

  {/* Closing Description */}
  <p className="text-xl mt-4 mb-4 leading-relaxed">Thank you!</p>

  {/* Signature */}
  <p className="text-2xl font-semibold mb-4">Jonathan C. Sanchez</p>

  {/* Final Message */}
  <p className="text-xl leading-relaxed">
    I’m excited about continuing to learn, grow and take on new opportunities, both personally and professionally!
  </p>
</div>

      </div>
    </section>
  );
};

export default AboutMe;

