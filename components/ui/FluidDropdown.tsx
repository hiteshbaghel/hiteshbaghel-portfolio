import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '../../constants';

export interface Category {
  id: string;
  label: string;
  href: string;
  icon: React.ReactElement<{ className?: string }>;
  color?: string; // This property is no longer used for styling
}

interface FluidDropdownProps {
  categories: Category[];
  onSelect: (category: Category) => void;
  className?: string;
  selectedId?: string;
}

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

export const FluidDropdown: React.FC<FluidDropdownProps> = ({ 
  categories, 
  onSelect, 
  className, 
  selectedId 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(() => {
    const defaultCategory = categories.find(c => c.id === selectedId);
    return defaultCategory || categories[0];
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSelectedCategory = categories.find(c => c.id === selectedId);
    if (newSelectedCategory && newSelectedCategory.id !== selectedCategory.id) {
        setSelectedCategory(newSelectedCategory);
    }
  }, [selectedId, categories, selectedCategory.id]);

  const handleSelect = (category: Category) => {
    onSelect(category);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cn("relative w-36", className)}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-colors bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-800 dark:text-neutral-200"
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative z-10 flex items-center gap-2 font-semibold">
          {React.cloneElement(selectedCategory.icon, { className: "w-4 h-4" })}
          <span>{selectedCategory.label}</span>
        </div>
        <motion.div
            className="relative z-10"
            animate={{ rotate: isOpen ? -180 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <ChevronDownIcon className="w-5 h-5 opacity-80" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-neutral-800 shadow-xl focus:outline-none p-1.5"
          >
            <div className="space-y-1">
              {categories.map((category, index) => {
                const isSelected = selectedCategory.id === category.id;
                return (
                  <React.Fragment key={category.id}>
                    <motion.button
                      onClick={() => handleSelect(category)}
                      className={cn(
                        "w-full text-left flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                        isSelected 
                            ? 'bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-neutral-100' 
                            : 'text-slate-600 dark:text-neutral-400 hover:bg-slate-100/60 dark:hover:bg-neutral-800/50 hover:text-slate-800 dark:hover:text-neutral-200'
                      )}
                      whileTap={{ scale: 0.95 }}
                    >
                      {React.cloneElement(category.icon, { className: "w-4 h-4" })}
                      {category.label}
                    </motion.button>
                     {index === 0 && categories.length > 1 && (
                      <div className="my-1 mx-1 h-px bg-slate-200 dark:bg-neutral-800" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};