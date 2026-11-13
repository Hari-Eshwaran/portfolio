import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production builds ship pre-rendered HTML (see scripts/prerender.mjs), which React
// takes over in place; the dev server serves an empty root, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

// Load Firebase (analytics) after the page is interactive so it never blocks first paint.
const loadFirebase = () => {
  import('./config/firebase').catch((error) => console.error('Firebase failed to load:', error));
};

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(loadFirebase, { timeout: 4000 });
} else {
  setTimeout(loadFirebase, 2000);
}
