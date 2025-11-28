import React from 'react';
import { portfolioData, CertificateIcon } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const Certifications: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <Section id="certifications" title="Certifications">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex"
          >
            <div className="flex w-full items-start gap-4 p-6 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:hover:border-neutral-700 hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-500 dark:text-neutral-400">
                <CertificateIcon className="w-6 h-6" />
              </div>
              <p className="text-slate-700 dark:text-neutral-300 pt-1.5">{cert}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Certifications;