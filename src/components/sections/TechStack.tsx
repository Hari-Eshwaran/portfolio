import React, { useState } from 'react';
import { Code, Server, Database, Palette, BarChart, Cpu } from 'lucide-react';

interface TechSkill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'design' | 'dataScience' | 'other';
}

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const techSkills: TechSkill[] = [
    { name: 'Python', icon: <Code size={24} />, category: 'backend' },
    { name: 'React.js', icon: <Code size={24} />, category: 'frontend' },
    { name: 'Node.js', icon: <Server size={24} />, category: 'backend' },
    { name: 'Tailwind CSS', icon: <Palette size={24} />, category: 'frontend' },
    { name: 'Figma', icon: <Palette size={24} />, category: 'design' },
    { name: 'PowerBI', icon: <BarChart size={24} />, category: 'dataScience' },
    { name: 'DevOps', icon: <Server size={24} />, category: 'other' },
    { name: 'Machine Learning', icon: <Cpu size={24} />, category: 'dataScience' },
    { name: 'MongoDB', icon: <Database size={24} />, category: 'database' },
    { name: 'TypeScript', icon: <Code size={24} />, category: 'frontend' },
    { name: 'SQL', icon: <Database size={24} />, category: 'database' },
    { name: 'TensorFlow', icon: <Cpu size={24} />, category: 'dataScience' }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'dataScience', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? techSkills
    : techSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Tech Stack</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="tech-icon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3 text-purple-600 dark:text-purple-400">
                {skill.icon}
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;