import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Sparkles, Layers, MousePointer2, MoveRight, Eye, Code2, Compass } from 'lucide-react';

export const HeroArtisticDesk: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values (capped at 10-15px as per prompt)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    mouseX.set(x * 24); // max ~12px
    mouseY.set(y * 24);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl border border-[#DCCDD1] bg-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xs select-none"
    >
      {/* Background Engineering/Figma Grid Texture */}
      <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />

      {/* Layer 0: Hand-drawn artistic ink contour (SVG) */}
      <svg
        className="absolute -right-16 -top-16 w-96 h-96 text-[#E9C8CF]/40 pointer-events-none transform -rotate-12"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.7,41.4C64,53.7,52.2,63.7,38.9,70.9C25.6,78.1,10.8,82.5,-3.4,87.8C-17.6,93.1,-31.2,99.3,-44.1,94.9C-57,90.5,-69.2,75.5,-76.4,60C-83.6,44.5,-85.8,28.5,-86.8,12.8C-87.8,-2.9,-87.6,-18.3,-81.8,-31.5C-76,-44.7,-64.6,-55.7,-51.4,-63.3C-38.2,-70.9,-23.2,-75.1,-7.7,-64.1C7.8,-53.1,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      {/* Main Layered Canvas Composition (Designer's Desk Translation) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
        {/* Left Visual Column: Overlapping Figma Frame Fragments & Screen Archetypes */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Metadata & Coordinate Header */}
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical text-[#756A70]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
              <span className="font-semibold text-[#351C35]">COMPOSITION // DESK ARTIFACTS</span>
            </div>
            <span>FIGMA FRAME [1440 × 900] · 100% SCALE</span>
          </div>

          {/* Overlapping Tactile Layered Cards */}
          <div className="relative h-64 sm:h-72 w-full">
            {/* Background Card 1: AI Prompt Structure Node */}
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="absolute left-2 top-2 sm:left-6 sm:top-4 w-72 sm:w-80 rounded-2xl border border-[#DCCDD1] bg-[#FBF7F5] p-4 shadow-sm space-y-2 transform -rotate-2"
            >
              <div className="flex items-center justify-between text-[10px] font-technical text-[#756A70]">
                <span>TOKEN // SYSTEM HYPOTHESIS</span>
                <span className="text-[#B96F7D]">LLM SYNTHESIS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#DCCDD1] text-xs font-technical text-[#351C35] leading-relaxed">
                “Transform raw user friction into structured macro components.”
              </div>
            </motion.div>

            {/* Middle Card 2: UI Component Spec with Design Tokens */}
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="absolute left-10 top-16 sm:left-24 sm:top-12 w-80 sm:w-96 rounded-2xl border-2 border-[#351C35] bg-white p-5 shadow-lg space-y-3 z-10 transform rotate-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E9C8CF]" />
                  <span className="text-xs font-technical font-bold text-[#351C35]">
                    COMPONENT // SmartAahaar.Basket
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#E9C8CF]/50 text-[10px] font-technical text-[#351C35] font-semibold">
                  AUTOLAYOUT [16px]
                </span>
              </div>

              {/* Mini UI Preview */}
              <div className="p-3 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#21151F]">Protein Bento Meal</span>
                  <span className="font-technical text-[#B96F7D] font-bold">480 kcal</span>
                </div>
                <div className="w-full bg-[#DCCDD1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#351C35] h-full w-3/4 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] font-technical text-[#756A70]">
                  <span>Macro Balanced</span>
                  <span>Syncing with group...</span>
                </div>
              </div>

              {/* Annotation pill */}
              <div className="flex items-center gap-2 text-[11px] font-editorial italic text-[#756A70]">
                <MousePointer2 className="w-3.5 h-3.5 text-[#B96F7D]" />
                <span>“Restraint in UI is the highest form of craft.”</span>
              </div>
            </motion.div>

            {/* Foreground Card 3: Color Palette & Swatches */}
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="absolute right-0 bottom-0 sm:right-6 sm:bottom-2 rounded-xl border border-[#DCCDD1] bg-white p-3 shadow-md z-20 flex items-center gap-2 transform rotate-3"
            >
              <div className="w-5 h-5 rounded-md bg-[#351C35]" title="#351C35 Plum" />
              <div className="w-5 h-5 rounded-md bg-[#B96F7D]" title="#B96F7D Rose" />
              <div className="w-5 h-5 rounded-md bg-[#E9C8CF]" title="#E9C8CF Pink" />
              <div className="w-5 h-5 rounded-md bg-[#FBF7F5] border border-[#DCCDD1]" title="#FBF7F5 Paper" />
              <span className="text-[10px] font-technical text-[#756A70] pl-1 font-semibold">
                TOKENS
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Editorial Manifesto & Creative Anchor */}
        <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#DCCDD1] lg:pl-8">
          <div className="space-y-2">
            <span className="text-xs font-technical uppercase tracking-widest text-[#B96F7D] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              PHILOSOPHY IN PRACTICE
            </span>
            <blockquote className="text-xl sm:text-2xl font-display-serif italic text-[#351C35] leading-snug">
              “Good design drives the viewer's emotions while presenting information concisely, with the creative spark.”
            </blockquote>
          </div>

          <div className="space-y-3 pt-2 text-xs font-technical text-[#756A70]">
            <div className="flex items-center justify-between border-b border-[#DCCDD1]/70 pb-2">
              <span className="font-semibold text-[#21151F]">WHAT I BRING</span>
              <span>Visual craft + Product strategy</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#DCCDD1]/70 pb-2">
              <span className="font-semibold text-[#21151F]">HOW I PROTOTYPE</span>
              <span>Figma → AI Prompting → Live Code</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#DCCDD1]/70 pb-2">
              <span className="font-semibold text-[#21151F]">PRECISION FOCUS</span>
              <span>Zero-bloat user interfaces</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
