
import React from 'react';
import { motion } from 'framer-motion';

const Particles: React.FC = () => {
    const numParticles = 30; // Adjust the number of particles

    // Create an array of particle properties
    const particles = Array.from({ length: numParticles }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // Initial x position as a percentage
        y: Math.random() * 100, // Initial y position as a percentage
        size: Math.random() * 2.5 + 1, // Particle size between 1px and 3.5px
        duration: Math.random() * 15 + 10, // Animation duration between 10 and 25 seconds
        delay: Math.random() * 5, // Animation delay
    }));

    return (
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-slate-300/50 dark:bg-neutral-800/50"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                    animate={{
                        // Random movement within a small area
                        x: [0, (Math.random() - 0.5) * 60, 0],
                        y: [0, (Math.random() - 0.5) * 60, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        repeatType: 'mirror', // Moves back and forth smoothly
                        ease: 'easeInOut',
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;