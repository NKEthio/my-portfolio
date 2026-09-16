import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';

function PortfolioHome() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Hobbies />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-shemma dark:bg-zinc-900 text-black dark:text-shemma transition-colors duration-300 flex flex-col justify-between">
      <div className="tibeb-border fixed top-0 left-0 right-0 z-[60]"></div>
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>

      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nuredin Kassaw. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
