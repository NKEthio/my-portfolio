import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: "Front end web development",
      level: "Intermediate",
      projects: ["Medshop", "Bear"],
      certificates: ["Self-learned"],
      timespent: "1000+ hours"
    },
    {
      title: "AI and ML engineering",
      level: "Beginner",
      projects: ["Heart Disease Detector"],
      certificates: ["AWS ML Engineering from AWS", "Fundamentals of AI from EthioCoders"],
      timespent: "100+ hours"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-shemma border-y-4 border-ethiopia-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-12 bg-ethiopia-green"></div>
          <h2 className="text-4xl font-bold text-center mx-4 text-gray-800">My Skills</h2>
          <div className="h-1 w-12 bg-ethiopia-yellow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-8 border-ethiopia-green hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-ethiopia-red">{skill.title}</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Level:</span> {skill.level}</p>
                <p><span className="font-semibold">Time Spent:</span> {skill.timespent}</p>
                <div>
                  <span className="font-semibold">Projects:</span>
                  <ul className="list-disc list-inside ml-4">
                    {skill.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Certificates:</span>
                  <ul className="list-disc list-inside ml-4">
                    {skill.certificates.map((cert, i) => <li key={i}>{cert}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
