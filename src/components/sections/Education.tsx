import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: 'DMI College of Engineering',
      degree: 'B.Tech in AI & Data Science',
      period: '2022 - 2026',
      description: 'Studying advanced concepts in artificial intelligence, machine learning, deep learning, and data science. Participating in various technical events, hackathons, and research projects.'
    },
    {
      institution: 'The Holy Cross Matric Higher Sec School, Chennai',
      degree: 'Higher Secondary Education',
      period: '2021 - 2022',
      description: 'Completed higher secondary education with focus on mathematics, physics, and computer science.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="card p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <GraduationCap size={32} className="text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-2">{item.institution}</h4>
                  <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {item.period}
                  </div>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
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

export default Education;