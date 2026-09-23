import { useEffect, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Content — edit the text here to update the site                    */
/* ------------------------------------------------------------------ */

const profile = {
  name: 'Zyrine Angelica G. Lopez',
  shortName: 'Zyrine Lopez',
  headline: 'Full-Stack Developer · AI-Assisted Web Development · UI/UX & Digital Design',
  location: 'Binangonan, Rizal, Philippines',
  email: 'zyrinezyrine08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zyrine-angelica-lopez-3a0a68436',
  github: 'https://github.com/zyrineangelica',
  resume: './Zyrine-Angelica-Lopez-Resume.pdf',
  summary:
    'Full-stack developer focused on software and digital work. I build responsive websites and database-driven web applications, use AI-assisted tools to plan, code and test faster, design user interfaces in Figma, and create digital graphics and multimedia content. Detail-oriented, quick to learn, and reliable in managing time and priorities.',
};

/*
 * Project categories (the filter buttons on the Projects page).
 * To add a new work, copy one project below and set its `category`.
 * Optional: `image` (put the file in the /public folder, e.g. './works/poster-1.png') and `link`.
 */
const projectCategories = ['Websites', 'UI/UX Design', 'Graphic Designs', 'Systems'] as const;
type ProjectCategory = (typeof projectCategories)[number];

const projects: { title: string; year: string; category: ProjectCategory; type: string; description: string; tech: string[]; link?: string; image?: string }[] = [
  {
    title: 'Lumina Haven Hotel',
    year: '2024',
    category: 'Websites',
    type: 'Responsive website',
    description:
      'A responsive landing page for a boutique hotel with structured layouts, room listings and custom styling designed for a modern booking preview experience.',
    tech: ['HTML', 'CSS'],
  },
  {
    title: 'RTU Coeurliens',
    year: '2024',
    category: 'UI/UX Design',
    type: 'Mobile UI/UX prototype',
    description:
      'A mobile app prototype with complete user flows for authentication, home dashboard, chat messaging, announcements, profile settings and social interactions.',
    tech: ['Figma', 'UI/UX'],
  },
  {
    title: 'CSS Tutorial',
    year: '2024',
    category: 'Websites',
    type: 'Educational website',
    description:
      'A step-by-step guide explaining core CSS principles, including Flexbox, Grid layout and custom properties, written for beginner web designers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const services: { title: string; description: string; icon: 'code' | 'layers' | 'pen' | 'db' | 'cart' | 'doc' | 'stack' | 'ai' }[] = [
  { title: 'Full-Stack Development', description: 'Complete web applications: front-end interfaces, back-end logic and SQL databases, from setup to launch.', icon: 'stack' },
  { title: 'AI-Assisted Web Development', description: 'Faster website and app builds using AI tools for coding, debugging, content and testing, with every result reviewed by hand.', icon: 'ai' },
  { title: 'Website Development', description: 'Responsive websites and landing pages built with HTML, CSS and JavaScript.', icon: 'code' },
  { title: 'UI/UX Design', description: 'Wireframes and interactive prototypes for web and mobile apps, designed in Figma.', icon: 'layers' },
  { title: 'Graphic Design', description: 'Social media graphics, posters, presentations, certificates and other visual materials.', icon: 'pen' },
  { title: 'System Development', description: 'Simple database-driven systems using Java, Python, SQL and XAMPP.', icon: 'db' },
  { title: 'E-commerce Support', description: 'Product listings, store page updates and content management for online shops.', icon: 'cart' },
  { title: 'Administrative Support', description: 'Document preparation, spreadsheets, data entry and records management using Microsoft Office.', icon: 'doc' },
];

/* Working arrangement, hours and rates — fill in your own details here. */
const availability = {
  arrangements: ['Part-time', 'Full-time'],
  hours: 'Philippine Time (GMT+8). Schedule arranged with each client.',
};

const rates: { hourly: string; packages: { name: string; price: string; includes: string }[]; note: string } = {
  hourly: '', // e.g. '₱300 / hour'. Leave empty to show "On request".
  packages: [
    // e.g. { name: 'Landing Page', price: '₱5,000', includes: 'One responsive page, up to 2 revisions' },
  ],
  note: 'Rates depend on the scope of each project. Send me a message and I will reply with a quote.',
};

const techStack = [
  { name: 'HTML5', abbr: 'H5', kind: 'Front-end' },
  { name: 'CSS3', abbr: 'C3', kind: 'Front-end' },
  { name: 'JavaScript', abbr: 'JS', kind: 'Front-end' },
  { name: 'Java', abbr: 'JV', kind: 'Programming' },
  { name: 'Python', abbr: 'PY', kind: 'Programming' },
  { name: 'SQL', abbr: 'SQL', kind: 'Database' },
  { name: 'XAMPP', abbr: 'XP', kind: 'Web server' },
  { name: 'AI Coding Tools', abbr: 'AI', kind: 'AI-assisted dev' },
  { name: 'Figma', abbr: 'FG', kind: 'UI/UX' },
  { name: 'Canva', abbr: 'CV', kind: 'Graphics' },
  { name: 'MS Office', abbr: 'MS', kind: 'Productivity' },
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
const PinIcon = () => <Icon size={16}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></Icon>;
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
const ClockIcon = () => <Icon size={22}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
const TagIcon = () => <Icon size={22}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1.5" /></Icon>;
const CheckIcon = () => <Icon size={16}><path d="m5 12 5 5 9-10" /></Icon>;
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
    { to: 'services', title: 'Full-Stack Development', text: 'Web applications with a clean front end, working back end and SQL database.', link: 'See my services', icon: <StackIcon /> },
    { to: 'services', title: 'AI-Assisted Web Development', text: 'Websites and apps built faster with AI coding tools, carefully reviewed and tested.', link: 'See my services', icon: <SparkIcon /> },
    { to: 'projects', title: 'UI/UX & Digital Design', text: 'App interfaces in Figma, plus graphics and multimedia content made in Canva.', link: 'See my projects', icon: <LayersIcon /> },
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
              <div><dt>Role</dt><dd>Full-Stack Developer</dd></div>
              <div><dt>Focus</dt><dd>AI-Assisted Web Development, UI/UX & Digital Design</dd></div>
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
          <div className="center-cta reveal" style={d(10)}>
            <a href="#/services" className="btn btn-outline">View all services <ArrowIcon /></a>
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
              I am a full-stack developer who builds clean, responsive websites and database-driven web applications. My work spans front-end
              development with HTML, CSS and JavaScript, back-end programming in Java and Python, SQL databases, and UI/UX prototyping in Figma.
              I use AI-assisted tools to plan, write and test code faster, and I review every result carefully.
            </p>
            <p className="reveal" style={d(3)}>
              I also work with SQL and XAMPP for databases and local web servers, and I write clear technical documentation. I value accuracy
              and dependable follow-through, and I am looking for a role in full-stack or web development, UI/UX or digital design where I can
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
          <NextLink to="services" label="Services" />
        </div>
      </section>
    </>
  );
}

const serviceIcons = { stack: <StackIcon />, ai: <SparkIcon />, code: <CodeIcon />, layers: <LayersIcon />, pen: <PenIcon />, db: <DbIcon />, cart: <CartIcon />, doc: <DocIcon /> };

function ServicesPage() {
  return (
    <>
      <PageHead kicker="Services" title="Services I offer" intro="Software, design and digital support for businesses, teams and individuals." />
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s, i) => (
              <div className="card service reveal" style={d(3 + i)} key={s.title}>
                <span className="highlight-icon">{serviceIcons[s.icon]}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>

          <div className="terms-grid">
            <div className="card terms reveal" style={d(9)}>
              <span className="terms-icon"><ClockIcon /></span>
              <span className="label">Availability & working hours</span>
              <ul className="check-list">
                {availability.arrangements.map((a) => (
                  <li key={a}><CheckIcon /> {a}</li>
                ))}
              </ul>
              <p className="muted">{availability.hours}</p>
            </div>
            <div className="card terms reveal" style={d(10)}>
              <span className="terms-icon"><TagIcon /></span>
              <span className="label">Rates</span>
              <div className="rate-rows">
                <div className="rate-row">
                  <span>Hourly rate</span>
                  <strong>{rates.hourly || 'On request'}</strong>
                </div>
                {rates.packages.length > 0 ? (
                  rates.packages.map((pk) => (
                    <div className="rate-row" key={pk.name}>
                      <span>{pk.name}<small>{pk.includes}</small></span>
                      <strong>{pk.price}</strong>
                    </div>
                  ))
                ) : (
                  <div className="rate-row">
                    <span>Project packages</span>
                    <strong>On request</strong>
                  </div>
                )}
              </div>
              <p className="muted">{rates.note}</p>
              <a href="#/contact" className="btn btn-primary btn-sm terms-cta"><MailIcon /> Request a quote</a>
            </div>
          </div>
          <NextLink to="projects" label="Projects" />
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
      <PageHead kicker="Projects" title="My work" intro="Websites, UI/UX design, graphic designs and systems." />
      <section className="section">
        <div className="container">
          <div className="filter-bar reveal" style={d(2)} role="group" aria-label="Filter projects by category">
            {filters.map((f) => {
              const count = f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;
              return (
                <button key={f} type="button" className={`filter-btn ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f} <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
          <div className="project-grid" key={filter}>
            {shown.map((p, i) => (
              <article className="card project reveal" style={d(i)} key={p.title}>
                {p.image && <img className="project-image" src={p.image} alt={p.title} loading="lazy" />}
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
            {shown.length === 0 && (
              <div className="card empty reveal">
                <h3>{filter}</h3>
                <p className="muted">New work in this category is being added. Contact me if you would like to see samples.</p>
                <a href="#/contact" className="project-link">Request samples <ArrowIcon /></a>
              </div>
            )}
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
      <PageHead kicker="Skills" title="Skills & tech stack" intro="Languages, tools and technologies I use in software, design and digital work." />
      <section className="section">
        <div className="container">
          <h2 className="sub-head reveal" style={d(2)}>Tech stack</h2>
          <div className="stack-grid">
            {techStack.map((t, i) => (
              <div className="stack-item reveal" style={d(3 + i * 0.5)} key={t.name}>
                <span className="stack-badge">{t.abbr}</span>
                <span className="stack-text"><strong>{t.name}</strong><small>{t.kind}</small></span>
              </div>
            ))}
          </div>
          <h2 className="sub-head reveal" style={d(8)}>Skills by area</h2>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="card skill reveal" style={d(9 + i)} key={s.group}>
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
      <PageHead kicker="Contact" title="Get in touch" intro="I am open to part-time and full-time work. For projects, services or job opportunities, the best way to reach me is by email." />
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
