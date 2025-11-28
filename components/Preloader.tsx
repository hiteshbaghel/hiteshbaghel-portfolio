import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2500;
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
        if (count === 100) {
            const timeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [count, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                scale: 1.1,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-white overflow-hidden"
        >
            <div className="flex items-center gap-4 md:gap-10 mb-8">
                <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl md:text-4xl font-light tracking-wider text-slate-500 dark:text-neutral-400"
                >
                    Think
                </motion.span>

                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <Logo className="w-16 h-16 md:w-24 md:h-24" />
                    </motion.div>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-2xl md:text-4xl font-light tracking-wider text-slate-500 dark:text-neutral-400"
                >
                    Build
                </motion.span>
            </div>

            <div className="relative flex flex-col items-center">
                <motion.span
                    className="text-6xl md:text-8xl font-bold tracking-tighter tabular-nums text-slate-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}%
                </motion.span>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-indigo-500 dark:bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
            />
        </motion.div>
    );
};
