import React, { useRef } from 'react';
import { portfolioData, UserIcon, CodeIcon, LightbulbIcon, DesktopIcon } from '../constants';
import Section from './Section';
import { motion, Variants, useScroll, useTransform, MotionValue } from 'framer-motion';

const Word = ({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-1.5 lg:mr-2 mt-1 lg:mt-2 inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const ScrollRevealParagraph = ({ content }: { content: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = content.split(" ");

  return (
    <p ref={container} className="text-base sm:text-lg md:text-xl leading-relaxed flex flex-wrap text-slate-600 dark:text-neutral-400 tracking-wide">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const highlights = [
    {
      icon: <DesktopIcon className="w-6 h-6" />,
      title: "Backend Engineering",
      description: "Building robust, scalable server-side applications with Java & Spring Boot."
    },
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Full Stack Dev",
      description: "Seamlessly integrating APIs with modern React frontends."
    },
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with efficient DSA and algorithmic thinking."
    }
  ];

  return (
    <Section id="about" title="About Me">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Scroll Reveal Paragraph */}
            <div className="relative">
              <ScrollRevealParagraph content={portfolioData.about.summary} />
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <UserIcon className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </Section>
  );
};

export default About;
