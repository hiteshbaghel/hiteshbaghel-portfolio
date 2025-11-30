import React from 'react';
import { portfolioData, TrophyIcon } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const Achievements: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const parseAchievement = (achievementString: string) => {
    // Split by " - " or " – " (en dash) to separate title and description
    // We look for the FIRST occurrence to separate the main title from the rest
    const separators = [' - ', ' – '];
    let splitIndex = -1;
    let separatorLength = 0;

    // Find the first separator that appears
    for (const sep of separators) {
      const idx = achievementString.indexOf(sep);
      if (idx !== -1 && (splitIndex === -1 || idx < splitIndex)) {
        splitIndex = idx;
        separatorLength = sep.length;
      }
    }

    if (splitIndex !== -1) {
      const title = achievementString.substring(0, splitIndex).trim();
      const description = achievementString.substring(splitIndex + separatorLength).trim();
      return { title, description };
    }

    return { title: achievementString, description: '' };
  };

  return (
    <Section id="achievements" title="Achievements">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.achievements.map((item, index) => {
          const { title, description } = parseAchievement(item);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col h-full"
            >
              {/* Gradient Border/Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">

                {/* Decorative Background Icon */}
                <div className="absolute -right-4 -bottom-4 text-amber-500/5 dark:text-amber-500/10 transform -rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                  <TrophyIcon width={140} height={140} strokeWidth={1.5} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      <TrophyIcon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-neutral-100 mb-3 leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                    {title}
                  </h3>

                  {description && (
                    <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Achievements;