import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import type { NavLink } from '../types'

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',   href: '#inicio' },
  { label: 'Misión',   href: '#mision' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-navy/95 shadow-xl backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-20 h-20 rounded-full overflow-hidden  group-hover:ring-brand-gold transition-all duration-300 shadow-lg">
            <img src="/image/logo.png" alt="Ministerio Enviados a la Calle" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="block font-accent text-white text-xs tracking-[0.22em] uppercase leading-tight opacity-70">
              Ministerio
            </span>
            <span className="block font-display text-white font-bold text-base leading-tight">
              Enviados a la Calle
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>

        {/* CTA + Toggle */}
        <div className="flex items-center gap-4">
          <a href="#unete" className="hidden sm:inline-flex btn-primary py-2.5 px-6 text-xs">
            Únete
          </a>
          <button
            className="md:hidden text-white p-1 hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-brand-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 font-body text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-brand-gold border-b border-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#unete" className="btn-primary mt-3 justify-center" onClick={() => setMenuOpen(false)}>
            Únete al ministerio
          </a>
        </nav>
      </div>
    </header>
  )
}