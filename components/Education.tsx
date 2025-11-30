import React, { useRef } from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { motion, useScroll, useTransform } from 'framer-motion';

const Education: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <Section id="education" title="Education" className="overflow-hidden">
            <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">

                {/* Animated Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-neutral-800 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
                    />
                </div>

                <div className="relative flex flex-col gap-16">
                    {portfolioData.education.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-black bg-blue-500 z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="relative p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* Decorative Gradient Border on Hover */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />

                                        {/* Background for Card to cover blur */}
                                        <div className="absolute inset-[1px] rounded-[15px] bg-slate-50 dark:bg-neutral-900 -z-10" />

                                        <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full uppercase">
                                                {item.duration}
                                            </span>

                                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                                                {item.degree}
                                            </h3>

                                            <div className={`flex items-center gap-2 text-slate-600 dark:text-neutral-400 font-medium ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                                <div className="p-1.5 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                                                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5 text-blue-500" })}
                                                </div>
                                                <span>{item.institution}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Education;
