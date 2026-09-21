export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  category: 'marketing' | 'design' | 'development' | 'ai';
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'meta-google-ads',
    number: '01',
    title: 'Meta & Google Ads',
    description:
      'Performance-focused advertising campaigns designed to reach the right audience, generate leads and drive measurable growth.',
    category: 'marketing',
    iconName: 'Target',
    deliverables: [
      'Meta Ads',
      'Facebook Ads',
      'Instagram Ads',
      'Google Search Ads',
      'Display Ads',
      'Campaign Optimization',
      'Retargeting',
    ],
  },
  {
    id: 'social-media-management',
    number: '02',
    title: 'Social Media Management',
    description:
      'Build a consistent social presence with strategy, content, creative posts and audience-focused management.',
    category: 'marketing',
    iconName: 'Share2',
    deliverables: [
      'Social Media Strategy',
      'Content Planning',
      'Instagram Management',
      'Facebook Management',
      'Content Calendar',
      'Engagement Management',
    ],
  },
  {
    id: 'creative-design',
    number: '03',
    title: 'Creative Design',
    description:
      'High-quality visual designs that make your brand look professional and memorable.',
    category: 'design',
    iconName: 'Palette',
    deliverables: [
      'Logo Design',
      'Brand Identity',
      'Social Media Posts',
      'Posters',
      'Thumbnails',
      'Banners',
      'Advertisements',
      'Promotional Creatives',
    ],
  },
  {
    id: 'android-development',
    number: '04',
    title: 'Android App Development',
    description:
      'Modern Android applications designed around your business goals and user experience.',
    category: 'development',
    iconName: 'Smartphone',
    deliverables: [
      'Android Apps',
      'UI/UX',
      'API Integration',
      'Firebase Integration',
      'Backend Integration',
      'App Maintenance',
      'Play Store Publishing Support',
    ],
  },
  {
    id: 'ai-video-creative',
    number: '05',
    title: 'AI Video & Creative Production',
    description:
      'AI-powered video and creative solutions for modern brands, products and marketing campaigns.',
    category: 'ai',
    iconName: 'Video',
    deliverables: [
      'AI Videos',
      'AI Advertisements',
      'AI Reels',
      'Product Videos',
      'Social Media Videos',
      'AI Visuals',
      'Creative Concepts',
    ],
  },
  {
    id: 'ai-content-automation',
    number: '06',
    title: 'AI Content & Automation',
    description:
      'Use AI to create better content, improve productivity and build smarter digital workflows.',
    category: 'ai',
    iconName: 'Cpu',
    deliverables: [
      'AI Content',
      'AI Image Generation',
      'AI Video Concepts',
      'Marketing Content',
      'Prompt Creation',
      'AI Workflow Solutions',
    ],
  },
];
