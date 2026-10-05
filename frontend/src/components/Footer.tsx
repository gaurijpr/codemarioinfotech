import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { LegalModal } from './LegalModal';
import type { LegalDocType } from './LegalModal';
import { ArrowUp, ExternalLink, RotateCcw, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { themeMode, resetTheme, setThemeMode } = useTheme();
  const isHok = themeMode === 'hok-home3';

  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`pt-16 pb-12 text-left border-t transition-colors duration-300 ${
        isHok
          ? 'bg-[#030308] text-white border-[#684DF4]/20'
          : 'bg-black text-white border-[#222222]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b ${
            isHok ? 'border-[#684DF4]/20' : 'border-[#222222]'
          }`}
        >
          {/* Brand Column with Main Agency Copy */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="mb-6 block">
              <img
                src="/logo.png?v=3"
                alt="Codemario Infotech"
                width={1024}
                height={512}
                className="w-64 sm:w-80 max-w-full h-auto object-contain select-none"
                style={{ aspectRatio: '1024 / 512' }}
              />
            </div>

            {/* Official Agency Main Website Description (as requested by user) */}
            <div
              className={`p-4 mb-6 rounded-2xl border text-xs leading-relaxed max-w-lg ${
                isHok
                  ? 'bg-[#0A0A1A] border-[#684DF4]/30 text-[#C5C5E8]'
                  : 'bg-[#0D0D0D] border-[#222222] text-[#AAAAAA]'
              }`}
            >
              <p className="mb-3">
                <strong className={isHok ? 'text-gradient-hok font-extrabold' : 'text-white'}>
                  Codemario Infotech
                </strong>{' '}
                is our main official agency website and trade name. We provide AI Content & Automation, Meta & Google Ads, Social Media Management, Creative Design, Android App Development, AI Video & Creative Production, Website Development, and Custom Software Solutions.
              </p>
              <p>
                For custom projects, agency services, or corporate inquiries, please visit our official Codemario Infotech website:{' '}
                <a
                  href="https://codemarioinfotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 font-bold underline ${
                    isHok ? 'text-[#A855F7] hover:text-white' : 'text-white hover:text-[#CCCCCC]'
                  }`}
                >
                  Visit codemarioinfotech.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>

            <div className={`text-xs font-mono ${isHok ? 'text-[#A0A0C5]' : 'text-[#AAAAAA]'}`}>
              Primary Inquiries:{' '}
              <a
                href={`mailto:${siteConfig.primaryEmail}`}
                className="text-white underline font-semibold"
              >
                {siteConfig.primaryEmail}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4
              className={`text-xs font-mono uppercase tracking-widest mb-4 font-bold ${
                isHok ? 'text-[#A855F7]' : 'text-[#888888]'
              }`}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-colors duration-150 ${
                      isHok
                        ? 'text-[#CCCCCC] hover:text-[#A855F7]'
                        : 'text-[#AAAAAA] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Theme Control */}
          <div className="md:col-span-3">
            <h4
              className={`text-xs font-mono uppercase tracking-widest mb-4 font-bold ${
                isHok ? 'text-[#A855F7]' : 'text-[#888888]'
              }`}
            >
              Governance & Theme
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('privacy')}
                  className={`transition-colors duration-150 text-left ${
                    isHok ? 'text-[#CCCCCC] hover:text-[#A855F7]' : 'text-[#AAAAAA] hover:text-white'
                  }`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('terms')}
                  className={`transition-colors duration-150 text-left ${
                    isHok ? 'text-[#CCCCCC] hover:text-[#A855F7]' : 'text-[#AAAAAA] hover:text-white'
                  }`}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                {isHok ? (
                  <button
                    type="button"
                    onClick={resetTheme}
                    className="inline-flex items-center gap-1.5 text-xs text-[#A855F7] hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset my theme (Classic)</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setThemeMode('hok-home3')}
                    className="inline-flex items-center gap-1.5 text-xs text-[#A855F7] hover:text-white transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Activate Hok Demo Theme</span>
                  </button>
                )}
              </li>
            </ul>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleScrollToTop}
                className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  isHok
                    ? 'border border-[#684DF4]/40 hover:border-[#684DF4] text-[#C5C5E8] hover:text-white rounded-full bg-[#121226]'
                    : 'border border-[#333333] hover:border-white text-[#AAAAAA] hover:text-white'
                }`}
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isHok ? 'text-[#8888AA]' : 'text-[#666666]'
          }`}
        >
          <p>© 2026 Codemario Infotech. All rights reserved.</p>
          <p>{isHok ? 'HOK HOME-3 MARKETPLACE THEME ACTIVE' : 'STRICT B&W DESIGN SYSTEM • PERFORMANCE FOCUSED'}</p>
        </div>
      </div>

      {/* Legal Modal Component */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </footer>
  );
};
