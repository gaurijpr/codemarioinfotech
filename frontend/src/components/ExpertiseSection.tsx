import React, { useState } from 'react';
import { expertiseData } from '../data/expertise';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(expertiseData[0].category);

  return (
    <section className="py-24 sm:py-32 bg-black text-white border-b border-[#262626] relative overflow-hidden">
      {/* Subtle Monochrome Dark Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#444444] text-[11px] font-bold tracking-widest text-white uppercase bg-[#111111]">
            <Sparkles className="w-3 h-3" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-5">
            Built Around Modern Digital Expertise.
          </h2>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed">
            We bring together specialized competencies across acquisition, aesthetics, engineering, and artificial intelligence into a cohesive execution engine.
          </p>
        </div>

        {/* Categories Tabs & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {expertiseData.map((item) => {
            const isSelected = activeCategory === item.category;

            return (
              <div
                key={item.category}
                onMouseEnter={() => setActiveCategory(item.category)}
                onClick={() => setActiveCategory(item.category)}
                className={`cursor-pointer border transition-all duration-300 p-8 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-2xl scale-[1.02]'
                    : 'bg-[#111111] text-white border-[#262626] hover:border-[#666666]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-extrabold tracking-widest uppercase ${
                        isSelected ? 'text-black' : 'text-[#888888]'
                      }`}
                    >
                      {item.category}
                    </span>
                    <ShieldCheck
                      className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#666666]'}`}
                    />
                  </div>

                  {/* Tagline */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-4 ${
                      isSelected ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.tagline}
                  </h3>

                  {/* Summary */}
                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      isSelected ? 'text-[#333333]' : 'text-[#999999]'
                    }`}
                  >
                    {item.summary}
                  </p>

                  {/* Skills Pills */}
                  <div className="space-y-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block ${
                        isSelected ? 'text-[#666666]' : 'text-[#777777]'
                      }`}
                    >
                      Core Focus:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2.5 py-1 font-mono transition-colors ${
                            isSelected
                              ? 'bg-black text-white'
                              : 'bg-[#1C1C1C] text-[#E5E5E5] border border-[#333333]'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom interactive arrow */}
                <div
                  className={`mt-8 pt-4 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
                    isSelected ? 'border-[#E5E5E5] text-black' : 'border-[#222222] text-[#666666]'
                  }`}
                >
                  <span>Explore Stack</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-black' : 'text-[#666666]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
