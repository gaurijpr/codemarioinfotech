import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const elem = document.querySelector(selector);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center border-b border-[#222222] bg-black text-white overflow-hidden"
    >
      {/* Subtle Background Dark Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#111111]">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>{siteConfig.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 uppercase">
              Digital Growth.
              <br />
              Creative Ideas.
              <br />
              Powerful Technology.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAAAAA] leading-relaxed max-w-2xl mb-10 font-normal">
              {siteConfig.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#inquiry"
                onClick={(e) => handleScrollTo(e, '#inquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#1A1A1A] transition-all duration-200"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-[#222222] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xl font-bold text-white">Unified</span>
                <span className="text-xs text-[#888888]">Marketing & Dev</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white">Automated</span>
                <span className="text-xs text-[#888888]">AI Content & Flows</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white">Targeted</span>
                <span className="text-xs text-[#888888]">Performance ROAS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
