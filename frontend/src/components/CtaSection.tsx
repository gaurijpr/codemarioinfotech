import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowDown } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector('#inquiry');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-black relative overflow-hidden border-y border-[#E5E5E5]">
      {/* Background Subtle Light Grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-black text-[11px] font-bold tracking-widest text-black uppercase bg-[#F7F7F7]">
          <span className="w-1.5 h-1.5 bg-black" />
          <span>Direct Collaboration</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black uppercase leading-tight mb-6">
          {siteConfig.ctaSection.headline}
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {siteConfig.ctaSection.supportingText}
        </p>

        {/* CTA Button (High Contrast Solid Black) */}
        <div className="flex justify-center">
          <a
            href="#inquiry"
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-[#222222] transition-all duration-200 shadow-2xl hover:scale-[1.02]"
          >
            <span>{siteConfig.ctaSection.buttonText}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs font-mono text-[#777777]">
          Direct response within 24 business hours // hello@codemarioinfotech.com
        </p>
      </div>
    </section>
  );
};
