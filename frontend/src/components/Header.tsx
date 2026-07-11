import { useState, useRef, useEffect } from 'react'
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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-semibold transition-colors border ${
                    location.pathname.startsWith('/consulta-certificados')
                      ? 'bg-secondary text-primary border-secondary'
                      : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
                  }`}
                >
                  Consulta Certificados
                  <svg className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      to="/consulta-certificados/personas"
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                        location.pathname === '/consulta-certificados/personas'
                          ? 'bg-secondary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-primary font-bold">Certificados de Personas</span>
                      <span className="block text-gray-500 font-normal text-xs mt-0.5">Consulta de certificados de personas</span>
                    </Link>
                    <div className="mx-3 my-1 border-t border-gray-100" />
                    <Link
                      to="/consulta-certificados/inspecciones"
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                        location.pathname === '/consulta-certificados/inspecciones'
                          ? 'bg-secondary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-primary font-bold">Certificados de Inspección</span>
                      <span className="block text-gray-500 font-normal text-xs mt-0.5">Consulta de certificados de inspección de equipos</span>
                    </Link>
                  </div>
                )}
              </div>
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
            <p className="px-3 py-1 text-xs font-bold text-secondary/60 uppercase tracking-wider">
              Consulta Certificados
            </p>
            <Link
              to="/consulta-certificados/personas"
              className={`block px-3 py-2 rounded text-sm font-semibold border ${
                location.pathname === '/consulta-certificados/personas'
                  ? 'bg-secondary text-primary border-secondary'
                  : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
              }`}
              onClick={() => setOpen(false)}
            >
              Certificados de Personas
            </Link>
            <Link
              to="/consulta-certificados/inspecciones"
              className={`block px-3 py-2 rounded text-sm font-semibold border ${
                location.pathname === '/consulta-certificados/inspecciones'
                  ? 'bg-secondary text-primary border-secondary'
                  : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
              }`}
              onClick={() => setOpen(false)}
            >
              Certificados de Inspección
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
