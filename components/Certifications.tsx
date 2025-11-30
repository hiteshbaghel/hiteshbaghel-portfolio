import React from 'react';
import { portfolioData, CertificateIcon } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const Certifications: React.FC = () => {
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
        ease: [0.22, 1, 0.36, 1], // Custom easing for a premium feel
      },
    },
  };

  return (
    <Section id="certifications" title="Certifications">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.certifications.map((cert, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl transform transition-transform duration-300 group-hover:scale-105 opacity-0 group-hover:opacity-100" />

              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 overflow-hidden">

                {/* Decorative Background Icon */}
                <div className="absolute -right-6 -bottom-6 text-slate-100 dark:text-neutral-900 transform rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                  <CertificateIcon width={120} height={120} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <CertificateIcon className="w-6 h-6" />
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View Certificate"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-neutral-100 mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-neutral-900">
                    <p className="text-xs font-semibold tracking-wider text-slate-500 dark:text-neutral-500 uppercase">
                      Issued by
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-neutral-300">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div >
    </Section >
  );
};

export default Certifications;