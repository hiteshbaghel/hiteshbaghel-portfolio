import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Think", "Build"];

interface PreloaderProps {
    onComplete: () => void;
    theme: 'light' | 'dark';
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, theme }) => {
    const [count, setCount] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Inverse theme logic:
    // If website is dark, preloader is light (white bg, black text)
    // If website is light, preloader is dark (black bg, white text)
    const isPreloaderDark = theme === 'light';

    const bgColor = isPreloaderDark ? 'bg-neutral-950' : 'bg-slate-50';
    const textColor = isPreloaderDark ? 'text-white' : 'text-slate-900';
    const subTextColor = isPreloaderDark ? 'text-neutral-400' : 'text-slate-500';
    const shutterColor = isPreloaderDark ? 'bg-neutral-950' : 'bg-slate-50';

    useEffect(() => {
        const duration = 2000;
        const steps = 100;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(timer);
                return 100;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Cycle words based on progress
        const wordChangeInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 800);

        if (count === 100) {
            clearInterval(wordChangeInterval);
            setCurrentWordIndex(words.length - 1); // Ensure it ends on "Launch" or similar
            const timeout = setTimeout(() => {
                onComplete();
            }, 600);
            return () => clearTimeout(timeout);
        }

        return () => clearInterval(wordChangeInterval);
    }, [count, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial="initial"
            exit="exit"
        >
            {/* Content Layer */}
            <motion.div
                className={`absolute z-20 flex flex-col items-center justify-center ${textColor}`}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
                <div className="overflow-hidden mb-4">
                    <motion.p
                        key={currentWordIndex}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter uppercase"
                    >
                        {words[currentWordIndex]}
                    </motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.span
                        className="block text-6xl md:text-8xl font-bold tracking-tighter tabular-nums leading-none"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        {count}%
                    </motion.span>
                </div>
            </motion.div>

            {/* Shutter Columns */}
            <div className="absolute inset-0 z-10 flex w-full h-full">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`h-full w-1/5 ${shutterColor}`}
                        initial={{ y: 0 }}
                        exit={{
                            y: "-100%",
                            transition: {
                                duration: 0.8,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.1
                            }
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};
