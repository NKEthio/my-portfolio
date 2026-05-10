import React from 'react';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Reading Books",
      booksIread: ["Sapiens", "1984", "ፍቅር እስከመቃብር", "and others"],
    },
    {
      name: "Chess",
      level: "Intermediate",
      username: "NKEthio"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-12 bg-ethiopia-red"></div>
          <h2 className="text-4xl font-bold text-center mx-4 text-gray-800">My Hobbies</h2>
          <div className="h-1 w-12 bg-ethiopia-green"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-shemma p-8 rounded-lg shadow-md border-b-8 border-ethiopia-yellow hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-ethiopia-green">{hobby.name}</h3>
              <div className="space-y-3 text-gray-700">
                {hobby.booksIread && (
                  <div>
                    <span className="font-semibold italic">Favorite Reads:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {hobby.booksIread.map((book, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm border border-ethiopia-red/20">
                          {book}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {hobby.level && <p><span className="font-semibold">Level:</span> {hobby.level}</p>}
                {hobby.username && <p><span className="font-semibold">Lichess/Chess.com:</span> <span className="text-ethiopia-red font-mono">{hobby.username}</span></p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
