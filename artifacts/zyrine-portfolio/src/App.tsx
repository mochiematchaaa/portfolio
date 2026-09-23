import { useEffect, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Content — edit the text here to update the site                    */
/* ------------------------------------------------------------------ */

const profile = {
  name: 'Zyrine Angelica G. Lopez',
  shortName: 'Zyrine Lopez',
  headline: 'Web Development · UI/UX Design · Digital Design',
  location: 'Binangonan, Rizal, Philippines',
  email: 'zyrinezyrine08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zyrine-angelica-lopez-3a0a68436',
  github: 'https://github.com/zyrineangelica',
  resume: './Zyrine-Angelica-Lopez-Resume.pdf',
  summary:
    'Information Technology professional focused on software and digital work. I build responsive websites with HTML, CSS and JavaScript, design user interfaces in Figma, and create digital graphics and multimedia content. Detail-oriented, quick to learn, and reliable in managing time and priorities.',
};

const projects: { title: string; year: string; type: string; description: string; tech: string[]; link?: string }[] = [
  {
    title: 'Lumina Haven Hotel',
    year: '2024',
    type: 'Responsive website',
    description:
      'A responsive landing page for a boutique hotel with structured layouts, room listings and custom styling designed for a modern booking preview experience.',
    tech: ['HTML', 'CSS'],
  },
  {
    title: 'RTU Coeurliens',
    year: '2024',
    type: 'Mobile UI/UX prototype',
    description:
      'A mobile app prototype with complete user flows for authentication, home dashboard, chat messaging, announcements, profile settings and social interactions.',
    tech: ['Figma', 'UI/UX'],
  },
  {
    title: 'CSS Tutorial',
    year: '2024',
    type: 'Technical documentation',
    description:
      'A step-by-step guide explaining core CSS principles, including Flexbox, Grid layout and custom properties, written for beginner web designers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const skills = [
  { group: 'Programming', items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Web Server & Database', items: ['XAMPP', 'SQL', 'Database Management'] },
  { group: 'Design & Multimedia', items: ['Figma', 'Canva', 'Multimedia Editing'] },
  { group: 'Productivity', items: ['Microsoft Word', 'Excel', 'PowerPoint'] },
];

const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Rizal Technological University',
  place: 'Mandaluyong, Metro Manila',
  period: 'Aug 2023 – Present',
};

const certifications = [
  { title: 'Marketing Me Live (3 sessions)', issuer: 'Rizal Technological University Mandaluyong', year: '2026' },
  { title: 'Digital Finance and Financial Literacy: Bridging Traditional and Modern Economic Knowledge', issuer: '', year: '2026' },
];

type Page = 'home' | 'about' | 'projects' | 'skills' | 'contact';

const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
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
const PinIcon = () => <Icon size={16}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></Icon>;
const MenuIcon = () => <Icon size={22}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
const CloseIcon = () => <Icon size={22}><path d="M6 6l12 12M18 6 6 18" /></Icon>;
const ArrowIcon = () => <Icon size={16}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>;
const SunIcon = () => <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>;
const MoonIcon = () => <Icon><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></Icon>;
const PenIcon = () => <Icon size={22}><path d="M12 19l7-7 3 3-7 7-3-3Z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></Icon>;
const LayersIcon = () => <Icon size={22}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></Icon>;
const CodeIcon = () => <Icon size={22}><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></Icon>;
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

function NextLink({ to, label }: { to: Page; label: string }) {
  return (
    <div className="next-link reveal" style={d(8)}>
      <a href={href(to)}>
        <span className="muted">Next</span>
        <strong>{label} <ArrowIcon /></strong>
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pages                                                              */
/* ------------------------------------------------------------------ */

function HomePage() {
  const highlights: { to: Page; title: string; text: string; link: string; icon: ReactNode }[] = [
    { to: 'projects', title: 'Web Development', text: 'Responsive, well-structured websites built with HTML, CSS and JavaScript.', link: 'See my projects', icon: <CodeIcon /> },
    { to: 'projects', title: 'UI/UX Design', text: 'App and web interfaces prototyped in Figma with clear, easy-to-follow user flows.', link: 'See my projects', icon: <LayersIcon /> },
    { to: 'skills', title: 'Digital Design', text: 'Graphics, presentations and multimedia content made with Canva and editing tools.', link: 'See my skills', icon: <PenIcon /> },
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"><span /><span /></div>
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-kicker reveal" style={d(0)}>Portfolio</p>
            <h1 className="reveal" style={d(1)}>{profile.name}</h1>
            <p className="hero-headline reveal" style={d(2)}>{profile.headline}</p>
            <p className="hero-summary reveal" style={d(3)}>{profile.summary}</p>
            <div className="hero-actions reveal" style={d(4)}>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
                <DownloadIcon /> Download Résumé
              </a>
              <a href="#/contact" className="btn btn-outline">
                <MailIcon /> Contact Me
              </a>
            </div>
            <div className="hero-meta reveal" style={d(5)}>
              <span><PinIcon /> {profile.location}</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
            </div>
          </div>
          <aside className="glance reveal" style={d(3)} aria-label="At a glance">
            <h2 className="glance-title">At a glance</h2>
            <dl>
              <div><dt>Focus</dt><dd>Web Development, UI/UX Design, Digital Design</dd></div>
              <div><dt>Languages</dt><dd>JavaScript, Java, Python, SQL</dd></div>
              <div><dt>Education</dt><dd>BS Information Technology, {education.school}</dd></div>
              <div><dt>Location</dt><dd>Rizal / Metro Manila</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="home-head reveal" style={d(6)}>
            <span className="kicker">What I do</span>
            <h2>Where I can help</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((h, i) => (
              <a key={h.title} href={href(h.to)} className="card highlight reveal" style={d(7 + i)}>
                <span className="highlight-icon">{h.icon}</span>
                <h2>{h.title}</h2>
                <p>{h.text}</p>
                <span className="highlight-more">{h.link} <ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHead kicker="About" title="Professional profile" />
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <p className="lead reveal" style={d(2)}>
              I build clean, responsive websites and design digital experiences that are easy to use. My work spans front-end development
              with HTML, CSS and JavaScript, UI/UX prototyping in Figma, digital design in Canva, and programming in Java and Python.
            </p>
            <p className="reveal" style={d(3)}>
              I also work with SQL and XAMPP for databases and local web servers, and I write clear technical documentation. I value accuracy
              and dependable follow-through, and I am looking for a role in web development, UI/UX or digital design where I can
              contribute and keep growing with the team.
            </p>
          </div>

          <div className="edu-grid">
            <div className="card edu reveal" style={d(4)}>
              <span className="label">Education</span>
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="muted">{education.place} · {education.period}</p>
            </div>
            <div className="card reveal" style={d(5)}>
              <span className="label">Certifications</span>
              <ul className="cert-list">
                {certifications.map((c, i) => (
                  <li key={i}>
                    <div>
                      <strong>{c.title}</strong>
                      {c.issuer && <span className="muted">{c.issuer}</span>}
                    </div>
                    <span className="cert-year">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NextLink to="projects" label="Projects" />
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHead kicker="Projects" title="Selected projects" intro="Web development, UI/UX design and technical writing." />
      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="card project reveal" style={d(3 + i)} key={p.title}>
                <div className="project-top">
                  <span className="project-type">{p.type}</span>
                  <span className="project-year">{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View project <ArrowIcon /></a>
                )}
              </article>
            ))}
          </div>
          <NextLink to="skills" label="Skills" />
        </div>
      </section>
    </>
  );
}

function SkillsPage() {
  return (
    <>
      <PageHead kicker="Skills" title="Technical skills" intro="Languages, tools and technologies I use in software and web work." />
      <section className="section">
        <div className="container">
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="card skill reveal" style={d(3 + i)} key={s.group}>
                <h3>{s.group}</h3>
                <div className="tags">
                  {s.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
          <NextLink to="contact" label="Contact" />
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const items = [
    { href: `mailto:${profile.email}`, label: 'Email', value: profile.email, icon: <MailIcon />, external: false },
    { href: profile.linkedin, label: 'LinkedIn', value: 'Zyrine Angelica Lopez', icon: <LinkedinIcon />, external: true },
    { href: profile.github, label: 'GitHub', value: 'github.com/zyrineangelica', icon: <GithubIcon />, external: true },
    { href: profile.resume, label: 'Résumé', value: 'Download PDF', icon: <DownloadIcon />, external: true },
  ];
  return (
    <>
      <PageHead kicker="Contact" title="Get in touch" intro="I am open to entry-level IT opportunities. The best way to reach me is by email." />
      <section className="section">
        <div className="container">
          <div className="contact-list">
            {items.map((c, i) => (
              <a key={c.label} href={c.href} className="contact-item reveal" style={d(3 + i)} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {c.icon}
                <span><small>{c.label}</small>{c.value}</span>
              </a>
            ))}
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
    document.title = page === 'home' ? `${profile.name} | IT Portfolio` : `${label} | ${profile.name}`;
  }, [page]);

  return (
    <div className="site">
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      <Header page={page} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1} key={page} className="page">
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'projects' && <ProjectsPage />}
        {page === 'skills' && <SkillsPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <nav className="footer-nav" aria-label="Footer">
            {pages.map((p) => <a key={p.id} href={href(p.id)}>{p.label}</a>)}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
