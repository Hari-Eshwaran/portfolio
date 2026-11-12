/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no UI changes needed.
 */
import {
  SiAmazonwebservices,
  SiArduino,
  SiChakraui,
  SiChartdotjs,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiEspressif,
  SiEthereum,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiGithubactions,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOllama,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiSolidity,
  SiStreamlit,
  SiSupabase,
  SiTableau,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  Glasses,
  HardHat,
  MessageSquareText,
  Network,
  Scan,
  Server,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react';
import type {
  Achievement,
  Certification,
  Education,
  Experience,
  Project,
  ProjectCategory,
  Publication,
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
  /** Square headshot. A 1000px+ version will look sharper on high-DPI screens. */
  photo: '/profile.png',
  photoSize: 288,
  resume: '/Harishwaran.pdf',
  emails: ['harishwaranpetchimuthu@gmail.com', 'tech@harishwaran.dpdns.org'],
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
    'Trained in Artificial Intelligence and Data Science, I work across machine learning, deep learning, computer vision, generative and agentic AI, IoT, blockchain and AR/VR — building AI-powered web platforms, enterprise automation systems, real-time analytics dashboards and cloud-deployed intelligent applications.',
  ],
  softSkills: ['Leadership', 'Problem solving', 'Self-learner', 'Critical thinking'],
  interests: [
    'Artificial Intelligence',
    'Entrepreneurship',
    'Agentic AI',
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
    location: 'Chennai',
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
    company: 'OneYes InfoTech Solutions',
    position: 'AI & Machine Learning Intern',
    period: 'Feb — Mar 2025',
    location: 'Chennai',
    highlights: [
      'Analyzed and processed 10,000+ mental-health records using machine learning, deep learning and NLP to identify behavioral and emotional patterns.',
      'Developed Power BI dashboards and real-time analytics systems that improved reporting efficiency by 35% and accelerated decision-making.',
      'Collaborated with cross-functional teams to optimize AI pipelines, improve data scalability and streamline intelligent automation.',
      'Awarded a Certificate of Excellence for outstanding performance.',
    ],
    stack: ['Python', 'Deep Learning', 'NLP', 'Power BI'],
  },
  {
    company: 'Vulture Lines Pvt Ltd',
    position: 'Data Analyst Intern',
    period: 'Feb — Mar 2025',
    location: 'Chennai',
    highlights: [
      'Performed large-scale analysis on 50,000+ business records to improve operational efficiency, reporting accuracy and predictive insights.',
      'Built automated preprocessing workflows and Power BI dashboards that reduced manual reporting effort by 40%.',
      'Delivered scalable analytics solutions using SQL, data visualization and Agile collaboration.',
    ],
    stack: ['SQL', 'Power BI', 'Data Visualization'],
  },
  {
    company: 'Novitech Private Limited',
    position: 'Full Stack Developer Intern',
    period: 'Jun — Jul 2024',
    location: 'Online',
    highlights: [
      'Developed scalable full-stack web applications using React.js, Node.js, MongoDB and REST APIs, following SDLC practices.',
      'Integrated backend APIs and optimized UI systems, improving application performance and user experience by 30%.',
      'Worked in Agile teams using GitHub version control and CI/CD workflows.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    company: 'Hyundai Transys Lear',
    position: 'Production and UI/UX Design Intern',
    period: 'Nov 2022 — Apr 2023',
    location: 'Chennai',
    highlights: [
      'Supported workflow optimization, process monitoring and operational-efficiency improvements in the Production department.',
      'Designed intuitive UI/UX prototypes and user-centered layouts for internal digital systems, improving usability.',
      'Collaborated with production and technical teams to streamline design workflows and improve visual consistency.',
    ],
    stack: ['UI/UX Design', 'Prototyping'],
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
    badges: ['Enterprise ERP'],
  },
  {
    title: 'ZARA — AI Student Assistant',
    description:
      'AI and IoT-powered student assistant that automates academic scheduling, reminders and personalized learning assistance for 100+ students through real-time AI interaction.',
    technologies: ['AI Assistant', 'IoT', 'Real-time AI'],
    category: 'ai',
    badges: ["Winner · Drestein'25"],
    demoLink: 'https://zara-ai.vercel.app/',
  },
  {
    title: 'ReportX — Offline AI Audit Generator',
    description:
      'Secure, offline audit-report generator using Ollama and local LLM processing — cuts enterprise documentation effort by 70% while keeping data on-premise.',
    technologies: ['Ollama', 'Local LLMs', 'Python', 'Offline AI'],
    category: 'ai',
    badges: ['2nd Place · Project Expo'],
    demoLink: 'https://report-x-ai.vercel.app/',
  },
  {
    title: 'AgriSmart — AI Smart Agriculture',
    description:
      'AI-powered agriculture ecosystem integrating IoT sensors, blockchain traceability, predictive analytics and real-time monitoring for crop and farm management.',
    technologies: ['IoT', 'Blockchain', 'Predictive Analytics', 'Real-time Monitoring'],
    category: 'ai',
    badges: ['Winner · DCE Hackathon'],
    demoLink: 'https://agrismart-ai-web.vercel.app/',
  },
  {
    title: 'SmartBin — Intelligent Waste Management',
    description:
      'Multi-modal AI and IoT waste-management platform that automates waste classification and improves recycling efficiency with real-time analytics.',
    technologies: ['Multi-modal AI', 'IoT', 'Real-time Analytics'],
    category: 'ai',
    badges: ["Special Winner · Ecoverse'25"],
    demoLink: 'https://smartbin-ppt.netlify.app/',
  },
  {
    title: 'Plan Panni Pannuvom — AI Project Generator',
    description:
      'Generative and agentic AI platform that produces 100+ automated project workflows, intelligent roadmaps and execution guidance for development teams.',
    technologies: ['Generative AI', 'Agentic AI', 'Automation'],
    category: 'ai',
    badges: ['Special Winner · NEUROTHON 2K26'],
    demoLink: 'https://plan-panni-pannuvom-p3.vercel.app/',
  },
  {
    title: 'TastyLens — AR/VR Food Ordering',
    description:
      'AR/VR food-ordering platform with blockchain-enabled supply-chain transparency and immersive food visualization, built with React.js and AI.',
    technologies: ['React', 'Node.js', 'AR/VR', 'Blockchain', 'MongoDB'],
    category: 'web',
    badges: ['Winner · Codeathon 3.0', 'Published · ICEET 2025'],
    githubLink: 'https://github.com/Hari-Eshwaran/TastyLens-AR',
    demoLink: 'https://tastylensar.vercel.app/',
  },
  {
    title: 'Heal-Fit',
    description:
      'Health and fitness tracking application with personalized workout and nutrition recommendations.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    category: 'web',
    badges: ['Published · ICIRES 2025'],
    githubLink: 'https://github.com/Hari-Eshwaran/Heal-fit',
    demoLink: 'https://heal-fit.vercel.app/',
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
    title: 'Palette AI',
    description: 'Generative-AI project built at a hackathon, where it placed in the Top 10.',
    technologies: ['Generative AI'],
    category: 'ai',
    badges: ['Top 10 · GenAI Hackathon'],
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
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Keras', icon: SiKeras },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'YOLOv5', icon: Scan },
      { name: 'Deep Learning', icon: Network },
      { name: 'NLP', icon: MessageSquareText },
      { name: 'Computer Vision', icon: Eye },
    ],
  },
  {
    title: 'Generative & Agentic AI',
    icon: Sparkles,
    items: [
      { name: 'Generative AI', icon: Sparkles },
      { name: 'Agentic AI', icon: Bot },
      { name: 'Ollama', icon: SiOllama },
      { name: 'Gemini API', icon: SiGooglegemini },
      { name: 'AI Automation', icon: Zap },
    ],
  },
  {
    title: 'Languages & Frontend',
    icon: Code2,
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
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
      { name: 'Express.js', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
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
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'CI/CD', icon: Workflow },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    items: [
      { name: 'SQL', icon: Database },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Tableau', icon: SiTableau },
      { name: 'Plotly', icon: SiPlotly },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Chart.js', icon: SiChartdotjs },
      { name: 'Predictive Analytics', icon: TrendingUp },
    ],
  },
  {
    title: 'IoT, Web3 & XR',
    icon: CircuitBoard,
    items: [
      { name: 'Arduino', icon: SiArduino },
      { name: 'ESP32', icon: SiEspressif },
      { name: 'ESP8266', icon: SiEspressif },
      { name: 'Edge AI', icon: Cpu },
      { name: 'AR/VR', icon: Glasses },
      { name: 'Solidity', icon: SiSolidity },
      { name: 'Hardhat', icon: HardHat },
      { name: 'Ethers.js', icon: SiEthereum },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements, research & education                                */
/* ------------------------------------------------------------------ */
/** Newest first. */
export const achievements: Achievement[] = [
  {
    rank: 'Winner',
    event: 'DevHub 1.0',
    host: 'VIT Chennai',
    date: 'Apr 2026',
    project: 'HypexAI',
    description: 'Secured 1st place in a national-level hackathon for developing HypexAI.',
    prize: 10000,
    kind: 'award',
  },
  {
    rank: '2nd Place',
    event: 'Project Expo',
    host: 'DMI College of Engineering',
    date: 'Jan 2026',
    project: 'ReportX',
    description: 'Awarded 2nd place for ReportX, an offline AI-powered enterprise audit automation platform.',
    prize: 8000,
    kind: 'award',
  },
  {
    rank: 'Special Winner',
    event: "Ecoverse'25",
    host: 'VIT Chennai',
    date: 'Jan 2026',
    project: 'SmartBin',
    description: 'Recognized for building SmartBin, an AI and IoT-based intelligent waste-management ecosystem.',
    prize: 5000,
    kind: 'award',
  },
  {
    rank: 'Winner',
    event: 'DCE Hackathon',
    host: 'Dhanalakshmi College of Engineering',
    date: 'Aug 2025',
    project: 'AgriSmart',
    description: 'Won 1st place for developing AgriSmart, an AI-powered predictive agriculture platform.',
    prize: 5000,
    kind: 'award',
  },
  {
    rank: 'Winner',
    event: "Drestein'25",
    host: 'Saveetha Engineering College',
    date: 'Jun 2025',
    project: 'ZARA',
    description: 'Won 1st place for developing ZARA – The AI Pilot, an AI-powered intelligent assistant platform.',
    prize: 10000,
    kind: 'award',
  },
  {
    rank: 'Winner',
    event: 'Codeathon 3.0',
    host: 'Prathyusha Engineering College',
    date: 'Mar 2025',
    project: 'TastyLens',
    description: 'Secured 1st place for building TastyLens, an AR/VR and blockchain-based food-technology platform.',
    prize: 10000,
    kind: 'award',
  },
  {
    rank: 'Special Winner',
    event: 'NEUROTHON 2K26',
    project: 'Plan Panni Pannuvom',
    description: 'Recognized as a Special Winner for Plan Panni Pannuvom, a generative and agentic AI project generator.',
    kind: 'award',
  },
  {
    rank: '1st Place',
    event: 'Startup Forage',
    host: 'SRMIST',
    description:
      'Secured first place with Jaswanth Jegan in the Startup Forage competition conducted by SRM Institute of Science and Technology.',
    kind: 'award',
  },
  {
    rank: 'Top 10',
    event: 'Generative AI Hackathon',
    project: 'Palette AI',
    description: 'Palette AI, a generative-AI project, finished in the Top 10.',
    kind: 'finalist',
  },
  {
    rank: 'Finalist',
    event: 'National AI Hackathon',
    description: 'Selected as a finalist for an innovative use of machine learning.',
    kind: 'finalist',
  },
];

export const publications: Publication[] = [
  {
    venue: 'ICEET 2025',
    title: 'TastyLens AR',
    description: 'Research paper on the TastyLens AR/VR food-technology platform.',
  },
  {
    venue: 'ICIRES 2025',
    title: 'Heal-Fit',
    description: 'Research paper on the Heal-Fit health and fitness application.',
  },
];

export const prizeTotal = achievements.reduce((sum, a) => sum + (a.prize ?? 0), 0);

export const education: Education[] = [
  {
    institution: 'DMI College of Engineering, Chennai',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    period: '2022 — 2026',
    grade: 'CGPA 8.2 / 10',
    description:
      'Coursework and projects across machine learning, deep learning, computer vision and data science, alongside hackathons, research publications and technical events.',
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
  { title: 'Artificial Intelligence and IoT', issuer: 'MSME', date: 'Feb 2025' },
  { title: 'SQL', issuer: 'LinkedIn Learning', date: 'Sep 2024' },
  { title: 'Microsoft Copilot', issuer: 'Skill Nation', date: 'Aug 2024' },
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
export const awardCount = achievements.filter((a) => a.kind === 'award').length;

export const stats = [
  { value: `${projects.length}+`, label: 'Projects & products' },
  { value: `${awardCount}`, label: 'Hackathon & startup awards' },
  { value: `₹${Math.round(prizeTotal / 1000)}K+`, label: 'Prize money won' },
  { value: `${totalCertifications}`, label: 'Certifications' },
];
