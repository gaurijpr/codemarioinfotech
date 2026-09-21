export interface SiteConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  eyebrow: string;
  primaryEmail: string;
  phone?: string;
  address?: string;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  ctaSection: {
    headline: string;
    supportingText: string;
    buttonText: string;
  };
  aboutSection: {
    heading: string;
    lead: string;
    body: string[];
  };
  socialLinks: {
    name: string;
    url: string;
    enabled: boolean;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  companyName: 'Codemario Infotech',
  legalName: 'Codemario Infotech',
  tagline: 'Marketing. Design. Technology. AI.',
  eyebrow: 'MARKETING • DESIGN • DEVELOPMENT • AI',
  primaryEmail: 'hello@codemarioinfotech.com',
  phone: '+91 (Configure in data/siteConfig.ts)',
  address: 'India (Serving Global & Domestic Clients)',
  hero: {
    headline: 'Digital Growth. Creative Ideas. Powerful Technology.',
    subheadline:
      'Codemario Infotech helps businesses grow with performance marketing, creative design, mobile apps, social media, and AI-powered digital solutions.',
    primaryCta: 'Start a Project',
    secondaryCta: 'Explore Services',
  },
  ctaSection: {
    headline: "Have an Idea? Let's Build It.",
    supportingText:
      "Tell us what you're working on. Whether you need marketing, design, an Android app, AI content or a complete digital solution, let's talk.",
    buttonText: 'Start a Conversation',
  },
  aboutSection: {
    heading: 'Where Marketing Meets Creativity & Technology.',
    lead: 'Codemario Infotech is a digital-focused company helping businesses turn ideas into marketing campaigns, creative experiences, mobile applications and AI-powered digital content.',
    body: [
      'We operate at the convergence of commercial strategy, high-craft aesthetics, and engineering discipline. Instead of juggling detached freelancers or siloed agencies, our clients partner with a single, agile team that executes across the entire digital value chain.',
      'From targeted acquisition on Meta and Google to scalable Android applications and automated AI production, every deliverable is engineered for business impact and long-term momentum.',
    ],
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/codemario-infotech', // Replace with real URL when active
      enabled: true,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/codemarioinfotech', // Replace with real URL when active
      enabled: true,
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/codemarioinfo', // Replace with real URL when active
      enabled: true,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/codemarioinfotech', // Replace with real URL when active
      enabled: true,
    },
  ],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
