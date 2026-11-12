import { ArrowUpRight, Award, Clock } from 'lucide-react';
import { FaLinkedinIn, FaMicrosoft } from 'react-icons/fa';
import { SiAtlassian, SiDocker, SiGithub } from 'react-icons/si';
import {
  courseCertificates,
  otherCertifications,
  professionalCertificates,
  totalCertifications,
} from '../../data/portfolio';
import type { Certification, IconComponent } from '../../types';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';

/** Brand mark per issuer; anything not listed falls back to a generic award icon. */
const issuerIcons: Record<string, IconComponent> = {
  'Microsoft & LinkedIn': FaMicrosoft,
  'LinkedIn Learning': FaLinkedinIn,
  Docker: SiDocker,
  GitHub: SiGithub,
  Atlassian: SiAtlassian,
};

const IssuerMark = ({ issuer }: { issuer: string }) => {
  const Icon = issuerIcons[issuer] ?? Award;
  return <Icon size={17} />;
};

/** "4 hours 52 minutes" → "4h 52m" */
const shortDuration = (duration: string) =>
  duration.replace(/\s*hours?/, 'h').replace(/\s*minutes?/, 'm');

const CertRow = ({ cert }: { cert: Certification }) => {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent-ink">
        <IssuerMark issuer={cert.issuer} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug tracking-tight">{cert.title}</span>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted">
          <span>{cert.issuer}</span>
          <span aria-hidden="true">·</span>
          <span>{cert.date}</span>
          {cert.duration && (
            <>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 font-mono">
                <Clock size={11} />
                {shortDuration(cert.duration)}
              </span>
            </>
          )}
        </span>
      </span>
      {cert.link && (
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
        />
      )}
    </>
  );

  const base =
    'group flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors duration-300';

  return cert.link ? (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} hover:border-fg/20 hover:bg-surface-2`}
      aria-label={`${cert.title} certificate from ${cert.issuer} (opens in new tab)`}
    >
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
};

const CertGroup = ({ id, title, items }: { id?: string; title: string; items: Certification[] }) => (
  <div id={id} className="scroll-mt-28">
    <Reveal className="mb-5 flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <span className="font-mono text-xs text-muted">{String(items.length).padStart(2, '0')}</span>
    </Reveal>
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((cert, i) => (
        <li key={`${cert.title}-${cert.issuer}`}>
          <Reveal delay={Math.min((i % 6) * 0.04, 0.2)} y={16} className="h-full">
            <CertRow cert={cert} />
          </Reveal>
        </li>
      ))}
    </ul>
  </div>
);

const Certifications = () => (
  <section id="certifications" className="relative border-t border-line py-24 md:py-32">
    <div className="container-x">
      <SectionHeading
        index="06"
        label="Credentials"
        title={
          <>
            Certified &amp; <Accent>always</Accent> learning.
          </>
        }
        description={`${totalCertifications} certifications across AI, cloud, DevOps, security and product leadership.`}
      />

      <div className="space-y-14">
        <CertGroup id="professional-certificates" title="Professional certificates" items={professionalCertificates} />
        <CertGroup title="Courses & certifications" items={courseCertificates} />

        <div>
          <Reveal className="mb-5 flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Also certified in</h3>
            <span className="font-mono text-xs text-muted">
              {String(otherCertifications.length).padStart(2, '0')}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="flex flex-wrap gap-2">
              {otherCertifications.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm"
                >
                  <Award size={14} className="text-accent-ink" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
