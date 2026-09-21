import React from 'react';
import { trustPrinciples, trustMetrics } from '../data/trust';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-y border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-black text-[11px] font-bold tracking-widest text-black uppercase bg-[#F7F7F7]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Growth Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase leading-tight mb-5">
            Focused on Work That Moves Your Business Forward.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Established in 2022, Codemario Infotech has delivered over 250 projects across performance marketing, creative design, app development, and AI solutions with disciplined execution.
          </p>
        </div>

        {/* 4 Core Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {trustPrinciples.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 flex flex-col justify-between transition-all duration-200 hover:border-black hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#444444] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs font-mono text-[#666666]">
                <CheckCircle className="w-3.5 h-3.5 text-black" />
                <span>Strict Accountability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Metric Benchmarks (Clean Architectural Box) */}
        <div className="bg-[#F7F7F7] border-2 border-black p-8 sm:p-12 shadow-sm">
          <div className="border-b border-[#D5D5D5] pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black font-extrabold">
              AGENCY EXECUTION BENCHMARKS // ESTABLISHED 2022
            </h4>
            <span className="text-[11px] font-mono text-[#666666]">
              250+ Successful Project Deliveries
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-black pl-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-black mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                  {metric.label}
                </div>
                <div className="text-[11px] font-mono text-[#666666] mt-1">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
