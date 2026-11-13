import { useEffect, useState } from 'react';

/**
 * False during build-time pre-rendering and the first browser render, true afterwards.
 * Use it to skip heavy decorative markup (e.g. SVG icon grids) in the static HTML.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
