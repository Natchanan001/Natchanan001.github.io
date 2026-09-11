import ProjectActions from './ProjectActions';
import { useEffect, useState } from 'react'
import { ArrowUpRight, Smartphone, Database, Cloud, ChevronDown, Expand } from 'lucide-react'
import { projects } from '../data/portfolio'
import { carekidsSections } from '../data/carekids'
import Modal from './Modal'

export default function CareKidsCaseStudy() {
  const [expanded, setExpanded] = useState(new Set(['problem']))
  const [preview, setPreview] = useState(false)
  useEffect(() => {
    const openLinkedChapter = () => {
      const id = location.hash.replace('#case-', '');
      if (carekidsSections.some(section => section.id === id)) {
        setExpanded(previous => new Set([...previous, id]));
        requestAnimationFrame(() => document.getElementById(`case-${id}`)?.scrollIntoView({ behavior: 'instant' }));
      }
    };
    openLinkedChapter();
    window.addEventListener('hashchange', openLinkedChapter);
    return () => window.removeEventListener('hashchange', openLinkedChapter);
  }, []);
  const project = projects.find(p => p.id === 'carekids')
  function toggle(id, open) {
    setExpanded(previous => {
      if (previous.has(id) === open) return previous
      const next = new Set(previous)
      if (open) next.add(id); else next.delete(id)
      return next
    })
  }
  return <section id="carekids" className="section case-section">
    <div className="container">
      <div className="case-header"><div><p className="eyebrow">Featured case study · Senior project</p><h2>CareKids<br/><em>Care, shared clearly.</em></h2></div><div className="case-overview"><p>A pediatric healthcare management app for families with multiple caregivers.</p><p className="muted">Lead Mobile Application Developer & UX/UI Designer</p><div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div></div>
      <div className="case-layout">
        <aside className="case-nav"><p className="eyebrow">Inside the project</p><nav aria-label="CareKids case study sections">{carekidsSections.map((section, index) => <a key={section.id} href={`#case-${section.id}`} onClick={() => toggle(section.id, true)}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</nav><button className="button text" onClick={() => setExpanded(expanded.size === carekidsSections.length ? new Set() : new Set(carekidsSections.map(s => s.id)))}>{expanded.size === carekidsSections.length ? 'Collapse all' : 'Expand all'}</button></aside>
        <div className="case-content">
          <button className="case-preview" aria-label="Enlarge CareKids interface preview" onClick={() => setPreview(true)}><img src={project.image} width="960" height="720" loading="lazy" decoding="async" alt="CareKids mobile interface overview"/><span><Expand size={16}/> Explore the interface</span></button>
          <ProjectActions project={project} includeCaseStudy={false} className="case-actions" />
          {carekidsSections.map((section, index) => <details key={section.id} id={`case-${section.id}`} className="case-chapter" open={expanded.has(section.id)} onToggle={event => toggle(section.id, event.currentTarget.open)}>
            <summary><span className="chapter-number">{String(index + 1).padStart(2, '0')}</span><span><h3>{section.title}</h3><span className="chapter-summary">{section.summary}</span></span><ChevronDown size={20}/></summary>
            <div className="chapter-body">
              {section.paragraphs?.map(text => <p key={text}>{text}</p>)}
              {section.items && <dl className="case-points">{section.items.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>}
              {section.architecture && <div className="architecture" aria-label="Flutter and Dart mobile interface connects to Supabase backend, which uses PostgreSQL for data storage"><div><Smartphone size={25}/><strong>Flutter + Dart</strong><span>Mobile interface</span></div><span className="architecture-arrow" aria-hidden="true">↕</span><div><Cloud size={25}/><strong>Supabase</strong><span>Backend platform</span></div><span className="architecture-arrow" aria-hidden="true">↕</span><div><Database size={25}/><strong>PostgreSQL</strong><span>Structured data</span></div></div>}
            </div>
          </details>)}
          <a className="inline-link" href="#work">Back to selected work ↑</a>
        </div>
      </div>
    </div>
    {preview && <Modal title="CareKids interface preview" onClose={() => setPreview(false)} className="image-modal"><img src={project.image} alt="Enlarged CareKids mobile interface overview"/><a className="inline-link" href={project.image} target="_blank" rel="noreferrer">Open full-resolution image <ArrowUpRight size={16}/></a></Modal>}
  </section>
}
