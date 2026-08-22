export interface ProjectStage {
  label: string;
  status: 'neutral' | 'active' | 'success' | 'error';
}

export interface Project {
  id: string;
  title: string;
  category: 'featured' | 'standard';
  description: string;
  stages: ProjectStage[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export interface TechCategory {
  label: string;
  items: string;
  tier: 'primary' | 'standard';
}

export interface TimelineEntry {
  id: string;
  isCurrent: boolean;
  title: string;
  description: string;
}

export interface Principle {
  id: string;
  statement: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  platform: 'linkedin' | 'github' | 'email';
}

export interface NavItem {
  label: string;
  href: string;
}