import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { LegalModal } from './LegalModal';
import type { LegalDocType } from './LegalModal';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
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
    <footer className="bg-black text-white border-t border-[#222222] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          {/* Brand Column with New High-Definition Logo */}
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
            <p className="text-xs text-[#888888] max-w-sm leading-relaxed mb-6 font-normal">
              Full-service digital growth, performance marketing, high-craft creative design, native Android mobile applications, and AI automation.
            </p>
            <div className="text-xs font-mono text-[#AAAAAA]">
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
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#AAAAAA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-4 font-bold">
              Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('privacy')}
                  className="text-[#AAAAAA] hover:text-white transition-colors duration-150 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('terms')}
                  className="text-[#AAAAAA] hover:text-white transition-colors duration-150 text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <span className="text-[#666666] text-xs font-mono">
                  Agency ID: CODEMARIO-IN
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleScrollToTop}
                className="inline-flex items-center gap-2 px-3 py-2 border border-[#333333] hover:border-white text-xs font-mono uppercase tracking-wider text-[#AAAAAA] hover:text-white transition-all"
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <p>© 2026 Codemario Infotech. All rights reserved.</p>
          <p>STRICT B&W DESIGN SYSTEM • PERFORMANCE FOCUSED</p>
        </div>
      </div>

      {/* Legal Modal Component */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </footer>
  );
};
