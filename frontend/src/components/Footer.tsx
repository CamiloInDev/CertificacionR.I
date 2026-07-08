export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
              <img src="/static/images/logo-ri.png" alt="R.I Certificación" className="h-10" />
            </div>
            <p className="text-sm text-gray-300">
              Evaluación de competencias y aseguramiento de levantamiento Mecánico de Cargas para equipos y personas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-secondary mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/conozcanos" className="hover:text-secondary transition-colors">Conózcanos</a></li>
              <li><a href="/personas" className="hover:text-secondary transition-colors">Certificación Personas</a></li>
              <li><a href="/equipos1" className="hover:text-secondary transition-colors">Inspección de Equipos</a></li>
              <li><a href="/politicas" className="hover:text-secondary transition-colors">Políticas</a></li>
              <li><a href="/quejas" className="hover:text-secondary transition-colors">Queja o Apelación</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Calle 85 No. 24 - 39</li>
              <li>Bogotá - Colombia</li>
              <li>Tel / WhatsApp: (+57) 314 218 3837</li>
              <li>comercial@ricertificacion.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} R.I Certificación. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
