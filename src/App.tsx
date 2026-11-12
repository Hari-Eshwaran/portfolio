import { useCallback, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Intro from './components/common/Intro';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Milestones from './components/sections/Milestones';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

/**
 * false → the intro plays on every visit.
 * true  → it plays once per browser session (reloads skip straight to the site).
 */
const INTRO_ONCE_PER_SESSION = false;

const shouldShowIntro = () => {
  if (!INTRO_ONCE_PER_SESSION) return true;
  try {
    return sessionStorage.getItem('intro-seen') !== '1';
  } catch {
    return true;
  }
};

function App() {
  const [showIntro] = useState(shouldShowIntro);
  const [introDone, setIntroDone] = useState(!showIntro);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <MotionConfig reducedMotion="user">
      {showIntro && <Intro onComplete={handleIntroComplete} />}

      <div className="grain relative flex min-h-screen flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-fg"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main" className="flex-1">
          <Hero ready={introDone} />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <Milestones />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
