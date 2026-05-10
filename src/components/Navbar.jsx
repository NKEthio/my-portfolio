import React from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home', key: 'home', activeClass: 'text-ethiopia-green', hoverClass: 'hover:text-ethiopia-green' },
  { label: 'About', href: '#about', key: 'about', activeClass: 'text-ethiopia-yellow', hoverClass: 'hover:text-ethiopia-yellow' },
  { label: 'Projects', href: '#projects', key: 'projects', activeClass: 'text-ethiopia-red', hoverClass: 'hover:text-ethiopia-red' },
  { label: 'Skills', href: '#skills', key: 'skills', activeClass: 'text-ethiopia-green', hoverClass: 'hover:text-ethiopia-green' },
  { label: 'Hobbies', href: '#hobbies', key: 'hobbies', activeClass: 'text-ethiopia-yellow', hoverClass: 'hover:text-ethiopia-yellow' },
];

const Navbar = ({ currentPage }) => {
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
              href={item.href}
              className={`hidden sm:block transition-colors ${
                currentPage === item.key
                  ? item.activeClass
                  : item.hoverClass
              }`}
            >
              {item.label}
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
