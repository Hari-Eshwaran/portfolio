import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, MapPin, Trophy } from 'lucide-react';
import { profile, stats } from '../../data/portfolio';
import LocalTime from '../ui/LocalTime';
import { EASE_OUT } from '../ui/motion';

interface HeroProps {
  /** False while the intro screen is showing; entrance animations wait for it. */
  ready: boolean;
}

const Hero = ({ ready }: HeroProps) => {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.8, delay, ease: EASE_OUT },
  });

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
      {/* Background: grid + ember glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial-top absolute inset-0 opacity-70" />
        <div className="absolute -top-48 right-[-15%] h-[560px] w-[560px] rounded-full bg-accent/15 blur-[130px] dark:bg-accent/20" />
        <div className="absolute left-[-20%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-x">
        {/* Status row */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center justify-between gap-3">
          <span className="chip !py-1.5 !text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to collaborations & opportunities
          </span>
          <span className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
            <MapPin size={13} /> {profile.location} — <LocalTime />
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="mt-8 md:mt-10">
          <span className="sr-only">
            {profile.name} — {profile.headline}. {profile.currentRole} of {profile.currentCompany}.
          </span>
          <span aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block whitespace-nowrap text-[clamp(2.6rem,12.2vw,10rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
              initial={{ y: '105%' }}
              animate={{ y: ready ? 0 : '105%' }}
              transition={{ duration: 1, delay: 0.15, ease: EASE_OUT }}
            >
              {profile.firstName}
              <span className="text-accent">.P</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid items-end gap-12 md:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Intro */}
          <div className="lg:col-span-7">
            <motion.p
              {...fadeUp(0.4)}
              className="max-w-2xl text-balance text-2xl font-medium leading-[1.25] tracking-tight sm:text-[2rem]"
            >
              I build <span className="serif-accent text-[1.12em]">intelligent</span> products — AI-powered
              platforms, scalable enterprise software and digital products people actually use.
            </motion.p>

            <motion.p {...fadeUp(0.5)} className="mt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-muted">
              {profile.name}
              <span className="mx-2 text-line">/</span>
              {profile.currentRole}, {profile.currentCompany}
            </motion.p>

            <motion.div {...fadeUp(0.6)} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                View my work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a href={profile.resume} download className="btn-ghost" aria-label="Download résumé (PDF)">
                Download résumé <Download size={16} />
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={ready ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE_OUT }}
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface-2 p-2 shadow-2xl shadow-black/10 dark:shadow-black/40">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={profile.photo}
                  alt={`${profile.name} — ${profile.currentRole}, ${profile.currentCompany}`}
                  width={1072}
                  height={1072}
                  className="aspect-[5/4] w-full object-cover object-[50%_42%] transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">Currently</p>
                    <p className="mt-1 text-lg font-medium leading-tight tracking-tight">
                      {profile.currentRole} @ {profile.currentCompany}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[11px] backdrop-blur-md">
                    Since {profile.currentSince}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating award badge */}
            <div className="absolute -left-4 -top-5 animate-float sm:-left-8">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/90 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/10 backdrop-blur-xl">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-fg">
                  <Trophy size={17} />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-medium">1st Prize</span>
                  <span className="block font-mono text-[11px] text-muted">Codeathon 3.0</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          {...fadeUp(0.75)}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/60 backdrop-blur md:mt-20 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse px-6 py-6 md:px-8 md:py-7 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
                i >= 2 ? 'border-t border-line md:border-t-0' : ''
              } ${i === 2 ? 'md:border-l' : ''}`}
            >
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>

        <div className="mt-10 hidden justify-center md:flex">
          <a
            href="#about"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
          >
            Scroll to explore
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
