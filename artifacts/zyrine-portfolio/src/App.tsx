import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';

type View = 'home' | 'about' | 'works' | 'contact';
type Filter = 'all' | 'photo-booth' | 'landing-pages' | 'other-works';

type Project = {
  id: string;
  title: string;
  category: Exclude<Filter, 'all'>;
  eyebrow: string;
  description: string;
  tags: string[];
  accent: 'pink' | 'blue' | 'yellow' | 'lilac' | 'coral';
  likes: number;
  detail: string;
};

const projects: Project[] = [
  {
    id: 'photo-booth',
    title: 'Photo Booth',
    category: 'photo-booth',
    eyebrow: '01 / playful product',
    description: 'A tiny digital booth for making memories feel like keepsakes.',
    tags: ['React', 'CSS', 'Canvas'],
    accent: 'pink',
    likes: 38,
    detail: 'A bright, friendly photo experience built around quick snapshots, expressive frames, and sharing little moments with the people you love.',
  },
  {
    id: 'mizu-matcha',
    title: 'Mizu Matcha',
    category: 'landing-pages',
    eyebrow: '02 / landing page',
    description: 'A calm launch page for a matcha studio with a playful pulse.',
    tags: ['HTML', 'Figma', 'Motion'],
    accent: 'blue',
    likes: 27,
    detail: 'An editorial landing page that pairs a clear conversion path with a soft, tactile art direction inspired by paper packaging.',
  },
  {
    id: 'room-for-ideas',
    title: 'Room for Ideas',
    category: 'landing-pages',
    eyebrow: '03 / visual study',
    description: 'A warm portfolio concept where typography does the talking.',
    tags: ['UI/UX', 'Type', 'Prototyping'],
    accent: 'yellow',
    likes: 44,
    detail: 'A study in expressive type, modular blocks, and the small moments of motion that help a personal brand feel instantly welcoming.',
  },
  {
    id: 'tiny-tasks',
    title: 'Tiny Tasks',
    category: 'other-works',
    eyebrow: '04 / interface study',
    description: 'A gentle task board for days that need a little less noise.',
    tags: ['Figma', 'UX', 'Components'],
    accent: 'lilac',
    likes: 19,
    detail: 'A compact productivity concept that uses color, rhythm, and generous breathing room to make progress feel approachable.',
  },
  {
    id: 'sticker-sheet',
    title: 'Sticker Sheet',
    category: 'other-works',
    eyebrow: '05 / sketchbook',
    description: 'A collection of little visual experiments from my sketchbook.',
    tags: ['Branding', 'Illustration', 'SVG'],
    accent: 'coral',
    likes: 31,
    detail: 'An evolving library of marks, icons, and visual fragments that keeps the learning process visible and joyfully imperfect.',
  },
];

