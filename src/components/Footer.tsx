import React from 'react';
import { NavTab } from '../types';
import { RESUME_DATA } from '../data/interests';

export const Footer: React.FC<{ onSelectTab: (tab: NavTab) => void }> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-[#DCCDD1] bg-[#FBF7F5] py-12 text-[#756A70] text-xs font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#351C35]">JINSI VIRVADIYA</span>
            <span>·</span>
            <span>AI Product Designer & Design Technologist</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onSelectTab('work')} className="hover:text-[#351C35] cursor-pointer">WORK</button>
            <button onClick={() => onSelectTab('about')} className="hover:text-[#351C35] cursor-pointer">ABOUT</button>
            <button onClick={() => onSelectTab('build-lab')} className="hover:text-[#351C35] cursor-pointer">BUILD LAB</button>
            <button onClick={() => onSelectTab('resume')} className="hover:text-[#351C35] cursor-pointer">RÉSUMÉ</button>
            <button onClick={() => onSelectTab('contact')} className="hover:text-[#351C35] cursor-pointer">CONTACT</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#DCCDD1]/60 pt-6 text-[11px]">
          <p className="font-editorial italic text-[#351C35]">
            “Built with Figma, caffeine, and mild disagreements with my own code.”
          </p>

          <div className="flex items-center gap-4">
            <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#351C35]">LinkedIn</a>
            <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="hover:text-[#351C35]">GitHub</a>
            <span>Ahmedabad, India · 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
