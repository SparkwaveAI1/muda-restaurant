import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MudaLogo from './MudaLogo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/location', label: 'Location' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <MudaLogo size={42} />
          <div className="hidden sm:block">
            <div className="text-xs tracking-[0.25em] uppercase text-gray-500 font-body">MUDA</div>
            <div className="text-xs tracking-[0.15em] uppercase text-gray-400 font-body">Restaurant · Cumbuco</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-xs tracking-[0.18em] uppercase font-body transition-colors duration-200 ${
                  isActive ? 'text-gold border-b border-gold pb-0.5' : 'text-gray-700 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
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
              end={to === '/'}
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
        </div>
      )}
    </header>
  )
}
