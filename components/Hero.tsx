
import React from 'react';
import { portfolioData, GithubIcon, DownloadIcon } from '../constants';
import { motion } from 'framer-motion';
import AnimatedGradientBackground from './ui/AnimatedGradientBackground';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center py-20 md:py-32 overflow-hidden">
            
            {/* New Animated Gradient Background */}
            <AnimatedGradientBackground />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl z-10"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-neutral-100">
                    Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{portfolioData.name}</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-neutral-400">
                    A Passionate {portfolioData.title}
                </p>

                <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-neutral-200">
                    I build elegant and efficient web applications.
                </h2>
                
                <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-neutral-400 leading-relaxed">
                    {portfolioData.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="https://drive.google.com/file/d/15BeQ-bJ-wMXAycyCtUx4_CNuVqZUfHt8/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-slate-800 dark:text-neutral-200 bg-slate-100 dark:bg-neutral-800/50 border border-slate-200 dark:border-neutral-700 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105"
                    >
                       <DownloadIcon className="w-5 h-5 mr-2" /> Resume
                    </a>
                    <a 
                        href={portfolioData.contact.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-slate-800 dark:text-neutral-200 bg-slate-100 dark:bg-neutral-800/50 border border-slate-200 dark:border-neutral-700 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105"
                    >
                       <GithubIcon className="w-5 h-5 mr-2" /> GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;