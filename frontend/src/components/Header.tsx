import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/conozcanos', label: 'Conózcanos' },
  { to: '/personas', label: 'Personas' },
  { to: '/equipos1', label: 'Equipos' },
  { to: '/politicas', label: 'Políticas' },
  { to: '/quejas', label: 'Queja o Apelación' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="border-b border-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src="/static/images/logo-ri.png" alt="R.I Certificación" className="h-10 md:h-14" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    location.pathname === l.to
                      ? 'bg-secondary text-primary'
                      : 'hover:bg-primary-light'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/consulta-certificados"
                className={`px-3 py-2 rounded text-sm font-semibold transition-colors border ${
                  location.pathname === '/consulta-certificados'
                    ? 'bg-secondary text-primary border-secondary'
                    : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
                }`}
              >
                Consulta Certificados
              </Link>
            </nav>

            <button
              className="lg:hidden p-2 rounded hover:bg-primary-light"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-primary-light border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-semibold ${
                  location.pathname === l.to
                    ? 'bg-secondary text-primary'
                    : 'hover:bg-primary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/consulta-certificados"
              className={`block px-3 py-2 rounded text-sm font-semibold border ${
                location.pathname === '/consulta-certificados'
                  ? 'bg-secondary text-primary border-secondary'
                  : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
              }`}
              onClick={() => setOpen(false)}
            >
              Consulta Certificados
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
