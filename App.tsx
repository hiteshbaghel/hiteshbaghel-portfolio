import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { Sidebar } from './components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    // Default to dark mode if no preference is saved
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!isLoading) {
      // Scroll to top when loading finishes to ensure Hero section is visible
      window.scrollTo(0, 0);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
      });

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    }
  }, [isLoading]);

  return (
    <SmoothScroll>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader theme={theme} onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="font-sans antialiased text-slate-800 dark:text-neutral-300 transition-colors duration-300 min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Sidebar />
        <main className="flex-grow w-full">
          <Hero />
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;