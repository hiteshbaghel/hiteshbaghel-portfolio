import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-24 overflow-hidden">
      <div className="mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-neutral-100">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;