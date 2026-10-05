import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { themeMode } = useTheme();
  const isHok = themeMode === 'hok-home3';

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
      className={`relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center border-b overflow-hidden transition-colors duration-300 ${
        isHok
          ? 'bg-[#030308] border-[#684DF4]/20 text-white'
          : 'bg-black border-[#222222] text-white'
      }`}
    >
      {/* Background Ambient Glows & Grid Pattern */}
      {isHok ? (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-[#684DF4]/25 via-[#3E66F3]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern-hok opacity-40 pointer-events-none" />
        </>
      ) : (
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Eyebrow Pill */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                isHok
                  ? 'rounded-full bg-[#684DF4]/15 border border-[#684DF4]/40 text-[#A855F7] shadow-[0_0_15px_rgba(104,77,244,0.2)]'
                  : 'border border-[#333333] text-white bg-[#111111]'
              }`}
            >
              {isHok ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#684DF4]" />
                  <span>🚀 #1 AI & Digital Marketplace Agency</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-white" />
                  <span>{siteConfig.eyebrow}</span>
                </>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 uppercase">
              Digital Growth.
              <br />
              <span className={isHok ? 'text-gradient-hok' : 'text-white'}>
                Creative Ideas.
              </span>
              <br />
              Powerful Technology.
            </h1>

            {/* Supporting Text */}
            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal ${
                isHok ? 'text-[#C5C5E0]' : 'text-[#AAAAAA]'
              }`}
            >
              {siteConfig.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#inquiry"
                onClick={(e) => handleScrollTo(e, '#inquiry')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  isHok
                    ? 'bg-gradient-hok text-white rounded-full hover:scale-105 shadow-hok-glow'
                    : 'bg-white text-black hover:bg-[#E5E5E5] shadow-md'
                }`}
              >
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  isHok
                    ? 'bg-[#15152A] text-white border border-[#684DF4]/40 rounded-full hover:border-[#684DF4] hover:bg-[#1C1C36]'
                    : 'bg-transparent text-white border-2 border-white hover:bg-[#1A1A1A]'
                }`}
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust Indicators / Stat Cards */}
            <div
              className={`mt-12 pt-8 w-full grid grid-cols-3 gap-4 text-left border-t ${
                isHok ? 'border-[#684DF4]/20' : 'border-[#222222]'
              }`}
            >
              <div
                className={
                  isHok
                    ? 'p-3 rounded-2xl bg-[#0A0A16] border border-[#684DF4]/20'
                    : ''
                }
              >
                <span
                  className={`block text-xl font-extrabold ${
                    isHok ? 'text-gradient-hok' : 'text-white'
                  }`}
                >
                  Unified
                </span>
                <span className={isHok ? 'text-xs text-[#A0A0C5]' : 'text-xs text-[#888888]'}>
                  Marketing & Dev
                </span>
              </div>
              <div
                className={
                  isHok
                    ? 'p-3 rounded-2xl bg-[#0A0A16] border border-[#684DF4]/20'
                    : ''
                }
              >
                <span
                  className={`block text-xl font-extrabold ${
                    isHok ? 'text-gradient-hok' : 'text-white'
                  }`}
                >
                  Automated
                </span>
                <span className={isHok ? 'text-xs text-[#A0A0C5]' : 'text-xs text-[#888888]'}>
                  AI Content & Flows
                </span>
              </div>
              <div
                className={
                  isHok
                    ? 'p-3 rounded-2xl bg-[#0A0A16] border border-[#684DF4]/20'
                    : ''
                }
              >
                <span
                  className={`block text-xl font-extrabold ${
                    isHok ? 'text-gradient-hok' : 'text-white'
                  }`}
                >
                  Targeted
                </span>
                <span className={isHok ? 'text-xs text-[#A0A0C5]' : 'text-xs text-[#888888]'}>
                  Performance ROAS
                </span>
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
