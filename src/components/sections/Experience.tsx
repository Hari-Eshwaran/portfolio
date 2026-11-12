import { experiences } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading, { Accent } from '../ui/SectionHeading';

const Experience = () => (
  <section id="experience" className="relative border-t border-line py-24 md:py-32">
    <div className="container-x">
      <SectionHeading
        index="02"
        label="Experience"
        title={
          <>
            Where I've <Accent>built</Accent> and led.
          </>
        }
        description={`${experiences.length} roles across entrepreneurship, technical leadership, AI/ML, data analytics and full-stack engineering.`}
      />

      <ol className="relative">
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.position}`}>
            <Reveal delay={Math.min(i * 0.04, 0.16)}>
              <article className="group relative grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-12">
                {/* Hover accent line */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                />

                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{exp.period}</p>
                  {exp.location && <p className="mt-1.5 text-sm text-muted">{exp.location}</p>}
                  {exp.current && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current role
                    </span>
                  )}
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{exp.position}</h3>
                  <p className="mt-1.5 text-lg text-accent-ink">{exp.company}</p>

                  <ul className="mt-6 space-y-2.5 leading-relaxed text-muted">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="relative pl-6 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-muted/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.stack && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                      {exp.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
