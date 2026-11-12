import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AlertCircle, ArrowUpRight, Check, CheckCircle2, Copy, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { profile } from '../../data/portfolio';
import type { ContactFormData } from '../../types';
import Reveal from '../ui/Reveal';
import { Accent } from '../ui/SectionHeading';
import LocalTime from '../ui/LocalTime';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_FORM: ContactFormData = { name: '', email: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const primaryEmail = profile.emails[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Firebase is loaded on demand to keep the initial bundle light.
      const [{ db }, { collection, addDoc }] = await Promise.all([
        import('../../config/firebase'),
        import('firebase/firestore'),
      ]);
      await addDoc(collection(db, 'contacts'), { ...formData, timestamp: new Date() });
      setStatus('success');
      setFormData(EMPTY_FORM);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      window.setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(primaryEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${primaryEmail}`;
    }
  };

  const details = [
    ...profile.emails.map((email) => ({ icon: Mail, label: 'Email', value: email, href: `mailto:${email}` })),
    { icon: Phone, label: 'Phone', value: profile.phone.label, href: profile.phone.href },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_20%_40%,#000_20%,transparent_100%)]" />
        <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Pitch */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="text-accent-ink">07</span>
              <span className="h-px w-8 bg-line" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Let's build something <Accent>remarkable</Accent>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Have a project, a role or an idea in mind? I'd love to hear about it — drop a message
              and let's talk.
            </p>
          </Reveal>

          {/* Primary email with copy */}
          <Reveal delay={0.08} className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${primaryEmail}`}
                className="group inline-flex items-center gap-2 text-xl font-medium tracking-tight sm:text-2xl"
              >
                <span className="link-underline">{primaryEmail}</span>
                <ArrowUpRight size={20} className="text-accent-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="icon-btn !h-9 !w-9"
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                title={copied ? 'Copied!' : 'Copy email'}
              >
                {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
              </button>
              <span role="status" className="sr-only">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={value}>
                  <a href={href} className="group flex items-center gap-4 py-4">
                    <Icon size={17} className="text-muted transition-colors group-hover:text-accent-ink" />
                    <span className="w-16 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</span>
                    <span className="truncate transition-colors group-hover:text-accent-ink">{value}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 py-4">
                <MapPin size={17} className="text-muted" />
                <span className="w-16 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Based</span>
                <span>
                  {profile.location} <span className="font-mono text-sm text-muted">· <LocalTime /></span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 flex flex-wrap gap-3">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5">
              <SiGithub size={15} /> GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5">
              <FaLinkedinIn size={15} /> LinkedIn
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="card p-6 shadow-2xl shadow-black/5 sm:p-8 dark:shadow-black/30"
            aria-describedby="form-status"
          >
            <h3 className="text-xl font-semibold tracking-tight">Send a message</h3>
            <p className="mt-1.5 text-sm text-muted">All fields are required.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="field"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="field"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="field resize-none"
                  placeholder="Tell me about your project, role or idea…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-7 w-full !py-3.5"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Sending…
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={17} /> Message sent — thank you!
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>

            <p id="form-status" role="status" aria-live="polite" className="mt-4 min-h-[1.25rem] text-center text-sm">
              {status === 'error' && (
                <span className="inline-flex items-center gap-1.5 text-red-500">
                  <AlertCircle size={15} /> Something went wrong. Please try again or email me directly.
                </span>
              )}
              {status === 'success' && <span className="text-muted">Your message has been received.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
