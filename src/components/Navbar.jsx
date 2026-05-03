import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tighter">NK.</span>
        <div className="flex gap-4 md:gap-6 items-center text-sm font-medium">
          <a href="#" className="hidden sm:block hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hidden sm:block hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hidden sm:block hover:text-blue-600 transition-colors">Projects</a>
          <ThemeToggle />
          <a 
            href="https://www.linkedin.com/in/nuredin-kassaw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
