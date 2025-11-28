
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <motion.div
                className="absolute top-0 -left-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent dark:from-indigo-500/30 blur-3xl opacity-50"
                animate={{
                    x: ['-20%', '20%', '-20%'],
                    y: ['-20%', '20%', '-20%'],
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, 0],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="absolute bottom-0 -right-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent dark:from-purple-500/30 blur-3xl opacity-50"
                animate={{
                    x: ['20%', '-20%', '20%'],
                    y: ['20%', '-20%', '20%'],
                    scale: [1, 1.1, 1],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                }}
            />
        </div>
    );
};

export default AnimatedGradientBackground;
