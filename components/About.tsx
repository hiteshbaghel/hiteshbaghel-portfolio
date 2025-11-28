import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
  const summaryWords = portfolioData.about.summary.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section id="about" title="About Me">
      <div className="relative max-w-4xl mx-auto">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            className="text-lg md:text-2xl text-slate-700 dark:text-neutral-300 leading-relaxed font-light"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {summaryWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <a
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 transition-all duration-300 hover:w-40 hover:bg-slate-800 dark:hover:bg-neutral-200"
            >
              <span className="mr-2">Let's Connect</span>
              <div className="absolute right-0 translate-x-full opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100">
                →
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
