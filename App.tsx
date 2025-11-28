import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';

import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
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
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="font-sans antialiased text-slate-800 dark:text-neutral-300 transition-colors duration-300 min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <main className="flex-grow w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;