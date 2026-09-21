export interface ExpertiseCategory {
  category: string;
  tagline: string;
  skills: string[];
  summary: string;
}

export const expertiseData: ExpertiseCategory[] = [
  {
    category: 'MARKETING',
    tagline: 'Precision Acquisition & Scale',
    skills: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Performance Marketing'],
    summary:
      'Engineered multi-channel acquisition funnels targeting high-intent prospective buyers with disciplined cost-per-acquisition tracking.',
  },
  {
    category: 'CREATIVE',
    tagline: 'Brand Distinction & High-Craft Media',
    skills: ['Branding', 'Logo Design', 'Social Media Creatives', 'Video Content'],
    summary:
      'Compelling brand systems and thumb-stopping visual assets that build instant authority and memorable customer touchpoints.',
  },
  {
    category: 'TECHNOLOGY',
    tagline: 'Modern Mobile & Web Engineering',
    skills: ['Android Development', 'Web Development', 'API Integration', 'Backend Systems'],
    summary:
      'Robust digital products built with modern clean code, seamless cloud backend integration, and frictionless mobile user experiences.',
  },
  {
    category: 'AI',
    tagline: 'Generative Media & Automated Workflows',
    skills: ['AI Video', 'AI Image', 'AI Content', 'AI Automation'],
    summary:
      'Leveraging state-of-the-art artificial intelligence models to accelerate creative iteration, automate workflows, and reduce production cycles.',
  },
];
