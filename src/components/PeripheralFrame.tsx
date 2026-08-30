import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, User, Cpu, Mail, ArrowUpRight, FileText } from 'lucide-react';
import { NavTab } from '../types';

interface PeripheralFrameProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  scrollProgress: number; // 0 to 1
}

export const PeripheralFrame: React.FC<PeripheralFrameProps> = ({
  currentTab,
  onSelectTab,
  scrollProgress,
}) => {
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'HOME', icon: <Home className="w-4 h-4" /> },
    { id: 'work', label: 'WORK', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { id: 'build-lab', label: 'BUILD', icon: <Cpu className="w-4 h-4" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* TOP BAR (Desktop + Mobile) */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6 lg:p-8 flex items-center justify-between">
        {/* TOP LEFT: Custom Jinsi Monogram */}
        <button
          onClick={() => onSelectTab('home')}
          className="pointer-events-auto group flex items-center gap-3 focus:outline-none cursor-pointer"
          data-cursor="HOME"
        >
          <div className="w-10 h-10 rounded-full bg-[#351C35] text-[#FBF7F5] flex items-center justify-center font-display-serif text-lg font-bold border border-[#DCCDD1] shadow-2xs group-hover:scale-105 group-hover:bg-[#21151F] transition-all duration-300">
            <span className="tracking-tighter">JV</span>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold tracking-wider text-[#21151F] font-technical uppercase">
              Jinsi Virvadiya
            </span>
            <span className="text-[10px] text-[#756A70] font-technical tracking-widest uppercase">
              Product Designer
            </span>
          </div>
        </button>

        {/* TOP RIGHT: Action Pill (LET'S TALK →) */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => onSelectTab('resume')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DCCDD1] bg-white/80 backdrop-blur-xs text-xs font-technical text-[#756A70] hover:text-[#351C35] hover:border-[#351C35] transition-colors cursor-pointer"
            data-cursor="RÉSUMÉ"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RÉSUMÉ</span>
          </button>

          <button
            onClick={() => onSelectTab('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#351C35] text-[#FBF7F5] text-xs font-technical uppercase tracking-wider font-semibold shadow-xs hover:bg-[#21151F] transition-all duration-300 cursor-pointer"
            data-cursor="TALK"
          >
            <span>LET’S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E9C8CF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* LEFT FIXED VERTICAL NAVIGATION (Desktop) */}
      {/* ========================================================================= */}
      <nav
        aria-label="Sidebar Navigation"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none flex-col gap-2 bg-white/80 backdrop-blur-md border border-[#DCCDD1] p-1.5 rounded-2xl shadow-2xs"
      >
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`pointer-events-auto group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#351C35] text-[#FBF7F5] shadow-xs'
                  : 'text-[#756A70] hover:text-[#21151F] hover:bg-[#E9C8CF]/30 hover:translate-x-1'
              }`}
              data-cursor={item.label}
              title={item.label}
            >
              {item.icon}

              {/* Tooltip on hover */}
              <span className="absolute left-14 px-2.5 py-1 rounded-md bg-[#21151F] text-white text-[10px] font-technical uppercase tracking-wider whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ========================================================================= */}
      {/* RIGHT FIXED PROGRESS RAIL (Desktop) */}
      {/* ========================================================================= */}
      <aside
        aria-label="Progress Rail"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none flex-col items-center gap-3 font-technical text-[10px] text-[#756A70]"
      >
        <span className="font-semibold text-[#351C35]">01</span>
        <div className="relative w-px h-28 bg-[#DCCDD1]">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#B96F7D]"
            style={{
              height: `${Math.min(100, Math.max(15, scrollProgress * 100))}%`,
            }}
          />
          {/* Active indicator dot */}
          <motion.div
            className="absolute w-2 h-2 -left-[3.5px] rounded-full bg-[#351C35] border border-[#FBF7F5]"
            style={{
              top: `${Math.min(94, Math.max(0, scrollProgress * 100))}%`,
            }}
          />
        </div>
        <span>04</span>
      </aside>

      {/* ========================================================================= */}
      {/* BOTTOM CORNER FOOTNOTES (Desktop) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none p-4 sm:p-6 lg:p-8 flex items-center justify-between text-xs font-technical text-[#756A70]">
        {/* BOTTOM LEFT */}
        <div className="hidden md:block">
          <span className="text-[#351C35] font-semibold tracking-wider">JINSI VIRVADIYA</span>
          <span className="text-[#DCCDD1] mx-2">/</span>
          <span>CREATIVE PRODUCT DESIGN</span>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="hidden md:block">
          <span className="text-[#756A70]">LOCATION //</span>
          <span className="text-[#351C35] font-semibold ml-1.5">AHMEDABAD, INDIA</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM CENTER PERSISTENT PILL CTA */}
      {/* ========================================================================= */}
      {currentTab !== 'contact' && currentTab !== 'resume' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto px-4 w-full max-w-[480px]">
          <motion.div
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            whileHover={{ y: -2 }}
            className="rounded-full bg-[#FBF7F5]/95 backdrop-blur-md border border-[#DCCDD1] p-1.5 sm:p-2 pl-5 sm:pl-6 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="text-xs sm:text-sm font-editorial italic text-[#351C35] font-medium pr-2 truncate">
              “Have something worth designing?”
            </span>

            <button
              onClick={() => onSelectTab('contact')}
              className="px-5 py-2.5 rounded-full bg-[#351C35] text-[#FBF7F5] text-xs font-technical font-semibold uppercase tracking-wider hover:bg-[#21151F] transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
              data-cursor="SAY HI"
            >
              <span>SAY HI</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E9C8CF]" />
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};
