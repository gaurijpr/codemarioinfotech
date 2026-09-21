export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  focus: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups',
    description: 'Fast-paced go-to-market execution, MVP app builds, and rapid customer acquisition.',
    focus: 'User Acquisition & MVP Delivery',
  },
  {
    id: 'local-businesses',
    name: 'Local Businesses',
    description: 'Hyper-local Google & Meta campaigns to fill calendars and drive walk-in customers.',
    focus: 'High-Intent Local Leads',
  },
  {
    id: 'ecommerce-brands',
    name: 'E-commerce Brands',
    description: 'Scalable ad funnels, thumb-stopping product creatives, and conversion rate optimization.',
    focus: 'ROAS & Repeat Purchases',
  },
  {
    id: 'personal-brands',
    name: 'Personal Brands',
    description: 'Distinctive brand identities, social media authority, and content design.',
    focus: 'Audience Trust & Engagement',
  },
  {
    id: 'service-businesses',
    name: 'Service Businesses',
    description: 'Predictable qualified lead generation pipelines for B2B and specialized services.',
    focus: 'Qualified Inquiries & Bookings',
  },
  {
    id: 'apps-digital-products',
    name: 'Apps & Digital Products',
    description: 'Native Android apps, seamless cloud backends, and app store install growth.',
    focus: 'Retention, UI/UX & Installs',
  },
  {
    id: 'smb',
    name: 'Small & Medium Businesses',
    description: 'Full-spectrum digital marketing and modern technology to outpace competitors.',
    focus: 'Predictable Revenue Expansion',
  },
  {
    id: 'creators',
    name: 'Creators',
    description: 'High-performing video assets, AI reels, thumbnails, and monetization design.',
    focus: 'Viral Content & Brand Deals',
  },
];
