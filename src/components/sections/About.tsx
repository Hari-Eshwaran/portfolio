import { ArrowUpRight, BrainCircuit, Compass, GraduationCap, Languages, MapPin } from 'lucide-react';
import { about, education, profile } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';
import LocalTime from '../ui/LocalTime';
import type { IconComponent } from '../../types';

const CardLabel = ({ icon: Icon, children }: { icon: IconComponent; children: string }) => (
  <p className="eyebrow flex items-center gap-2">
    <Icon size={14} className="text-accent-ink" />
    {children}
  </p>
);

const About = () => {
  const degree = education[0];

  return (
    <section id="about" className="relative border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              From writing code to building a <Accent>company</Accent>.
            </>
          }
          description="Engineer by training, entrepreneur by choice — I care about what ships, not just what demos."
        />

        <div className="grid gap-4 md:grid-cols-6">
          {/* Bio */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <SpotlightCard className="flex h-full flex-col p-7 md:p-10">
              <p className="eyebrow">Who I am</p>
              <p className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]">
                {about.lead}
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a href="#experience" className="btn-ghost !py-2.5">
                  My journey <ArrowUpRight size={15} />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Currently */}
          <Reveal className="md:col-span-2" delay={0.05}>
            <SpotlightCard className="h-full overflow-hidden p-7">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
              <p className="eyebrow flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Currently
              </p>
              <p className="mt-6 text-3xl font-semibold tracking-tight">{profile.currentRole}</p>
              <p className="mt-1 text-muted">
                at {profile.currentCompany} · since {profile.currentSince}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Leading a Chennai-based company building software, AI, automation and IoT products.
              </p>
              <a
                href={profile.currentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 inline-flex items-center gap-1 text-sm text-accent-ink"
              >
                Visit company site <ArrowUpRight size={14} />
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Location */}
          <Reveal className="md:col-span-2" delay={0.1}>
            <SpotlightCard className="h-full p-7">
              <CardLabel icon={MapPin}>Based in</CardLabel>
              <p className="mt-6 text-3xl font-semibold tracking-tight">{profile.location}</p>
              <p className="mt-1 font-mono text-sm text-muted">
                <LocalTime /> · GMT+5:30
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Education snapshot */}
          <Reveal className="md:col-span-3" delay={0.05}>
            <SpotlightCard className="h-full p-7">
              <CardLabel icon={GraduationCap}>Education</CardLabel>
              <p className="mt-6 text-xl font-semibold tracking-tight">{degree.degree}</p>
              <p className="mt-1 text-muted">{degree.institution}</p>
              <p className="mt-4 font-mono text-xs text-muted">
                {degree.period}
                {degree.grade && <span className="text-accent-ink"> · {degree.grade}</span>}
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Interests */}
          <Reveal className="md:col-span-3" delay={0.1}>
            <SpotlightCard className="h-full p-7">
              <CardLabel icon={Compass}>Interests</CardLabel>
              <ul className="mt-6 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-sm"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Soft skills */}
          <Reveal className="md:col-span-3" delay={0.05}>
            <SpotlightCard className="h-full p-7">
              <CardLabel icon={BrainCircuit}>How I work</CardLabel>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {about.softSkills.map((skill, i) => (
                  <li key={skill} className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-accent-ink">0{i + 1}</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Languages */}
          <Reveal className="md:col-span-3" delay={0.1}>
            <SpotlightCard className="h-full p-7">
              <CardLabel icon={Languages}>Languages</CardLabel>
              <dl className="mt-6 divide-y divide-line">
                {about.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                    <dt>{lang.name}</dt>
                    <dd className="font-mono text-xs text-muted">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
