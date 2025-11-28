import React from 'react';
import { portfolioData } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-slate-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-slate-600 dark:text-neutral-400 text-center">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;