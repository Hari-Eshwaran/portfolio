/**
 * Build-time entry: renders the app to static HTML so the deployed index.html
 * contains the full page content for crawlers, link previews and AI tools.
 * Used only by scripts/prerender.mjs.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { buildLlmsTxt } from './seo/llms';

export const render = () =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
