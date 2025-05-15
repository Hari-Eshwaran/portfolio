import React from 'react';
import { BrainCircuit, Languages, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Content */}
          <div className="md:col-span-2">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I am Harishwaran.P, an AI & Data Science student with a passion for developing innovative solutions using 
              cutting-edge technologies. My journey in tech began with a curiosity about how AI can solve real-world problems, 
              which led me to pursue a B.Tech in AI & Data Science.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              As a full-stack developer, I enjoy building end-to-end applications that combine beautiful frontend experiences with 
              powerful backend systems. I have experience working with various technologies and frameworks, from React and Node.js to 
              advanced machine learning models using Python.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm constantly learning and challenging myself through hackathons, research projects, and building applications 
              that make a difference. I believe in the power of technology to transform lives and am committed to creating 
              solutions that are both innovative and user-friendly.
            </p>
          </div>
          
          {/* Skills & Info Cards */}
          <div className="space-y-6">
            {/* Soft Skills */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <BrainCircuit size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Self-Learner
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Problem Solving
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Leadership
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Critical Thinking
                </li>
              </ul>
            </div>
            
            {/* Languages */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Languages size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tamil (Native)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  English (Professional)
                </li>
              </ul>
            </div>
            
            {/* Interest */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Artificial Intelligence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Hackathons
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;