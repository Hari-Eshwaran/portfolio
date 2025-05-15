export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  category: 'ai' | 'web' | 'data';
  image?: string;
  githubLink?: string;
  demoLink?: string;
}

export interface ExperienceType {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface EducationType {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface CertificationType {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface AchievementType {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}