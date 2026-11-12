import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
}

const SectionHeading = ({ index, label, title, description }: SectionHeadingProps) => (
  <Reveal className="mb-14 grid items-end gap-6 md:mb-20 md:grid-cols-12">
    <div className="md:col-span-8">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent-ink">{index}</span>
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
    {description && (
      <p className="max-w-sm leading-relaxed text-muted md:col-span-4 md:justify-self-end">
        {description}
      </p>
    )}
  </Reveal>
);

/** Italic serif accent word used inside headings. */
export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="serif-accent pr-[0.05em] text-[1.06em]">{children}</span>
);

export default SectionHeading;
