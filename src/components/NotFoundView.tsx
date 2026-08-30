import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const NotFoundView: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#E9C8CF]/50 border border-[#DCCDD1] flex items-center justify-center text-[#351C35]">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-technical uppercase tracking-widest text-[#B96F7D]">
          STATUS 404 // SIGNAL LOST
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-display-serif italic text-[#351C35]">
          Even instrumentation engineers lose signal sometimes.
        </h1>
        <p className="text-sm text-[#756A70] font-editorial">
          This page doesn’t exist. Let’s recalibrate back to nominal baseline.
        </p>
      </div>

      <MagneticButton onClick={onGoHome} variant="primary" className="text-xs font-technical uppercase tracking-wider">
        <ArrowLeft className="w-3.5 h-3.5 mr-2" /> TAKE ME BACK HOME
      </MagneticButton>
    </div>
  );
};
