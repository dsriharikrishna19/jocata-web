export type NavItem = {
  title: string;
  href: string;
};

export type Pillar = {
  icon: string;
  title: string;
  description: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type PerkItem = {
  title: string;
  description: string;
};

export type ArchitectureLayer = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

export type TeamMember = {
  name: string;
  role: string;
  avatar?: string;
  linkedin?: string;
  image?: string;
};

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export type ClientLogo = {
  name: string;
  url: string;
};

export type Story = {
  id: string;
  title: string;
  category: string;
  stat: string;
  description: string;
  details: string[];
};

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  requirements: string[];
};

export type SiteData = {
  name: string;
  description: string;
  navItems: NavItem[];
  hero: {
    headline: string;
    accentWord: string;
    subheadline: string;
    ctaText: string;
  };
  pillars: {
    title: string;
    items: Pillar[];
  };
  architecture: {
    title: string;
    layers: ArchitectureLayer[];
  };
  stats: Stat[];
  clients: ClientLogo[];
  testimonials: Testimonial[];
  stories: Story[];
  jobs: Job[];
  values: ValueItem[];
  perks: PerkItem[];
  team: TeamMember[];
  locationInfo: {
    title: string;
    description: string;
  };
  aiInsight: {
    title: string;
    description: string;
    metrics: string[];
  };
  whoWeAre: {
    title: string;
    description: string;
  };
  contact: {
    email: string;
    address: string;
  };
  journey: JourneyMilestone[];
};

export type JourneyMilestone = {
  year: string;
  date: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
};
