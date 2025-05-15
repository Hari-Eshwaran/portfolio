import React from 'react';
import { Trophy, FileText, Medal } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: '1st Prize in Codeathon 3.0',
      description: 'Won ₹10,000 prize for developing an innovative solution in a nationwide hackathon.',
      icon: <Trophy size={24} className="text-yellow-500" />
    },
    {
      title: 'Research Publication – Tasty Lens',
      description: 'Published research paper on Tasty Lens AR application at ICEET 2025 conference.',
      icon: <FileText size={24} className="text-blue-500" />
    },
    {
      title: 'Research Publication – Heal Fit',
      description: 'Published research paper on Heal Fit health application at ICIRES 2025 conference.',
      icon: <FileText size={24} className="text-blue-500" />
    },
    {
      title: 'AI Hackathon Finalist',
      description: 'Selected as a finalist in the National AI Hackathon for innovative use of machine learning.',
      icon: <Medal size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;