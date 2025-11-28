import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  portfolioData, UserIcon, CodeIcon, FolderKanbanIcon, GraduationCapIcon, PhoneIcon
} from '../constants';
import { FluidDropdown, Category } from './ui/FluidDropdown';

const navCategories: Category[] = [
  { id: 'about', label: 'About', href: '#about', icon: <UserIcon /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <CodeIcon /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <FolderKanbanIcon /> },
  { id: 'experience', label: 'Education', href: '#experience', icon: <GraduationCapIcon /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <PhoneIcon /> },
];

const desktopNavLinks = navCategories.filter(cat => cat.id !== 'contact');

const Header: React.FC = () => {
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
      className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl shadow-md dark:shadow-black/20 border-b border-slate-200/50 dark:border-neutral-800/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center py-4">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="border border-slate-300 dark:border-neutral-700 bg-slate-100/50 dark:bg-neutral-900/50 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-200/50 dark:hover:bg-neutral-800/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {portfolioData.name}
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {desktopNavLinks.map(link => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className="relative text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 font-medium transition-colors"
            >
              {link.label}
              {activeSectionId === link.id && (
                <motion.div
                  layoutId="active-nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="hidden sm:block border border-slate-300 dark:border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-slate-800 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-neutral-800/50 transition-colors"
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