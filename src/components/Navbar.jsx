import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['work', 'about', 'skills', 'contact']

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
<a href="#top" className="brand" onClick={() => setOpen(false)}>
  Natchanan's<span> Portfolio</span>
</a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
