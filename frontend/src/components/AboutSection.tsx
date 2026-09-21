import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Code, Layers, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
              <span>About Codemario Infotech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
              {siteConfig.aboutSection.heading}
            </h2>
            <p className="text-lg sm:text-xl text-[#EEEEEE] font-semibold leading-snug mb-6">
              {siteConfig.aboutSection.lead}
            </p>
            {siteConfig.aboutSection.body.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed mb-4">
                {para}
              </p>
            ))}

            <div className="pt-6 mt-6 border-t border-[#222222] flex items-center gap-6">
              <div>
                <span className="block text-2xl font-black text-white">Unified</span>
                <span className="text-xs text-[#888888] font-mono">Multidisciplinary Team</span>
              </div>
              <div className="h-8 w-[1px] bg-[#262626]" />
              <div>
                <span className="block text-2xl font-black text-white">Modern</span>
                <span className="text-xs text-[#888888] font-mono">Strict Quality Control</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Agency Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left transition-all hover:border-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white text-black">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Commercial Marketing Alignment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                Creative assets and digital applications are not built in a vacuum. We link every visual deliverable directly to conversion funnels and audience acquisition strategies.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left transition-all hover:border-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white text-black">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Engineering Integrity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                From responsive web apps to native Android software, we write maintainable, clean code with enterprise security, proper type safety, and seamless API integrations.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left transition-all hover:border-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white text-black">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  Transparent Partnership
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                Direct communication, realistic roadmaps, and zero inflated agency retainers. You work with focused practitioners dedicated to your digital growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
