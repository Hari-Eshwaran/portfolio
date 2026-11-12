import type { ComponentType } from 'react';

/** Any icon component — works for both lucide-react and react-icons. */
export type IconComponent = ComponentType<{ className?: string; size?: number | string }>;

export type ProjectCategory = 'product' | 'ai' | 'web' | 'data';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  githubLink?: string;
  demoLink?: string;
  /** Short highlight shown as a badge, e.g. "Published · ICEET 2025". */
  badge?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
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
  title: string;
  description: string;
  kind: 'award' | 'publication' | 'finalist';
  meta?: string;
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
