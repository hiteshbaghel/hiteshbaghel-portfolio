import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds for counting
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
            }, 500); // Slight delay after reaching 100%
            return () => clearTimeout(timeout);
        }
    }, [count, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white"
        >
            <div className="relative flex items-center justify-center">
                <motion.span
                    className="text-9xl md:text-[12rem] font-bold tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}
                </motion.span>
                <span className="text-4xl md:text-6xl font-light absolute top-0 -right-12 md:-right-20">%</span>
            </div>
            <motion.div
                className="mt-4 h-1 w-64 bg-neutral-800 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    className="h-full bg-white"
                    style={{ width: `${count}%` }}
                />
            </motion.div>
        </motion.div>
    );
};
