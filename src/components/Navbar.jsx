import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shemma/90 dark:bg-zinc-900/90 backdrop-blur-md border-b-2 border-ethiopia-yellow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
        </Link>
        <div className="flex gap-4 md:gap-8 items-center text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="hidden sm:block hover:text-ethiopia-green transition-colors">Home</Link>
          {isHomePage ? (
            <>
              <a href="#about" className="hidden sm:block hover:text-ethiopia-yellow transition-colors">About</a>
              <a href="#projects" className="hidden sm:block hover:text-ethiopia-red transition-colors">Projects</a>
              <a href="#skills" className="hidden sm:block hover:text-ethiopia-green transition-colors">Skills</a>
            </>
          ) : null}
          <Link
            to="/blog"
            className={`hover:text-ethiopia-yellow transition-colors ${
              location.pathname.startsWith('/blog') ? 'text-ethiopia-green font-extrabold underline underline-offset-4' : ''
            }`}
          >
            Blog
          </Link>
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
