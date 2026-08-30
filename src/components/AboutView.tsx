import React from 'react';
import { TimelineInteractive } from './TimelineInteractive';
import { DesignEvolutionComposition } from './DesignEvolutionComposition';
import { CreativeInterests } from './CreativeInterests';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight } from 'lucide-react';

export const AboutView: React.FC<{ onNavigateToContact: () => void; onNavigateToResume: () => void }> = ({
  onNavigateToContact,
  onNavigateToResume
}) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Interactive Career Evolution & Work History */}
        <TimelineInteractive />

        {/* The 7-Stage Design Evolution Composition */}
        <DesignEvolutionComposition />

        {/* Analogue Creative Pursuits & Languages */}
        <CreativeInterests />

        {/* Closing About CTA */}
        <div className="rounded-3xl border border-[#DCCDD1] bg-white p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <h3 className="text-2xl sm:text-4xl font-expressive font-bold text-[#351C35]">
            Interested in working together or exploring a product concept?
          </h3>
          <p className="text-sm sm:text-base text-[#756A70] font-editorial italic max-w-lg mx-auto leading-relaxed">
            I’m always happy to talk about design systems, AI copilot workflows, or bridging designs into living code.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton onClick={onNavigateToContact} variant="primary">
              INITIATE CONVERSATION →
            </MagneticButton>
            <MagneticButton onClick={onNavigateToResume} variant="secondary">
              VIEW STRUCTURED RÉSUMÉ <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

