import React from 'react';
import { portfolioData, GithubIcon, ExternalLinkIcon, CodeIcon, FolderKanbanIcon } from '../constants';
import Section from './Section';
import { motion, Variants } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Function to generate a deterministic gradient based on the project title
  const getGradient = (title: string) => {
    const gradients = [
      'from-blue-500 to-cyan-400',
      'from-purple-500 to-pink-500',
      'from-orange-400 to-red-500',
      'from-emerald-400 to-teal-500',
      'from-indigo-500 to-blue-500',
    ];
    const index = title.length % gradients.length;
    return gradients[index];
  };

  return (
    <Section id="projects" title="Featured Projects" mobileTitle="Projects">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative flex flex-col h-full"
          >
            <div className="relative flex flex-col h-full bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:shadow-none dark:hover:shadow-neutral-900/50">

              {/* Project Cover Image */}
              <div className="h-64 w-full relative overflow-hidden">
                {/* @ts-ignore */}
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.title)}`}>
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiAvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                  </div>
                )}

                <div className="absolute bottom-4 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                        title="View Demo"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                        title="View Code"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-[10px] sm:text-xs font-bold tracking-wide uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="pt-4 border-t border-slate-100 dark:border-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <CodeIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-lg bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 border border-slate-200 dark:border-neutral-800 transition-colors group-hover:border-indigo-200 dark:group-hover:border-indigo-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Visible on all devices now */}
                  <div className="flex items-center gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-700 dark:text-neutral-200 text-sm font-semibold transition-all hover:bg-slate-50 dark:hover:bg-neutral-700 hover:-translate-y-0.5"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
