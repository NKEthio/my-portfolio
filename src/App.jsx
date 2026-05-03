import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nuredin Kassaw. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
