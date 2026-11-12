import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Load Firebase (analytics) after the page is interactive so it never blocks first paint.
const loadFirebase = () => {
  import('./config/firebase').catch((error) => console.error('Firebase failed to load:', error));
};

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(loadFirebase, { timeout: 4000 });
} else {
  setTimeout(loadFirebase, 2000);
}
