import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'ai' | 'web' | 'data';
  image?: string;
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'data'>('all');

  const projects: Project[] = [
    {
      title: 'Face Emotion Recognition',
      description: 'Deep learning model to detect and classify human facial emotions using CNN and RNN architectures.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
      category: 'ai',
      githubLink: 'https://github.com/Hari-Eshwaran/Face-Recog',
      demoLink: 'https://auro-bot-snowy.vercel.app/'
    },
    {
      title: 'Gesture Recognition',
      description: 'LSTM-based system for recognizing hand gestures to enable touchless human-computer interaction.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Computer Vision'],
      category: 'ai',
      githubLink: '#'
    },
    {
      title: 'HR Analysis',
      description: 'Web application for HR departments to analyze employee data and derive actionable insights.',
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Chart.js'],
      category: 'web',
      githubLink: 'https://github.com/Hari-Eshwaran/Employee-Performance-Dashboard',
      demoLink: 'https://employee-performance-dashboard-nine.vercel.app/'
    },
    {
      title: 'Power Outage Prediction',
      description: 'Predictive model to forecast power outages based on historical data and weather patterns.',
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Python', 'Machine Learning'],
      category: 'data',
      githubLink: 'https://github.com/Hari-Eshwaran/Power-Prediction',
      demoLink: 'https://powerprediction.vercel.app/'
    },
    {
      title: 'Approval Management System',
      description: 'Workflow automation system for managing approval processes in organizations.',
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Node.js'],
      category: 'web',
      githubLink: 'https://github.com/Hari-Eshwaran/Approval-Management-System',
      demoLink: 'https://approval-management-system.vercel.app/'
    },
    {
      title: 'FinEcho',
      description: 'Financial management platform with budget tracking, expense analysis, and investment recommendations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Supabase'],
      category: 'web',
      githubLink: 'https://github.com/Hari-Eshwaran/FinEcho',
      demoLink: 'https://fin-echo.vercel.app/'
    },
    {
      title: 'TastyLens-AR',
      description: 'Augmented reality application that provides nutritional information and recipes by scanning food items.',
      technologies: ['React', 'Node.js', 'Ethereum', 'ARKit', 'MongoDB'],
      category: 'web',
      githubLink: 'https://github.com/Hari-Eshwaran/TastyLens-AR',
      demoLink: 'https://tastylensar.vercel.app/'
    },
    {
      title: 'Heal-Fit',
      description: 'Health and fitness tracking application with personalized workout and nutrition recommendations.',
      technologies: ['React', 'TypeScript', 'Supabase'],
      category: 'web',
      githubLink: 'https://github.com/Hari-Eshwaran/Heal-fit',
      demoLink: 'https://heal-fit.vercel.app/'
    },
    {
      title: 'Human Activity Recognition',
      description: 'AI system that recognizes human activities from video or sensor data using CNN and LSTM models.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'LSTM'],
      category: 'ai',
      githubLink: '#'
    },
    {
      title: 'Employee Performance Dashboard',
      description: 'Interactive dashboard for monitoring and analyzing employee performance metrics.',
      technologies: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
      category: 'data',
      githubLink: 'https://github.com/Hari-Eshwaran/Employee-Performance-Dashboard',
      demoLink: 'https://employee-performance-dashboard-nine.vercel.app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('ai')} 
            className={`px-4 py-2 rounded-full ${filter === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
          >
            AI & ML
          </button>
          <button 
            onClick={() => setFilter('web')} 
            className={`px-4 py-2 rounded-full ${filter === 'web' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
          >
            Web Dev
          </button>
          <button 
            onClick={() => setFilter('data')} 
            className={`px-4 py-2 rounded-full ${filter === 'data' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
          >
            Data Science
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="pill">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between mt-auto">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                )}
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;