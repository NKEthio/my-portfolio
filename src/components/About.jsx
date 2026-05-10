import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="about">
      <div className="flex items-center justify-center mb-12">
        <div className="h-1 w-12 bg-ethiopia-green"></div>
        <h2 className="text-4xl font-bold text-center mx-4 text-gray-800 dark:text-shemma">About Me</h2>
        <div className="h-1 w-12 bg-ethiopia-red"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am a <span className="font-bold text-ethiopia-green">Biomedical Engineering Student</span> with a passion for building intelligent systems. 
            My expertise spans across <span className="font-bold text-ethiopia-yellow">Front-end development</span> and <span className="font-bold text-ethiopia-red">Machine Learning Engineering</span>.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Currently, my primary interest lies in <span className="font-bold text-ethiopia-green">ML/AI Engineering</span>, where I enjoy applying computational methods to solve complex problems, particularly in the healthcare domain.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border-2 border-ethiopia-yellow shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 tibeb-border"></div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Skills & Interests</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-ethiopia-green rounded-full shadow-sm"></span>
              <span className="font-medium">Machine Learning & AI Engineering</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-ethiopia-yellow rounded-full shadow-sm"></span>
              <span className="font-medium">Biomedical Engineering</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-ethiopia-red rounded-full shadow-sm"></span>
              <span className="font-medium">Front end Development</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-ethiopia-green rounded-full shadow-sm"></span>
              <span className="font-medium">Data Analysis & Visualization</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
