import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Certifications from './components/sections/Certifications';
import ProfessionalCertificates from './components/sections/ProfessionalCertificates';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Theme Toggle Button */}
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="fixed z-50 bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
      </button>
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <TechStack />
        <ProfessionalCertificates />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;