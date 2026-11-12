import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { categoryLabel, profile, projectCategories, projects } from '../../data/portfolio';
import type { Project, ProjectCategory } from '../../types';
import Reveal from '../ui/Reveal';
import { EASE_OUT } from '../ui/motion';
import SectionHeading, { Accent } from '../ui/SectionHeading';
import SpotlightCard from '../ui/SpotlightCard';

type Filter = 'all' | ProjectCategory;

const INITIAL_COUNT = 9;
const MAX_TAGS = 4;

const ProjectCard = ({ project, number }: { project: Project; number: string }) => {
  const extraTags = project.technologies.length - MAX_TAGS;

  return (
    <SpotlightCard className="group flex h-full flex-col p-6 hover:-translate-y-1 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">
          <span className="text-accent-ink">{number}</span> / {categoryLabel[project.category]}
        </span>
        {project.demoLink && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        )}
      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>

      {project.badges && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Highlights">
          {project.badges.map((badge) => (
            <li
              key={badge}
              className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-ink"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tags">
        {project.technologies.slice(0, MAX_TAGS).map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
        {extraTags > 0 && (
          <li className="chip" title={project.technologies.slice(MAX_TAGS).join(', ')}>
            +{extraTags}
          </li>
        )}
      </ul>

      <div className="mt-auto flex items-center gap-2 pt-7 empty:hidden">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-3.5 !py-2 !text-[13px]"
            aria-label={`${project.title} source code on GitHub`}
          >
            <SiGithub size={14} /> Code
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !px-3.5 !py-2 !text-[13px] text-fg hover:text-accent-ink"
            aria-label={`Live demo of ${project.title}`}
          >
            Live demo
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </SpotlightCard>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(() => {
    const result: Record<Filter, number> = { all: projects.length, product: 0, ai: 0, web: 0, data: 0 };
    projects.forEach((p) => (result[p.category] += 1));
    return result;
  }, []);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - visible.length;

  const selectFilter = (next: Filter) => {
    setFilter(next);
    setExpanded(false);
  };

  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Selected work"
          title={
            <>
              Things I've <Accent>shipped</Accent>.
            </>
          }
          description="Products, award-winning AI systems and full-stack platforms — most of them live, two published as research."
        />

        {/* Filters */}
        <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projectCategories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectFilter(cat.id)}
                  className={`relative isolate shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive ? 'text-accent-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {cat.label}
                  <span className={`ml-1.5 font-mono text-[11px] ${isActive ? 'text-accent-fg/70' : 'text-muted/70'}`}>
                    {counts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            More on GitHub <ArrowUpRight size={14} />
          </a>
        </Reveal>

        {/* Grid */}
        <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
              >
                <ProjectCard
                  project={project}
                  number={String(projects.indexOf(project) + 1).padStart(2, '0')}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setExpanded(true)} className="btn-ghost">
              Show {hiddenCount} more project{hiddenCount > 1 ? 's' : ''}
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
