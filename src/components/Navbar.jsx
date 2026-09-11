import { Menu, X, Moon, Sun, Search } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Navbar({ theme, onThemeChange, onSearch }) {
  const [open, setOpen] = useState(false)
  const menu = useRef(null)
  const links = [['work', 'Work'], ['about', 'About'], ['skills', 'Skills'], ['recruiter', 'Quick view'], ['contact', 'Contact']]
  return <header className="nav-wrap">
    <nav className="nav container" aria-label="Main navigation" onKeyDown={event => {
      if (event.key === 'Escape' && open) { setOpen(false); menu.current?.focus() }
    }}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>Natchanan's<span> Portfolio</span></a>
      <div className="nav-tools">
        <button className="icon-button search-trigger" onClick={onSearch} aria-label="Open command palette"><Search size={18}/><kbd>⌘ / Ctrl K</kbd></button>
        <button className="icon-button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <button ref={menu} className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-links" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      <div id="main-links" className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>
  </header>
}
