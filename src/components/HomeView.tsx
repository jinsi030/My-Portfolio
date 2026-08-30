import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { WhatIDoTiles } from './WhatIDoTiles';
import { WorkStackedDeck } from './WorkStackedDeck';
import { MagneticButton } from './MagneticButton';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';

interface HomeViewProps {
  onOpenCaseStudy: (project: Project) => void;
  onNavigateToWork: () => void;
  onNavigateToResume: () => void;
  onNavigateToContact: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenCaseStudy,
  onNavigateToWork,
  onNavigateToResume,
  onNavigateToContact
}) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* HERO SECTION */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Hero Meta Pill & Location */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-3 text-xs font-technical text-[#756A70] border-b border-[#DCCDD1]/70 pb-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B96F7D] animate-pulse" />
              <span className="text-[#351C35] font-semibold">JINSI VIRVADIYA</span>
              <span className="text-[#DCCDD1]">/</span>
              <span>AHMEDABAD, INDIA</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">INSTRUMENTATION & CONTROL → AI PRODUCT DESIGN</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E9C8CF]/50 text-[#351C35] font-semibold border border-[#DCCDD1]">
                AVAILABLE FOR WORK
              </span>
            </div>
          </motion.div>

          {/* Core Master Headline */}
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-bold tracking-tight text-[#21151F] leading-[1.06]">
              <span className="block">
                <TextScramble text="Engineered to measure pressure." delay={150} />
              </span>
              <span className="block font-expressive italic font-normal text-[#351C35] mt-1">
                Currently measuring pixels.
              </span>
            </h1>

            {/* Secondary Positioning & Supporting Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-3 pt-2"
            >
              <p className="text-lg sm:text-2xl text-[#351C35] font-medium tracking-tight">
                AI Product Designer & Design Technologist, based in Ahmedabad.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCCDD1] text-xs sm:text-sm font-technical text-[#756A70] shadow-2xs">
                <span className="text-[#B96F7D] font-bold">PROCESS //</span>
                <span className="text-[#21151F]">DESIGN → PROMPT → BUILD → REPEAT</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                onClick={onNavigateToWork}
                variant="primary"
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase font-technical"
              >
                SEE THE WORK <ArrowDown className="w-4 h-4 ml-2" />
              </MagneticButton>

              <MagneticButton
                onClick={onNavigateToResume}
                variant="secondary"
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase font-technical"
              >
                GRAB THE RÉSUMÉ <ArrowUpRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <WhatIDoTiles />

      {/* STACKED PROJECT DECK SHOWCASE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkStackedDeck
          projects={PROJECTS}
          onOpenProject={onOpenCaseStudy}
        />
      </div>

      {/* CLOSING HOME CTA */}
      <section className="py-12 sm:py-16 border-t border-[#DCCDD1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#DCCDD1] bg-white p-8 sm:p-14 text-center space-y-6 shadow-xs relative overflow-hidden">
            <div className="absolute inset-0 bg-engineering-grid opacity-25 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-technical uppercase tracking-widest text-[#B96F7D] font-bold">
                04 // LET’S TALK PRODUCT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-expressive font-bold text-[#351C35] leading-tight">
                Got a product idea that deserves better UX than a screenshot in Notion?
              </h2>
            </div>

            <div className="relative z-10 flex justify-center pt-2">
              <MagneticButton
                onClick={onNavigateToContact}
                variant="primary"
                strength={0.35}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-technical shadow-md"
              >
                LET’S TALK <ArrowUpRight className="w-4 h-4 ml-2 text-[#E9C8CF]" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