const navItems: { id: View; label: string; index: string }[] = [
  { id: 'home', label: 'Home', index: '01' },
  { id: 'about', label: 'About', index: '02' },
  { id: 'works', label: 'My Works', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];

function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop resume-backdrop" role="presentation" onClick={onClose}>
      <div className="resume-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="resume-title" onClick={(event) => event.stopPropagation()}>
        <div className="resume-actions">
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close resume" data-testid="button-close-resume"><X size={18} /></button>
          <a className="resume-pdf-button" href="./Zyrine-Angelica-Lopez-Resume.pdf" target="_blank" rel="noreferrer" data-testid="link-full-resume-pdf"><FileText size={15} /> Full PDF <ExternalLink size={13} /></a>
          <button type="button" className="resume-print-button" onClick={() => window.print()} data-testid="button-print-resume"><FileText size={15} /> Print / Save PDF</button>
        </div>
        <div className="resume-sheet">
          <div className="resume-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> personal resume</div>
              <h2 id="resume-title">Zyrine Angelica<br /><span>G. Lopez</span></h2>
              <p>BSIT Student <b>·</b> Web Designer</p>
            </div>
            <div className="resume-monogram">Z<span>.</span></div>
          </div>
          <div className="resume-grid">
            <div>
              <div className="resume-section">
                <span className="resume-label">Profile</span>
                <p>BSIT student who enjoys turning ideas into clear, playful digital experiences. I love designing in Canva, exploring multimedia websites and apps, and learning how thoughtful visuals can make interfaces feel more human.</p>
              </div>
              <div className="resume-section">
                <span className="resume-label">Education</span>
                <h3>Bachelor of Science in Information Technology</h3>
                <p>Currently studying · Building through practice, projects, and curiosity</p>
              </div>
              <div className="resume-section">
                <span className="resume-label">Selected work</span>
                <ul className="resume-list">
                  <li><strong>Photo Booth</strong><span>Playful web app concept</span></li>
                  <li><strong>Mizu Matcha</strong><span>Creative landing page</span></li>
                  <li><strong>Room for Ideas</strong><span>Visual design study</span></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="resume-section">
                <span className="resume-label">Skills</span>
                <div className="resume-tags">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'Canva', 'UI/UX', 'Responsive Design', 'Multimedia'].map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
              <div className="resume-section">
                <span className="resume-label">Connect</span>
                <a href="mailto:zyrineangelica@gmail.com">zyrineangelica@gmail.com</a>
                <a href="https://github.com/zyrineangelica" target="_blank" rel="noreferrer">github.com/zyrineangelica</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com</a>
              </div>
              <div className="resume-note"><Sparkles size={15} /> always learning, always making</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div className={`project-art art-${project.accent}`} aria-label={`${project.title} preview art`}>
      <span className="art-label">zyrine / studies</span>
      <span className="art-index">{project.id === 'photo-booth' ? '04:26' : '00:17'}</span>
      {project.accent === 'pink' && (
        <>
          <div className="booth-card booth-card-one"><div className="face face-one" /></div>
          <div className="booth-card booth-card-two"><div className="face face-two" /></div>
          <div className="booth-ticket">smile<br /><strong>for the idea</strong></div>
          <div className="art-star" aria-hidden="true" />
        </>
      )}
      {project.accent === 'blue' && (
        <>
          <div className="mizu-word">mizu</div>
          <div className="mizu-sun" />
          <div className="mizu-bottle"><span>抹茶</span></div>
          <div className="mizu-wave" />
        </>
      )}
      {project.accent === 'yellow' && (
        <>
          <div className="yellow-type">make<br /><em>space</em></div>
          <div className="yellow-orbit" />
          <div className="yellow-dot" />
          <div className="yellow-note">for the<br />good stuff</div>
        </>
      )}
      {project.accent === 'lilac' && (
        <>
          <div className="task-window"><span /><span /><span /><b>one small<br />thing at a time</b></div>
          <div className="lilac-flower" aria-hidden="true" />
        </>
      )}
      {project.accent === 'coral' && (
        <>
          <div className="sticker one">HELLO</div>
          <div className="sticker two">MAKE<br />MORE</div>
          <div className="sticker three"><Code2 /></div>
          <div className="coral-ring" />
        </>
      )}
    </div>
  );
}

