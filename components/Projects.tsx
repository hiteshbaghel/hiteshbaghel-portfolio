
import React from 'react';
import { portfolioData, GithubIcon, ExternalLinkIcon } from '../constants';
import Section from './Section';
import { Card, CardContent, CardTitle, CardDescription, CardDecoration, Badge } from './ui/Card';
// Fix: Import `Variants` type to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 1 }, // Parent container can be visible, children will be hidden initially
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children by 0.2s
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Section id="projects" title="Projects">
      <motion.div
        className="space-y-12 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index} 
            variants={cardVariants}
          >
            <Card className="transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-9">
                        <CardTitle className="mb-2">{project.title}</CardTitle>
                        <CardDescription className="mb-6 text-base leading-relaxed">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag, i) => (
                                <Badge key={i} className="bg-indigo-100 dark:bg-indigo-900/50 border-transparent text-indigo-700 dark:text-indigo-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
                                <Badge key={i}>{tech}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-3 flex flex-col md:items-end gap-3 pt-2 mt-6 md:mt-0">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full md:w-auto text-slate-800 dark:text-neutral-200 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-slate-200 dark:border-neutral-700 transition-all font-semibold px-4 py-2 rounded-lg transform hover:scale-105">
                            <ExternalLinkIcon className="w-4 h-4" /> Demo
                            </a>
                        )}
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full md:w-auto text-slate-800 dark:text-neutral-200 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-slate-200 dark:border-neutral-700 transition-all font-semibold px-4 py-2 rounded-lg transform hover:scale-105">
                            <GithubIcon className="w-4 h-4" /> GitHub
                            </a>
                        )}
                    </div>
                </div>
              </CardContent>
              <CardDecoration />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
