import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useTransform, type Variants } from 'framer-motion';
import { profile } from '../../data/portfolio';
import LocalTime from '../ui/LocalTime';
import { EASE_OUT } from '../ui/motion';

/*
 * Timing (seconds). The intro is part of the pre-rendered HTML, so it appears —
 * and its name animation plays (pure CSS) — before JavaScript loads. Once React
 * starts, the counter runs for whatever is left of COUNT_UP (at least
 * MIN_COUNT_UP), waits briefly for the page to finish loading, goes 90 → 100,
 * holds, and lifts the curtain. Typical total: ~4.5s from first paint.
 */
const COUNT_UP = 2.6;
const MIN_COUNT_UP = 1.2;
const MAX_LOAD_WAIT = 0.8;
const FINISH = 0.4;
const HOLD = 0.25;
const ROLES_START_MS = 600;
const ROLE_INTERVAL_MS = 700;

const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

const wait = (seconds: number) => new Promise<void>((r) => setTimeout(r, seconds * 1000));

const pageReady = () =>
  Promise.all([
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((r) => window.addEventListener('load', () => r(), { once: true })),
    document.fonts?.ready ?? Promise.resolve(),
  ]);

/** Seconds the intro has already been on screen before React started (it ships in the HTML). */
const shownFor = () => {
  const paint = performance.getEntriesByType('paint').find((e) => e.name === 'first-contentful-paint');
  return paint ? Math.max(0, (performance.now() - paint.startTime) / 1000) : 0;
};

const curtain: Variants = {
  exit: { y: '-115%', transition: { duration: 0.9, ease: CURTAIN_EASE, delay: 0.1 } },
};

const content: Variants = {
  exit: { opacity: 0, y: -40, transition: { duration: 0.35, ease: EASE_OUT } },
};

/** Letter-by-letter reveal driven by CSS (see .intro-letter), so it plays before JavaScript loads. */
const Letters = ({ text, delay, className }: { text: string; delay: number; className: string }) => (
  <span className="block overflow-hidden pb-[0.08em]" aria-hidden="true">
    <span className={`block whitespace-nowrap ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="intro-letter inline-block"
          style={{ animationDelay: `${(delay + i * 0.035).toFixed(3)}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  </span>
);

interface IntroProps {
  /** Called when the curtain starts lifting, so the page can begin its own entrance. */
  onComplete: () => void;
}

const Intro = ({ onComplete }: IntroProps) => {
  const [visible, setVisible] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => String(Math.round(v)).padStart(3, '0'));
  const barScale = useTransform(progress, (v) => v / 100);

  const finish = useCallback(() => setVisible(false), []);

  // Start at the top with the page locked while the intro plays.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // Step through each role title once, ending on the last one — fitted into the time that's left.
  useEffect(() => {
    const elapsedMs = shownFor() * 1000;
    const start = Math.max(0, ROLES_START_MS - elapsedMs);
    const remainingMs = (Math.max(MIN_COUNT_UP, COUNT_UP - elapsedMs / 1000) + FINISH + HOLD) * 1000;
    const steps = profile.roles.length - 1;
    const interval = Math.min(ROLE_INTERVAL_MS, Math.max(400, (remainingMs - start - 250) / steps));
    const timers = profile.roles
      .slice(1)
      .map((_, i) => window.setTimeout(() => setRoleIndex(i + 1), start + (i + 1) * interval));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  // Drive the counter, then lift the curtain.
  useEffect(() => {
    let cancelled = false;
    const countUp = Math.max(MIN_COUNT_UP, COUNT_UP - shownFor());
    (async () => {
      await animate(progress, 90, { duration: countUp, ease: [0.65, 0, 0.35, 1] });
      await Promise.race([pageReady(), wait(MAX_LOAD_WAIT)]);
      if (cancelled) return;
      await animate(progress, 100, { duration: FINISH, ease: EASE_OUT });
      await wait(HOLD);
      if (!cancelled) finish();
    })();
    return () => {
      cancelled = true;
    };
  }, [progress, finish]);

  // Escape skips the intro.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && finish();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [finish]);

  useEffect(() => {
    if (!visible) {
      progress.stop();
      onComplete();
    }
  }, [visible, progress, onComplete]);

  const handleExitComplete = () => {
    document.documentElement.style.overflow = '';
    try {
      sessionStorage.setItem('intro-seen', '1');
    } catch {
      /* storage unavailable */
    }
    // Honour deep links such as /#projects once the page is revealed.
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro"
          data-intro=""
          variants={curtain}
          exit="exit"
          className="fixed inset-0 z-[100] bg-bg text-fg"
        >
          {/* Curved trailing edge that follows the curtain as it lifts */}
          <div aria-hidden="true" className="absolute inset-x-[-10%] top-[99%] h-[14vh] rounded-b-[100%] bg-bg" />

          {/* Atmosphere */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_50%,#000_10%,transparent_100%)]" />
            <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
          </div>

          <span role="status" className="sr-only">
            Loading {profile.name}'s portfolio
          </span>

          <motion.div variants={content} className="container-x relative flex h-full flex-col py-6 md:py-8">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="intro-fade flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-fg font-mono text-[11px] font-semibold tracking-wider text-bg">
                  {profile.initials}
                </span>
                <span className="eyebrow hidden sm:block" suppressHydrationWarning>
                  Portfolio — {new Date().getFullYear()}
                </span>
              </div>
              <p className="intro-fade font-mono text-xs text-muted" style={{ animationDelay: '0.1s' }}>
                {profile.location} — <LocalTime />
              </p>
            </div>

            {/* Name + roles */}
            <div className="flex flex-1 flex-col justify-center">
              <Letters
                text={profile.firstName}
                delay={0.15}
                className="text-[clamp(3rem,13vw,10.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
              />
              <Letters
                text={profile.lastName}
                delay={0.4}
                className="serif-accent -mt-[0.02em] text-[clamp(3rem,13vw,10.5rem)] leading-[0.95]"
              />

              <div
                className="intro-fade mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:text-sm"
                style={{ animationDelay: `${ROLES_START_MS / 1000 - 0.2}s` }}
              >
                <span aria-hidden="true" className="h-px w-10 shrink-0 bg-accent" />
                {/* Old and new titles slide past each other, so one is always readable */}
                <span className="relative block h-[1.4em] min-w-[18rem] overflow-hidden">
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={roleIndex}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-110%' }}
                      transition={{ duration: 0.45, ease: CURTAIN_EASE }}
                      className="absolute left-0 top-0 whitespace-nowrap leading-[1.4em] text-fg"
                    >
                      {profile.roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-3 pb-2">
                <p className="eyebrow">Loading experience</p>
                <button
                  type="button"
                  onClick={finish}
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-fg/80 transition-colors hover:text-accent-ink"
                >
                  Skip intro →
                </button>
              </div>
              <p className="font-mono text-[clamp(3.5rem,12vw,9rem)] font-medium leading-none tracking-[-0.06em] tabular-nums">
                <motion.span>{counter}</motion.span>
                <span className="text-accent">%</span>
              </p>
            </div>
          </motion.div>

          {/* Progress line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: barScale }}
            className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
