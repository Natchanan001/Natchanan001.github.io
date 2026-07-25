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
  return (
    <div id="top">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero container">
          <div className="hero-kicker">
            <span />
            Available for internship opportunities
          </div>

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

        {/* Moving skills banner */}
        <section className="marquee" aria-label="Skills overview">
          <div>
            FLUTTER ✦ DART ✦ SUPABASE ✦ FIGMA ✦ VUE.JS ✦ UI/UX ✦
            FLUTTER ✦ DART ✦ SUPABASE ✦ FIGMA ✦ VUE.JS ✦ UI/UX ✦
          </div>
        </section>

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

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        </section>

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
                real-time synchronization.
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
    </div>
  );
}

export default App;