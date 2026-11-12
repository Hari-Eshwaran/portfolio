import type { ComponentType } from 'react';

/** Any icon component — works for both lucide-react and react-icons. */
export type IconComponent = ComponentType<{ className?: string; size?: number | string }>;

export type ProjectCategory = 'product' | 'ai' | 'web' | 'data';

export interface Project {
  title: string;
  description: string;
  /** Technologies or short descriptive tags. */
  technologies: string[];
  category: ProjectCategory;
  githubLink?: string;
  demoLink?: string;
  /** Short highlights shown as badges, e.g. "Winner · Codeathon 3.0". */
  badges?: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  link?: string;
}

export interface Achievement {
  /** e.g. "Winner", "2nd Place", "Special Winner", "Finalist". */
  rank: string;
  event: string;
  host?: string;
  date?: string;
  /** Project name — highlighted where it appears in the description. */
  project?: string;
  description: string;
  /** Prize money in INR. */
  prize?: number;
  kind: 'award' | 'finalist';
}

export interface Publication {
  venue: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: IconComponent;
}

export interface SkillGroup {
  title: string;
  icon: IconComponent;
  items: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
