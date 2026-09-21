export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  activities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    description: 'We understand your business, audience and objectives.',
    activities: [
      'In-depth intake & audit',
      'Target audience profiling',
      'Competitor & benchmark analysis',
      'KPI and scope definition',
    ],
  },
  {
    stepNumber: '02',
    title: 'Strategize',
    description: 'We create the right marketing, creative or technology strategy.',
    activities: [
      'Channel & funnel architecture',
      'Creative direction & moodboards',
      'Technical roadmap & system spec',
      'Budget & timeline milestone planning',
    ],
  },
  {
    stepNumber: '03',
    title: 'Build',
    description: 'Our team turns the strategy into campaigns, designs, content or digital products.',
    activities: [
      'High-converting ad creatives & copy',
      'Pixel-perfect UI/UX design & branding',
      'Production-grade code & API integration',
      'Quality assurance & pre-launch testing',
    ],
  },
  {
    stepNumber: '04',
    title: 'Grow',
    description: 'We analyze results, optimize performance and continuously improve.',
    activities: [
      'Real-time metrics & attribution monitoring',
      'A/B creative & audience testing',
      'Conversion rate optimization (CRO)',
      'Iterative feature updates & scaling',
    ],
  },
];
