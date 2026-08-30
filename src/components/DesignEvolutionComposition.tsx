import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Layers, Sparkles, Code2, Palette, Layout, Lightbulb, Compass, Workflow } from 'lucide-react';

interface StageData {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  artifactTitle: string;
  artifactBadge: string;
  accent: string;
  icon: React.ReactNode;
}

const EVOLUTION_STAGES: StageData[] = [
  {
    id: 'graphic',
    step: '01',
    title: 'GRAPHIC DESIGN',
    tagline: 'Visual hierarchy, spatial rhythm, and typography fundamentals.',
    description: 'Began with print typography, poster composition, color theory, and Swiss grid systems. Learned how optical weight commands attention.',
    artifactTitle: 'Typography Scale & Ink Contrast Matrix',
    artifactBadge: 'SWISS GRID // 12-COL',
    accent: '#351C35',
    icon: <Palette className="w-4 h-4" />
  },
  {
    id: 'ui',
    step: '02',
    title: 'USER INTERFACE (UI)',
    tagline: 'Component anatomy, autolayout, and design tokens.',
    description: 'Transitioned to digital screens: building reusable Figma component libraries, responsive breakpoints, and strict 8px/4px spacing rules.',
    artifactTitle: 'Design Token Structure & State Variants',
    artifactBadge: 'FIGMA VARIANTS // TOKENS',
    accent: '#B96F7D',
    icon: <Layout className="w-4 h-4" />
  },
  {
    id: 'ux',
    step: '03',
    title: 'USER EXPERIENCE (UX)',
    tagline: 'Cognitive load, mental models, and usability research.',
    description: 'Grounded interface choices in psychological principles: Hicks law, Fitts law, and qualitative user testing to remove user friction.',
    artifactTitle: 'Information Architecture & Decision Tree',
    artifactBadge: 'USER RESEARCH // 18 SESSIONS',
    accent: '#351C35',
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    id: 'product',
    step: '04',
    title: 'PRODUCT DESIGN',
    tagline: 'Business viability, user retention, and complete feature lifecycles.',
    description: 'Connecting interface design with business strategy. Designing end-to-end ecosystems like SmartAahaar, Vyoma, and FoodFlow.',
    artifactTitle: 'End-to-End Product Lifecycle & Conversion Loops',
    artifactBadge: 'SYSTEM ARCHITECTURE',
    accent: '#B96F7D',
    icon: <Compass className="w-4 h-4" />
  },
  {
    id: 'ai-assisted',
    step: '05',
    title: 'AI-ASSISTED DESIGN',
    tagline: 'Prompt engineering, synthetic user personas, and AI copilot workflows.',
    description: 'Leveraging modern LLM pipelines to accelerate research synthesis, test edge cases, and craft adaptive conversational UIs.',
    artifactTitle: 'Structured Prompt Synthesis & Persona Emulators',
    artifactBadge: 'GEMINI // LLM WORKFLOW',
    accent: '#351C35',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 'frontend',
    step: '06',
    title: 'FRONTEND PROTOTYPING',
    tagline: 'React, TypeScript, Motion physics, and living code.',
    description: 'Bridging design into code. Prototyping complex spatial graphs, canvas physics, and reactive state in actual TypeScript.',
    artifactTitle: 'Interactive Motion Curves & React State Hydration',
    artifactBadge: 'REACT 19 + TYPESCRIPT',
    accent: '#B96F7D',
    icon: <Code2 className="w-4 h-4" />
  },
  {
    id: 'ai-product-designer',
    step: '07',
    title: 'AI PRODUCT DESIGNER & TECHNOLOGIST',
    tagline: 'The complete intersection of craft, engineering rigor, and intelligence.',
    description: 'Designing intelligent, context-aware products where UI, AI inference, and code execution unify into seamless human experiences.',
    artifactTitle: 'Holistic AI Product Architecture & Spatial Canvas',
    artifactBadge: 'HOLISTIC DISCIPLINE',
    accent: '#351C35',
    icon: <Workflow className="w-4 h-4" />
  }
];

export const DesignEvolutionComposition: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('ai-product-designer');
  const currentStage = EVOLUTION_STAGES.find((s) => s.id === activeStageId) || EVOLUTION_STAGES[6];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-[#B96F7D] font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>VISUAL CONTINUUM // CRAFT ACCRETION</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-expressive font-bold text-[#21151F]">
          THE DESIGN EVOLUTION COMPOSITION
        </h3>
        <p className="text-sm sm:text-base font-editorial italic text-[#756A70] max-w-2xl">
          Each stage in my journey didn't replace the previous one — it added another layer of precision and craft.
        </p>
      </div>

      {/* Interactive Step Track (Horizontal on desktop, vertical on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {EVOLUTION_STAGES.map((stg) => {
          const isActive = stg.id === activeStageId;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStageId(stg.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[100px] ${
                isActive
                  ? 'bg-[#351C35] text-white border-[#351C35] shadow-sm'
                  : 'bg-white border-[#DCCDD1] text-[#756A70] hover:border-[#351C35] hover:text-[#21151F]'
              }`}
              data-cursor={stg.step}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-technical font-bold ${isActive ? 'text-[#E9C8CF]' : 'text-[#B96F7D]'}`}>
                  {stg.step}
                </span>
                <span className={isActive ? 'text-[#E9C8CF]' : 'text-[#756A70]'}>
                  {stg.icon}
                </span>
              </div>
              <div className="font-technical text-[11px] font-bold tracking-tight uppercase leading-tight line-clamp-2 mt-2">
                {stg.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Visual Composition Stage Preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-[#DCCDD1] bg-white p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#E9C8CF]/50 text-[#351C35] text-xs font-technical font-bold">
                STAGE {currentStage.step} OF 07
              </span>
              <span className="text-xs font-technical text-[#756A70]">
                {currentStage.artifactBadge}
              </span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-expressive font-bold text-[#21151F]">
              {currentStage.title}
            </h4>

            <p className="text-base font-editorial italic text-[#351C35] font-medium leading-snug">
              “{currentStage.tagline}”
            </p>

            <p className="text-sm font-editorial text-[#756A70] leading-relaxed">
              {currentStage.description}
            </p>
          </div>

          {/* Right Visual Artifact Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#DCCDD1] bg-[#FBF7F5] p-6 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical text-[#756A70]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
                  <span className="font-semibold text-[#351C35]">{currentStage.artifactTitle}</span>
                </div>
                <span>LIVE ARTIFACT</span>
              </div>

              {/* Composition visualization depending on active stage */}
              <div className="space-y-3 text-xs font-technical text-[#351C35]">
                <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] flex items-center justify-between">
                  <span className="font-semibold">CORE MINDSET</span>
                  <span className="text-[#B96F7D] font-bold">CALIBRATED RIGOR</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-1">
                    <span className="text-[10px] text-[#756A70]">PRIMARY TOOLS</span>
                    <div className="font-bold">Figma · TypeScript · AI</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-1">
                    <span className="text-[10px] text-[#756A70]">OUTCOME</span>
                    <div className="font-bold">Zero-Bloat Interfaces</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#351C35] text-[#FBF7F5] flex items-center justify-between">
                  <span className="text-xs font-technical">PROGRESSION VECTOR</span>
                  <span className="text-xs font-technical text-[#E9C8CF]">PRECISION → CODE → AI</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
