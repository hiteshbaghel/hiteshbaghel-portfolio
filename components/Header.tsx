import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { navCategories, SunIcon, MoonIcon } from '../constants';
import { AppleMobileMenu } from './ui/AppleMobileMenu';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('hero');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Handle Scroll for Active Section and Header Visibility
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.5; // Threshold to switch headers

    setIsScrolled(scrollY > 10);
    setIsHeroVisible(scrollY < heroHeight);

    // Determine Active Section
    const sections = ['hero', ...navCategories.map(cat => cat.id)];
    let newActiveId = activeSectionId;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if section is roughly in view (top 1/3 of screen)
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
          newActiveId = sectionId;
        }
      }
    }
    setActiveSectionId(newActiveId);
  }, [activeSectionId]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (href: string) => {
    const id = href.substring(1);
    // setActiveSectionId(id); // Let scroll handler update this
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get label for active section
  const activeLabel = activeSectionId === 'hero' ? 'Home' : navCategories.find(c => c.id === activeSectionId)?.label || 'Menu';

  return (
    <>
      {/* 1. STANDARD HEADER (Hero for Desktop, Always for Mobile) */}
      {/* We use a key to force re-render if needed, but here we just control visibility via CSS/variants */}
      <motion.header
        // On Desktop: Animate out if not in Hero. On Mobile: Always stay (y: 0).
        animate={{
          y: (!isHeroVisible && window.innerWidth >= 768) ? -100 : 0,
          opacity: (!isHeroVisible && window.innerWidth >= 768) ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className={`
          pointer-events-auto flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300
          ${isScrolled
            ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl shadow-lg border border-slate-200/50 dark:border-white/10 w-full max-w-5xl'
            : 'bg-white/60 dark:bg-transparent backdrop-blur-md border border-transparent dark:border-transparent w-full max-w-7xl'}
        `}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo className="w-8 h-8 md:w-10 md:h-10" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 rounded-full px-2 py-1 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
            {navCategories.filter(cat => cat.id !== 'contact').map(link => (
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

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
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

            {/* Mobile Menu Trigger (Visible on Mobile) */}
            <div className="md:hidden">
              <AppleMobileMenu
                categories={navCategories}
                selectedId={activeSectionId}
                onSelect={(category) => handleLinkClick(category.href)}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* 2. SCROLLED HEADER (Desktop Only) - Visible outside Hero */}
      <AnimatePresence>
        {!isHeroVisible && (
          <>


            {/* Right Side: Menu & Theme (Desktop Only) */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="fixed top-8 right-8 z-50 hidden md:flex items-center gap-4"
            >
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-900 dark:text-white hover:bg-white/20 transition-colors shadow-lg"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>

              {/* Hamburger Menu for Desktop Scrolled State */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                <AppleMobileMenu
                  categories={navCategories}
                  selectedId={activeSectionId}
                  onSelect={(category) => handleLinkClick(category.href)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;