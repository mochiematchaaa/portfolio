import { useEffect, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Content — edit the text here to update the site                    */
/* ------------------------------------------------------------------ */

const profile = {
  name: 'Zyrine Angelica G. Lopez',
  shortName: 'Zyrine Lopez',
  roles: ['Full-Stack Developer', 'AI-Assisted Web Development'],
  summary: 'I build clean, responsive websites and web apps, with AI-assisted workflows and thoughtful design.',
  location: 'Rizal, Philippines',
  email: 'zyrinezyrine08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zyrine-angelica-lopez-3a0a68436',
  github: 'https://github.com/zyrineangelica',
  resume: './Zyrine-Angelica-Lopez-Resume.pdf',
};

const about =
  'I am a full-stack developer who enjoys turning ideas into simple, useful websites and apps. I work across front end, back end and databases, design interfaces in Figma, and use AI tools to build and test faster while reviewing every detail by hand.';

const education = {
  degree: 'BS Information Technology',
  school: 'Rizal Technological University',
  period: '2023 – Present',
};

/*
 * Projects. The filter buttons come from `projectCategories`.
 * To add work, copy a project and set its `category`.
 * Optional: `image` (put the file in /public, e.g. './works/poster-1.png') and `link`.
 */
const projectCategories = ['Websites', 'UI/UX Design', 'Graphic Designs', 'Systems'] as const;
type ProjectCategory = (typeof projectCategories)[number];

const projects: { title: string; year: string; category: ProjectCategory; description: string; tech: string[]; link?: string; image?: string }[] = [
  { title: 'Lumina Haven Hotel', year: '2024', category: 'Websites', description: 'Responsive landing page for a boutique hotel.', tech: ['HTML', 'CSS'] },
  { title: 'RTU Coeurliens', year: '2024', category: 'UI/UX Design', description: 'Mobile app prototype for students.', tech: ['Figma'] },
  { title: 'CSS Tutorial', year: '2024', category: 'Websites', description: 'Beginner guide to Flexbox, Grid and CSS variables.', tech: ['HTML', 'CSS', 'JavaScript'] },
];

const services: { title: string; description: string; icon: 'code' | 'layers' | 'pen' | 'db' | 'cart' | 'doc' | 'stack' | 'ai' }[] = [
  { title: 'Full-Stack Development', description: 'Front end, back end and database.', icon: 'stack' },
  { title: 'AI-Assisted Web Development', description: 'Faster builds with AI, reviewed by hand.', icon: 'ai' },
  { title: 'Website Development', description: 'Responsive websites and landing pages.', icon: 'code' },
  { title: 'UI/UX Design', description: 'Wireframes and prototypes in Figma.', icon: 'layers' },
  { title: 'Graphic Design', description: 'Social media graphics, posters and more.', icon: 'pen' },
  { title: 'System Development', description: 'Simple database-driven systems.', icon: 'db' },
  { title: 'E-commerce Support', description: 'Product listings and store updates.', icon: 'cart' },
  { title: 'Administrative Support', description: 'Documents, spreadsheets and data entry.', icon: 'doc' },
];

/* Availability and rates — edit these. Leave `rate` empty to show "On request". */
const terms = {
  arrangement: 'Part-time · Full-time',
  hours: 'Philippine Time (GMT+8)',
  rate: '', // e.g. '₱300 / hour'
};

const techStack = [
  { name: 'HTML5', abbr: 'H5', kind: 'Front-end' },
  { name: 'CSS3', abbr: 'C3', kind: 'Front-end' },
  { name: 'JavaScript', abbr: 'JS', kind: 'Front-end' },
  { name: 'Java', abbr: 'JV', kind: 'Back-end' },
  { name: 'Python', abbr: 'PY', kind: 'Basic' },
  { name: 'SQL', abbr: 'SQL', kind: 'Database · Basic' },
  { name: 'XAMPP', abbr: 'XP', kind: 'Web server' },
  { name: 'AI Tools', abbr: 'AI', kind: 'AI-assisted dev' },
  { name: 'Figma', abbr: 'FG', kind: 'UI/UX' },
  { name: 'Canva', abbr: 'CV', kind: 'Graphics' },
  { name: 'MS Office', abbr: 'MS', kind: 'Productivity' },
];

type Page = 'home' | 'about' | 'services' | 'projects' | 'skills' | 'contact';

const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/*  Icons (inline, no extra packages)                                  */
/* ------------------------------------------------------------------ */

function Icon({ children, size = 18 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
const MailIcon = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
const DownloadIcon = () => <Icon><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></Icon>;
const MenuIcon = () => <Icon size={22}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
const CloseIcon = () => <Icon size={22}><path d="M6 6l12 12M18 6 6 18" /></Icon>;
const ArrowIcon = () => <Icon size={16}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>;
const SunIcon = () => <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>;
const MoonIcon = () => <Icon><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></Icon>;
const PenIcon = () => <Icon size={22}><path d="M12 19l7-7 3 3-7 7-3-3Z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></Icon>;
const LayersIcon = () => <Icon size={22}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></Icon>;
const CodeIcon = () => <Icon size={22}><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></Icon>;
const DbIcon = () => <Icon size={22}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></Icon>;
const CartIcon = () => <Icon size={22}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.3a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.6L21 8H6" /></Icon>;
const DocIcon = () => <Icon size={22}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M14 3v6h6" /><path d="M8 13h8M8 17h5" /></Icon>;
const StackIcon = () => <Icon size={22}><rect x="3" y="3" width="18" height="6" rx="1.5" /><rect x="3" y="15" width="18" height="6" rx="1.5" /><path d="M7 6h.01M7 18h.01M12 9v6" /></Icon>;
const SparkIcon = () => <Icon size={22}><path d="M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16.5l-1.8-5L5 9.7l5.2-1.8Z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" /></Icon>;
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
  </svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Routing (hash based, so it works on GitHub Pages)                  */
/* ------------------------------------------------------------------ */

function readPage(): Page {
  const id = window.location.hash.replace(/^#\/?/, '');
  return pages.some((p) => p.id === id) ? (id as Page) : 'home';
}

function usePage() {
  const [page, setPage] = useState<Page>(readPage);
  useEffect(() => {
    const onChange = () => {
      setPage(readPage());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return page;
}

const href = (p: Page) => (p === 'home' ? '#/' : `#/${p}`);

/* ------------------------------------------------------------------ */
/*  Theme (light / dark, remembered on this device)                    */
/* ------------------------------------------------------------------ */

type Theme = 'light' | 'dark';

function initialTheme(): Theme {
  try {
    const saved = window.localStorage.getItem('zl-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('zl-theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))] as const;
}

/* ------------------------------------------------------------------ */
/*  Shared pieces                                                      */
/* ------------------------------------------------------------------ */

function Header({ page, theme, onToggleTheme }: { page: Page; theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [page]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#/" className="brand">
          <span className="brand-mark">ZL</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {pages.map((p) => (
            <a key={p.id} href={href(p.id)} className={page === p.id ? 'is-active' : ''} aria-current={page === p.id ? 'page' : undefined}>
              {p.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm nav-resume">
            Résumé
          </a>
        </nav>
        <div className="header-tools">
          <button
            type="button"
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <span key={theme} className="theme-icon">{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</span>
          </button>
          <button type="button" className="icon-btn menu-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function PageHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="page-head">
      <div className="container">
        <span className="kicker reveal" style={{ ['--i' as string]: 0 }}>{kicker}</span>
        <h1 className="reveal" style={{ ['--i' as string]: 1 }}>{title}</h1>
        {intro && <p className="page-intro reveal" style={{ ['--i' as string]: 2 }}>{intro}</p>}
      </div>
    </div>
  );
}

/** Stagger helper: gives each child an increasing animation delay. */
const d = (i: number) => ({ ['--i' as string]: i });

/* ------------------------------------------------------------------ */
/*  Pages                                                              */
/* ------------------------------------------------------------------ */

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"><span /><span /></div>
      <div className="container hero-inner">
        <p className="hero-kicker reveal" style={d(0)}>Hello, I&apos;m</p>
        <h1 className="reveal" style={d(1)}>{profile.name}</h1>
        <div className="hero-roles reveal" style={d(2)}>
          <span className="role-badge role-main"><StackIcon /> {profile.roles[0]}</span>
          <span className="role-badge role-main"><SparkIcon /> {profile.roles[1]}</span>
        </div>
        <p className="hero-summary reveal" style={d(3)}>{profile.summary}</p>
        <div className="hero-actions reveal" style={d(4)}>
          <a href="#/projects" className="btn btn-primary">View my work <ArrowIcon /></a>
          <a href="#/contact" className="btn btn-outline">Contact me</a>
        </div>
        <div className="hero-social reveal" style={d(5)}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHead kicker="About" title="About me" />
      <section className="section">
        <div className="container narrow">
          <p className="lead reveal" style={d(2)}>{about}</p>
          <div className="facts reveal" style={d(3)}>
            <div><span>Education</span><strong>{education.degree}</strong><small>{education.school} · {education.period}</small></div>
            <div><span>Location</span><strong>{profile.location}</strong></div>
            <div><span>Available for</span><strong>{terms.arrangement}</strong></div>
          </div>
        </div>
      </section>
    </>
  );
}

const serviceIcons = { stack: <StackIcon />, ai: <SparkIcon />, code: <CodeIcon />, layers: <LayersIcon />, pen: <PenIcon />, db: <DbIcon />, cart: <CartIcon />, doc: <DocIcon /> };

function ServicesPage() {
  return (
    <>
      <PageHead kicker="Services" title="What I offer" />
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s, i) => (
              <div className="service reveal" style={d(2 + i * 0.5)} key={s.title}>
                <span className="service-icon">{serviceIcons[s.icon]}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="terms-bar reveal" style={d(7)}>
            <div><span>Availability</span><strong>{terms.arrangement}</strong></div>
            <div><span>Hours</span><strong>{terms.hours}</strong></div>
            <div><span>Rate</span><strong>{terms.rate || 'On request'}</strong></div>
            <a href="#/contact" className="btn btn-primary btn-sm">Get a quote</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const filters: ('All' | ProjectCategory)[] = ['All', ...projectCategories];
  return (
    <>
      <PageHead kicker="Projects" title="My work" />
      <section className="section">
        <div className="container">
          <div className="filter-bar reveal" style={d(2)} role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button key={f} type="button" className={`filter-btn ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="project-grid" key={filter}>
            {shown.map((p, i) => (
              <article className="card project reveal" style={d(i)} key={p.title}>
                {p.image && <img className="project-image" src={p.image} alt={p.title} loading="lazy" />}
                <span className="project-meta">{p.category} · {p.year}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View <ArrowIcon /></a>}
              </article>
            ))}
            {shown.length === 0 && (
              <div className="empty reveal">
                <p className="muted">Coming soon.</p>
                <a href="#/contact" className="project-link">Request samples <ArrowIcon /></a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function SkillsPage() {
  return (
    <>
      <PageHead kicker="Skills" title="Tech stack" />
      <section className="section">
        <div className="container">
          <div className="stack-grid">
            {techStack.map((t, i) => (
              <div className="stack-item reveal" style={d(2 + i * 0.4)} key={t.name}>
                <span className="stack-badge">{t.abbr}</span>
                <span className="stack-text"><strong>{t.name}</strong><small>{t.kind}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHead kicker="Contact" title="Let's work together" />
      <section className="section">
        <div className="container narrow">
          <a href={`mailto:${profile.email}`} className="contact-email reveal" style={d(2)}>
            {profile.email} <ArrowIcon />
          </a>
          <div className="hero-social reveal" style={d(3)}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="Résumé PDF"><DownloadIcon /></a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const page = usePage();
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const label = pages.find((p) => p.id === page)?.label ?? 'Home';
    document.title = page === 'home' ? `${profile.name} | Full-Stack Developer` : `${label} | ${profile.name}`;
  }, [page]);

  return (
    <div className="site">
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      <Header page={page} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1} key={page} className="page">
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'services' && <ServicesPage />}
        {page === 'projects' && <ProjectsPage />}
        {page === 'skills' && <SkillsPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.shortName}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
