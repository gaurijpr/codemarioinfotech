import React from 'react';
import { industriesData } from '../data/industries';
import { ArrowUpRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const handleScrollToInquiry = () => {
    const elem = document.querySelector('#inquiry');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-black text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
            <span>Target Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-5">
            Built for Businesses Ready to Grow.
          </h2>
          <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed">
            Whether you are launching your first app or scaling an established commerce business, our models adapt to your stage and goals.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#111111] border border-[#262626] p-6 flex flex-col justify-between transition-all duration-200 hover:border-white hover:bg-[#161616] group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222222]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">
                    SECTOR // 0{ind.id}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-[#999999] leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
                <span className="text-[10px] font-mono text-white font-semibold uppercase">
                  {ind.focus}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777] group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Banner */}
        <div className="mt-12 p-6 bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Don't see your specific industry listed?
            </h4>
            <p className="text-xs text-[#888888] mt-0.5">
              Our growth frameworks apply to any business relying on modern digital acquisition and technology.
            </p>
          </div>
          <button
            type="button"
            onClick={handleScrollToInquiry}
            className="shrink-0 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors"
          >
            Inquire About Your Sector
          </button>
        </div>
      </div>
    </section>
  );
};
