import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.primaryEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto bg-[#121212] border border-[#262626] p-8 sm:p-14 shadow-2xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#1A1A1A]">
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-4 leading-tight">
            Let's discuss your project.
          </h2>

          <p className="text-base text-[#AAAAAA] leading-relaxed mb-8 max-w-2xl">
            Have an RFP, a new digital application concept, or need performance marketing and AI strategy? Reach out directly to our team.
          </p>

          {/* Contact Box */}
          <div className="p-6 bg-[#181818] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#888888] tracking-widest block">
                  Primary Email
                </span>
                <a
                  href={`mailto:${siteConfig.primaryEmail}`}
                  className="text-lg sm:text-xl font-bold text-white hover:underline"
                >
                  {siteConfig.primaryEmail}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black border border-white text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-all shadow-sm"
              aria-label="Copy primary email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
