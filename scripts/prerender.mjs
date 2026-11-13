/**
 * Post-build step: injects the server-rendered page into dist/index.html and
 * writes dist/llms.txt, so the deployed HTML contains real content for
 * crawlers, link previews and AI tools that don't run JavaScript.
 *
 * Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
 */
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_URL = 'https://harishwaran.dpdns.org/';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, buildLlmsTxt } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// 1. Pre-rendered page
const indexPath = path.join(dist, 'index.html');
const template = await readFile(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: "${marker}" not found in dist/index.html`);
}
const appHtml = render();
await writeFile(indexPath, template.replace(marker, () => `<div id="root">${appHtml}</div>`));

// 2. Plain-text summary for AI tools
await writeFile(path.join(dist, 'llms.txt'), buildLlmsTxt(SITE_URL));

// 3. Keep the sitemap's lastmod in step with each build
const sitemapPath = path.join(dist, 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
const sitemap = await readFile(sitemapPath, 'utf8');
await writeFile(sitemapPath, sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`));

await rm(ssrDir, { recursive: true, force: true });

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(`prerender: index.html now carries ${kb(appHtml.length)} of page markup; wrote llms.txt and sitemap lastmod ${today}`);
