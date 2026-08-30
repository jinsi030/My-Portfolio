import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Sliders, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Capped 3-4 degree tilt
    const rotX = ((y - centerY) / centerY) * -3.5;
    const rotY = ((x - centerX) / centerX) * 3.5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenCaseStudy(project)}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.015 : 1
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl border border-[#DCCDD1] bg-white overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-shadow cursor-pointer select-none"
    >
      {/* Background Micro Grid */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-engineering-grid opacity-30 pointer-events-none" />

      {/* Top Project Metadata Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#DCCDD1]/70 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-technical text-[#756A70] tracking-wider">
              0{index + 1} — {project.year}
            </span>
            <span className="text-[#DCCDD1]">/</span>
            <span className="text-xs font-technical text-[#B96F7D] font-medium">
              {project.role}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.category.map((cat, i) => (
              <span
                key={i}
                className="text-[10px] font-technical uppercase px-2.5 py-0.5 rounded-full bg-[#FBF7F5] border border-[#DCCDD1] text-[#756A70]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Project Title & Exact Master Punchline */}
        <div className="space-y-2 mb-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#21151F] group-hover:text-[#351C35] transition-colors">
              {project.title}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-technical text-[#B96F7D] opacity-0 group-hover:opacity-100 transition-opacity">
              INSPECT CASE STUDY <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Exact Master Description */}
          <p className="text-base sm:text-lg font-display-serif italic text-[#351C35] font-medium leading-snug">
            “{project.punchline}”
          </p>

          <p className="text-xs sm:text-sm text-[#756A70] font-editorial leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Visual Preview Canvas Frame */}
        <div className="relative w-full h-52 sm:h-64 rounded-xl border border-[#DCCDD1] bg-[#FBF7F5] overflow-hidden p-4 flex flex-col justify-between group-hover:border-[#351C35] transition-colors">
          {/* Subtle decorative mockup elements according to project */}
          <div className="absolute inset-0 bg-dot-grid opacity-25" />

          {/* Preview Overlay Badge */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-technical text-[#756A70]">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/80 border border-[#DCCDD1] text-[#351C35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B96F7D]" />
              {project.id === 'smartaahaar' ? '14 MOBILE SCREENS' : project.id === 'vyoma' ? 'SPATIAL CONSTELLATION MAP' : 'INTERACTIVE PROTOTYPE'}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#E9C8CF]/50 text-[#351C35] font-semibold">
              7-STAGE CASE STUDY
            </span>
          </div>

          {/* Center Graphic Representation */}
          <div className="relative z-10 my-auto flex items-center justify-center">
            {project.id === 'smartaahaar' ? (
              <div className="w-full max-w-xs space-y-2">
                <div className="h-10 rounded-lg bg-white border border-[#DCCDD1] px-3 flex items-center justify-between text-xs text-[#351C35] shadow-2xs">
                  <span className="font-semibold">Green Earth Kitchen</span>
                  <span className="text-[10px] font-technical text-[#B96F7D]">32g Protein Bowl</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-6 rounded-md bg-[#E9C8CF]/40 border border-[#DCCDD1] flex items-center justify-center text-[10px] font-technical text-[#351C35]">
                    Synchronous Group Cart
                  </div>
                  <div className="w-20 h-6 rounded-md bg-[#351C35] text-white flex items-center justify-center text-[10px] font-technical">
                    Split Bill
                  </div>
                </div>
              </div>
            ) : project.id === 'vibe' ? (
              <div className="w-full max-w-xs space-y-2">
                <div className="p-2.5 rounded-lg bg-[#21151F] text-white text-xs flex items-center justify-between">
                  <span className="font-editorial italic">Figma Frame #402 Critique</span>
                  <span className="text-[10px] text-[#E9C8CF] font-technical">AI Match: 98%</span>
                </div>
                <div className="text-[10px] text-center font-technical text-[#756A70]">
                  “Pin added: Token contrast needs WCAG AA check”
                </div>
              </div>
            ) : project.id === 'vyoma' ? (
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#DCCDD1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="26" fill="none" stroke="#B96F7D" strokeWidth="0.75" />
                  <circle cx="50" cy="12" r="4" fill="#351C35" />
                  <circle cx="76" cy="50" r="3" fill="#B96F7D" />
                  <circle cx="50" cy="76" r="3" fill="#E9C8CF" />
                </svg>
                <div className="absolute text-[10px] font-technical text-[#351C35] font-bold">
                  SKILL GALAXY
                </div>
              </div>
            ) : (
              <div className="w-full max-w-xs p-3 rounded-lg bg-white border border-[#DCCDD1] text-xs text-[#351C35] font-editorial italic text-center">
                Interactive Mental Models & Token Visualization
              </div>
            )}
          </div>

          {/* Bottom Visual Bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-technical text-[#756A70] border-t border-[#DCCDD1]/60 pt-2">
            <span>Tools: {project.tools.slice(0, 3).join(', ')}</span>
            <span className="text-[#351C35] font-medium">Click to Read →</span>
          </div>
        </div>
      </div>

      {/* Deliverable Tags Footer */}
      <div className="mt-6 pt-4 border-t border-[#DCCDD1]/70 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.deliverables.map((del, i) => (
            <span
              key={i}
              className="text-[11px] font-technical px-2.5 py-1 rounded-md bg-[#FBF7F5] border border-[#DCCDD1] text-[#21151F]"
            >
              {del}
            </span>
          ))}
        </div>
        <div className="text-xs font-technical text-[#351C35] font-semibold flex items-center gap-1">
          Explore Case Study →
        </div>
      </div>
    </motion.div>
  );
};
