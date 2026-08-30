import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavTab } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'INDEX' },
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'build-lab', label: 'BUILD LAB' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF7F5]/90 backdrop-blur-md border-b border-[#DCCDD1]/80 py-3 shadow-2xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onSelectTab('home')}
          className="group flex flex-col text-left focus:outline-none cursor-pointer"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#21151F] group-hover:text-[#351C35] transition-colors">
            JINSI VIRVADIYA
          </span>
          <span className="text-[10px] font-technical uppercase tracking-widest text-[#756A70]">
            PRODUCT DESIGNER · AHMEDABAD
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-[#DCCDD1] rounded-full px-2 py-1 shadow-2xs backdrop-blur-xs">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-technical tracking-wider uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#351C35] font-bold'
                    : 'text-[#756A70] hover:text-[#21151F]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-[#E9C8CF]/50 rounded-full border border-[#DCCDD1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Quick Resume View Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onSelectTab('resume')}
            className="text-xs font-technical text-[#756A70] hover:text-[#351C35] px-3 py-1 rounded-full border border-[#DCCDD1] hover:border-[#351C35] transition-colors cursor-pointer"
          >
            RÉSUMÉ
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#DCCDD1] bg-white text-[#21151F] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FBF7F5] border-b border-[#DCCDD1] px-4 pt-3 pb-6 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-technical uppercase flex items-center justify-between ${
                  currentTab === item.id
                    ? 'bg-[#351C35] text-white font-bold'
                    : 'bg-white border border-[#DCCDD1] text-[#21151F]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </button>
            ))}

            <button
              onClick={() => {
                onSelectTab('resume');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-technical uppercase bg-[#E9C8CF]/50 text-[#351C35] font-bold border border-[#DCCDD1]"
            >
              RÉSUMÉ / CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
