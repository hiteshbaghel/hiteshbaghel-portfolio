import React from 'react';
import { portfolioData } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#0A0A0A] border-t border-slate-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-6">
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