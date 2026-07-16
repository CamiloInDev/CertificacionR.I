import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const equipoItems = [
  { nombre: 'Montacargas', img: '/static/images/1.png' },
  { nombre: 'Puente Grúa', img: '/static/images/2.png' },
  { nombre: 'Grúa Móvil', img: '/static/images/3.png' },
]

export default function Conozcanos() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/static/images/fondo_cert.jpg)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Conózcanos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 text-lg mt-4 max-w-2xl leading-relaxed"
          >
            Desde el 2014 aseguramos operaciones a través de la certificación de competencias
            del personal en izaje de cargas.
          </motion.p>
        </div>
      </section>

      {/* Trayectoria + equipo */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="w-12 h-1 bg-secondary rounded mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Más de una década certificando competencias
              </h2>
              <p className="text-gray-600 leading-relaxed mt-6">
                Desde el año 2014 trabajamos en procura de asegurar las operaciones a través de
                la certificación de personas. Tenemos amplia experiencia en la evaluación de
                competencias de quienes realizan actividades empleando equipos como: montacargas,
                puente grúas, grúas móviles, plataformas de elevación, brazo articulado,
                excavadora, cargador frontal, winche, telehandler y otros cargos como aparejador,
                supervisor y conductor de vehículo liviano (C1).
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Nuestra amplia lista de clientes revela no solo el gran nivel de nuestra atención,
                sino nuestro profundo conocimiento de cada especialidad.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mt-10 md:mt-0 grid grid-cols-3 gap-4"
            >
              {equipoItems.map((item) => (
                <div key={item.nombre} className="group relative">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={item.img}
                      alt={item.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-primary mt-3">{item.nombre}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números clave */}
      <motion.section className="bg-primary text-white py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <span className="block text-5xl md:text-6xl font-bold text-secondary">2014</span>
              <span className="block text-gray-300 text-sm uppercase tracking-widest mt-2">Año de Fundación</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-bold text-secondary">11</span>
              <span className="block text-gray-300 text-sm uppercase tracking-widest mt-2">Esquemas de Certificación</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-bold text-secondary">ONAC</span>
              <span className="block text-gray-300 text-sm uppercase tracking-widest mt-2">Organismo Acreditador</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Acreditaciones */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <div className="w-12 h-1 bg-secondary rounded mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Nuestras Acreditaciones
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
              Acreditaciones emitidas a nuestro favor por el Organismo Nacional de Acreditación
              de Colombia (ONAC).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              {...fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Certificación de Personas</h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                INSTITUTO RI SAS — SIGLA: GRUPO RI. Acreditación ONAC vigente con código{' '}
                <strong>13-OCP-005</strong> bajo la norma ISO/IEC 17024:2012.
              </p>
              <a
                href="/static/brochures/13-OCP-005-Vig-ONAC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-primary bg-secondary px-5 py-2.5 rounded-lg hover:bg-secondary-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar Certificado ONAC
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Inspección de Equipos</h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                RI CERTIFICACIÓN E INSPECCIÓN SAS. Acreditación ONAC vigente con código{' '}
                <strong>19-OIN-095</strong> bajo la norma ISO/IEC 17020:2012.
              </p>
              <a
                href="/static/brochures/19-OIN-095.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-primary bg-secondary px-5 py-2.5 rounded-lg hover:bg-secondary-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar Certificado ONAC
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
