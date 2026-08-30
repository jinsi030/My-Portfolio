import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Mic, PenTool, Feather, Utensils, Palette, Globe, Sparkles, Layers, Eye } from 'lucide-react';
import { CREATIVE_INTERESTS, RESUME_DATA } from '../data/interests';

const VISUAL_ARCHIVE_ITEMS = [
  {
    id: 'ink-art',
    category: 'INK & BOTANICALS',
    title: 'Indian Ink Studies on Cold-Pressed Grain',
    aspect: 'aspect-4/3',
    palette: ['#21151F', '#B96F7D', '#E9C8CF'],
    description: 'Studies in fluid pressure, ink bleeding, and negative space geometry. Informs micro-contrast in UI.',
    badge: 'ANALOGUE // 300GSM'
  },
  {
    id: 'editorial-type',
    category: 'SWISS TYPOGRAPHY',
    title: 'Kinetic Poster Series // Asymmetrical Balance',
    aspect: 'aspect-3/4',
    palette: ['#351C35', '#FBF7F5', '#B96F7D'],
    description: 'Rigid 12-column grid experiments testing extreme hierarchy, optical tracking, and display serif pairings.',
    badge: 'PRINT & DIGITAL'
  },
  {
    id: 'brand-identity',
    category: 'BRAND IDENTITY',
    title: 'Aura & Resonance: Spatial Sonic Identity',
    aspect: 'aspect-16/10',
    palette: ['#21151F', '#E9C8CF', '#DCCDD1'],
    description: 'Logo mark construction using golden ratio arcs, custom glyphs, and high-contrast packaging guidelines.',
    badge: 'VECTOR // IDENTITY'
  },
  {
    id: 'sketchbook',
    category: 'PROCESS ARTIFACTS',
    title: 'Spatial Canvas & Dynamic Node Wireframes',
    aspect: 'aspect-square',
    palette: ['#351C35', '#FBF7F5', '#756A70'],
    description: 'Rapid pen sketches exploring non-linear mental models and AI co-pilot prompt interaction paradigms.',
    badge: 'EXPLORATION'
  }
];

