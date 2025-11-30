import React from 'react';

export const CreativeBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Gradient Orbs - Dark Mode */}
            <div className="hidden dark:block absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="hidden dark:block absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />

            {/* Gradient Orbs - Light Mode */}
            <div className="dark:hidden absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="dark:hidden absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};
