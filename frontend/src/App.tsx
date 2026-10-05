import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
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

const MainContent: React.FC = () => {
  const { themeMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col selection:bg-[#684DF4] selection:text-white ${
      themeMode === 'hok-home3' ? 'bg-[#030308] text-white' : 'bg-black text-white'
    }`}>
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Why Codemario Infotech */}
        <WhyUsSection />

        {/* 5. Our Expertise / Capabilities */}
        <ExpertiseSection />

        {/* 6. Process Section */}
        <ProcessSection />

        {/* 7. Industries / Who We Help */}
        <IndustriesSection />

        {/* 8. Portfolio / Work Showcase */}
        <PortfolioSection />

        {/* 9. Results / Trust Section */}
        <ResultsSection />

        {/* 10. About Section */}
        <AboutSection />

        {/* 11. Call To Action */}
        <CtaSection />

        {/* 12. Inquiry Form */}
        <InquiryForm />

        {/* 13. Direct Contact Section */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
