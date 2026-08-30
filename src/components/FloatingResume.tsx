import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ArrowDown, ArrowUpRight } from 'lucide-react';

interface FloatingResumeProps {
  onOpenResume: () => void;
}

export const FloatingResume: React.FC<FloatingResumeProps> = ({ onOpenResume }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none print:hidden">
      <motion.button
        onClick={onOpenResume}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 px-5 py-3 rounded-full bg-[#351C35] text-[#FBF7F5] border border-[#351C35] shadow-lg hover:shadow-xl hover:bg-[#21151F] transition-all duration-300 cursor-pointer"
        title="View & Download Official Résumé"
      >
        <span className="w-2 h-2 rounded-full bg-[#E9C8CF] animate-pulse" />

        <span className="text-xs font-technical uppercase tracking-wider font-semibold">
          {isHovered ? 'DOWNLOAD RÉSUMÉ ↘' : 'RÉSUMÉ ↓'}
        </span>
      </motion.button>
    </div>
  );
};
