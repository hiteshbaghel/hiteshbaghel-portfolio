import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navCategories } from '../constants';

export const Sidebar = () => {
    const [activeSectionId, setActiveSectionId] = useState('hero');
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.5;
            setIsHeroVisible(scrollY < heroHeight);

            const sections = ['hero', ...navCategories.map(cat => cat.id)];
            let newActiveId = activeSectionId;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4) {
                        newActiveId = sectionId;
                    }
                }
            }
            setActiveSectionId(newActiveId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSectionId]);

    const handleLinkClick = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const allSections = [
        { id: 'hero', label: 'Home', href: '#hero' },
        ...navCategories
    ];
    const activeSectionLabel = allSections.find(s => s.id === activeSectionId)?.label;

    return (
        <AnimatePresence>
            {!isHeroVisible && (
                <>
                    {/* Mobile View: Active Section Label Only - REMOVED as per user request */}
                    {/* <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed left-4 top-[30%] z-40 md:hidden mix-blend-difference text-white pointer-events-none"
                    >
                        <span className="text-3xl font-bold tracking-tight block">
                            {activeSectionLabel}
                        </span>
                    </motion.div> */}

                    {/* Desktop View: Full Sidebar */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="fixed left-8 top-[30%] z-40 hidden md:flex flex-col gap-6 mix-blend-difference text-white pointer-events-none"
                    >
                        <div className={`flex flex-col gap-6 pointer-events-auto transition-transform duration-500 ${activeSectionId === 'contact' ? '-translate-y-[20vh]' : ''}`}>
                            {allSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleLinkClick(section.href)}
                                    className={`group flex flex-col items-start transition-opacity duration-300 ${activeSectionId === section.id ? 'opacity-100' : 'opacity-20 hover:opacity-50'}`}
                                >
                                    <div className={`h-[3px] bg-current transition-all duration-300 ${activeSectionId === section.id ? 'w-16' : 'w-8 group-hover:w-10'}`} />
                                    <div className={`overflow-hidden transition-all duration-500 ${activeSectionId === section.id ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                                        <span className="text-xs font-bold tracking-widest uppercase text-left block leading-relaxed whitespace-nowrap">
                                            {section.label}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
