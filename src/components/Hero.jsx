import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Nuredin Kassaw
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Biomedical Engineering Student, Front end developer and ML Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full font-medium">
            Biomedical Engineering
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium">
            Front end developer
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full font-medium">
            ML Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
