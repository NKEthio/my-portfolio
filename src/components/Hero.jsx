import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 tibeb-pattern pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
          Nuredin <span className="text-ethiopia-green">Kassaw</span>
        </h1>
        <div className="h-1 w-24 bg-ethiopia-yellow mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto italic">
          Biomedical Engineering Student, Front-end Developer and ML Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-ethiopia-green text-white rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition-all">
            Biomedical Engineering
          </span>
          <span className="px-6 py-2 bg-ethiopia-yellow text-black rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition-all">
            Front end developer
          </span>
          <span className="px-6 py-2 bg-ethiopia-red text-white rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition-all">
            ML Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
