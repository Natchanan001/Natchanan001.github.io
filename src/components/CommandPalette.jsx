import { useState, useRef } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import Modal from './Modal'
import { profile, projects } from '../data/portfolio'
import { resumeHref } from './RecruiterView'

const commands = [
  { label: 'Home', detail: 'Back to the introduction', href: '#top' },
  { label: 'Selected work', detail: 'Browse all projects', href: '#work' },
  ...projects.map(p => ({ label: p.title, detail: p.role, href: p.caseStudy || `#project-${p.id}`, project: true })),
  { label: 'Recruiter quick view', detail: 'Availability, roles and contact', href: '#recruiter' },
  { label: 'Product workflow', detail: 'Research through deployment', href: '#workflow' },
  { label: 'Skills', detail: 'Tools and capabilities', href: '#skills' },
  { label: profile.resume ? 'Résumé' : 'Request résumé', detail: profile.resume ? 'View résumé' : 'Request a copy by email', href: resumeHref },
  { label: 'GitHub', detail: 'Source code and repositories', href: profile.github },
  { label: 'LinkedIn', detail: 'Professional profile', href: profile.linkedin },
  { label: 'Contact', detail: profile.email, href: '#contact' },
]
export default function CommandPalette({ onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const links = useRef([])
  const results = commands.filter(c => `${c.label} ${c.detail}`.toLowerCase().includes(query.trim().toLowerCase()))
  function handleKeys(event) {
    if (!['ArrowDown', 'ArrowUp', 'Enter', 'Home', 'End'].includes(event.key)) return
    if (event.key === 'Enter') {
      if (event.target.tagName === 'INPUT' && results.length) { event.preventDefault(); links.current[active]?.click() }
      return
    }
    // Home/End keep their normal text-editing behavior in the input.
    if (event.target.tagName === 'INPUT' && ['Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (!results.length) return
    const next = event.target.tagName === 'INPUT' ? (event.key === 'ArrowDown' ? 0 : results.length - 1) : event.key === 'Home' ? 0 : event.key === 'End' ? results.length - 1 : (active + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length
    setActive(next)
    links.current[next]?.focus()
  }
  return <Modal title="Go to…" onClose={onClose} className="command-palette">
    <div onKeyDown={handleKeys}>
      <label className="command-input"><Search size={20}/><span className="sr-only">Search projects and links</span><input autoFocus placeholder="Search projects, résumé, contact…" value={query} onChange={e => { setQuery(e.target.value); setActive(0) }} /></label>
      <p className="sr-only" role="status">{results.length} results</p>
      <nav className="command-results" aria-label="Search results">
        {results.map((command, i) => <a ref={element => { links.current[i] = element }} key={command.label} className={i === active ? 'command-active' : ''} href={command.href} target={command.href.startsWith('https:') ? '_blank' : undefined} rel={command.href.startsWith('https:') ? 'noreferrer' : undefined} onFocus={() => setActive(i)} onClick={event => {
          if (command.href.startsWith('#')) { event.preventDefault(); onNavigate(command.href) }
          else onClose()
        }}><span><strong>{command.label}</strong><small>{command.detail}</small></span><ArrowUpRight size={17}/></a>)}
        {!results.length && <p className="command-empty">No matches for “{query}”. Try a project name or contact.</p>}
      </nav>
    </div>
    <p className="command-help">↑ ↓ Navigate · Enter Open · Esc Close</p>
  </Modal>
}