function SiteNav({
  view,
  onNavigate,
  dark,
  onToggleTheme,
  onOpenResume,
}: {
  view: View;
  onNavigate: (view: View) => void;
  dark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = (next: View) => {
    onNavigate(next);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button type="button" className="brand" onClick={() => navigate('home')} data-testid="button-logo">
          <span className="brand-mark">Z</span>
          <span>zyrine<span className="pink-dot">.</span></span>
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-tab ${view === item.id ? 'is-active' : ''}`}
              onClick={() => navigate(item.id)}
              aria-current={view === item.id ? 'page' : undefined}
              data-testid={`button-nav-${item.id}`}
            >
              <span>{item.index}</span>{item.label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={dark ? 'Switch to pastel mode' : 'Switch to dark pastel mode'} aria-pressed={dark} data-testid="button-theme-toggle">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button type="button" className="resume-nav-button" onClick={onOpenResume} data-testid="button-nav-resume">
            <FileText size={15} /> Resume
          </button>
          <button type="button" className="hello-button" onClick={() => navigate('contact')} data-testid="button-say-hello">
            Say hello <ArrowUpRight size={15} />
          </button>
          <button type="button" className="mobile-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} data-testid="button-mobile-menu">
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button type="button" key={item.id} onClick={() => navigate(item.id)} className={view === item.id ? 'is-active' : ''} data-testid={`button-mobile-nav-${item.id}`}>
              <span>{item.index}</span>{item.label}<ChevronRight size={14} />
            </button>
          ))}
          <button type="button" onClick={onToggleTheme} className="mobile-theme" data-testid="button-mobile-theme">
            {dark ? <Sun size={15} /> : <Moon size={15} />}{dark ? 'Pastel mode' : 'Dark pastel mode'}
          </button>
          <button type="button" onClick={onOpenResume} className="mobile-theme mobile-resume" data-testid="button-mobile-resume">
            <FileText size={15} /> View my resume
          </button>
        </nav>
      )}
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art-wrap">
      <div className="hero-ring ring-one" />
      <div className="hero-ring ring-two" />
      <span className="floating-chip chip-top"><Sparkles size={13} /> soft ideas</span>
      <span className="floating-chip chip-side"><Palette size={13} /> make it cute</span>
      <div className="hero-art">
        <div className="hero-art-header"><span>visual diary / 2025</span><span>01</span></div>
        <div className="portrait-frame">
          <div className="portrait-hair" />
          <div className="portrait-face"><span className="eye left" /><span className="eye right" /><span className="nose" /><span className="mouth" /></div>
          <div className="portrait-body"><span className="collar" /></div>
          <div className="portrait-flower flower-a" aria-hidden="true" />
          <div className="portrait-flower flower-b" aria-hidden="true" />
        </div>
        <div className="hero-note">designing<br /><strong>with care.</strong></div>
        <div className="hero-orb" />
        <div className="hero-scribble">Z / A / G</div>
      </div>
      <div className="availability"><span className="status-dot" /> available for curious projects</div>
    </div>
  );
}

function HomeView({ onNavigate, onOpenResume }: { onNavigate: (view: View) => void; onOpenResume: () => void }) {
  const roles = ['BSIT Student', 'Web Designer', 'Creative UI/UX Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const role = roles[roleIndex];
    let character = 0;
    setTyped('');
    const interval = window.setInterval(() => {
      character += 1;
      setTyped(role.slice(0, character));
      if (character >= role.length) window.clearInterval(interval);
    }, 70);
    const timeout = window.setTimeout(() => setRoleIndex((current) => (current + 1) % roles.length), 3100);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [roleIndex]);

  return (
    <section className="view home-view" aria-labelledby="home-title">
      <div className="background-orb orb-pink" />
      <div className="background-orb orb-blue" />
      <div className="sparkle sparkle-one" aria-hidden="true" /><div className="sparkle sparkle-two" aria-hidden="true" /><div className="sparkle sparkle-three" aria-hidden="true" />
      <div className="home-grid">
        <div className="hero-copy">
          <div className="eyebrow intro-eyebrow"><span className="eyebrow-line" /> hello, nice to meet you</div>
          <h1 id="home-title">I turn bright<br /><span>ideas</span> into<br />web things<span className="pink-dot">.</span></h1>
          <p className="hero-lede"><strong className="typing">{typed}</strong><br />A BSIT student and web designer making clear, playful little corners of the internet.</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate('works')} data-testid="button-explore-work">
              Explore my work <span><ArrowDownRight size={16} /></span>
            </button>
            <button type="button" className="text-button" onClick={() => onNavigate('about')} data-testid="button-home-about">
              A little about me <ArrowUpRight size={14} />
            </button>
          </div>
          <button type="button" className="resume-hero-button" onClick={onOpenResume} data-testid="button-home-resume">
            <FileText size={15} /> View my resume <ArrowUpRight size={14} />
          </button>
          <div className="quick-links">
            <span className="quick-label">find me online</span>
            <a href="https://github.com/zyrineangelica" target="_blank" rel="noreferrer" aria-label="Zyrine on GitHub" data-testid="link-github"><Github size={17} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Zyrine on LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a>
            <a href="mailto:zyrineangelica@gmail.com" aria-label="Email Zyrine" data-testid="link-email"><Mail size={17} /></a>
            <span className="quick-line" />
          </div>
        </div>
        <HeroArt />
      </div>
      <div className="home-footer"><span>scroll through my little universe</span><span className="footer-rule" /><span>01 / 04</span></div>
    </section>
  );
}

function AboutView({ onOpenResume }: { onOpenResume: () => void }) {
  const skills = [
    { name: 'HTML', note: 'structure', color: 'pink' },
    { name: 'CSS', note: 'visuals', color: 'blue' },
    { name: 'JS', note: 'logic', color: 'yellow' },
    { name: 'Figma', note: 'prototypes', color: 'lilac' },
    { name: 'UI/UX', note: 'feel', color: 'coral' },
    { name: 'Canva', note: 'graphics', color: 'pink' },
    { name: 'Multimedia', note: 'stories', color: 'blue' },
  ];
  return (
    <section className="view about-view" aria-labelledby="about-title">
      <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> 02 / the person behind the pixels</div><h2 id="about-title">A curious mind<br />with a <span>soft spot</span><br />for details<span className="pink-dot">.</span></h2></div><div className="heading-aside">student / builder /<br />professional daydreamer</div></div>
      <div className="about-layout">
        <div className="about-copy glass-card">
          <div className="mini-avatar">Z</div>
          <p className="lead-copy">I&apos;m Zyrine Angelica G. Lopez, currently studying BSIT and finding my way through the colorful world of web design.</p>
          <p>I like websites that feel clear at first glance, but leave a small, happy surprise when you look closer. I also love designing in Canva and exploring multimedia websites or apps where visuals, motion, and sound can work together.</p>
          <div className="about-signature">zyrine angelica <span>—</span> always learning</div>
          <button type="button" className="about-resume-button" onClick={onOpenResume} data-testid="button-about-resume"><FileText size={15} /> Show my resume <ArrowUpRight size={14} /></button>
        </div>
        <div className="skills-panel glass-card">
          <div className="panel-kicker">my growing toolkit <span>07 things i love</span></div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className={`skill-row skill-${skill.color}`} key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace('/', '-')}`}>
                <span className="skill-number">0{index + 1}</span><span className="skill-name">{skill.name}</span><span className="skill-note">{skill.note}</span><ArrowUpRight size={16} />
              </div>
            ))}
          </div>
          <div className="skills-footnote"><Sparkles size={15} /> the fun part is connecting the dots</div>
        </div>
      </div>
      <div className="about-stat-row"><div><strong>02+</strong><span>years learning<br />by making</span></div><div><strong>18</strong><span>tiny experiments<br />and counting</span></div><div><strong>01</strong><span>very big<br />curiosity</span></div></div>
    </section>
  );
}

