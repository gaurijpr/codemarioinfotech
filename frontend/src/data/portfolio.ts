export type PortfolioCategory = 'all' | 'marketing' | 'design' | 'apps' | 'ai';

export interface ProjectItem {
  id: string;
  name: string;
  category: PortfolioCategory;
  categoryLabel: string;
  shortDescription: string;
  fullOverview: string;
  keyHighlights: string[];
  deliverables: string[];
  year: string;
  visualType: 'chart' | 'mobile' | 'identity' | 'ai-video' | 'social' | 'launch';
}

export const portfolioCategories = [
  { id: 'all', label: 'All' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'design', label: 'Design' },
  { id: 'apps', label: 'Apps' },
  { id: 'ai', label: 'AI' },
] as const;

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'performance-campaign',
    name: 'Performance Campaign',
    category: 'marketing',
    categoryLabel: 'Marketing',
    shortDescription:
      'Multi-channel acquisition funnel on Meta and Google Search targeting high-intent leads with real-time attribution.',
    fullOverview:
      'Engineered a segmented funnel combining high-intent Google Search capture with high-engagement Meta creative retargeting, structured around strict unit economics.',
    keyHighlights: ['Continuous A/B creative testing', 'Precision retargeting funnels', 'CPA-focused bidding strategy'],
    deliverables: ['Meta Ads', 'Google Ads', 'Audience Segmentation', 'Funnel Tracking'],
    year: '2026',
    visualType: 'chart',
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    category: 'design',
    categoryLabel: 'Design',
    shortDescription:
      'Complete typography-led brand identity system including logo design, design system, and marketing guidelines.',
    fullOverview:
      'Developed a timeless, high-contrast visual identity system designed for clarity across modern digital touchpoints, app interfaces, and marketing collaterals.',
    keyHighlights: ['Vector logo system', 'Design token library', 'Digital brand guidelines'],
    deliverables: ['Logo Suite', 'Brand Guidelines', 'Social Templates', 'Asset Kit'],
    year: '2026',
    visualType: 'identity',
  },
  {
    id: 'android-app',
    name: 'Android App',
    category: 'apps',
    categoryLabel: 'Apps',
    shortDescription:
      'Native Android application featuring reactive UI, offline data sync, Firebase backend, and seamless navigation.',
    fullOverview:
      'Engineered a scalable Android mobile product focusing on fast startup latency, clean architectural separation, and intuitive checkout/booking UX.',
    keyHighlights: ['Material 3 UI implementation', 'Firebase Cloud Auth & Firestore', 'Offline-first caching'],
    deliverables: ['Android App', 'UI/UX Specs', 'Firebase Setup', 'Play Store Deployment'],
    year: '2026',
    visualType: 'mobile',
  },
  {
    id: 'ai-video-campaign',
    name: 'AI Video Campaign',
    category: 'ai',
    categoryLabel: 'AI',
    shortDescription:
      'AI-generated cinematic short-form video series and reels optimized for high organic engagement and ad conversions.',
    fullOverview:
      'Utilized cutting-edge generative video pipelines and voice synthesis to produce engaging vertical video ads without physical studio bottlenecks.',
    keyHighlights: ['Prompt-engineered visual assets', 'High-retention pacing', 'Dynamic audio scoring'],
    deliverables: ['AI Video Concepts', 'Social Reels', 'Ad Cuts', 'Prompt Library'],
    year: '2026',
    visualType: 'ai-video',
  },
  {
    id: 'social-media-creative',
    name: 'Social Media Creative',
    category: 'design',
    categoryLabel: 'Design',
    shortDescription:
      'Curated monthly social media design suite with carousel templates, promotional banners, and visual storytelling.',
    fullOverview:
      'Designed a cohesive, high-craft social media content ecosystem delivering brand consistency, educational value, and audience engagement.',
    keyHighlights: ['Conversion-driven carousels', 'High-contrast typography', 'Reusable Figma design system'],
    deliverables: ['Feed Posts', 'Story Layouts', 'Promo Banners', 'Content Guidelines'],
    year: '2026',
    visualType: 'social',
  },
  {
    id: 'product-launch',
    name: 'Product Launch',
    category: 'marketing',
    categoryLabel: 'Marketing',
    shortDescription:
      'Full-spectrum go-to-market campaign orchestration spanning teaser content, launch ads, and landing page optimization.',
    fullOverview:
      'Coordinated the cross-platform digital debut of a consumer service, driving early waitlist registrations and immediate post-launch adoption.',
    keyHighlights: ['Pre-launch waitlist funnel', 'Coordinated influencer & paid push', 'Real-time performance tracking'],
    deliverables: ['Launch Strategy', 'Ad Creatives', 'Email Sequences', 'Analytics Setup'],
    year: '2026',
    visualType: 'launch',
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Content & Automation',
    category: 'ai',
    categoryLabel: 'AI',
    shortDescription:
      'Automated content pipeline leveraging LLMs and image models to streamline multi-platform publishing.',
    fullOverview:
      'Implemented automated workflows that turn single content inputs into multi-channel marketing assets, dramatically reducing production turnaround.',
    keyHighlights: ['Automated copy generation', 'Structured prompt chaining', 'Repurposing pipelines'],
    deliverables: ['Workflow Architecture', 'Prompt Systems', 'Integration Scripts'],
    year: '2026',
    visualType: 'ai-video',
  },
  {
    id: 'service-booking-app',
    name: 'On-Demand Service App',
    category: 'apps',
    categoryLabel: 'Apps',
    shortDescription:
      'Android utility app facilitating real-time booking, map tracking, secure payments, and push notifications.',
    fullOverview:
      'Engineered an intuitive mobile application for local service providers with map navigation, appointment scheduling, and automated reminders.',
    keyHighlights: ['Location services integration', 'Push notifications', 'Instant booking flow'],
    deliverables: ['Android Codebase', 'Backend API', 'Admin Console', 'Publishing Support'],
    year: '2026',
    visualType: 'mobile',
  },
];
