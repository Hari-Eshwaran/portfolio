import React from 'react';
import { Award, ExternalLink, Clock } from 'lucide-react';

interface ProfessionalCertificate {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  link?: string;
  icon?: React.ReactNode;
}

const ProfessionalCertificates: React.FC = () => {
  const certificates: ProfessionalCertificate[] = [
    {
      title: 'Search Engine Optimization – Professional Certificate',
      issuer: 'Moz',
      date: 'June 13, 2025',
      duration: '4 hours 52 minutes',
      link: 'https://lnkd.in/g_9ryJUK',
      icon: <Award size={24} />
    },
    {
      title: 'ServiceNow IT Leadership – Professional Certificate',
      issuer: 'ServiceNow',
      date: 'June 13, 2025',
      duration: '5 hours 17 minutes',
      link: 'https://lnkd.in/gASU4MBR',
      icon: <Award size={24} />
    },
    {
      title: 'Microsoft Azure AI Essentials – Professional Certificate',
      issuer: 'Microsoft & LinkedIn',
      date: 'June 13, 2025',
      duration: '3 hours 23 minutes',
      link: 'https://lnkd.in/ggkr7ztJ',
      icon: <Award size={24} />
    },
    {
      title: 'Docker Foundations – Professional Certificate',
      issuer: 'Docker',
      date: 'June 13, 2025',
      duration: '3 hours 30 minutes',
      link: 'https://lnkd.in/gcJVwp6u',
      icon: <Award size={24} />
    },
    {
      title: 'Atlassian Agile Project Management Professional Certificate',
      issuer: 'Atlassian',
      date: 'June 12, 2025',
      duration: '7 hours 16 minutes',
      link: 'https://lnkd.in/gPXA-dcR',
      icon: <Award size={24} />
    },
    {
      title: 'Career Essentials in GitHub – Professional Certificate',
      issuer: 'GitHub',
      date: 'June 12, 2025',
      duration: '4 hours 18 minutes',
      link: 'https://lnkd.in/gV5pUZGC',
      icon: <Award size={24} />
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      date: 'June 8, 2025',
      duration: '6 hours 3 minutes',
      link: 'https://www.linkedin.com/learning/certificates/608f5cec7ca45f3a2d62e04db4058cd78b000e584cc0f03c8e29165af0af4804',
      icon: <Award size={24} />
    },
    {
      title: 'Career Essentials in Cybersecurity',
      issuer: 'Microsoft & LinkedIn',
      date: 'June 8, 2025',
      duration: '6 hours 8 minutes',
      link: 'https://www.linkedin.com/learning/certificates/b25d1d9a3cfd5b9a06e968baa10db0dd880840042a08ceaffe08824fd79bf90f',
      icon: <Award size={24} />
    },
    {
      title: 'Become a Full-Stack Web Developer',
      issuer: 'LinkedIn Learning',
      date: 'June 2025',
      duration: '30 hours 56 minutes',
      link: 'https://www.linkedin.com/learning/certificates/7c9268fb148da5410d33ff926260623f15702bf407f1629de2271124c531ad80',
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="professional-certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Professional Certificates</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
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
                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    <span>{cert.duration}</span>
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

export default ProfessionalCertificates; 