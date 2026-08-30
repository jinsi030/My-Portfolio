import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, Orbit, Radio, Code2, ArrowUpRight, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';

export const BuildLabSection: React.FC<{ onSelectProject: (project: Project) => void }> = ({ onSelectProject }) => {
  const labProjects = PROJECTS.filter(p => p.buildLabDetails);
  const [activeLabId, setActiveLabId] = useState<string>(labProjects[0]?.id || 'khandrishti');
  const [activeTab, setActiveTab] = useState<'interactive' | 'concept' | 'architecture'>('interactive');

  // KhanDrishti Telemetry State
  const [sensorStatus, setSensorStatus] = useState({ pressure: 4.82, seismic: 0.12, faultActive: false });
  // Vibe AI Prompt State
  const [vibeQuery, setVibeQuery] = useState('How can I make my button look more modern?');
  const [vibePolished, setVibePolished] = useState<string | null>(null);
  // Vyoma Active Star State
  const [activeConstellationStar, setActiveConstellationStar] = useState<string>('Design Systems');

  const currentProject = labProjects.find(p => p.id === activeLabId) || labProjects[0];
  const lab = currentProject.buildLabDetails!;

  const handlePolishVibe = () => {
    setVibePolished(
      `Structured Review Hypothesis: "Evaluate button hierarchy on mobile touch targets (min 44px) and WCAG AAA contrast against #FBF7F5 canvas with 12px corner radii tokens."`
    );
  };

  return (
    <section id="build" className="py-12 sm:py-16 border-t border-[#DCCDD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Lab Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#351C35] text-[#FBF7F5] text-xs font-technical">
            <Code2 className="w-3.5 h-3.5 text-[#E9C8CF]" />
            DESIGN → BUILD
          </div>

          <h2 className="text-3xl sm:text-4xl font-expressive font-bold text-[#351C35]">
            Designs I pushed far enough to become real.
          </h2>

          <p className="text-sm sm:text-base text-[#756A70] font-editorial italic leading-relaxed">
            I prototype with frontend technology and AI when needed — proving feasibility and bringing design artifacts closer to reality.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap gap-2 border-b border-[#DCCDD1] pb-3">
          {labProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveLabId(p.id);
                setActiveTab('interactive');
              }}
              className={`px-4 py-2 rounded-full text-xs font-technical uppercase tracking-wider transition-all cursor-pointer ${
                activeLabId === p.id
                  ? 'bg-[#351C35] text-white shadow-xs'
                  : 'bg-white border border-[#DCCDD1] text-[#756A70] hover:border-[#351C35] hover:text-[#351C35]'
              }`}
            >
              {p.title} // {p.id === 'khandrishti' ? 'MISSION CONTROL' : p.id === 'vyoma' ? 'GALAXY MAP' : 'CRITIQUE EXCHANGE'}
            </button>
          ))}
        </div>

        {/* Main Lab Showcase Canvas */}
        <div className="rounded-2xl border border-[#DCCDD1] bg-white overflow-hidden shadow-xs">
          {/* Top Sub-Navigation */}
          <div className="bg-[#FBF7F5] border-b border-[#DCCDD1] px-5 py-2.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
              <span className="text-xs font-technical text-[#351C35] font-semibold">
                PROTOTYPE // {currentProject.title}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {[
                { id: 'interactive', label: 'Interactive Sandbox' },
                { id: 'concept', label: 'Design Intent' },
                { id: 'architecture', label: 'Frontend & AI Stack' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-technical transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-[#351C35] font-semibold border border-[#DCCDD1] shadow-2xs'
                      : 'text-[#756A70] hover:text-[#351C35]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Body */}
          <div className="p-5 sm:p-8">
            <AnimatePresence mode="wait">
              {/* TAB 1: LIVE INTERACTIVE DEMO */}
              {activeTab === 'interactive' && (
                <motion.div
                  key="interactive"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* KhanDrishti Telemetry Sandbox */}
                  {currentProject.id === 'khandrishti' && (
                    <div className="p-5 rounded-xl bg-[#21151F] text-white border border-[#351C35] space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Radio className={`w-3.5 h-3.5 ${sensorStatus.faultActive ? 'text-rose-400 animate-ping' : 'text-emerald-400'}`} />
                          <span className="text-xs font-technical uppercase tracking-wider">
                            SPATIAL TELEMETRY FEED // MINE SECTOR 04
                          </span>
                        </div>
                        <button
                          onClick={() => setSensorStatus(prev => ({ ...prev, faultActive: !prev.faultActive, pressure: prev.faultActive ? 4.82 : 8.94 }))}
                          className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-technical cursor-pointer border border-white/20"
                        >
                          {sensorStatus.faultActive ? 'Reset Nominal Baseline' : 'Simulate Pressure Spike'}
                        </button>
                      </div>

                      {/* Live Telemetry Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-technical">
                        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 space-y-1">
                          <div className="text-[11px] text-neutral-400">HYDRAULIC PRESSURE</div>
                          <div className={`text-xl font-bold ${sensorStatus.faultActive ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {sensorStatus.pressure} Bar
                          </div>
                          <div className="text-[10px] text-neutral-400">Nominal: 4.5 – 5.2 Bar</div>
                        </div>

                        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 space-y-1">
                          <div className="text-[11px] text-neutral-400">SEISMIC VIBRATION</div>
                          <div className="text-xl font-bold text-white">0.14 mm/s</div>
                          <div className="text-[10px] text-neutral-400">Threshold: &lt; 0.8 mm/s</div>
                        </div>

                        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 space-y-1">
                          <div className="text-[11px] text-neutral-400">STATUS TRIAGE</div>
                          <div className={`text-xs font-bold uppercase ${sensorStatus.faultActive ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {sensorStatus.faultActive ? 'ANOMALY ALERT' : 'NOMINAL'}
                          </div>
                          <div className="text-[10px] text-neutral-400">High-contrast readability</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Vyoma Galaxy Map Sandbox */}
                  {currentProject.id === 'vyoma' && (
                    <div className="p-5 rounded-xl bg-[#351C35] text-white border border-[#B96F7D] space-y-4">
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Orbit className="w-3.5 h-3.5 text-[#E9C8CF]" />
                          <span className="text-xs font-technical tracking-wider">
                            INTERACTIVE ORBITAL KNOWLEDGE GRAPH
                          </span>
                        </div>
                        <span className="text-[11px] font-technical text-[#E9C8CF]">SELECT NODES</span>
                      </div>

                      {/* Interactive Constellation Node Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-technical">
                        {[
                          { name: 'Visual Foundations', stars: '3/3 Mastered' },
                          { name: 'Design Systems', stars: '4/4 Mastered' },
                          { name: 'AI Workflows', stars: '2/3 In Progress' },
                          { name: 'Frontend Physics', stars: '1/3 Orbiting' }
                        ].map((node) => (
                          <div
                            key={node.name}
                            onClick={() => setActiveConstellationStar(node.name)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${
                              activeConstellationStar === node.name
                                ? 'bg-[#E9C8CF] text-[#351C35] border-[#F4DDE1] shadow-xs font-bold'
                                : 'bg-black/30 border-white/10 text-white hover:border-[#E9C8CF]'
                            }`}
                          >
                            <div className="text-xs">{node.name}</div>
                            <div className="text-[10px] opacity-80 mt-0.5">{node.stars}</div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-editorial">
                        Active Node: <strong className="text-[#E9C8CF]">{activeConstellationStar}</strong> — Unlocks interconnected prerequisites visually.
                      </div>
                    </div>
                  )}

                  {/* Vibe AI Match Sandbox */}
                  {currentProject.id === 'vibe' && (
                    <div className="p-5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] space-y-4">
                      <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-2.5">
                        <span className="text-xs font-technical text-[#351C35] font-semibold">
                          AI INQUIRY STRUCTURING ENGINE (VIBE CO-PILOT)
                        </span>
                        <span className="text-[10px] font-technical text-[#B96F7D]">LLM PROMPT HELPER</span>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-technical text-[#756A70] block">
                          Mentee Casual Query:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={vibeQuery}
                            onChange={(e) => setVibeQuery(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg border border-[#DCCDD1] bg-white text-xs text-[#21151F] focus:outline-none focus:border-[#351C35]"
                          />
                          <button
                            onClick={handlePolishVibe}
                            className="px-3.5 py-2 rounded-lg bg-[#351C35] text-white text-xs font-technical flex items-center gap-1.5 cursor-pointer hover:bg-[#21151F]"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#E9C8CF]" /> Refine
                          </button>
                        </div>
                      </div>

                      {vibePolished && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3.5 rounded-xl bg-[#E9C8CF]/30 border border-[#B96F7D] space-y-1.5"
                        >
                          <span className="text-[11px] font-technical uppercase text-[#351C35] font-bold">
                            Structured Mentor Request:
                          </span>
                          <p className="text-xs font-editorial text-[#351C35] leading-relaxed">
                            {vibePolished}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 2: CONCEPT */}
              {activeTab === 'concept' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <h4 className="text-lg font-bold font-display-serif text-[#351C35]">Core Design Concept</h4>
                  <p className="text-sm text-[#756A70] font-editorial leading-relaxed">
                    {lab.concept}
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1]">
                    <span className="text-xs font-technical text-[#351C35] font-bold">Interaction Dynamics:</span>
                    <p className="text-xs text-[#756A70] font-editorial mt-1">{lab.interaction}</p>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: ARCHITECTURE */}
              {activeTab === 'architecture' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <h4 className="text-lg font-bold font-display-serif text-[#351C35]">Frontend & AI Architecture</h4>
                  <div className="p-3.5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] space-y-2">
                    <span className="text-xs font-technical uppercase text-[#351C35] font-bold">Tech Stack:</span>
                    <div className="text-xs font-technical text-[#B96F7D]">{lab.frontendStack}</div>
                    <p className="text-xs text-[#756A70] font-editorial pt-1">{lab.architecture}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Action Strip */}
          <div className="bg-[#FBF7F5] border-t border-[#DCCDD1] px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-technical text-[#756A70]">
              EXPLORE FULL CASE STUDY & RESEARCH
            </span>
            <button
              onClick={() => onSelectProject(currentProject)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#351C35] text-white text-xs font-technical cursor-pointer hover:bg-[#21151F]"
            >
              View {currentProject.title} Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
