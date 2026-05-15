import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS ML Engineering",
      issuer: "Amazon Web Services"
    },
    {
      title: "Fundamentals of AI",
      issuer: "EthioCoders"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-shemma/60 dark:bg-zinc-900/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-12 bg-ethiopia-yellow"></div>
          <h2 className="text-4xl font-bold text-center mx-4 text-gray-800 dark:text-shemma">Certificates</h2>
          <div className="h-1 w-12 bg-ethiopia-red"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border-l-4 border-ethiopia-green">
              <div
                role="img"
                aria-label={`${certificate.title} certificate preview placeholder`}
                className="mb-5 rounded-lg border-2 border-dashed border-ethiopia-green/60 h-44 bg-shemma/40 dark:bg-zinc-700/50 flex items-center justify-center px-4 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">
                  Certificate image placeholder
                </p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{certificate.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