function WorksView({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const shown = useMemo(() => filter === 'all' ? projects : projects.filter((project) => project.category === filter), [filter]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  const filterItems: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All Posts' },
    { id: 'photo-booth', label: 'Photo Booth' },
    { id: 'landing-pages', label: 'Landing Pages' },
    { id: 'other-works', label: 'Other Works' },
  ];

  return (
    <section className="view works-view" aria-labelledby="works-title">
      <div className="works-topline"><div className="eyebrow"><span className="eyebrow-line" /> 03 / the collection</div><span className="post-count">05 posts / 2025</span></div>
      <div className="profile-banner glass-card">
        <div className="profile-avatar"><span>Z</span><i /></div>
        <div className="profile-info"><div className="profile-handle">@zyrine.designs <span className="verified"><Check size={11} /></span></div><p>BSIT Student <b>•</b> Web Designer <b>•</b> Crafting cute digital experiences</p><div className="profile-stats"><span><strong>05</strong> posts</span><span><strong>18</strong> projects</span><span><strong>∞</strong> ideas</span></div></div>
        <div className="profile-stamp"><Instagram size={18} /><span>my<br />little<br />feed</span></div>
      </div>
      <div className="works-heading"><div><h2 id="works-title">A few things<br /><span>I&apos;ve made.</span></h2></div><p>Swipe through the sketchbook.<br />Click a post to peek closer.</p></div>
      <div className="filter-tabs" role="group" aria-label="Filter project posts">
        {filterItems.map((item) => <button type="button" key={item.id} className={filter === item.id ? 'is-active' : ''} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} data-testid={`button-filter-${item.id}`}>{item.label}</button>)}
      </div>
      <div className="post-grid">
        {shown.map((project, index) => (
          <article className={`post-card ${index === 1 ? 'post-offset' : ''}`} key={project.id} onClick={() => setSelected(project)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelected(project); } }} tabIndex={0} role="button" aria-label={`Open ${project.title} details`} data-testid={`card-project-${project.id}`}>
            <div className="post-art-wrap"><ProjectArtwork project={project} /><div className="post-overlay"><button type="button" onClick={(event) => { event.stopPropagation(); setSelected(project); }} data-testid={`button-view-${project.id}`}>View project <ArrowUpRight size={15} /></button><a href="#contact" onClick={(event) => { event.preventDefault(); event.stopPropagation(); }} data-testid={`link-demo-${project.id}`}>Demo <ExternalLink size={13} /></a><a href="https://github.com/zyrineangelica" target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} data-testid={`link-repo-${project.id}`}>Repo <Github size={13} /></a></div><span className="post-number">{project.eyebrow.slice(0, 2)}</span></div>
            <div className="post-meta"><div><div className="post-eyebrow">{project.eyebrow}</div><h3>{project.title}</h3></div><button type="button" className={`like-button ${liked[project.id] ? 'is-liked' : ''}`} onClick={(event) => { event.stopPropagation(); setLiked((current) => ({ ...current, [project.id]: !current[project.id] })); }} aria-label={liked[project.id] ? `Unlike ${project.title}` : `Like ${project.title}`} aria-pressed={Boolean(liked[project.id])} data-testid={`button-like-${project.id}`}><Heart size={16} fill={liked[project.id] ? 'currentColor' : 'none'} /><span>{project.likes + (liked[project.id] ? 1 : 0)}</span></button></div>
            <p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>#{tag.toLowerCase().replace('/', '')}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="works-end"><span>more ideas are on their way</span><button type="button" onClick={() => onNavigate('contact')} data-testid="button-works-contact">Have a project in mind? <ArrowUpRight size={15} /></button></div>
      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <div className="project-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details" data-testid="button-close-project"><X size={18} /></button>
            <ProjectArtwork project={selected} />
            <div className="modal-content"><div className="post-eyebrow">{selected.eyebrow}</div><h2 id="project-modal-title">{selected.title}</h2><p>{selected.detail}</p><div className="tag-row">{selected.tags.map((tag) => <span key={tag}>#{tag.toLowerCase().replace('/', '')}</span>)}</div><div className="modal-links"><a href="#contact" onClick={(event) => { event.preventDefault(); setSelected(null); onNavigate('contact'); }} data-testid="link-live-demo">Live demo <ExternalLink size={14} /></a><a href="https://github.com/zyrineangelica" target="_blank" rel="noreferrer" data-testid="link-project-github">GitHub <Github size={14} /></a></div></div>
          </div>
        </div>
      )}
    </section>
  );
}

