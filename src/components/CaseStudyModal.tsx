import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronUp, ArrowLeft, Sliders, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { InteractiveAppSimulator } from './InteractiveAppSimulator';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects = []
}) => {
  const [expandedAsk, setExpandedAsk] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#21151F]/60 backdrop-blur-sm p-3 sm:p-6 lg:p-10 flex justify-center"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-5xl bg-[#FBF7F5] rounded-2xl border border-[#DCCDD1] shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-[#FBF7F5]/95 backdrop-blur-md border-b border-[#DCCDD1] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DCCDD1] bg-white text-xs font-technical text-[#351C35] hover:bg-[#E9C8CF]/30 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
              </button>
              <div className="hidden sm:flex items-center gap-2 text-xs font-technical text-[#756A70]">
                <span>CASE STUDY ARCHITECTURE:</span>
                <span className="font-semibold text-[#351C35]">{project.title}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#DCCDD1] bg-white text-[#21151F] hover:bg-[#351C35] hover:text-white transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Case Study Body */}
          <div className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-16">
            {/* Project Hero Header */}
            <div className="space-y-6 border-b border-[#DCCDD1] pb-10">
              <div className="flex flex-wrap items-center gap-2">
                {project.category.map((cat, i) => (
                  <span
                    key={i}
                    className="text-xs font-technical uppercase px-3 py-1 rounded-full bg-[#E9C8CF]/40 text-[#351C35] border border-[#DCCDD1] font-medium"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-xs font-technical text-[#756A70]">
                  // {project.year} · {project.role}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#21151F]">
                {project.title}
              </h1>

              <div className="p-4 rounded-xl bg-white border border-[#DCCDD1]">
                <p className="text-xl sm:text-2xl font-display-serif italic text-[#351C35] font-medium leading-snug">
                  “{project.punchline}”
                </p>
              </div>

              {/* Project Deliverables & Tools Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#DCCDD1] space-y-1">
                  <span className="text-[11px] font-technical uppercase text-[#756A70]">Deliverables</span>
                  <p className="text-xs text-[#21151F] font-medium">{project.deliverables.join(', ')}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#DCCDD1] space-y-1">
                  <span className="text-[11px] font-technical uppercase text-[#756A70]">Core Tools & Stack</span>
                  <p className="text-xs text-[#21151F] font-medium">{project.tools.join(', ')}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#DCCDD1] space-y-1">
                  <span className="text-[11px] font-technical uppercase text-[#756A70]">UX Methodology</span>
                  <p className="text-xs text-[#21151F] font-medium">Research → IA → Tokens → Prototype</p>
                </div>
              </div>
            </div>

            {/* 7-STAGE ARCHITECTURAL JOURNEY */}
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3">
                <h3 className="text-xs font-technical uppercase tracking-widest text-[#756A70]">
                  THE 7-STAGE CASE STUDY JOURNEY
                </h3>
                <span className="text-xs font-technical text-[#B96F7D]">STANDARDIZED CRAFT SPECIFICATION</span>
              </div>

              {project.stages.map((stage, idx) => {
                const isAsk = stage.number === '01';

                return (
                  <div
                    key={stage.number}
                    className="relative rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-5 shadow-2xs"
                  >
                    {/* Stage Header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCCDD1]/70 pb-4 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-md bg-[#351C35] text-[#FBF7F5] text-xs font-technical font-bold">
                          {stage.number}
                        </span>
                        <span className="text-xs font-technical uppercase tracking-wider text-[#B96F7D] font-bold">
                          {stage.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#21151F] font-display-serif italic">
                        {stage.title}
                      </span>
                    </div>

                    {/* Punchline Statement */}
                    {stage.punchline && (
                      <div className="text-base sm:text-lg font-display-serif text-[#351C35] font-medium">
                        {stage.punchline}
                      </div>
                    )}

                    {/* Stage Content with Expandable Ask constraint */}
                    {isAsk ? (
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base text-[#756A70] font-editorial leading-relaxed">
                          {stage.content}
                        </p>

                        <button
                          onClick={() => setExpandedAsk(!expandedAsk)}
                          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#B96F7D] hover:text-[#351C35] transition-colors cursor-pointer"
                        >
                          {expandedAsk ? (
                            <>Collapse Problem Narrative <ChevronUp className="w-3.5 h-3.5" /></>
                          ) : (
                            <>Expand Complete Problem Narrative <ChevronDown className="w-3.5 h-3.5" /></>
                          )}
                        </button>

                        {expandedAsk && stage.details && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] space-y-2 mt-2"
                          >
                            <span className="text-[11px] font-technical uppercase text-[#756A70]">Key Research Painpoints:</span>
                            <ul className="space-y-1.5">
                              {stage.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-[#21151F]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#B96F7D] mt-1.5 shrink-0" />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base text-[#756A70] font-editorial leading-relaxed">
                          {stage.content}
                        </p>

                        {/* Bullet detail items */}
                        {stage.details && stage.details.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {stage.details.map((d, i) => (
                              <div key={i} className="p-3 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] flex items-start gap-2 text-xs text-[#21151F]">
                                <CheckCircle2 className="w-4 h-4 text-[#B96F7D] shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* STAGE 05 SPECIAL: Interactive Before/After Split Slider */}
                    {stage.number === '05' && (
                      <div className="pt-4 border-t border-[#DCCDD1]/70">
                        <BeforeAfterSlider projectName={project.title} />
                      </div>
                    )}

                    {/* STAGE 06 SPECIAL: Interactive Prototype Flow Simulator */}
                    {stage.number === '06' && project.id === 'smartaahaar' && (
                      <div className="pt-4 border-t border-[#DCCDD1]/70">
                        <InteractiveAppSimulator />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next Project Footer Navigation */}
            {allProjects.length > 1 && (
              <div className="border-t border-[#DCCDD1] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-technical text-[#756A70]">
                  WANT TO INSPECT ANOTHER EXPERIMENT?
                </span>
                <div className="flex gap-2">
                  {allProjects.filter(p => p.id !== project.id).slice(0, 2).map((other) => (
                    <button
                      key={other.id}
                      onClick={() => onSelectProject && onSelectProject(other)}
                      className="px-4 py-2 rounded-full border border-[#DCCDD1] bg-white text-xs font-technical text-[#351C35] hover:bg-[#351C35] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      {other.title} <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
