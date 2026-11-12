import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = {
  light: '#FAF9F6',
  dark: '#0A0A0B',
};

const getInitialTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

/**
 * The initial theme is applied by an inline script in index.html (no flash).
 * This hook keeps React in sync and persists only explicit user choices.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
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
