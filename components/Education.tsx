import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { Card, CardContent } from './ui/Card';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-4xl mx-auto space-y-6">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Card className="group hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors">
                            <CardContent className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6">
                                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                    {edu.icon}
                                </div>
                                <div className="flex-grow space-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-slate-700 dark:text-neutral-300 font-medium">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-slate-500 dark:text-neutral-500 font-medium">
                                        {edu.duration}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
