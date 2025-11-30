import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  mobileTitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, mobileTitle, children, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-20 py-10 md:py-16 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Mobile View: Section Title */}
          <div className="md:hidden mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {mobileTitle || title}
            </h2>
            <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mt-2 rounded-full" />
          </div>

          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;