import { useEffect, useState } from 'react';
import { profile } from '../../data/portfolio';

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: profile.timeZone,
});

/** Live clock in the owner's time zone, e.g. "14:32 IST". */
const LocalTime = ({ className = '' }: { className?: string }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // The pre-rendered HTML carries the build time; refresh immediately in the browser.
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time dateTime={now.toISOString()} className={`tabular-nums ${className}`} suppressHydrationWarning>
      {formatter.format(now)} IST
    </time>
  );
};

export default LocalTime;
