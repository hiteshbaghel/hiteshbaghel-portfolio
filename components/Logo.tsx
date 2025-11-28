import React from 'react';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M125 75V425H175V300H275V425H325V75H275V200H175V75H125ZM375 75C375 75 375 150 375 250C375 350 300 425 200 425V375C275 375 325 325 325 250C325 175 275 125 200 125V75C300 75 375 150 375 250Z"
                className="fill-black dark:fill-white"
            />
        </svg>
    );
};
