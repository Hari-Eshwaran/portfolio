import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = {
  light: '#FAF9F6',
  dark: '#0A0A0B',
};

/**
 * The initial theme is applied by an inline script in index.html (no flash).
 * The page is pre-rendered at build time, where the visitor's theme is unknown,
 * so `theme` stays null until the component mounts in the browser.
 * Only explicit user choices are persisted.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* storage unavailable — theme still applies for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
