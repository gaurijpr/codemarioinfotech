export interface TrustPillar {
  title: string;
  description: string;
}

export interface MetricPlaceholder {
  value: string;
  label: string;
  note: string;
}

export const trustPrinciples: TrustPillar[] = [
  {
    title: 'Strategy before execution',
    description:
      'We never run ads or write code blindly. Every project starts with foundational clarity on your audience, offering, and commercial objectives.',
  },
  {
    title: 'Creative built for attention',
    description:
      'In crowded digital feeds, bland content gets scrolled past. We engineer visual assets specifically designed to stop thumbs and communicate clearly.',
  },
  {
    title: 'Technology built for real use',
    description:
      'We avoid bloated frameworks and complex buzzwords. Our apps and digital solutions are built for dependable user experience and scalable operations.',
  },
  {
    title: 'Continuous optimization',
    description:
      'Launch day is just day one. We consistently monitor analytics, evaluate cost-per-result, and refine campaigns to sustain upward momentum.',
  },
];

// Proven execution milestones for Codemario Infotech (Established 2022)
export const trustMetrics: MetricPlaceholder[] = [
  {
    value: '250+',
    label: 'Projects Delivered',
    note: 'Web, Mobile & AI Solutions',
  },
  {
    value: '500+',
    label: 'Campaigns Optimized',
    note: 'Meta & Google Lead Funnels',
  },
  {
    value: '1,800+',
    label: 'Design Assets Crafted',
    note: 'Branding, Social & AI Video',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    note: 'Trusted Track Record Since 2022',
  },
];
