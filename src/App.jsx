import CommandPalette from './components/CommandPalette';
import CareKidsCaseStudy from './components/CareKidsCaseStudy';
import Workflow from './components/Workflow';
import { useEffect, useState } from 'react';
import RecruiterView from './components/RecruiterView';
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { profile, projects, skills } from "./data/portfolio";

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [category, setCategory] = useState('All');
  const [commandOpen, setCommandOpen] = useState(false);
  useEffect(() => {
    const handleShortcut = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setCommandOpen(open => !open);
      }
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.section-title, .project-card, .case-header').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [category]);
  useEffect(() => {
    const restoreProject = () => {
      if (location.hash.startsWith('#project-')) {
        setCategory('All');
        requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' }));
      }
    };
    window.addEventListener('hashchange', restoreProject);
    return () => window.removeEventListener('hashchange', restoreProject);
  }, []);
  function navigate(href) {
    setCategory('All');
    setCommandOpen(false);
    requestAnimationFrame(() => {
      location.hash = href;
      const destination = document.getElementById(href.slice(1));
      destination?.scrollIntoView({ behavior: 'instant', block: 'start' });
      destination?.setAttribute('tabindex', '-1');
      destination?.focus({ preventScroll: true });
    });
  }
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage is optional. */ }
  }, [theme]);
  const filteredProjects = projects.filter(p => category === 'All' || p.categories.includes(category));
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onThemeChange={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} onSearch={() => setCommandOpen(true)} />

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="hero container">
          <div className="hero-kicker">
            <span />
            {profile.availability}
          </div>

          <p className="hero-intro">{profile.name} · Mobile & Web Developer</p>
          <h1>
            Building digital products with
            <em> clarity, care, and purpose.</em>
          </h1>

          <div className="hero-bottom">
            <p>{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                View my work
                <ArrowDown size={17} />
              </a>

              <a className="button text" href={`mailto:${profile.email}`}>Let's talk <Mail size={17}/></a>
              {profile.resume && profile.resume !== "#" && (
                <a
                  className="button text"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Résumé
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={15} />
              {profile.location}
            </span>

            <span>
              Mobile Development • Web Development • UI/UX
            </span>
          </div>
        </section>

        <div className="expertise-strip container" aria-label="Explore work by discipline">{[['Mobile', 'Mobile applications'], ['Web', 'Web development'], ['UX/UI', 'UX/UI design']].map(([value, label]) => <button key={value} onClick={() => { setCategory(value); document.getElementById('work')?.scrollIntoView(); }}>{label}<ArrowUpRight size={16}/></button>)}</div>

        {/* Projects */}
        <section id="work" className="section container">
          <div className="section-title">
            <p className="eyebrow">Selected work</p>

            <h2>
              Projects that show
              <br />
              how I think and build.
            </h2>
          </div>

          <div className="project-filters" aria-label="Filter projects">{['All', 'Mobile', 'Web', 'UX/UI', 'Full-stack'].map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}<span>{value === 'All' ? projects.length : projects.filter(p => p.categories.includes(value)).length}</span></button>)}</div>
          <p className="filter-status muted" role="status">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}{category !== 'All' ? ` · ${category}` : ''}</p>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        </section>

        <CareKidsCaseStudy />
        <Workflow />
        <RecruiterView />

        {/* About */}
        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About me</p>

              <h2>
                Thoughtful design,
                <br />
                structured engineering.
              </h2>
            </div>

            <div className="about-copy">
              <p className="large-copy">
                I&apos;m {profile.name}, a Software Engineering student focused
                on building user-centered mobile and web products from concept
                to implementation.
              </p>

              <p>
                My experience covers the full product process, including user
                research, wireframing, high-fidelity prototyping, frontend
                development, database integration, authentication, and
                shared application data.
              </p>

              <p>
                I enjoy translating complex requirements into clear, practical
                experiences. Whether I&apos;m designing an interface in Figma
                or implementing a cross-platform application in Flutter, I care
                about usability, maintainable structure, and creating software
                that solves a meaningful problem.
              </p>

              <a href="#contact">
                Let&apos;s work together
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section container">
          <div className="section-title row-title">
            <div>
              <p className="eyebrow">Capabilities</p>

              <h2>
                Tools I use to bring
                <br />
                ideas to life.
              </h2>
            </div>

            <p>
              A practical toolkit shaped by hands-on experience in mobile
              development, web interfaces, backend services, and UX/UI design.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.label}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{skill.label}</h3>

                <p>{skill.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <p className="eyebrow">Contact</p>

            <h2>
              Have an opportunity
              <br />
              or an idea?
            </h2>

            <a
              className="contact-email"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
              <ArrowUpRight />
            </a>

            <div className="contact-footer">
              <p>
                © {new Date().getFullYear()} {profile.shortName}
              </p>

              <div className="social-links">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                )}

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send email"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {commandOpen && <CommandPalette onClose={() => setCommandOpen(false)} onNavigate={navigate} />}
    </div>
  );
}

export default App;