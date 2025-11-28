import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  portfolioData, UserIcon, CodeIcon, FolderKanbanIcon, GraduationCapIcon, PhoneIcon, SunIcon, MoonIcon
} from '../constants';
import { FluidDropdown, Category } from './ui/FluidDropdown';
import { Logo } from './Logo';

const navCategories: Category[] = [
  { id: 'about', label: 'About', href: '#about', icon: <UserIcon /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <CodeIcon /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <FolderKanbanIcon /> },
  { id: 'experience', label: 'Education', href: '#experience', icon: <GraduationCapIcon /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <PhoneIcon /> },
];

const desktopNavLinks = navCategories.filter(cat => cat.id !== 'contact');

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(navCategories[0].id);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);

    const headerOffset = 120;
    let newActiveId = activeSectionId;

    for (const category of [...navCategories].reverse()) {
      const element = document.getElementById(category.id);
      if (element && element.getBoundingClientRect().top <= headerOffset) {
        newActiveId = category.id;
        break;
      }
    }

    setActiveSectionId(newActiveId);
  }, [activeSectionId]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (href: string) => {
    const id = href.substring(1);
    setActiveSectionId(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className={`
        flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300
        ${isScrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl shadow-lg border border-slate-200/50 dark:border-white/10 w-full max-w-5xl' : 'bg-transparent w-full max-w-7xl'}
      `}>
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo className="w-8 h-8 md:w-10 md:h-10" />
          <span className="hidden sm:block font-bold text-lg tracking-tight text-slate-800 dark:text-neutral-200">
            {portfolioData.name}
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 rounded-full px-2 py-1 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
          {desktopNavLinks.map(link => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeSectionId === link.id
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
                }`}
            >
              {activeSectionId === link.id && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>

          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="hidden sm:block bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-neutral-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.a>

          <div className="md:hidden">
            <FluidDropdown
              categories={navCategories}
              selectedId={activeSectionId}
              onSelect={(category) => {
                handleLinkClick(category.href);
              }}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;