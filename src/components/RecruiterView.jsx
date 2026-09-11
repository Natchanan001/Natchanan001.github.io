import { ArrowUpRight, Mail } from 'lucide-react'
import { profile, projects } from '../data/portfolio'
export const resumeHref = profile.resume || `mailto:${profile.email}?subject=Resume%20request`
export default function RecruiterView() {
  return <section id="recruiter" className="section container recruiter-section">
    <div className="section-title row-title"><div><p className="eyebrow">For recruiters</p><h2>The essentials,<br/><em>at a glance.</em></h2></div><a className="button text" href={resumeHref}>{profile.resume ? 'View résumé' : 'Request résumé'}<ArrowUpRight size={17}/></a></div>
    <div className="quick-grid">
      <div><h3>Availability & roles</h3><p className="availability">{profile.availability}</p><p>{profile.preferredRoles.join(' · ')}</p><p className="muted">{profile.location} · Start date by arrangement</p></div>
      <div><h3>Selected projects</h3><ul>{projects.map(p => <li key={p.id}><a href={p.caseStudy || `#project-${p.id}`}>{p.title}<ArrowUpRight size={15}/></a><span className="muted">{p.role}</span></li>)}</ul></div>
      <div><h3>Core toolkit</h3><p>Flutter · Dart · Vue.js · JavaScript · Supabase · PostgreSQL · Figma</p><a className="inline-link" href="#skills">Explore all skills <ArrowUpRight size={15}/></a></div>
      <div><h3>Get in touch</h3><a className="inline-link contact-address" href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><div className="quick-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.portfolio}>Portfolio ↗</a></div></div>
    </div>
  </section>
}
