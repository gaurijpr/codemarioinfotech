import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight, RotateCcw, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { themeMode, resetTheme, setThemeMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHok = themeMode === 'hok-home3';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isHok
            ? 'bg-[#060611]/85 backdrop-blur-xl border-b border-[#684DF4]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-black/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-white tracking-tight"
          aria-label="Codemario Infotech - Return to top"
        >
          <div
            className={`w-9 h-9 flex items-center justify-center font-bold text-sm tracking-tighter transition-all duration-300 group-hover:scale-105 ${
              isHok
                ? 'bg-gradient-hok rounded-xl text-white shadow-hok-glow'
                : 'bg-white text-black'
            }`}
          >
            CM
          </div>
          <span className="font-bold text-lg tracking-tight uppercase text-white">
            Codemario{' '}
            <span className={isHok ? 'text-gradient-hok font-bold' : 'font-normal text-[#888888]'}>
              Infotech
            </span>
          </span>
          {isHok && (
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#684DF4]/20 text-[#A855F7] border border-[#684DF4]/30">
              <Sparkles className="w-2.5 h-2.5" /> Hok Home-3
            </span>
          )}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors duration-200 py-1 ${
                isHok
                  ? 'text-[#CCCCCC] hover:text-[#A855F7]'
                  : 'text-[#AAAAAA] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Theme Reset Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {isHok ? (
            <button
              type="button"
              onClick={resetTheme}
              title="Reset theme to classic system (Keyword: 'Reset my theme')"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#AAAAAA] hover:text-white bg-[#151525] border border-[#684DF4]/30 hover:border-[#684DF4] rounded-full transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Reset theme</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setThemeMode('hok-home3')}
              title="Switch to Hok Home-3 Theme"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-gradient-hok rounded-full hover:scale-105 transition-all shadow-hok-glow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hok Demo Theme</span>
            </button>
          )}

          <a
            href="#inquiry"
            onClick={(e) => handleNavClick(e, '#inquiry')}
            className={`inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              isHok
                ? 'bg-gradient-hok text-white rounded-full hover:scale-105 shadow-hok-glow'
                : 'bg-white text-black hover:bg-[#E5E5E5] shadow-sm'
            }`}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 text-white border focus:outline-none focus-visible:ring-2 ${
            isHok
              ? 'bg-[#151528] border-[#684DF4]/30 rounded-xl focus-visible:ring-[#684DF4]'
              : 'hover:bg-[#1A1A1A] border-[#333333] focus-visible:ring-white'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-full px-6 py-8 shadow-2xl animate-in slide-in-from-top-2 duration-200 ${
            isHok
              ? 'bg-[#0A0A18]/95 backdrop-blur-xl border-b border-[#684DF4]/30'
              : 'bg-black/95 backdrop-blur-md border-b border-[#262626]'
          }`}
        >
          <nav className="flex flex-col gap-4 text-base font-medium">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 border-b flex items-center justify-between ${
                  isHok
                    ? 'text-[#DDDDDD] hover:text-[#A855F7] border-[#684DF4]/20'
                    : 'text-[#CCCCCC] hover:text-white border-[#1A1A1A]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#888888]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {isHok ? (
                <button
                  type="button"
                  onClick={() => {
                    resetTheme();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-[#1A1A30] border border-[#684DF4]/40 rounded-xl"
                >
                  <RotateCcw className="w-4 h-4 text-[#A855F7]" />
                  <span>Reset theme (Back to Classic)</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setThemeMode('hok-home3');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-gradient-hok rounded-xl shadow-hok-glow"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Switch to Hok Demo Theme</span>
                </button>
              )}

              <a
                href="#inquiry"
                onClick={(e) => handleNavClick(e, '#inquiry')}
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider ${
                  isHok
                    ? 'bg-gradient-hok text-white rounded-xl shadow-hok-glow'
                    : 'bg-white text-black hover:bg-[#E5E5E5]'
                }`}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
