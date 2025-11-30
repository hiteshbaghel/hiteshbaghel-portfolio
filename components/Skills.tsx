import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Helper to categorize skills
  const getCategory = (skillName: string) => {
    const lowerName = skillName.toLowerCase();
    if (['java', 'c++', 'javascript', 'html5', 'css3'].includes(lowerName)) return 'Languages';
    if (['spring boot', 'hibernate', 'mysql'].includes(lowerName)) return 'Backend & Database';
    if (['react', 'tailwind'].includes(lowerName)) return 'Frontend';
    if (['git', 'docker', 'postman', 'junit'].includes(lowerName)) return 'Tools & DevOps';
    return 'Other';
  };

  // Group skills by category
  const categorizedSkills = portfolioData.skills.reduce((acc, skill) => {
    const category = getCategory(skill.name);
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const categoryOrder = ['Languages', 'Backend & Database', 'Frontend', 'Tools & DevOps'];

  return (
    <Section id="skills" title="Skills">
      <div className="max-w-5xl mx-auto space-y-8">
        {categoryOrder.map((category, index) => {
          const skills = categorizedSkills[category];
          if (!skills || skills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-neutral-800 to-transparent"></div>
                <h3 className="text-lg font-bold text-slate-500 dark:text-neutral-500 uppercase tracking-widest text-center">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-neutral-800 to-transparent"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={`${skill.name}-${idx}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-sm hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 flex items-center justify-center p-1 bg-slate-50 dark:bg-neutral-800 rounded-lg">
                      {React.cloneElement(skill.icon as React.ReactElement, { className: "w-full h-full object-contain" })}
                    </div>
                    <span className="text-base font-semibold text-slate-700 dark:text-neutral-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
