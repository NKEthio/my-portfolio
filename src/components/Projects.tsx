import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Detector",
      description: "A simple classifier with 95% accuracy that predicts the likelihood of heart failure based on clinical information. Developed with a focus on interpretable AI and practical healthcare applications.",
      tech: ["Python", "Scikit-learn", "Machine Learning"],
      stats: "95% Accuracy",
      link: "https://github.com/NKEthio/Heart-Disease-Detector"
    },
    {
      title: "MedShop",
      description: "A comprehensive medical device e-commerce platform designed to provide a seamless shopping experience for healthcare professionals and organizations.",
      tech: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
      link: "https://github.com/NKEthio/MedShop"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                {project.stats && (
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-sm font-bold px-3 py-1 rounded-full">
                    {project.stats}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, tIndex) => (
                  <span key={tIndex} className="text-sm font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