export const CreativeInterests: React.FC = () => {
  const [activeArtifact, setActiveArtifact] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-[#B96F7D] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUTSIDE THE INTERFACE // THE VISUAL ARCHIVE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-expressive font-bold text-[#351C35]">
          Graphic Design, Ink Art & Visual Experiments
        </h3>
        <p className="text-sm sm:text-base font-editorial italic text-[#756A70] max-w-2xl leading-relaxed">
          Product design doesn’t happen in a vacuum. Typography, branding, ink drawings, and physical craft shape my intuition for digital interfaces.
        </p>
      </div>

      {/* Editorial Collage Grid (Varied heights, rich typography & visual fragments) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Large Feature Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-7 rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-6 shadow-xs relative overflow-hidden group"
        >
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical">
            <span className="text-[#B96F7D] font-bold uppercase tracking-wider">
              {VISUAL_ARCHIVE_ITEMS[0].category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#FBF7F5] border border-[#DCCDD1] text-[#756A70]">
              {VISUAL_ARCHIVE_ITEMS[0].badge}
            </span>
          </div>

          {/* Visual Composition Block */}
          <div className="h-56 sm:h-64 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-[#351C35] transition-colors">
            {/* Abstract ink aesthetic graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E9C8CF]/30 via-transparent to-[#351C35]/10 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-display-serif text-3xl sm:text-4xl italic text-[#351C35] font-light">
                अ // Craft
              </span>
              <div className="flex gap-1.5">
                {VISUAL_ARCHIVE_ITEMS[0].palette.map((c, i) => (
                  <span key={i} className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-2xs" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            <div className="relative z-10 space-y-1">
              <div className="text-[10px] font-technical text-[#756A70] uppercase">STUDY NO. 04</div>
              <div className="text-base font-bold text-[#21151F] font-display-serif">
                Weight, Density & Edge Softness
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold font-display-serif text-[#21151F]">
              {VISUAL_ARCHIVE_ITEMS[0].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#756A70] font-editorial leading-relaxed">
              {VISUAL_ARCHIVE_ITEMS[0].description}
            </p>
          </div>
        </motion.div>

        {/* Tall Column Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-5 rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-6 shadow-xs relative overflow-hidden group"
        >
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical">
            <span className="text-[#351C35] font-bold uppercase tracking-wider">
              {VISUAL_ARCHIVE_ITEMS[1].category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#FBF7F5] border border-[#DCCDD1] text-[#756A70]">
              {VISUAL_ARCHIVE_ITEMS[1].badge}
            </span>
          </div>

          <div className="h-56 sm:h-64 rounded-xl bg-[#21151F] text-[#FBF7F5] p-6 flex flex-col justify-between border border-[#351C35]">
            <div className="text-xs font-technical text-[#E9C8CF] uppercase tracking-widest">
              AKZIDENZ // BODONI // SERIF
            </div>
            <div className="font-display-serif text-2xl sm:text-3xl leading-tight text-white/95">
              “Form is rhythm made visible.”
            </div>
            <div className="flex items-center justify-between text-[11px] font-technical text-neutral-400 border-t border-white/10 pt-2">
              <span>CONTRAST RATIO: 18.2:1</span>
              <span>GRID: 12-COL</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold font-display-serif text-[#21151F]">
              {VISUAL_ARCHIVE_ITEMS[1].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#756A70] font-editorial leading-relaxed">
              {VISUAL_ARCHIVE_ITEMS[1].description}
            </p>
          </div>
        </motion.div>

        {/* Second Row: 2 Balanced Cards */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-6 rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-5 shadow-xs"
        >
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical">
            <span className="text-[#B96F7D] font-bold uppercase tracking-wider">
              {VISUAL_ARCHIVE_ITEMS[2].category}
            </span>
            <span className="text-[10px] font-technical text-[#756A70] px-2 py-0.5 rounded bg-[#FBF7F5] border border-[#DCCDD1]">
              {VISUAL_ARCHIVE_ITEMS[2].badge}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1] flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#351C35] font-technical">ARC GEOMETRY</div>
              <div className="text-xs text-[#756A70] font-editorial">Balanced radius token curves & vector math</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#B96F7D] flex items-center justify-center text-xs font-bold text-[#351C35]">
              Φ
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-base font-bold font-display-serif text-[#21151F]">
              {VISUAL_ARCHIVE_ITEMS[2].title}
            </h4>
            <p className="text-xs text-[#756A70] font-editorial leading-relaxed">
              {VISUAL_ARCHIVE_ITEMS[2].description}
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-6 rounded-2xl border border-[#DCCDD1] bg-white p-6 sm:p-8 space-y-5 shadow-xs"
        >
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3 text-xs font-technical">
            <span className="text-[#351C35] font-bold uppercase tracking-wider">
              {VISUAL_ARCHIVE_ITEMS[3].category}
            </span>
            <span className="text-[10px] font-technical text-[#756A70] px-2 py-0.5 rounded bg-[#FBF7F5] border border-[#DCCDD1]">
              {VISUAL_ARCHIVE_ITEMS[3].badge}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#E9C8CF]/30 border border-[#B96F7D]/40 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold text-[#351C35] font-technical">PAPER TO PIXELS</div>
              <div className="text-xs text-[#756A70] font-editorial">Mental models sketched before code</div>
            </div>
            <PenTool className="w-5 h-5 text-[#351C35]" />
          </div>

          <div className="space-y-1.5">
            <h4 className="text-base font-bold font-display-serif text-[#21151F]">
              {VISUAL_ARCHIVE_ITEMS[3].title}
            </h4>
            <p className="text-xs text-[#756A70] font-editorial leading-relaxed">
              {VISUAL_ARCHIVE_ITEMS[3].description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Analogue Creative Pursuits */}
      <div className="pt-4 space-y-6">
        <div className="border-b border-[#DCCDD1] pb-3">
          <h4 className="text-xs font-technical uppercase tracking-widest text-[#756A70]">
            ANALOGUE PURSUITS & DISCIPLINES
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CREATIVE_INTERESTS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-[#DCCDD1] bg-white space-y-3 hover:border-[#351C35] transition-all shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-technical uppercase text-[#B96F7D] font-bold">
                  {item.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#351C35]" />
              </div>
              <h5 className="text-sm font-bold text-[#21151F] font-display-serif">
                {item.name}
              </h5>
              <p className="text-xs text-[#756A70] font-editorial italic leading-relaxed">
                {item.hoverReveal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Banner */}
      <div className="rounded-2xl border border-[#DCCDD1] bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#FBF7F5] border border-[#DCCDD1]">
            <Globe className="w-4 h-4 text-[#351C35]" />
          </div>
          <div>
            <span className="text-[11px] font-technical uppercase text-[#756A70]">Linguistic Fluency</span>
            <div className="text-sm font-bold text-[#21151F] font-display-serif">Languages Spoken & Written</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-technical">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FBF7F5] border border-[#DCCDD1]">
            <span className="font-semibold text-[#351C35]">Gujarati & Hindi:</span>
            <span className="text-[#756A70]">Native</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FBF7F5] border border-[#DCCDD1]">
            <span className="font-semibold text-[#351C35]">English:</span>
            <span className="text-[#756A70]">Professional</span>
          </div>
        </div>
      </div>
    </div>
  );
};
