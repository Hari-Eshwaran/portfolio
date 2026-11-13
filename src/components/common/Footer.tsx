import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { navLinks, profile } from '../../data/portfolio';
import LocalTime from '../ui/LocalTime';

const connectLinks = [
  { label: 'GitHub', href: profile.socials.github, external: true },
  { label: 'LinkedIn', href: profile.socials.linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.emails[0]}`, external: false },
  { label: 'Résumé', href: profile.resume, external: false },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <a href="#hero" className="inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-fg font-mono text-[11px] font-semibold tracking-wider text-bg">
              {profile.initials}
            </span>
            <span className="font-medium tracking-tight">{profile.name}</span>
          </a>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">{profile.summary}</p>
          <a href="#hero" className="btn-ghost mt-8 !py-2.5">
            Back to top <ArrowUp size={15} />
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="link-underline text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Connect</p>
          <ul className="space-y-3 text-sm">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(link.label === 'Résumé' ? { download: true } : {})}
                  className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Local time</p>
          <p className="text-2xl font-medium tracking-tight">
            <LocalTime />
          </p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="container-x -mb-[0.18em] whitespace-nowrap text-center text-[min(16vw,12rem)] font-semibold leading-none tracking-[-0.06em] text-fg/[0.06]">
          {profile.firstName}
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Designed &amp; built in Chennai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
