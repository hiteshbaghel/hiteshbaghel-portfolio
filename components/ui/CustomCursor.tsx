import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only show on larger screens/non-touch devices
        const checkVisibility = () => {
            if (window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        checkVisibility();
        window.addEventListener('resize', checkVisibility);
        return () => window.removeEventListener('resize', checkVisibility);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        // Inject CSS to hide default cursor globally
        const style = document.createElement('style');
        style.innerHTML = `
      * { cursor: none !important; }
      body { overflow-x: hidden; }
    `;
        style.id = 'custom-cursor-style';
        document.head.appendChild(style);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            const existingStyle = document.getElementById('custom-cursor-style');
            if (existingStyle) existingStyle.remove();
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-[#D6CDB6] dark:bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                scale: isHovering ? 3 : 1,
                opacity: 1,
            }}
            transition={{ duration: 0.2 }}
        />
    );
};
