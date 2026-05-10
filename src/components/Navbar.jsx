import React from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'home', color: 'green' },
  { key: 'about', color: 'yellow' },
  { key: 'projects', color: 'red' },
  { key: 'skills', color: 'green' },
  { key: 'hobbies', color: 'yellow' },
];

const navColorClasses = {
  green: { active: 'text-ethiopia-green', hover: 'hover:text-ethiopia-green' },
  yellow: { active: 'text-ethiopia-yellow', hover: 'hover:text-ethiopia-yellow' },
  red: { active: 'text-ethiopia-red', hover: 'hover:text-ethiopia-red' },
};

const Navbar = ({ currentPage }) => {
  const getLabel = (key) => key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shemma/90 dark:bg-zinc-900/90 backdrop-blur-md border-b-2 border-ethiopia-yellow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter flex items-center">
          <span className="text-ethiopia-green">N</span>
          <span className="text-ethiopia-yellow">K</span>
          <span className="text-ethiopia-red">.</span>
        </a>
        <div className="flex gap-4 md:gap-8 items-center text-sm font-bold uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className={`hidden sm:block transition-colors ${
                currentPage === item.key
                  ? navColorClasses[item.color].active
                  : navColorClasses[item.color].hover
              }`}
            >
              {getLabel(item.key)}
            </a>
          ))}
          <ThemeToggle />
          <a 
            href="https://www.linkedin.com/in/nuredin-kassaw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-ethiopia-green text-white rounded-full hover:bg-ethiopia-green/80 transition-all shadow-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
