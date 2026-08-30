import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Layers, LayoutGrid, Eye, Flame } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface WorkStackedDeckProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export const WorkStackedDeck: React.FC<WorkStackedDeckProps> = ({
  projects,
  onOpenProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'deck' | 'grid'>('deck');

  const categories: ProjectCategory[] = [
    'ALL',
    'PRODUCT DESIGN',
    'AI + TECH',
    'VISUAL + BRAND',
    'BUILD LAB',
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.category.includes(activeCategory as any);
  });

  // Keep index within bounds when filtering
  const safeIndex = activeIndex >= filteredProjects.length ? 0 : activeIndex;
  const currentProject = filteredProjects[safeIndex] || filteredProjects[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="work" className="py-12 sm:py-16 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCCDD1] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-[#B96F7D] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
            <span>02 // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-expressive font-bold text-[#21151F] tracking-tight">
            PRODUCTS, EXPERIENCES & EXPERIMENTS.
          </h2>
          <p className="text-sm sm:text-base font-editorial italic text-[#756A70] max-w-xl">
            Where user psychology meets precision design systems and AI-augmented prototyping.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="p-1 rounded-xl bg-white border border-[#DCCDD1] flex items-center gap-1 shadow-2xs">
            <button
              onClick={() => setViewMode('deck')}
              className={`px-3 py-1.5 rounded-lg text-xs font-technical flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'deck'
                  ? 'bg-[#351C35] text-[#FBF7F5] font-semibold shadow-2xs'
                  : 'text-[#756A70] hover:text-[#21151F]'
              }`}
              data-cursor="DECK"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>STACKED DECK</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-technical flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#351C35] text-[#FBF7F5] font-semibold shadow-2xs'
                  : 'text-[#756A70] hover:text-[#21151F]'
              }`}
              data-cursor="GRID"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>INDEX GRID</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-technical uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#351C35] text-[#FBF7F5] font-semibold shadow-xs'
                  : 'bg-white/80 border border-[#DCCDD1] text-[#756A70] hover:border-[#351C35] hover:text-[#351C35]'
              }`}
              data-cursor="FILTER"
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3D STACKED CARD SYSTEM (Master Experience) */}
      {/* ========================================================================= */}
      {viewMode === 'deck' && (
        <div className="space-y-6">
          {/* Stack Deck Stage */}
          <div className="relative w-full min-h-[560px] sm:min-h-[580px] perspective-deck flex items-center justify-center py-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 text-sm font-technical text-[#756A70]">
                No projects found in this category.
              </div>
            ) : (
              <div className="relative w-full max-w-4xl h-[520px]">
                {/* Render cards with 3D stacked depth */}
                {filteredProjects.map((project, idx) => {
                  // Calculate offset relative to active card
                  const offset = (idx - safeIndex + filteredProjects.length) % filteredProjects.length;
                  if (offset > 2 && offset < filteredProjects.length - 1) return null; // only render active and top 2 behind

                  const isCurrent = offset === 0;
                  const isNext = offset === 1;
                  const isNextNext = offset === 2;

                  let scale = 1;
                  let translateY = 0;
                  let rotate = 0;
                  let zIndex = 30;
                  let opacity = 1;

                  if (isCurrent) {
                    scale = 1;
                    translateY = 0;
                    rotate = -0.5;
                    zIndex = 30;
                    opacity = 1;
                  } else if (isNext) {
                    scale = 0.96;
                    translateY = 24;
                    rotate = 1.5;
                    zIndex = 20;
                    opacity = 0.85;
                  } else if (isNextNext) {
                    scale = 0.92;
                    translateY = 48;
                    rotate = -2;
                    zIndex = 10;
                    opacity = 0.65;
                  } else {
                    return null;
                  }

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{
                        opacity,
                        scale,
                        y: translateY,
                        rotate,
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ zIndex }}
                      className="absolute inset-0 w-full h-full rounded-3xl border border-[#DCCDD1] bg-[#FBF7F5] shadow-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none"
                    >
                      {/* Top Bar of Card: Project Number, Categories, Year */}
                      <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-technical font-bold text-[#B96F7D]">
                            0{idx + 1}
                          </span>
                          <div className="h-4 w-px bg-[#DCCDD1]" />
                          <div className="flex items-center gap-2 flex-wrap">
                            {project.category.map((c) => (
                              <span
                                key={c}
                                className="px-2.5 py-0.5 rounded-full bg-white border border-[#DCCDD1] text-[10px] font-technical text-[#756A70] uppercase font-semibold"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-xs font-technical text-[#756A70]">
                          <span>{project.year}</span>
                          <span className="text-[#DCCDD1] mx-2">/</span>
                          <span className="font-semibold text-[#351C35]">{project.role.split('(')[0]}</span>
                        </div>
                      </div>

                      {/* Middle: Title, Punchline & Editorial Visual Framing */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
                        <div className="lg:col-span-6 space-y-3">
                          {project.featured && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9C8CF]/60 text-[#351C35] text-[11px] font-technical font-bold">
                              <Sparkles className="w-3 h-3 text-[#B96F7D]" />
                              <span>FLAGSHIP CASE STUDY</span>
                            </div>
                          )}
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-expressive font-bold text-[#21151F] tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-base sm:text-lg font-editorial italic text-[#351C35] leading-snug">
                            “{project.punchline}”
                          </p>
                          <p className="text-xs sm:text-sm font-editorial text-[#756A70] line-clamp-3 leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        {/* Visual Right Component Card */}
                        <div className="lg:col-span-6">
                          <div className="relative rounded-2xl bg-white border border-[#DCCDD1] p-5 shadow-sm space-y-3 overflow-hidden">
                            <div className="flex items-center justify-between text-[11px] font-technical text-[#756A70] border-b border-[#DCCDD1]/50 pb-2">
                              <span>KEY DELIVERABLES</span>
                              <span className="text-[#B96F7D] font-bold">{project.deliverables.length} MODULES</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {project.deliverables.map((deliv, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="p-2 rounded-lg bg-[#FBF7F5] border border-[#DCCDD1]/70 text-[11px] font-technical text-[#351C35] truncate"
                                >
                                  {deliv}
                                </div>
                              ))}
                            </div>

                            {project.stages && (
                              <div className="pt-2 border-t border-[#DCCDD1]/50 flex items-center justify-between text-[10px] font-technical text-[#756A70]">
                                <span>7-STAGE CASE STUDY</span>
                                <span className="text-[#351C35] font-semibold">FROM RESEARCH TO CODE</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Bar: Action Trigger & Case Study Navigation */}
                      <div className="flex items-center justify-between border-t border-[#DCCDD1] pt-4">
                        <div className="flex items-center gap-2">
                          {project.tools.slice(0, 3).map((t) => (
                            <span key={t} className="text-[11px] font-technical text-[#756A70]">
                              #{t}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onOpenProject(project)}
                          className="group px-6 py-3 rounded-full bg-[#351C35] text-[#FBF7F5] text-xs font-technical uppercase font-bold tracking-wider hover:bg-[#21151F] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                          data-cursor="OPEN"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4 text-[#E9C8CF] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Stack Navigation Controls */}
          {filteredProjects.length > 1 && (
            <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
              <div className="text-xs font-technical text-[#756A70]">
                CARD <span className="font-bold text-[#351C35]">0{safeIndex + 1}</span> OF{' '}
                <span className="font-bold text-[#351C35]">0{filteredProjects.length}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#DCCDD1] bg-white text-[#351C35] hover:bg-[#351C35] hover:text-[#FBF7F5] transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  data-cursor="PREV"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#DCCDD1] bg-white text-[#351C35] hover:bg-[#351C35] hover:text-[#FBF7F5] transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  data-cursor="NEXT"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* INDEX GRID VIEW (Alternative scannable list) */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group relative rounded-3xl border border-[#DCCDD1] bg-white p-6 shadow-xs hover:shadow-md hover:border-[#351C35] transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer"
              data-cursor="VIEW"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-technical text-[#756A70]">
                  <span className="font-bold text-[#B96F7D]">0{idx + 1}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-expressive font-bold text-[#21151F] group-hover:text-[#351C35] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-editorial italic text-[#351C35]">
                  “{project.punchline}”
                </p>
                <p className="text-xs font-editorial text-[#756A70] line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#DCCDD1]/60 pt-4">
                <div className="flex gap-1.5 flex-wrap">
                  {project.category.slice(0, 2).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded bg-[#FBF7F5] border border-[#DCCDD1] text-[9px] font-technical text-[#756A70]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-technical font-semibold text-[#351C35] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
