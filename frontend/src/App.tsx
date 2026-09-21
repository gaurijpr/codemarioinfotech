import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProcessSection } from './components/ProcessSection';
import { IndustriesSection } from './components/IndustriesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ResultsSection } from './components/ResultsSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { InquiryForm } from './components/InquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* 1. Sticky Navigation Bar (Black Glassmorphism) */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section (Deep Black with White Highlights) */}
        <HeroSection />

        {/* 3. Services Section (Dark Studio Surface #0D0D0D) */}
        <ServicesSection />

        {/* 4. Why Codemario Infotech (STUNNING CONTRASTING WHITE SECTION) */}
        <WhyUsSection />

        {/* 5. Our Expertise / Capabilities (Deep Black with Interactive Cards) */}
        <ExpertiseSection />

        {/* 6. Process Section (Dark Minimalist Timeline #0A0A0A) */}
        <ProcessSection />

        {/* 7. Industries / Who We Help (Dark Architectural Grid) */}
        <IndustriesSection />

        {/* 8. Portfolio / Work Showcase (Pure Black with High-Contrast Specs) */}
        <PortfolioSection />

        {/* 9. Results / Trust Section (STUNNING CONTRASTING WHITE SECTION) */}
        <ResultsSection />

        {/* 10. About Section (Deep Dark Studio Aesthetic #0A0A0A) */}
        <AboutSection />

        {/* 11. Call To Action (STUNNING CONTRASTING WHITE SECTION) */}
        <CtaSection />

        {/* 12. Inquiry Form (Deep Black with High-Contrast Inputs & Button) */}
        <InquiryForm />

        {/* 13. Direct Contact Section (Dark Studio #0D0D0D) */}
        <ContactSection />
      </main>

      {/* 14. Footer (Deep Black with Crisp White Typography) */}
      <Footer />
    </div>
  );
};

export default App;
