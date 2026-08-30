import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

interface TileData {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  hoverReveal: string;
  description: string;
  bulletPoints: string[];
  icon: React.ReactNode;
  accentBg: string;
  borderHover: string;
}

const TILES: TileData[] = [
  {
    number: '01',
    tag: 'UI / UX / VISUAL',
    title: 'DESIGN',
    subtitle: 'Human-Centered Systems & Visual Craft',
    hoverReveal: '“Pixel-pushing, but with intent.”',
    description: 'Transforming ambiguous product challenges into clear information architectures, intuitive user flows, and tactile design systems rooted in optical typography and cognitive clarity.',
    bulletPoints: [
      'User Research & Mental Models',
      'Information Architecture & Wireframing',
      'Figma Design Systems & Tokens',
      'High-Craft Visual Hierarchy'
    ],
    icon: <Compass className="w-5 h-5 text-[#351C35]" />,
    accentBg: 'group-hover:bg-[#F4DDE1]/40',
    borderHover: 'hover:border-[#351C35]'
  },
  {
    number: '02',
    tag: 'AI WORKFLOWS',
    title: 'PROMPT',
    subtitle: 'Intelligent Workflows & Conversational UX',
    hoverReveal: '“I talk to robots so users don’t have to.”',
    description: 'Leveraging AI not as a marketing gimmick, but as an acceleration engine for user research synthesis, synthetic edge-case modeling, and designing calm AI copilot experiences.',
    bulletPoints: [
      'LLM Prompt Engineering for UX',
      'Conversational Flow Architecture',
      'Context Window & Guardrail Design',
      'AI-Assisted Usability Synthesis'
    ],
    icon: <Sparkles className="w-5 h-5 text-[#B96F7D]" />,
    accentBg: 'group-hover:bg-[#E9C8CF]/30',
    borderHover: 'hover:border-[#B96F7D]'
  },
  {
    number: '03',
    tag: 'FRONTEND / VIBE CODING',
    title: 'BUILD',
    subtitle: 'Design-to-Code Prototyping & Verification',
    hoverReveal: '“Design that survived contact with real code.”',
    description: 'Prototyping in React, TypeScript, and Motion to test whether interaction physics, springs, responsive flexboxes, and async loading states actually feel right in the browser.',
    bulletPoints: [
      'Interactive React & TypeScript Prototyping',
      'Tailwind CSS Token Alignment',
      'Motion & Micro-Interaction Physics',
      'Designer-Developer Bridge'
    ],
    icon: <Code2 className="w-5 h-5 text-[#351C35]" />,
    accentBg: 'group-hover:bg-[#F4DDE1]/50',
    borderHover: 'hover:border-[#351C35]'
  }
];

export const WhatIDoTiles: React.FC<{ onNavigateToLab?: () => void }> = ({ onNavigateToLab }) => {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 border-t border-[#DCCDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-[#756A70]">
              <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
              PRACTICE & PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-serif italic text-[#351C35]">
              What I Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#756A70] max-w-md font-editorial">
            The core workflow is <strong className="text-[#351C35] font-semibold">DESIGN → PROMPT → BUILD → REPEAT</strong>. Moving ideas seamlessly from mental models into living products.
          </p>
        </div>

        {/* 3 Large Editorial Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {TILES.map((tile) => {
            const isHovered = hoveredTile === tile.number;

            return (
              <motion.div
                key={tile.number}
                onMouseEnter={() => setHoveredTile(tile.number)}
                onMouseLeave={() => setHoveredTile(null)}
                className={`group relative rounded-2xl border border-[#DCCDD1] bg-white p-7 sm:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${tile.accentBg} ${tile.borderHover}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle Grid Accent in background */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-dot-grid opacity-30 pointer-events-none" />

                {/* Top Tile Metadata */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#DCCDD1]/70 pb-4 mb-6">
                    <span className="text-xs font-technical text-[#756A70] tracking-wider">
                      TILE // {tile.number}
                    </span>
                    <div className="p-2 rounded-full bg-[#FBF7F5] border border-[#DCCDD1]">
                      {tile.icon}
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-technical tracking-widest uppercase text-[#B96F7D] font-semibold mb-2">
                    {tile.tag}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#21151F] mb-1">
                    {tile.title}
                  </h3>

                  <div className="text-sm text-[#756A70] font-medium mb-6">
                    {tile.subtitle}
                  </div>

                  {/* Punchy Hover Reveal Quote Banner */}
                  <div className="min-h-[52px] p-3 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] mb-6 flex items-center transition-colors duration-300 group-hover:bg-[#E9C8CF]/30 group-hover:border-[#B96F7D]">
                    <p className="text-xs sm:text-sm font-display-serif italic text-[#351C35] font-medium leading-snug">
                      {tile.hoverReveal}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#756A70] font-editorial leading-relaxed mb-6">
                    {tile.description}
                  </p>
                </div>

                {/* Bottom List of Capabilities */}
                <div className="pt-4 border-t border-[#DCCDD1]/70 space-y-2">
                  <span className="text-[11px] font-technical uppercase tracking-wider text-[#756A70]">
                    Core Competencies
                  </span>
                  <ul className="space-y-1.5">
                    {tile.bulletPoints.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#21151F]">
                        <span className="w-1 h-1 rounded-full bg-[#351C35]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
