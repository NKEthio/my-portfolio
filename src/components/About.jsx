import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="about">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            I am a <span className="font-semibold text-blue-600">Biomedical Engineering Student</span> with a passion for building intelligent systems. 
            My expertise spans across <span className="font-semibold text-green-600">Front end development</span> and <span className="font-semibold text-purple-600">Machine Learning Engineering</span>.
          </p>
          <p className="text-lg leading-relaxed">
            Currently, my primary interest lies in <span className="font-semibold text-blue-600">ML/AI Engineering</span>, where I enjoy applying computational methods to solve complex problems, particularly in the healthcare domain.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-bold mb-4">Skills & Interests</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Machine Learning & AI Engineering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Biomedical Engineering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Front end Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>Data Analysis & Visualization</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
