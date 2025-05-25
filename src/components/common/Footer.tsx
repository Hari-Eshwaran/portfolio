import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-auto">
      <div className="container-custom">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold gradient-text">Harishwaran.P</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI & Data Science Student | Full Stack Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/Hari-Eshwaran" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harishwaran1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:harishwaran@hexpertify.com" 
              aria-label="Email"
              className="social-icon"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> {currentYear}
          </p>
          <p className="mt-2">All Rights Reserved & copy; Harishwaran.P</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;