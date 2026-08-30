import React, { useState, useRef } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeTitle?: string;
  afterTitle?: string;
  projectName?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeTitle = 'Initial Wireframe / Cluttered Layout',
  afterTitle = 'Refined Design System & Visual Hierarchy',
  projectName = 'SmartAahaar Discovery'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-xs font-technical text-[#756A70]">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#B96F7D]" />
          <span>INTERACTIVE CRAFT COMPARISON: <strong className="text-[#351C35]">{projectName}</strong></span>
        </div>
        <span>DRAG SLIDER TO REVEAL</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden select-none border border-[#DCCDD1] bg-white cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Layer (Refined Design System) */}
        <div className="absolute inset-0 bg-[#FBF7F5] p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#DCCDD1] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
              <span className="text-xs font-bold tracking-wider text-[#351C35] font-technical uppercase">
                {afterTitle}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E9C8CF]/50 text-[#351C35] font-technical font-medium">
              HIGH-CRAFT SYSTEM
            </span>
          </div>

          {/* Clean Mock App Feed */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-2 shadow-2xs">
              <div className="h-16 rounded-lg bg-[#E9C8CF]/30 flex items-center justify-center text-xs text-[#351C35] font-editorial italic">
                Avocado Tahini Bowl
              </div>
              <div className="flex justify-between items-center text-[11px] font-technical">
                <span className="font-semibold text-[#21151F]">$14.50</span>
                <span className="text-[#B96F7D] font-medium">480 kcal</span>
              </div>
              <div className="w-full py-1 bg-[#351C35] text-white text-[10px] text-center rounded-md font-medium">
                Add to Meal
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-2 shadow-2xs">
              <div className="h-16 rounded-lg bg-[#F4DDE1]/40 flex items-center justify-center text-xs text-[#351C35] font-editorial italic">
                Wild Mushroom Risotto
              </div>
              <div className="flex justify-between items-center text-[11px] font-technical">
                <span className="font-semibold text-[#21151F]">$18.00</span>
                <span className="text-[#B96F7D] font-medium">520 kcal</span>
              </div>
              <div className="w-full py-1 bg-[#351C35] text-white text-[10px] text-center rounded-md font-medium">
                Add to Meal
              </div>
            </div>

            <div className="hidden sm:block p-3 rounded-xl bg-white border border-[#DCCDD1] space-y-2 shadow-2xs">
              <div className="h-16 rounded-lg bg-[#E9C8CF]/20 flex items-center justify-center text-xs text-[#351C35] font-editorial italic">
                Aaharmitra AI Suggestion
              </div>
              <div className="text-[10px] text-[#756A70] leading-tight font-editorial">
                Matches 100% of your daily protein target.
              </div>
              <div className="w-full py-1 bg-[#B96F7D] text-white text-[10px] text-center rounded-md font-medium">
                Auto-Balance
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-technical text-[#756A70] border-t border-[#DCCDD1] pt-2">
            <span>Figma Tokens: 12px Radius · 8pt Grid</span>
            <span className="text-[#351C35] font-medium">WCAG AAA Contrast (7.2:1)</span>
          </div>
        </div>

        {/* BEFORE Layer (Wireframe / Clutter) with clip-path */}
        <div
          className="absolute inset-0 bg-[#E5E5E5] p-6 flex flex-col justify-between overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <div className="flex items-center justify-between border-b border-[#999] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#666]" />
              <span className="text-xs font-bold tracking-wider text-[#333] font-technical uppercase">
                {beforeTitle}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#CCC] text-[#333] font-technical">
              RAW LO-FI WIREFRAME
            </span>
          </div>

          {/* Cluttered Wireframe Wire Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded border border-dashed border-[#888] bg-[#DDD] space-y-2">
              <div className="h-16 border border-[#999] bg-[#EEE] flex items-center justify-center text-[10px] text-[#666] font-technical">
                [FOOD IMAGE BANNER]
              </div>
              <div className="h-3 bg-[#BBB] rounded w-3/4" />
              <div className="h-3 bg-[#CCC] rounded w-1/2" />
              <div className="h-6 bg-[#999] rounded text-[10px] flex items-center justify-center text-white">
                BUTTON
              </div>
            </div>

            <div className="p-3 rounded border border-dashed border-[#888] bg-[#DDD] space-y-2">
              <div className="h-16 border border-[#999] bg-[#EEE] flex items-center justify-center text-[10px] text-[#666] font-technical">
                [DISCOUNT POPUP AD]
              </div>
              <div className="h-3 bg-[#BBB] rounded w-3/4" />
              <div className="h-3 bg-[#CCC] rounded w-1/2" />
              <div className="h-6 bg-[#999] rounded text-[10px] flex items-center justify-center text-white">
                BUTTON
              </div>
            </div>

            <div className="hidden sm:block p-3 rounded border border-dashed border-[#888] bg-[#DDD] space-y-2">
              <div className="h-16 border border-[#999] bg-[#EEE] flex items-center justify-center text-[10px] text-[#666] font-technical">
                [TEXT REVIEW CAROUSEL]
              </div>
              <div className="h-3 bg-[#BBB] rounded w-3/4" />
              <div className="h-3 bg-[#CCC] rounded w-1/2" />
              <div className="h-6 bg-[#999] rounded text-[10px] flex items-center justify-center text-white">
                BUTTON
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-technical text-[#666] border-t border-[#999] pt-2">
            <span>No standardized tokens · Arbitrary spacing</span>
            <span className="text-[#333]">Low visual hierarchy</span>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#351C35] cursor-ew-resize shadow-md"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#351C35] text-white border-2 border-white flex items-center justify-center shadow-lg">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
