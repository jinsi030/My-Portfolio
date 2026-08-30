import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  id?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.25,
  id,
  variant = 'primary'
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: 'bg-[#351C35] text-[#FBF7F5] hover:bg-[#21151F] shadow-sm border border-[#351C35]',
    secondary: 'bg-[#E9C8CF] text-[#351C35] hover:bg-[#F4DDE1] border border-[#DCCDD1]',
    outline: 'bg-transparent text-[#21151F] border border-[#21151F] hover:bg-[#F4DDE1]/40',
    pill: 'bg-[#FBF7F5] text-[#21151F] border border-[#DCCDD1] hover:border-[#351C35] hover:bg-[#F4DDE1]/30'
  };

  return (
    <motion.button
      ref={ref}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      className={`relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-tight rounded-full transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#B96F7D] focus:ring-offset-2 whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
