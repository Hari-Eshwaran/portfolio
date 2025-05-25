import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-16 md:pt-0 min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-animate -z-10 opacity-10"></div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="gradient-text">Harishwaran.P</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
              AI & Data Science Student | Full Stack Developer | Chief Technology Officer (CTO)
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              Creative tech enthusiast passionate about AI, data science, and full-stack development. 
              Known for building innovative projects and participating in national hackathons.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Harishwaran.pdf" className="btn-primary" download>
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image or Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 absolute top-0 left-0 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10">
                <img
                  src="/f.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-600 dark:text-gray-400 flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;