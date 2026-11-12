import { FileText, GraduationCap, Medal, Trophy } from 'lucide-react';
import { achievements, education } from '../../data/portfolio';
import type { Achievement, IconComponent } from '../../types';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

const kindMeta: Record<Achievement['kind'], { label: string; icon: IconComponent }> = {
  award: { label: 'Award', icon: Trophy },
  publication: { label: 'Publication', icon: FileText },
  finalist: { label: 'Finalist', icon: Medal },
};

const Milestones = () => (
  <section id="achievements" className="relative border-t border-line py-24 md:py-32">
    <div className="container-x">
      <SectionHeading
        index="05"
        label="Milestones"
        title={
          <>
            Recognition &amp; <Accent>learning</Accent>.
          </>
        }
        description="Hackathon wins, peer-reviewed research and the education that ties it together."
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Achievements */}
        <div className="lg:col-span-7">
          <Reveal>
            <h3 className="eyebrow mb-6">Achievements</h3>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item, i) => {
              const { label, icon: Icon } = kindMeta[item.kind];
              const featured = i === 0;
              return (
                <li key={item.title} className={featured ? 'sm:col-span-2' : ''}>
                  <Reveal delay={Math.min(i * 0.05, 0.2)} className="h-full">
                    <SpotlightCard className={`flex h-full flex-col p-6 ${featured ? 'md:p-8' : ''}`}>
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                            featured ? 'bg-accent text-accent-fg' : 'border border-line bg-surface-2 text-accent-ink'
                          }`}
                        >
                          <Icon size={19} />
                        </span>
                        <span className="chip">{label}</span>
                      </div>
                      <h4
                        className={`mt-6 text-balance font-semibold tracking-tight ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}
                      >
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                      {item.meta && (
                        <p className="mt-auto pt-5 font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
                          {item.meta}
                        </p>
                      )}
                    </SpotlightCard>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Education */}
        <div id="education" className="lg:col-span-5">
          <Reveal>
            <h3 className="eyebrow mb-6">Education</h3>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card p-7 md:p-8">
              <ol className="relative space-y-10 border-l border-line pl-8">
                {education.map((item, i) => (
                  <li key={item.institution} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[calc(2rem+6px)] top-1 grid h-3 w-3 place-items-center rounded-full ring-4 ring-surface ${
                        i === 0 ? 'bg-accent' : 'bg-line'
                      }`}
                    />
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.period}</p>
                    <h4 className="mt-2 text-xl font-semibold tracking-tight">{item.degree}</h4>
                    <p className="mt-1 text-accent-ink">{item.institution}</p>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                    )}
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex items-center gap-3 rounded-2xl border border-line bg-surface-2 p-4">
                <GraduationCap size={20} className="shrink-0 text-accent-ink" />
                <p className="text-sm text-muted">
                  B.Tech · AI & Data Science · <span className="text-fg">Class of 2026</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Milestones;
