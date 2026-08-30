import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'action' | 'project' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor');
        const variant = cursorTarget.getAttribute('data-cursor-variant') as any || 'action';
        setCursorText(text);
        setCursorVariant(variant);
      } else {
        setCursorText(null);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-technical"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {cursorText ? (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="px-3.5 py-1.5 rounded-full bg-[#351C35] text-[#FBF7F5] text-xs font-semibold tracking-wider shadow-lg border border-[#E9C8CF]/30 whitespace-nowrap flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E9C8CF] animate-pulse" />
          <span>{cursorText}</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className="w-3.5 h-3.5 rounded-full bg-[#351C35]/80 border border-[#FBF7F5] shadow-xs"
        />
      )}
    </motion.div>
  );
};
