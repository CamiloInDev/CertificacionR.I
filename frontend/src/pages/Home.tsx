import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <div>
      {/* Hero: thesis statement */}
      <section className="relative bg-dark-bg text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/static/images/fondo_cert.jpg" alt="Operación de izaje de cargas" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 to-dark-bg/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-44">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              Acreditado ONAC
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Seguridad certificada en cada levantamiento
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Evaluación de competencias y aseguramiento de levantamiento mecánico de cargas para equipos y personas.
            </p>
            <a
              href="#inicio1"
              className="inline-block bg-secondary text-primary font-bold px-8 py-3.5 rounded hover:bg-secondary-light transition-colors shadow-lg"
            >
              Conozca más
            </a>
          </motion.div>
        </div>
      </section>

      {/* Three service columns */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '1.png', title: 'Certificación de Personas', desc: 'Evaluación de competencia del factor humano para el desempeño seguro de sus funciones en izaje de cargas.', to: '/personas' },
              { img: '3.png', title: 'Inspección de Equipos', desc: 'Inspección estructural y operacional de equipos de izaje, elevación de personas, movimiento de tierra y accesorios.', to: '/equipos1' },
              { img: '2.png', title: 'Acreditaciones ONAC', desc: 'Acreditaciones vigentes emitidas por el Organismo Nacional de Acreditación de Colombia bajo normas ISO/IEC.', to: '/conozcanos' },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                className="bg-white rounded-lg shadow-md border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link to={col.to}>
                  <img src={`/static/images/${col.img}`} alt={col.title} className="mx-auto w-16 h-16 mb-4" />
                </Link>
                <div className="safety-stripe inline-block">
                  <Link to={col.to}>
                    <h3 className="text-xl font-bold text-primary mb-3 hover:text-secondary transition-colors">{col.title}</h3>
                  </Link>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conózcanos */}
      <motion.section id="inicio1" className="bg-primary text-white py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img src="/static/images/1-1.png" alt="Equipo de trabajo R.I Certificación" className="max-w-sm w-full" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 safety-stripe">Conózcanos</h2>
              <p className="text-gray-200 mt-6 mb-6 leading-relaxed">
                Desde el 2014 trabajamos en el aseguramiento de las operaciones a través de la evaluación de
                competencias de personal en izaje de cargas. Contamos con una amplia experiencia en certificación
                de personas y equipos como: Montacargas, puente grúas, grúas móviles, plataformas de elevación,
                excavadoras, cargadores y elementos de izaje.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/conozcanos" className="bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors text-sm">
                  Más Información
                </Link>
                <a
                  href="/static/brochures/BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors text-sm"
                >
                  Brochure Personas
                </a>
                <a
                  href="/static/brochures/BROCHURE-RI-CERTIFICACION-E-INSPECCION-2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors text-sm"
                >
                  Brochure Inspección
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Consulta Certificados */}
      <motion.section className="bg-surface py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 safety-stripe">Consulta de Certificados</h2>
              <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
                Consulte nuestra base de datos de certificados con su número de identificación y código de carné.
              </p>
              <a
                href="https://intranet.ricertificacion.com/_Modulos/ConsultaCarne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded hover:bg-secondary-light transition-colors shadow"
              >
                Ingresar
              </a>
            </div>
            <div className="flex justify-center">
              <img src="/static/images/imagen-certificado4.jpg" alt="Certificado R.I" className="max-w-md w-full rounded shadow-lg" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Políticas */}
      <motion.section className="bg-primary text-white py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img src="/static/images/foto_politicas.jpg" alt="Políticas R.I Certificación" className="max-w-md w-full rounded shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 safety-stripe">Políticas</h2>
              <p className="text-gray-200 mt-6 mb-6 leading-relaxed">
                Consulte nuestras políticas, cláusulas y reglamentos de certificación e inspección.
              </p>
              <Link
                to="/politicas"
                className="inline-block bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors"
              >
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Queja o Apelación */}
      <motion.section className="bg-surface py-20" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img src="/static/images/IMG-20210915-WA0002.jpg" alt="Formulario de queja o apelación" className="max-w-sm w-full rounded shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 safety-stripe">Queja o Apelación</h2>
              <p className="text-gray-700 mt-6 mb-6 leading-relaxed font-medium">
                Ponemos a su disposición nuestro formato para registrar, atender y solucionar toda queja o apelación.
              </p>
              <Link
                to="/quejas"
                className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded hover:bg-secondary-light transition-colors shadow"
              >
                Formulario
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contacto */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img src="/static/images/icono6.png" alt="Dirección" className="mx-auto w-14 h-14 mb-3" />
              <p className="font-medium">Calle 85 No. 24 - 39</p>
              <p className="text-gray-300 text-sm">Bogotá - Colombia</p>
            </div>
            <div>
              <img src="/static/images/icono4.png" alt="Teléfono" className="mx-auto w-14 h-14 mb-3" />
              <p className="font-medium">(601) 6358147</p>
            </div>
            <div>
              <img src="/static/images/icono5.png" alt="Correo electrónico" className="mx-auto w-14 h-14 mb-3" />
              <p className="font-medium">comercial@ricertificacion.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
