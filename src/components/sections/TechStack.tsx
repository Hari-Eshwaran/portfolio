import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { professionalCertificates, skillGroups, totalCertifications } from '../../data/portfolio';
import type { Skill } from '../../types';
import { useMounted } from '../../hooks/useMounted';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

const allSkills = skillGroups.flatMap((group) => group.items);
const half = Math.ceil(allSkills.length / 2);
const marqueeRows = [allSkills.slice(0, half), allSkills.slice(half)];

// "Microsoft & LinkedIn" → ["Microsoft", "LinkedIn Learning"], then de-duplicate.
const certifiedBy = Array.from(
  new Set(
    professionalCertificates.flatMap((c) =>
      c.issuer.split(' & ').map((name) => (name === 'LinkedIn' ? 'LinkedIn Learning' : name)),
    ),
  ),
);

/** Decorative logo strip — rendered in the browser only, to keep the static HTML light. */
const MarqueeRow = ({ items, reverse = false, show }: { items: Skill[]; reverse?: boolean; show: boolean }) => (
  <div className="mask-x pause-on-hover flex h-[42px] overflow-hidden">
    {/* Content is duplicated so the -50% translate loops seamlessly */}
    {show && (
      <ul
        className={`flex w-max shrink-0 gap-3 pr-3 motion-reduce:animate-none ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...items, ...items].map(({ name, icon: Icon }, i) => (
          <li
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2.5 text-sm"
          >
            <Icon size={16} className="text-muted" />
            {name}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const TechStack = () => {
  const mounted = useMounted();

  return (
  <section id="skills" className="relative overflow-hidden border-t border-line py-24 md:py-32">
    <div className="container-x">
      <SectionHeading
        index="04"
        label="Stack"
        title={
          <>
            Tools I use to <Accent>think</Accent> and build.
          </>
        }
        description={`${allSkills.length}+ technologies across the full lifecycle — from training models to deploying products.`}
      />
    </div>

    {/* Marquee (decorative — the grid below lists everything) */}
    <div aria-hidden="true" className="mb-16 space-y-3 md:mb-20">
      <MarqueeRow items={marqueeRows[0]} show={mounted} />
      <MarqueeRow items={marqueeRows[1]} reverse show={mounted} />
    </div>

    <div className="container-x">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: GroupIcon, items }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.06}>
            <SpotlightCard className="h-full p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-surface-2 text-accent-ink">
                  <GroupIcon size={20} />
                </span>
                <span className="font-mono text-xs text-muted">{String(items.length).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group/skill flex items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2 text-sm transition-colors hover:border-fg/20"
                  >
                    {mounted ? (
                      <Icon size={15} className="text-muted transition-colors group-hover/skill:text-accent-ink" />
                    ) : (
                      <span aria-hidden="true" className="h-[15px] w-[15px]" />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}

        {/* Certified-by banner */}
        <Reveal delay={0.12} className="lg:col-span-2">
          <a href="#certifications" className="group block h-full">
            <SpotlightCard className="flex h-full flex-col gap-6 overflow-hidden bg-fg p-7 text-bg lg:flex-row lg:items-center lg:gap-8 lg:p-8">
              <div aria-hidden="true" className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-accent/40 blur-3xl" />
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-fg">
                <BadgeCheck size={22} />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">Certified by industry leaders</h3>
                <p className="mt-2 text-sm leading-relaxed text-bg/70">{certifiedBy.join(' · ')}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-bg/70 transition-colors group-hover:text-bg">
                View {totalCertifications} credentials
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </SpotlightCard>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
  );
};

export default TechStack;
