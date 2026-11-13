/**
 * Builds /llms.txt — a plain-Markdown summary of the portfolio for AI assistants
 * and other tools that read text rather than render pages. Generated at build
 * time from the same data as the site, so it never drifts out of date.
 */
import {
  about,
  achievements,
  courseCertificates,
  education,
  experiences,
  otherCertifications,
  professionalCertificates,
  profile,
  projects,
  publications,
  skillGroups,
} from '../data/portfolio';

const inr = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

export function buildLlmsTxt(siteUrl: string): string {
  const url = (path: string) => new URL(path, siteUrl).href;
  const lines: string[] = [];
  const push = (...items: string[]) => lines.push(...items);

  push(`# ${profile.name}`, '', `> ${profile.summary}`, '');
  push(
    `- Headline: ${profile.headline}`,
    `- Current role: ${profile.currentRole}, ${profile.currentCompany} (since ${profile.currentSince}) — ${profile.currentCompanyUrl}`,
    `- Location: ${profile.location}`,
    `- Email: ${profile.emails.join(', ')}`,
    `- Phone: ${profile.phone.label}`,
    `- LinkedIn: ${profile.socials.linkedin}`,
    `- GitHub: ${profile.socials.github}`,
    `- Résumé (PDF): ${url(profile.resume)}`,
    `- Website: ${url('/')}`,
    '',
  );

  push('## About', '', about.lead, '', ...about.paragraphs.flatMap((p) => [p, '']));

  push('## Experience', '');
  for (const exp of experiences) {
    const meta = [exp.period, exp.location].filter(Boolean).join(', ');
    push(`### ${exp.position} — ${exp.company} (${meta})`, ...exp.highlights.map((h) => `- ${h}`));
    if (exp.stack?.length) push(`- Stack: ${exp.stack.join(', ')}`);
    push('');
  }

  push('## Projects', '');
  for (const p of projects) {
    const link = p.demoLink ?? p.githubLink;
    const title = link ? `[${p.title}](${link})` : p.title;
    const extras = [p.badges?.join('; '), p.technologies.join(', ')].filter(Boolean).join(' — ');
    push(`- ${title}: ${p.description}${extras ? ` (${extras})` : ''}`);
  }
  push('');

  push('## Awards and recognition', '');
  for (const a of achievements) {
    const meta = [a.host, a.date].filter(Boolean).join(', ');
    const prize = a.prize ? ` Prize: ${inr(a.prize)}.` : '';
    push(`- ${a.rank} — ${a.event}${meta ? ` (${meta})` : ''}: ${a.description}${prize}`);
  }
  push('');

  push('## Research publications', '', ...publications.map((p) => `- ${p.venue}: ${p.title} — ${p.description}`), '');

  push('## Education', '');
  for (const e of education) {
    const grade = e.grade ? `, ${e.grade}` : '';
    push(`- ${e.degree}, ${e.institution} (${e.period}${grade})`);
  }
  push('');

  push('## Skills', '', ...skillGroups.map((g) => `- ${g.title}: ${g.items.map((i) => i.name).join(', ')}`), '');

  push('## Certifications', '');
  for (const c of [...professionalCertificates, ...courseCertificates]) {
    push(`- ${c.title} — ${c.issuer} (${c.date})${c.link ? ` ${c.link}` : ''}`);
  }
  push(`- Also certified in: ${otherCertifications.join(', ')}`, '');

  return `${lines.join('\n').trim()}\n`;
}