function ContactView() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please add a valid email.';
    if (!form.subject.trim()) nextErrors.subject = 'A subject helps me know where to start.';
    if (form.message.trim().length < 10) nextErrors.message = 'Tell me a little more (10 characters minimum).';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm({ email: '', subject: '', message: '' });
      window.setTimeout(() => setSent(false), 4600);
    }
  };
  return (
    <section className="view contact-view" aria-labelledby="contact-title">
      <div className="contact-intro"><div className="eyebrow"><span className="eyebrow-line" /> 04 / let&apos;s talk</div><h2 id="contact-title">Have a thought?<br /><span>Send it over.</span></h2><p>Whether it&apos;s a tiny idea, a curious question, or a project that needs a little sparkle, my inbox is open.</p><div className="contact-links"><a href="mailto:zyrineangelica@gmail.com" data-testid="link-contact-email"><Mail size={15} /> Email me <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" data-testid="link-contact-linkedin"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/zyrineangelica" target="_blank" rel="noreferrer" data-testid="link-contact-github"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a></div></div>
      <form className="compose-card glass-card" onSubmit={handleSubmit} noValidate>
        <div className="compose-top"><span><span className="window-dot pink" /><span className="window-dot yellow" /><span className="window-dot blue" /></span><span>New Message</span><button type="button" onClick={() => setForm({ email: '', subject: '', message: '' })} aria-label="Clear message" data-testid="button-clear-message"><X size={15} /></button></div>
        <label>To <span className="recipient">Zyrine Angelica</span></label>
        <label htmlFor="contact-email">From <input id="contact-email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="your@email.com" aria-invalid={Boolean(errors.email)} data-testid="input-contact-email" /></label>{errors.email && <span className="field-error">{errors.email}</span>}
        <label htmlFor="contact-subject">Subject <input id="contact-subject" type="text" value={form.subject} onChange={(event) => update('subject', event.target.value)} placeholder="A bright idea..." aria-invalid={Boolean(errors.subject)} data-testid="input-contact-subject" /></label>{errors.subject && <span className="field-error">{errors.subject}</span>}
        <label htmlFor="contact-message">Message <textarea id="contact-message" rows={5} value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="Tell me what you&apos;re thinking..." aria-invalid={Boolean(errors.message)} data-testid="input-contact-message" /></label>{errors.message && <span className="field-error">{errors.message}</span>}
        <div className="compose-bottom"><span>zyrine is typing...</span><button type="submit" className="send-button" data-testid="button-send-message">Send message <Send size={16} /></button></div>
      </form>
      {sent && <div className="success-toast" role="status" data-testid="status-message-sent"><span><Check size={16} /></span> Message sent! Thank you for reaching out 💕</div>}
    </section>
  );
}

function App() {
  const [view, setView] = useState<View>('home');
  const [dark, setDark] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('zyrine-theme');
    setDark(saved === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('zyrine-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  return (
    <div className="portfolio-app">
      <SiteNav view={view} onNavigate={setView} dark={dark} onToggleTheme={() => setDark((current) => !current)} onOpenResume={() => setResumeOpen(true)} />
      <main className="view-stage" key={view}>
        {view === 'home' && <HomeView onNavigate={setView} onOpenResume={() => setResumeOpen(true)} />}
        {view === 'about' && <AboutView onOpenResume={() => setResumeOpen(true)} />}
        {view === 'works' && <WorksView onNavigate={setView} />}
        {view === 'contact' && <ContactView />}
      </main>
      <footer className="site-footer"><span>zyrine angelica g. lopez</span><span>made with curiosity / 2025</span><span>manila, ph</span></footer>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  );
}

export default App;