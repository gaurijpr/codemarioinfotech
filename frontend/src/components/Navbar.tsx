import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark (Clean pure typography - no pixelation) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-white tracking-tight"
          aria-label="Codemario Infotech - Return to top"
        >
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
            CM
          </div>
          <span className="font-bold text-lg tracking-tight uppercase text-white">
            Codemario <span className="font-normal text-[#888888]">Infotech</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#AAAAAA] hover:text-white transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#inquiry"
            onClick={(e) => handleNavClick(e, '#inquiry')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-[#E5E5E5] transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-[#1A1A1A] border border-[#333333] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-black/95 backdrop-blur-md border-b border-[#262626] px-6 py-8 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#CCCCCC] hover:text-white py-2 border-b border-[#1A1A1A] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666666]" />
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#inquiry"
                onClick={(e) => handleNavClick(e, '#inquiry')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-[#E5E5E5] transition-colors"
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
