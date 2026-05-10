import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Detector",
      description: "A simple classifier with 95% accuracy that predicts the likelihood of heart failure based on clinical information.",
      tech: ["Python", "Scikit-learn", "ML"],
      stats: "95% Accuracy",
      link: "https://github.com/NKEthio/Heart-Disease-Detector"
    },
    {
      title: "MedShop",
      description: "A comprehensive medical device e-commerce platform designed for healthcare professionals.",
      tech: ["React", "Next.js", "Tailwind"],
      link: "https://github.com/NKEthio/MedShop"
    },
    {
      title: "Bear",
      description: "A fun and interactive language learning application.",
      tech: ["React","Vite", "Firebase"],
      link: "https://github.com/NKEthio/Bear"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 dark:bg-zinc-900/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-12 bg-ethiopia-yellow"></div>
          <h2 className="text-4xl font-bold text-center mx-4 text-gray-800 dark:text-shemma">Projects</h2>
          <div className="h-1 w-12 bg-ethiopia-green"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-shemma dark:bg-zinc-800 p-6 rounded-xl border-t-4 border-ethiopia-red shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                {project.stats && (
                  <span className="bg-ethiopia-green text-white text-xs font-bold px-2 py-1 rounded">
                    {project.stats}
                  </span>
                )}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed h-20 overflow-hidden">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-zinc-700 border border-ethiopia-yellow rounded uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-ethiopia-red hover:text-ethiopia-green transition-colors"
              >
                Explore Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
