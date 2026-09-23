import { useEffect, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Content — edit the text here to update the site                    */
/* ------------------------------------------------------------------ */

const profile = {
  name: 'Zyrine Angelica G. Lopez',
  shortName: 'Zyrine Lopez',
  headline: 'Information Technology · Hardware, Networking & Web Development',
  location: 'Binangonan, Rizal, Philippines',
  email: 'zyrinezyrine08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zyrine-angelica-lopez-3a0a68436',
  github: 'https://github.com/zyrineangelica',
  resume: './Zyrine-Angelica-Lopez-Resume.pdf',
  summary:
    'Information Technology professional with hands-on industry experience in computer hardware assembly, operating system deployment, laptop troubleshooting and LAN setup, along with front-end web development using HTML, CSS and JavaScript. Detail-oriented, quick to learn, and reliable in managing time and priorities.',
};

const experience = [
  {
    role: 'IT Hardware Intern',
    company: 'Modernext IT Solution Corp',
    place: 'Greenhills, San Juan City',
    period: 'Feb 2026 – Apr 2026',
    points: [
      'Assembled, disassembled and custom-built high-end system units, ensuring correct component placement and full system functionality.',
      'Installed and configured operating systems across multiple rental laptops and desktop setups.',
      'Diagnosed, repaired and re-configured rental laptop inventory to keep units ready for deployment.',
      'Managed local area network (LAN) setup and cable management, and verified network stability across client machines.',
      'Evaluated hardware specifications and component compatibility to support client build quotations.',
    ],
  },
  {
    role: 'ICT Intern / Trainee',
    company: 'Vicente Madrigal National High School',
    place: 'Binangonan, Rizal',
    period: 'Mar 2023 – May 2023',
    points: [
      'Supported school staff with presentation designs, certificates, handbooks and student record management.',
      'Performed networking tasks including cable crimping, LAN setup and network stability checks.',
      'Provided technical support by troubleshooting desktop computers and maintaining computer lab hardware.',
    ],
  },
];

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
  { group: 'Hardware & Networking', items: ['System Building', 'OS Deployment', 'Hardware Troubleshooting', 'Ethernet Cable Crimping', 'LAN Setup'] },
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
  { title: 'Certificate of Completion — Hardware Development Internship', issuer: 'Modernext IT Solution Corp', year: '2026' },
  { title: 'Marketing Me Live (3 sessions)', issuer: 'Rizal Technological University Mandaluyong', year: '2026' },
  { title: 'Digital Finance and Financial Literacy: Bridging Traditional and Modern Economic Knowledge', issuer: '', year: '2026' },
  { title: 'Certificate of Completion — Hardware Development Internship', issuer: 'Vicente Madrigal National High School', year: '2023' },
];

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
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
/*  Layout pieces                                                      */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">ZL</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm nav-resume" onClick={() => setOpen(false)}>
            Résumé
          </a>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

function Section({ id, title, kicker, children, alt = false }: { id: string; title: string; kicker: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`section ${alt ? 'section-alt' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{kicker}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              <DownloadIcon /> Download Résumé
            </a>
            <a href="#contact" className="btn btn-outline">
              <MailIcon /> Contact Me
            </a>
          </div>
          <div className="hero-meta">
            <span><PinIcon /> {profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
          </div>
        </div>
        <aside className="glance" aria-label="At a glance">
          <h2 className="glance-title">At a glance</h2>
          <dl>
            <div><dt>Focus</dt><dd>IT Support, Hardware & Networking, Front-end Web</dd></div>
            <div><dt>Latest role</dt><dd>IT Hardware Intern, Modernext IT Solution Corp</dd></div>
            <div><dt>Education</dt><dd>BS Information Technology, Rizal Technological University</dd></div>
            <div><dt>Location</dt><dd>Rizal / Metro Manila</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="01" title="About">
      <div className="about-grid">
        <p className="lead">
          I work at the point where hardware, networks and the web meet. My industry internship involved building and configuring
          high-end systems, deploying operating systems across laptop fleets, and setting up and testing local networks for clients.
        </p>
        <p>
          Alongside infrastructure work, I build clean, responsive web pages and design user interfaces in Figma. I value accuracy,
          clear documentation and dependable follow-through, and I am looking for an entry-level IT role where I can contribute from day one
          and keep growing with the team.
        </p>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" kicker="02" title="Experience" alt>
      <div className="timeline">
        {experience.map((job) => (
          <article className="job" key={job.company}>
            <div className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p className="job-company">{job.company} <span>· {job.place}</span></p>
              </div>
              <span className="job-period">{job.period}</span>
            </div>
            <ul>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" kicker="03" title="Projects">
      <div className="project-grid">
        {projects.map((p) => (
          <article className="card project" key={p.title}>
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
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View project →</a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="04" title="Technical Skills" alt>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="card skill" key={s.group}>
            <h3>{s.group}</h3>
            <div className="tags">
              {s.items.map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" kicker="05" title="Education & Certifications">
      <div className="edu-grid">
        <div className="card edu">
          <span className="label">Education</span>
          <h3>{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
          <p className="muted">{education.place} · {education.period}</p>
        </div>
        <div className="card">
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
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="06" title="Contact" alt>
      <div className="contact">
        <p className="lead">
          I am open to entry-level IT opportunities. The best way to reach me is by email.
        </p>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <MailIcon />
            <span><small>Email</small>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-item">
            <LinkedinIcon />
            <span><small>LinkedIn</small>Zyrine Angelica Lopez</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-item">
            <GithubIcon />
            <span><small>GitHub</small>github.com/zyrineangelica</span>
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="contact-item">
            <DownloadIcon />
            <span><small>Résumé</small>Download PDF</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

function App() {
  return (
    <div className="site">
      <a href="#about" className="skip-link">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
