import React from 'react';
import { portfolioData, GithubIcon, LinkedinIcon, MailIcon, LeetcodeIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 dark:bg-black pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Let's make something <br />
              <span className="text-indigo-600 dark:text-indigo-400">amazing together.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-neutral-400 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-900 dark:bg-white dark:text-black rounded-full hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all duration-300"
              >
                Say Hello
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:pl-20">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Socials
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={portfolioData.contact.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <LeetcodeIcon className="w-4 h-4" /> LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-neutral-600">
            Designed & Built with ❤️
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-neutral-700 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;