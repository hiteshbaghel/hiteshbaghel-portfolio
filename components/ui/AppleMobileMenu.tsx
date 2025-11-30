import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../Logo';
import { GithubIcon, LinkedinIcon, MailIcon } from '../../constants';

interface Category {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface AppleMobileMenuProps {
    categories: Category[];
    onSelect: (category: Category) => void;
    selectedId?: string;
}

export const AppleMobileMenu: React.FC<AppleMobileMenuProps> = ({ categories, onSelect, selectedId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close menu when clicking outside is handled by the backdrop
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!mounted) return (
        <button
            className="p-2.5 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-white"
            aria-label="Menu"
        >
            <div className="w-5 h-5" />
        </button>
    );

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors active:scale-95"
                aria-label="Menu"
            >
                <div className="w-5 h-5 flex flex-col justify-center gap-[5px]">
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                        className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                    />
                    <motion.span
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        className="w-full h-0.5 bg-current rounded-full transition-opacity"
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                        className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                    />
                </div>
            </button>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-[9998]"
                            />

                            {/* Menu Drawer */}
                            <motion.div
                                initial={{ x: window.innerWidth >= 768 ? '100%' : '-100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: window.innerWidth >= 768 ? '100%' : '-100%', opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="fixed top-4 bottom-4 left-4 md:left-auto md:right-4 w-[85vw] sm:w-[380px] md:w-[480px] max-w-sm md:max-w-lg bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 shadow-2xl rounded-3xl z-[9999] flex flex-col overflow-hidden"
                            >
                                {/* Abstract Shapes */}
                                <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                                {/* Header / Profile */}
                                <div className="relative z-10 p-8 flex items-center justify-between">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 dark:border-neutral-800">
                                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-none">Hitesh Baghel</h3>
                                            <p className="text-xs text-black dark:text-white mt-1">Java Backend Developer</p>
                                        </div>
                                    </motion.div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-500 dark:text-neutral-400 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6 6 18" /><path d="m6 6 18 18" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 flex flex-col justify-center px-8 gap-6 relative z-10">
                                    {categories.map((cat, index) => {
                                        const isActive = selectedId === cat.id;
                                        return (
                                            <motion.button
                                                key={cat.id}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 200 }}
                                                onClick={() => {
                                                    onSelect(cat);
                                                    setIsOpen(false);
                                                }}
                                                className="group flex items-baseline gap-4 text-left"
                                            >
                                                <span className={`text-sm font-mono font-medium transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-300 dark:text-neutral-700 group-hover:text-indigo-500 dark:group-hover:text-indigo-400'
                                                    }`}>
                                                    0{index + 1}
                                                </span>
                                                <span className={`text-4xl sm:text-5xl font-bold tracking-tight transition-all duration-300 ${isActive
                                                    ? 'text-slate-900 dark:text-white translate-x-2'
                                                    : 'text-slate-400 dark:text-neutral-600 group-hover:text-slate-800 dark:group-hover:text-neutral-200 group-hover:translate-x-2'
                                                    }`}>
                                                    {cat.label}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Footer */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-8 border-t border-slate-100 dark:border-neutral-900 relative z-10"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <a href="https://github.com/hiteshbaghel" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-neutral-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                                <GithubIcon className="w-6 h-6" />
                                            </a>
                                            <a href="https://linkedin.com/in/hiteshbaghel" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-neutral-500 hover:text-[#0077b5] transition-colors">
                                                <LinkedinIcon className="w-6 h-6" />
                                            </a>
                                            <a href="mailto:hiteshbaghel03@gmail.com" className="text-slate-400 dark:text-neutral-500 hover:text-red-500 transition-colors">
                                                <MailIcon className="w-6 h-6" />
                                            </a>
                                        </div>
                                        <p className="text-xs text-slate-400 dark:text-neutral-600 font-mono">
                                            © 2025
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};
