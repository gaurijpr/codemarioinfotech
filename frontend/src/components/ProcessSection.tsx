import React from 'react';
import { processSteps } from '../data/process';
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
            <span>Operational Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-5">
            How We Work.
          </h2>
          <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed">
            A disciplined, four-phase delivery cycle that ensures strategic alignment, agile execution, and predictable performance.
          </p>
        </div>

        {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-[#222222] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-[#121212] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-white hover:shadow-xl relative group"
              >
                <div>
                  {/* Step Milestone Marker (High-Contrast White Badge) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white text-black font-black text-lg flex items-center justify-center font-mono group-hover:scale-105 transition-transform">
                      {step.stepNumber}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#CCCCCC] font-medium leading-relaxed mb-6">
                    "{step.description}"
                  </p>

                  {/* Key Activities */}
                  <div className="pt-4 border-t border-[#1F1F1F]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {step.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-[#999999]">
                          <span className="text-white font-bold">›</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Progress Tag */}
                <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                  <span>CONTINUOUS QA</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
