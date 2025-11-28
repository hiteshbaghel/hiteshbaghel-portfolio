
import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <Section id="skills" title="Skills & Technologies">
      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            className="group"
          >
            <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-300 dark:group-hover:border-neutral-700 group-hover:-translate-y-1">
              <div className="w-12 h-12 p-1.5 rounded-lg bg-slate-100 dark:bg-neutral-900 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-200/60 dark:group-hover:bg-neutral-800/60">
                  {React.cloneElement(skill.icon, { className: "w-full h-full object-contain" })}
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-neutral-300">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
