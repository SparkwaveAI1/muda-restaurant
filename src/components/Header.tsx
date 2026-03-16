import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MudaLogo from './MudaLogo'

const navLinksEn = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/location', label: 'Location' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
]

const navLinksPt = [
  { to: '/pt', label: 'Início' },
  { to: '/pt/cardapio', label: 'Cardápio' },
  { to: '/pt/sobre', label: 'Sobre' },
  { to: '/pt/localizacao', label: 'Localização' },
  { to: '/pt/reservas', label: 'Reservas' },
  { to: '/pt/galeria', label: 'Galeria' },
  { to: '/pt/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isPt = location.pathname.startsWith('/pt')
  const navLinks = isPt ? navLinksPt : navLinksEn

  // Language toggle target
  const langTo = isPt ? '/' : '/pt'
  const langLabel = isPt ? 'EN' : 'PT'

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={isPt ? '/pt' : '/'} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <MudaLogo size={42} />
          <div className="hidden sm:block">
            <div className="text-xs tracking-[0.25em] uppercase text-gray-500 font-body">MUDA</div>
            <div className="text-xs tracking-[0.15em] uppercase text-gray-400 font-body">Restaurant · Cumbuco</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/' || to === '/pt'}
              className={({ isActive }) =>
                `text-xs tracking-[0.18em] uppercase font-body transition-colors duration-200 ${
                  isActive ? 'text-gold border-b border-gold pb-0.5' : 'text-gray-700 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          {/* Language switcher */}
          <Link
            to={langTo}
            className="text-xs tracking-[0.18em] uppercase font-body border border-gray-300 px-2.5 py-1 text-gray-500 hover:border-gold hover:text-gold transition-colors"
          >
            {langLabel}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/' || to === '/pt'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-xs tracking-[0.18em] uppercase font-body border-b border-gray-100 ${
                  isActive ? 'text-gold' : 'text-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to={langTo}
            onClick={() => setOpen(false)}
            className="block py-3 text-xs tracking-[0.18em] uppercase font-body text-gray-500 hover:text-gold transition-colors"
          >
            {isPt ? '🇺🇸 English' : '🇧🇷 Português'}
          </Link>
        </div>
      )}
    </header>
  )
}
