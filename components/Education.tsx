import React from 'react';
import { portfolioData } from '../constants';
import Section from './Section';

// Utility to merge Tailwind classes
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="relative max-w-5xl mx-auto">
                {/* Timeline Line - visible on all screens, but positioned differently */}
                <div
                    className="absolute left-4 top-5 h-[calc(100%-2rem)] w-0.5 bg-slate-200 dark:bg-neutral-800 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                ></div>

                <div className="relative flex flex-col gap-12">
                    {portfolioData.education.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative flex items-start",
                                "md:grid md:grid-cols-2 md:gap-10 md:items-center"
                            )}
                        >
                            {/* Content Card */}
                            <div
                                className={cn(
                                    "order-1 w-full p-6 ml-12 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg shadow-black/[0.02] dark:shadow-black/[0.1] animate-on-scroll",
                                    "md:ml-0",
                                    index % 2 === 0 ? "md:order-2" : "md:order-1 md:text-right"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-neutral-100">{item.degree}</h3>
                                <p className="text-slate-700 dark:text-neutral-300 mt-1">{item.institution}</p>
                                <p className="text-sm text-slate-500 dark:text-neutral-500 mt-2">{item.duration}</p>
                            </div>

                            {/* Spacer for desktop layout */}
                            <div className={cn("hidden md:block", index % 2 === 0 ? "md:order-1" : "md:order-2")}></div>

                            {/* Icon Marker on the timeline */}
                            <div className="absolute top-2 left-0 w-8 h-8 flex items-center justify-center bg-indigo-500 rounded-full text-white z-10 md:left-1/2 md:-translate-x-1/2">
                                {item.icon && React.cloneElement(item.icon, { className: "w-5 h-5" })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;
