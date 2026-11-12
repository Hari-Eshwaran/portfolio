import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_OUT } from './motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades and lifts its children into view once, when scrolled to. */
const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

export default Reveal;
