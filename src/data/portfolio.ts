/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no UI changes needed.
 */
import {
  SiAmazonwebservices,
  SiArduino,
  SiChakraui,
  SiChartdotjs,
  SiCss3,
  SiDocker,
  SiEspressif,
  SiEthereum,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiKeras,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSolidity,
  SiStreamlit,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import {
  BarChart3,
  BrainCircuit,
  CircuitBoard,
  Cloud,
  Code2,
  Database,
  HardHat,
  Infinity as InfinityIcon,
  MessageSquareText,
  Network,
  Scan,
  Server,
} from 'lucide-react';
import type {
  Achievement,
  Certification,
  Education,
  Experience,
  Project,
  ProjectCategory,
  SkillGroup,
} from '../types';

/* ------------------------------------------------------------------ */
/*  Profile                                                           */
/* ------------------------------------------------------------------ */
export const profile = {
  name: 'Harishwaran Petchimuthu',
  shortName: 'Harishwaran.P',
  firstName: 'Harishwaran',
  lastName: 'Petchimuthu',
  initials: 'HP',
  headline: 'Technology Entrepreneur · CEO · Full-Stack Developer · AI Innovator',
  roles: ['Technology Entrepreneur', 'CEO', 'Full-Stack Developer', 'AI Innovator'],
  summary:
    'Technology entrepreneur, software engineer and CEO of Thenam Software Solutions — building AI-powered products, scalable enterprise applications and digital solutions.',
  currentRole: 'CEO',
  currentCompany: 'Thenam Software Solutions',
  currentCompanyUrl: 'https://thenamsoftwaresolutions.com',
  currentSince: '2025',
  location: 'Chennai, India',
  timeZone: 'Asia/Kolkata',
  photo: '/f.jpg',
  resume: '/Harishwaran.pdf',
  emails: ['harishwaran@hexpertify.com', 'tech@harishwaran.dpdns.org'],
  phone: { label: '+91 93447 86408', href: 'tel:+919344786408' },
  socials: {
    github: 'https://github.com/Hari-Eshwaran',
    linkedin: 'https://www.linkedin.com/in/harishwaran1',
  },
} as const;

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'achievements', label: 'Milestones' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const;

/* ------------------------------------------------------------------ */
/*  About                                                             */
/* ------------------------------------------------------------------ */
export const about = {
  lead: "I'm a technology entrepreneur and the CEO of Thenam Software Solutions — I build AI-powered products, scalable enterprise applications and digital solutions that ship.",
  paragraphs: [
    'My work sits where technology, entrepreneurship and leadership meet: engineering software that solves real-world problems, running the business side of a growing startup, and coordinating developers, interns and business analysts to deliver it.',
    'It started with a curiosity about how AI can solve real problems, which led me to a B.Tech in AI & Data Science. Today I work across the stack — React and Next.js frontends, Node.js, NestJS and Flask backends, deep learning and NLP in Python, and IoT on Arduino and ESP32.',
  ],
  softSkills: ['Leadership', 'Problem solving', 'Self-learner', 'Critical thinking'],
  interests: [
    'Artificial Intelligence',
    'Entrepreneurship',
    'Web Development',
    'IoT & Automation',
    'Hackathons',
    'Research',
  ],
  languages: [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Experience                                                        */
/* ------------------------------------------------------------------ */
export const experiences: Experience[] = [
  {
    company: 'Thenam Software Solutions',
    position: 'Chief Executive Officer (CEO)',
    period: '2025 — Present',
    current: true,
    highlights: [
      'Lead business operations, product planning and technical implementation for a Chennai-based company working in software, AI, automation, IoT and digital product engineering.',
      'Own client communication and software delivery end to end, including infrastructure and deployment decisions.',
      'Built SMSLA Source360, an enterprise ERP — working across Windows Server, IIS, Nginx, Redis, PostgreSQL, networking, load balancing and application performance.',
      "Hire and manage interns, developers and business analysts, and defined the company's standard operating procedures (SOPs).",
      'Drive business development and marketing for the company and its products.',
    ],
    stack: ['PostgreSQL', 'Redis', 'Nginx', 'IIS', 'Windows Server'],
  },
  {
    company: 'Hexpertify',
    position: 'Chief Technology Officer (CTO)',
    period: 'Since 2024',
    highlights: [
      "Led the architecture and deployment of Hexpertify's AI-powered consulting platform.",
      'Integrated React, TypeScript, Node.js, Supabase and Gemini 1.5 Pro to power personalized expert matching, secure data storage and voice-enabled AI assistants.',
      'Built scalable microservices for mental health, fitness, legal and financial consultations with sub-second response times.',
      'Managed a cross-functional dev team and introduced agile workflows, boosting release velocity by 60%.',
      'Enforced data-privacy and security policies aligned with ISO and GDPR standards.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Gemini 1.5 Pro'],
  },
  {
    company: 'OneYes Infotech Solutions Pvt. Ltd',
    position: 'AI & ML Developer Intern',
    period: 'May — Jun 2025',
    highlights: [
      'Completed the AI & ML Developer Internship Program in Chennai (21 May – 20 June 2025).',
      'Awarded a Certificate of Excellence for outstanding performance.',
    ],
    stack: ['Python', 'Machine Learning'],
  },
  {
    company: 'Vulture Lines Pvt Ltd',
    position: 'Data Analyst Intern',
    period: 'Feb — Mar 2025',
    highlights: [
      'Analyzed large datasets to extract meaningful business insights.',
      'Developed data-visualization dashboards to communicate findings effectively.',
      'Collaborated with cross-functional teams to identify data-driven business opportunities.',
    ],
    stack: ['SQL', 'Power BI', 'Python'],
  },
  {
    company: 'Novitech Private Ltd',
    position: 'Full Stack Developer',
    period: 'Jun — Jul 2024',
    highlights: [
      'Designed and implemented responsive web applications using React and Node.js.',
      'Worked with UX/UI designers to create user-friendly interfaces.',
      'Integrated backend APIs and optimized database queries for better performance.',
    ],
    stack: ['React', 'Node.js'],
  },
  {
    company: 'Hyundai Transys Lear',
    position: 'Production Management',
    period: 'Sep — Oct 2023',
    highlights: [
      'Monitored production processes and implemented efficiency improvements.',
      'Coordinated with departments to ensure timely delivery of products.',
      'Analyzed production data to identify bottlenecks and propose solutions.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */
export const projectCategories: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'product', label: 'Products' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'web', label: 'Web' },
  { id: 'data', label: 'Data' },
];

export const categoryLabel: Record<ProjectCategory, string> = {
  product: 'Product',
  ai: 'AI & ML',
  web: 'Web',
  data: 'Data Science',
};

export const projects: Project[] = [
  {
    title: 'ZAYMAZONE',
    description:
      'E-commerce marketplace connecting Indian artisans, handmade-product sellers and homepreneurs with customers.',
    technologies: ['E-commerce', 'Marketplace', 'Artisans'],
    category: 'product',
    demoLink: 'https://zaymazone.com',
  },
  {
    title: 'SMSLA Source360',
    description:
      'Enterprise ERP covering purchase management, approval workflows, finance operations and vendor management, with TallyPrime integration.',
    technologies: ['PostgreSQL', 'Redis', 'Nginx', 'IIS', 'TallyPrime'],
    category: 'product',
    badge: 'Enterprise ERP',
  },
  {
    title: 'Print Kada',
    description: 'Online printing and product-customization platform.',
    technologies: ['E-commerce', 'Customization'],
    category: 'product',
    demoLink: 'https://printkada.vercel.app/',
  },
  {
    title: 'Paper Heros',
    description: 'Digital-commerce platform for paper and stationery products.',
    technologies: ['E-commerce', 'Stationery'],
    category: 'product',
    demoLink: 'https://paperheros.vercel.app/',
  },
  {
    title: 'ZARA',
    description:
      'AI and IoT assistant concept combining voice interaction, home automation, computer vision and intelligent assistance.',
    technologies: ['Voice AI', 'Computer Vision', 'IoT', 'Home Automation'],
    category: 'ai',
    badge: 'Concept',
  },
  {
    title: 'Palette AI',
    description: 'Generative-AI project built at a hackathon, where it placed in the Top 10.',
    technologies: ['Generative AI'],
    category: 'ai',
    badge: 'Top 10 · GenAI Hackathon',
  },
  {
    title: 'FinEcho',
    description:
      'Financial management platform with budget tracking, expense analysis and investment recommendations.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    category: 'web',
    githubLink: 'https://github.com/Hari-Eshwaran/FinEcho',
    demoLink: 'https://fin-echo.vercel.app/',
  },
  {
    title: 'Heal-Fit',
    description:
      'Health and fitness tracking application with personalized workout and nutrition recommendations.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    category: 'web',
    badge: 'Published · ICIRES 2025',
    githubLink: 'https://github.com/Hari-Eshwaran/Heal-fit',
    demoLink: 'https://heal-fit.vercel.app/',
  },
  {
    title: 'TastyLens-AR',
    description:
      'Augmented-reality app that surfaces nutritional information and recipes by scanning food items.',
    technologies: ['React', 'Node.js', 'Ethereum', 'ARKit', 'MongoDB'],
    category: 'web',
    badge: 'Published · ICEET 2025',
    githubLink: 'https://github.com/Hari-Eshwaran/TastyLens-AR',
    demoLink: 'https://tastylensar.vercel.app/',
  },
  {
    title: 'Smart Traffic Management System',
    description:
      'AI-powered traffic-light controller that detects traffic density and prioritizes lanes — emergency vehicles get top priority with complete stop signals.',
    technologies: ['Python', 'Streamlit', 'YOLOv5', 'OpenCV', 'Pandas'],
    category: 'ai',
    githubLink: 'https://github.com/Hari-Eshwaran/Smart-Traffic-Management-System-AI-Powered',
  },
  {
    title: 'Power Outage Prediction',
    description:
      'Predictive model that forecasts power outages from historical data and weather patterns.',
    technologies: ['Python', 'Machine Learning', 'React', 'Tailwind CSS', 'Supabase'],
    category: 'data',
    githubLink: 'https://github.com/Hari-Eshwaran/Power-Prediction',
    demoLink: 'https://powerprediction.vercel.app/',
  },
  {
    title: 'Face Emotion Recognition',
    description:
      'Deep-learning model that detects and classifies human facial emotions using CNN and RNN architectures.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
    category: 'ai',
    githubLink: 'https://github.com/Hari-Eshwaran/Face-Recog',
    demoLink: 'https://auro-bot-snowy.vercel.app/',
  },
  {
    title: 'AI Mental Health Analysis Dashboard',
    description:
      'Combines machine learning, data visualization and interactive features to analyze mental-health patterns, mood tracking and student mental-health statistics.',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Plotly'],
    category: 'ai',
    githubLink: 'https://github.com/Hari-Eshwaran/AI-Powered-Mental-Health-Analysis-Dashboard',
  },
  {
    title: 'Approval Management System',
    description: 'Workflow-automation system for managing approval processes in organizations.',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'Node.js'],
    category: 'web',
    githubLink: 'https://github.com/Hari-Eshwaran/Approval-Management-System',
    demoLink: 'https://approval-management-system.vercel.app/',
  },
  {
    title: 'Organ Donation DApp',
    description: 'Decentralized platform for organ donation built on Ethereum smart contracts.',
    technologies: ['Next.js', 'Solidity', 'Hardhat', 'TypeScript', 'Ethers.js', 'Chakra UI'],
    category: 'web',
    githubLink: 'https://github.com/Hari-Eshwaran/Organ-Donation-DApp',
  },
  {
    title: 'HR Analysis',
    description:
      'Web application that helps HR departments analyze employee data and derive actionable insights.',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'Chart.js'],
    category: 'web',
    githubLink: 'https://github.com/Hari-Eshwaran/Employee-Performance-Dashboard',
    demoLink: 'https://employee-performance-dashboard-nine.vercel.app/',
  },
  {
    title: 'Employee Performance Dashboard',
    description: 'Interactive dashboard for monitoring and analyzing employee performance metrics.',
    technologies: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
    category: 'data',
    githubLink: 'https://github.com/Hari-Eshwaran/Employee-Performance-Dashboard',
    demoLink: 'https://employee-performance-dashboard-nine.vercel.app/',
  },
  {
    title: 'Human Activity Recognition',
    description:
      'AI system that recognizes human activities from video or sensor data using CNN and LSTM models.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'LSTM'],
    category: 'ai',
  },
  {
    title: 'Gesture Recognition',
    description:
      'LSTM-based system that recognizes hand gestures to enable touchless human-computer interaction.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Computer Vision'],
    category: 'ai',
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */
export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Deep Learning', icon: Network },
      { name: 'NLP', icon: MessageSquareText },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Keras', icon: SiKeras },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'YOLOv5', icon: Scan },
      { name: 'Gemini API', icon: SiGooglegemini },
    ],
  },
  {
    title: 'Frontend & Design',
    icon: Code2,
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Chakra UI', icon: SiChakraui },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'IIS & Windows Server', icon: FaWindows },
      { name: 'Git & GitHub', icon: SiGithub },
      { name: 'DevOps', icon: InfinityIcon },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    items: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'Plotly', icon: SiPlotly },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'SQL', icon: Database },
      { name: 'Chart.js', icon: SiChartdotjs },
    ],
  },
  {
    title: 'IoT & Web3',
    icon: CircuitBoard,
    items: [
      { name: 'Arduino', icon: SiArduino },
      { name: 'ESP32', icon: SiEspressif },
      { name: 'ESP8266', icon: SiEspressif },
      { name: 'Solidity', icon: SiSolidity },
      { name: 'Hardhat', icon: HardHat },
      { name: 'Ethers.js', icon: SiEthereum },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements & education                                          */
/* ------------------------------------------------------------------ */
export const achievements: Achievement[] = [
  {
    title: '1st Prize — Codeathon 3.0',
    description: 'Won first prize in a nationwide hackathon for developing an innovative solution.',
    kind: 'award',
    meta: '₹10,000 prize',
  },
  {
    title: 'Special Winner — NEUROTHON 2K26',
    description: 'Recognised as a Special Winner at NEUROTHON 2K26 for the project “Plan Panni Pannuvom”.',
    kind: 'award',
    meta: 'NEUROTHON 2K26',
  },
  {
    title: '1st Place — Startup Forage',
    description:
      'Secured first place with Jaswanth Jegan in the Startup Forage competition conducted by SRM Institute of Science and Technology (SRMIST).',
    kind: 'award',
    meta: 'SRMIST',
  },
  {
    title: 'Top 10 — Generative AI Hackathon',
    description: 'Palette AI, a generative-AI project, finished in the Top 10.',
    kind: 'finalist',
    meta: 'Palette AI',
  },
  {
    title: 'Research Publication — TastyLens AR',
    description: 'Published a research paper on the TastyLens AR application at the ICEET 2025 conference.',
    kind: 'publication',
    meta: 'ICEET 2025',
  },
  {
    title: 'Research Publication — Heal-Fit',
    description: 'Published a research paper on the Heal-Fit health application at the ICIRES 2025 conference.',
    kind: 'publication',
    meta: 'ICIRES 2025',
  },
  {
    title: 'National AI Hackathon Finalist',
    description: 'Selected as a finalist in the National AI Hackathon for an innovative use of machine learning.',
    kind: 'finalist',
    meta: 'National',
  },
];

export const education: Education[] = [
  {
    institution: 'DMI College of Engineering',
    degree: 'B.Tech in AI & Data Science',
    period: '2022 — 2026',
    description:
      'Studying advanced concepts in artificial intelligence, machine learning, deep learning and data science, while taking part in technical events, hackathons and research projects.',
  },
  {
    institution: 'The Holy Cross Matric Higher Sec School, Chennai',
    degree: 'Higher Secondary Education',
    period: '2021 — 2022',
    description: 'Focused on mathematics, physics and computer science.',
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications                                                    */
/* ------------------------------------------------------------------ */
export const professionalCertificates: Certification[] = [
  {
    title: 'Microsoft Azure AI Essentials',
    issuer: 'Microsoft & LinkedIn',
    date: 'Jun 13, 2025',
    duration: '3 hours 23 minutes',
    link: 'https://lnkd.in/ggkr7ztJ',
  },
  {
    title: 'Docker Foundations',
    issuer: 'Docker',
    date: 'Jun 13, 2025',
    duration: '3 hours 30 minutes',
    link: 'https://lnkd.in/gcJVwp6u',
  },
  {
    title: 'ServiceNow IT Leadership',
    issuer: 'ServiceNow',
    date: 'Jun 13, 2025',
    duration: '5 hours 17 minutes',
    link: 'https://lnkd.in/gASU4MBR',
  },
  {
    title: 'Search Engine Optimization',
    issuer: 'Moz',
    date: 'Jun 13, 2025',
    duration: '4 hours 52 minutes',
    link: 'https://lnkd.in/g_9ryJUK',
  },
  {
    title: 'Agile Project Management',
    issuer: 'Atlassian',
    date: 'Jun 12, 2025',
    duration: '7 hours 16 minutes',
    link: 'https://lnkd.in/gPXA-dcR',
  },
  {
    title: 'Career Essentials in GitHub',
    issuer: 'GitHub',
    date: 'Jun 12, 2025',
    duration: '4 hours 18 minutes',
    link: 'https://lnkd.in/gV5pUZGC',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Jun 8, 2025',
    duration: '6 hours 3 minutes',
    link: 'https://www.linkedin.com/learning/certificates/608f5cec7ca45f3a2d62e04db4058cd78b000e584cc0f03c8e29165af0af4804',
  },
  {
    title: 'Career Essentials in Cybersecurity',
    issuer: 'Microsoft & LinkedIn',
    date: 'Jun 8, 2025',
    duration: '6 hours 8 minutes',
    link: 'https://www.linkedin.com/learning/certificates/b25d1d9a3cfd5b9a06e968baa10db0dd880840042a08ceaffe08824fd79bf90f',
  },
  {
    title: 'Become a Full-Stack Web Developer',
    issuer: 'LinkedIn Learning',
    date: 'Jun 2025',
    duration: '30 hours 56 minutes',
    link: 'https://www.linkedin.com/learning/certificates/7c9268fb148da5410d33ff926260623f15702bf407f1629de2271124c531ad80',
  },
];

/** Add a `link` to any of these to make the row clickable. */
export const courseCertificates: Certification[] = [
  { title: 'AI & IoT', issuer: 'MSME', date: 'Feb 2025' },
  { title: 'SQL', issuer: 'LinkedIn Learning', date: 'Sep 2024' },
  { title: 'GitHub Copilot', issuer: 'Skill Nation', date: 'Aug 2024' },
  { title: 'Node.js', issuer: "Let's Upgrade", date: 'Jul 2024' },
  { title: 'Data Science', issuer: 'Forage', date: 'May 2024' },
];

/** Further certifications listed on the public LinkedIn profile. */
export const otherCertifications = ['React.js', 'Flask', 'AWS Amplify', 'DevOps', 'REST APIs', 'NoSQL'];

export const totalCertifications =
  professionalCertificates.length + courseCertificates.length + otherCertifications.length;

/* ------------------------------------------------------------------ */
/*  Derived stats                                                     */
/* ------------------------------------------------------------------ */
export const stats = [
  { value: `${projects.length}+`, label: 'Projects & products' },
  { value: `${experiences.length}`, label: 'Industry roles' },
  { value: `${achievements.filter((a) => a.kind !== 'publication').length}`, label: 'Awards & honours' },
  { value: `${totalCertifications}`, label: 'Certifications' },
];
