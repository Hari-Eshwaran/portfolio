import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  icon?: React.ReactNode;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'AI & IoT',
      issuer: 'MSME',
      date: 'February 2025',
      link: '#',
      icon: <Award size={24} />
    },
    {
      title: 'SQL',
      issuer: 'LinkedIn Learning',
      date: 'September 2024',
      link: '#',
      icon: <Award size={24} />
    },
    {
      title: 'GitHub Copilot',
      issuer: 'Skill Nation',
      date: 'August 2024',
      link: '#',
      icon: <Award size={24} />
    },
    {
      title: 'Node.js',
      issuer: "Let's Upgrade",
      date: 'July 2024',
      link: '#',
      icon: <Award size={24} />
    },
    {
      title: 'Data Science',
      issuer: 'Forage',
      date: 'May 2024',
      link: '#',
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="card p-6 border-t-4 border-purple-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {cert.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <div className="mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{cert.issuer}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{cert.date}</span>
                  </div>
                  
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;