import React from 'react';
import { portfolioData, GithubIcon, DownloadIcon } from '../constants';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-black/[0.96] antialiased bg-grid-pattern">

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl z-10 relative"
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {portfolioData.name}
                </h1>
                <div className="mt-6 mb-2 relative inline-block">
                    <svg className="absolute -top-3 -left-6 w-[calc(100%+48px)] h-[calc(100%+30px)] text-indigo-600 dark:text-indigo-400 pointer-events-none" viewBox="0 0 280 90" preserveAspectRatio="none" fill="none">
                        <path d="M20,45 C20,15 70,5 140,5 C210,5 260,15 260,45 C260,75 210,85 140,85 C70,85 20,75 20,45 Z" stroke="currentColor" strokeWidth="2.5" />
                    </svg>
                    <p className="relative text-xl md:text-2xl font-bold text-slate-900 dark:text-white px-2">
                        {portfolioData.title}
                    </p>
                </div>

                <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    I build elegant and efficient <span className="text-indigo-600 dark:text-indigo-400">web applications.</span>
                </h2>

                <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {portfolioData.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://drive.google.com/file/d/15BeQ-bJ-wMXAycyCtUx4_CNuVqZUfHt8/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-black border border-transparent rounded-full hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
                    >
                        <DownloadIcon className="w-5 h-5 mr-2" /> Resume
                    </a>
                    <a
                        href={portfolioData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-slate-900 dark:text-white bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-full hover:bg-slate-50 dark:hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <GithubIcon className="w-5 h-5 mr-2" /> GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;