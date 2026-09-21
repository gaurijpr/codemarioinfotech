import React from 'react';
import { whyUsData } from '../data/whyUs';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-black text-[11px] font-bold tracking-widest text-black uppercase bg-[#F7F7F7]">
            <span>Our Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase leading-tight mb-5">
            More Than a Service Provider.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            We combine marketing, creativity and technology to build digital solutions that actually support business growth.
          </p>
        </div>

        {/* 4 Feature Blocks Grid with Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {whyUsData.map((item) => (
            <div
              key={item.number}
              className="relative pt-8 border-t-2 border-black flex flex-col justify-between group"
            >
              <div>
                {/* Large Number Watermark */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-5xl sm:text-6xl font-black tracking-tighter text-black">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono tracking-wider uppercase text-black font-semibold bg-[#F0F0F0] px-2 py-1 border border-[#CCCCCC]">
                    Pillar
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Primary Description */}
                <p className="text-base text-[#111111] font-medium leading-snug mb-3">
                  "{item.description}"
                </p>

                {/* Supporting Detail */}
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>CODEMARIO STANDARD</span>
                <span className="text-black font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
