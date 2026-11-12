import { FileText, GraduationCap, Medal, Trophy } from 'lucide-react';
import {
  achievements,
  awardCount,
  education,
  prizeTotal,
  publications,
} from '../../data/portfolio';
import type { Achievement } from '../../types';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

const awards = achievements.filter((a) => a.kind === 'award');
const finalists = achievements.filter((a) => a.kind === 'finalist');

const inr = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

/** Renders `text` with the first occurrence of `term` emphasised. */
const Highlight = ({ text, term }: { text: string; term?: string }) => {
  if (!term || !text.includes(term)) return <>{text}</>;
  const index = text.indexOf(term);
  return (
    <>
      {text.slice(0, index)}
      <span className="font-medium text-fg">{term}</span>
      {text.slice(index + term.length)}
    </>
  );
};

const AwardCard = ({ item }: { item: Achievement }) => {
  const isFirst = item.rank === 'Winner' || item.rank === '1st Place';
  return (
    <SpotlightCard className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl ${
            isFirst ? 'bg-accent text-accent-fg' : 'border border-line bg-surface-2 text-accent-ink'
          }`}
        >
          {isFirst ? <Trophy size={17} /> : <Medal size={17} />}
        </span>
        {item.date && <span className="font-mono text-[11px] text-muted">{item.date}</span>}
      </div>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">{item.rank}</p>
      <h4 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight">{item.event}</h4>
      {item.host && <p className="mt-0.5 text-sm text-muted">{item.host}</p>}

      <p className="mt-3 text-sm leading-relaxed text-muted">
        <Highlight text={item.description} term={item.project} />
      </p>

      {item.prize !== undefined && (
        <p className="mt-auto pt-5 font-mono text-sm">
          {inr(item.prize)} <span className="text-muted">prize</span>
        </p>
      )}
    </SpotlightCard>
  );
};

const summary = [
  { value: String(awardCount), label: 'Hackathon & startup awards' },
  { value: inr(prizeTotal), label: 'Won in prize money' },
  { value: String(publications.length), label: 'Research papers published' },
];

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
        description="Hackathon wins, peer-reviewed research and the education behind them."
      />

      {/* Summary strip */}
      <Reveal>
        <dl className="grid overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-3">
          {summary.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col-reverse px-6 py-6 md:px-8 ${
                i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
              }`}
            >
              <dt className="mt-1 text-sm text-muted">{item.label}</dt>
              <dd className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Awards */}
      <Reveal className="mb-6 mt-16">
        <h3 className="eyebrow">Awards</h3>
      </Reveal>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((item, i) => (
          <li key={`${item.rank}-${item.event}`}>
            <Reveal delay={(i % 4) * 0.05} className="h-full">
              <AwardCard item={item} />
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-12 lg:col-span-7">
          {/* Research */}
          <div>
            <Reveal className="mb-6">
              <h3 className="eyebrow">Research publications</h3>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {publications.map((paper, i) => (
                <li key={paper.venue}>
                  <Reveal delay={i * 0.05} className="h-full">
                    <SpotlightCard className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent-ink">
                          <FileText size={17} />
                        </span>
                        <span className="chip">Publication</span>
                      </div>
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
                        {paper.venue}
                      </p>
                      <h4 className="mt-1.5 text-lg font-semibold tracking-tight">{paper.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{paper.description}</p>
                    </SpotlightCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Finalist placements */}
          <div>
            <Reveal className="mb-6">
              <h3 className="eyebrow">Finalist &amp; top placements</h3>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="divide-y divide-line border-y border-line">
                {finalists.map((item) => (
                  <li key={item.event} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
                      {item.rank}
                    </span>
                    <span>
                      <span className="font-medium">{item.event}</span>
                      <span className="text-muted">
                        {' — '}
                        <Highlight text={item.description} term={item.project} />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="scroll-mt-28 lg:col-span-5">
          <Reveal className="mb-6">
            <h3 className="eyebrow">Education</h3>
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
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.period}</p>
                      {item.grade && <span className="chip !text-accent-ink">{item.grade}</span>}
                    </div>
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
