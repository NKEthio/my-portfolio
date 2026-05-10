import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shemma/90 dark:bg-zinc-900/90 backdrop-blur-md border-b-2 border-ethiopia-yellow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-2xl font-black tracking-tighter flex items-center">
          <span className="text-ethiopia-green">N</span>
          <span className="text-ethiopia-yellow">K</span>
          <span className="text-ethiopia-red">.</span>
        </span>
        <div className="flex gap-4 md:gap-8 items-center text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hidden sm:block hover:text-ethiopia-green transition-colors">Home</a>
          <a href="#about" className="hidden sm:block hover:text-ethiopia-yellow transition-colors">About</a>
          <a href="#projects" className="hidden sm:block hover:text-ethiopia-red transition-colors">Projects</a>
          <a href="#skills" className="hidden sm:block hover:text-ethiopia-green transition-colors">Skills</a>
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
