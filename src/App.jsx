import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';

const validPages = ['home', 'about', 'projects', 'skills', 'hobbies'];

const getPageFromHash = () => {
  const page = window.location.hash.replace('#', '').toLowerCase();
  return validPages.includes(page) ? page : 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'hobbies':
        return <Hobbies />;
      case 'home':
      default:
        return <Hero />;
    }
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-shemma dark:bg-zinc-900 text-black dark:text-shemma transition-colors duration-300">
      <div className="tibeb-border fixed top-0 left-0 right-0 z-[60]"></div>
      <Navbar currentPage={currentPage} />
      <div className="pt-16">{pageContent}</div>

      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nuredin Kassaw. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
