import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { navLinks, profile } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ui/ThemeToggle';

// 'hero' is observed too, so no link stays highlighted after scrolling back to the top.
const sectionIds = ['hero', ...navLinks.map((link) => link.id)];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and enable Escape-to-close while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !isOpen
            ? 'border-b border-line/70 bg-bg/75 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" onClick={close} className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-fg font-mono text-[11px] font-semibold tracking-wider text-bg transition-transform duration-300 group-hover:-rotate-6">
              {profile.initials}
            </span>
            <span className="hidden font-medium tracking-tight sm:block">{profile.shortName}</span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-line bg-surface/70 p-1 shadow-sm backdrop-blur-xl">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative isolate block rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300 ${
                        isActive ? 'text-fg' : 'text-muted hover:text-fg'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full border border-line bg-surface-2"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resume}
              download
              className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex"
              aria-label="Download résumé (PDF)"
            >
              Résumé
              <Download size={15} />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="icon-btn lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex min-h-full flex-col pb-10 pt-28">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.4 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={close}
                      className={`group flex items-baseline gap-4 border-b border-line py-3 text-3xl font-semibold tracking-tight transition-colors sm:text-4xl ${
                        active === link.id ? 'text-accent-ink' : 'text-fg'
                      }`}
                    >
                      <span className="w-6 font-mono text-xs font-normal text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                      <ArrowUpRight
                        size={22}
                        className="ml-auto self-center text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                <a href={profile.resume} download className="btn-primary" onClick={close}>
                  Download résumé <Download size={16} />
                </a>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                  <SiGithub size={17} />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
