import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Compass, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { CAREER_MILESTONES, WORK_EXPERIENCES } from '../data/timeline';

export const TimelineInteractive: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(0);
  const activeMilestone = CAREER_MILESTONES[selectedMilestoneIndex];

  return (
    <div className="space-y-16">
      {/* Narrative Lead */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9C8CF]/50 text-[#351C35] text-xs font-technical">
          <Compass className="w-3.5 h-3.5 text-[#B96F7D]" />
          ORIGIN STORY & DISCIPLINE
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display-serif italic text-[#351C35]">
          From measuring pressure gauges to measuring pixel grids.
        </h3>

        <p className="text-base sm:text-lg text-[#756A70] font-editorial leading-relaxed">
          “I started in Instrumentation & Control Engineering — a discipline built around precision, calibration, and not breaking things. Turns out that translates surprisingly well to design systems and digital products.”
        </p>
      </div>

      {/* Interactive Milestones Scrubbable Bar */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs font-technical text-[#756A70] border-b border-[#DCCDD1] pb-2">
          <span>THE DISCIPLINE CONTINUUM (SCRUB OR CLICK MILESTONES)</span>
          <span className="text-[#351C35] font-semibold">{selectedMilestoneIndex + 1} / {CAREER_MILESTONES.length}</span>
        </div>

        {/* Milestone Buttons Strip */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
          {CAREER_MILESTONES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setSelectedMilestoneIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-technical whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                selectedMilestoneIndex === idx
                  ? 'bg-[#351C35] text-white shadow-xs'
                  : 'bg-white border border-[#DCCDD1] text-[#756A70] hover:border-[#351C35] hover:text-[#351C35]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B96F7D]" />
              <span>{m.title}</span>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#DCCDD1]/70 pb-4 gap-2">
              <div>
                <span className="text-xs font-technical text-[#B96F7D] font-bold uppercase tracking-wider">
                  {activeMilestone.period} // {activeMilestone.subtitle}
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-[#21151F] font-display-serif">
                  {activeMilestone.title}
                </h4>
              </div>
              <span className="text-xs font-technical text-[#756A70] px-3 py-1 rounded-full bg-[#FBF7F5] border border-[#DCCDD1]">
                {activeMilestone.highlight}
              </span>
            </div>

            <p className="text-base text-[#756A70] font-editorial leading-relaxed">
              {activeMilestone.description}
            </p>

            {/* Calibration Metaphor Callout */}
            <div className="p-4 rounded-xl bg-[#E9C8CF]/30 border border-[#B96F7D]/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-technical font-bold text-[#351C35]">
                <Sparkles className="w-3.5 h-3.5 text-[#B96F7D]" />
                CALIBRATION METAPHOR:
              </div>
              <p className="text-xs sm:text-sm font-editorial text-[#351C35] italic">
                {activeMilestone.calibrationMetaphor}
              </p>
            </div>

            {/* Tools & Mindset tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DCCDD1]/70">
              <span className="text-xs font-technical text-[#756A70] self-center mr-2">Focus Areas:</span>
              {activeMilestone.toolsAndMindset.map((tool, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-[#FBF7F5] border border-[#DCCDD1] text-xs font-technical text-[#21151F]">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CURRENTLY BLOCK */}
      <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#351C35] bg-[#FBF7F5] space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B96F7D] animate-pulse" />
          <span className="text-xs font-technical uppercase tracking-widest text-[#351C35] font-bold">
            CURRENT PROFESSIONAL FOCUS
          </span>
        </div>
        <p className="text-base sm:text-lg font-display-serif italic text-[#351C35] font-medium leading-relaxed">
          “Currently developing through hands-on product design work with Vyoma Learning Systems and Labmentix, while building my ability to combine design, AI and frontend prototyping.”
        </p>
      </div>

      {/* Structured Work Experience Cards */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#DCCDD1] pb-3">
          <Briefcase className="w-4 h-4 text-[#351C35]" />
          <h4 className="text-xs font-technical uppercase tracking-widest text-[#756A70]">
            PRACTICAL WORK EXPERIENCE
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-[#DCCDD1] bg-white flex flex-col justify-between space-y-4 shadow-2xs">
              <div>
                <div className="flex justify-between items-start text-xs font-technical text-[#756A70] mb-2">
                  <span>{exp.period}</span>
                  <span className="text-[#B96F7D]">{exp.location}</span>
                </div>
                <h5 className="text-lg font-bold text-[#21151F] font-display-serif">{exp.role}</h5>
                <div className="text-xs font-medium text-[#351C35] mb-3">{exp.company}</div>
                <p className="text-xs text-[#756A70] font-editorial leading-relaxed">{exp.description}</p>
              </div>

              <div className="pt-3 border-t border-[#DCCDD1]/70 space-y-1.5">
                {exp.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#21151F]">
                    <span className="w-1 h-1 rounded-full bg-[#B96F7D] mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Block */}
      <div className="p-6 rounded-2xl border border-[#DCCDD1] bg-white flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1]">
            <GraduationCap className="w-5 h-5 text-[#351C35]" />
          </div>
          <div>
            <span className="text-[11px] font-technical uppercase text-[#756A70]">Academic Engineering Foundation</span>
            <h5 className="text-base font-bold text-[#21151F] font-display-serif">
              Bachelors of Engineering — Instrumentation and Control
            </h5>
            <p className="text-xs text-[#756A70]">L.D. College of Engineering, Ahmedabad (2024 — Present)</p>
          </div>
        </div>
        <span className="text-xs font-technical px-3 py-1.5 rounded-full bg-[#E9C8CF]/40 text-[#351C35] border border-[#DCCDD1] self-start sm:self-center">
          In Progress
        </span>
      </div>
    </div>
  );
};
