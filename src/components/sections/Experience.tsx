import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Hexpertify',
      position: 'Chief Technology Officer (CTO)',
      period: 'Since 2024',
      description: 'Led the architecture and deployment of Hexpertify AI-powered consulting platform. Integrated React, TypeScript, Node.js, Supabase, and Gemini 1.5 Pro to power features like personalized expert matching, secure data storage, and voice-enabled AI assistants. Built scalable microservices to support mental health, fitness, legal, and financial consultations with <1s response times. Managed a cross-functional dev team and implemented agile workflows, boosting release velocity by 60%. Ensured robust data privacy & security policies, aligning with ISO and GDPR standards.'
    },
    {
      company: 'Vulture Lines Pvt Ltd',
      position: 'Data Analyst Intern',
      period: 'Feb 2025 - Mar 2025',
      description: 'Analyzed large datasets to extract meaningful insights. Developed data visualization dashboards to communicate findings effectively. Collaborated with cross-functional teams to identify business opportunities based on data analysis.'
    },
    {
      company: 'Novitech Private Ltd',
      position: 'Full Stack Developer',
      period: 'Jun 2024 - Jul 2024',
      description: 'Designed and implemented responsive web applications using React and Node.js. Collaborated with UX/UI designers to create user-friendly interfaces. Integrated backend APIs and optimized database queries for improved performance.'
    },
    {
      company: 'Hyundai Transys Lear',
      position: 'Production Management',
      period: 'Sep 2023 - Oct 2023',
      description: 'Monitored production processes and implemented efficiency improvements. Coordinated with different departments to ensure timely delivery of products. Analyzed production data to identify bottlenecks and suggest solutions.'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900"></div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="exp-card">
                    <h3 className="text-xl font-bold mb-1">
                      {exp.position === 'Chief Technology Officer (CTO)' ? (
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {exp.position}
                        </span>
                      ) : (
                        exp.position
                      )}
                    </h3>
                    <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-2">
                      {exp.company === 'Hexpertify' ? (
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {exp.company}
                        </span>
                      ) : (
                        exp.company
                      )}
                    </h4>
                    <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;