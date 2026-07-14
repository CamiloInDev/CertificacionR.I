import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const heroPhrases = ['Certificamos competencias.', 'Inspeccionamos equipos.', 'Generamos confianza.']

function RotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroPhrases.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative block h-[1.3em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroPhrases[index]}
          className="absolute inset-0 text-secondary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {heroPhrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Home() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const delays = [10000, 5000, 5000]
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), delays[slide])
    return () => clearInterval(id)
  }, [slide])

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative bg-dark-bg text-white overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={[
                  '/static/images/fondo_cert.jpg',
                  '/static/images/imagen-certificado4.jpg',
                  '/static/images/foto_politicas.jpg',
                ][slide]}
                alt=""
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/70 via-dark-bg/40 to-dark-bg/10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={`c-${slide}`}
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {slide === 0 && (
                <>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-px bg-secondary/40" />
                    <span className="text-secondary/80 text-xs font-bold uppercase tracking-[0.3em]">R.I Certificación</span>
                    <div className="w-8 h-px bg-secondary/40" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 min-h-[1.3em]">
                    <RotatingPhrase />
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    En RI CERTIFICACION trabajamos para fortalecer la competitividad de las organizaciones y el desarrollo del talento humano mediante servicios especializados de certificación de personas e inspección técnica, respaldados por altos estándares de calidad, imparcialidad y competencia.
                  </p>
                  <a href="#inicio1" className="inline-flex items-center gap-2.5 bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
                    Conozca más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </>
              )}

              {slide === 1 && (
                <>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-px bg-secondary/40" />
                    <span className="text-secondary/80 text-xs font-bold uppercase tracking-[0.3em]">R.I Certificación</span>
                    <div className="w-8 h-px bg-secondary/40" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    Certificación<br />de Personas
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Evaluamos y certificamos la competencia del talento humano para el desempeño seguro de sus funciones en operaciones de izaje de cargas, bajo la norma ISO/IEC 17024:2012.
                  </p>
                  <Link to="/personas" className="inline-flex items-center gap-2.5 bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
                    Ver esquemas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </>
              )}

              {slide === 2 && (
                <>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-px bg-secondary/40" />
                    <span className="text-secondary/80 text-xs font-bold uppercase tracking-[0.3em]">R.I Certificación</span>
                    <div className="w-8 h-px bg-secondary/40" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    Inspección<br />de Equipos
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Inspeccionamos estructural y operacionalmente equipos de izaje, elevación de personas, movimiento de tierra y accesorios, bajo la norma ISO/IEC 17020:2012.
                  </p>
                  <Link to="/equipos1" className="inline-flex items-center gap-2.5 bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
                    Conozca más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === slide
                    ? 'bg-secondary w-6 h-2.5'
                    : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Three service columns */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { img: '1.png', title: 'Certificación de Personas', desc: 'Evaluación de competencia del factor humano para el desempeño seguro de sus funciones en izaje de cargas.', to: '/personas' },
              { img: '3.png', title: 'Inspección de Equipos', desc: 'Inspección estructural y operacional de equipos de izaje, elevación de personas, movimiento de tierra y accesorios.', to: '/equipos1' },
              { img: '2.png', title: 'Acreditaciones ONAC', desc: 'Acreditaciones vigentes emitidas por el Organismo Nacional de Acreditación de Colombia bajo normas ISO/IEC.', to: '/conozcanos' },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link to={col.to} className="block">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <img src={`/static/images/${col.img}`} alt={col.title} className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {col.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {col.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary uppercase tracking-wider">
                    Ver más
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conózcanos */}
      <motion.section id="inicio1" className="bg-primary text-white py-20 md:py-28" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/5 border border-white/10 md:grid md:grid-cols-2">
            <div className="flex items-center justify-center p-6 md:p-0">
              <img src="/static/images/1-1.png" alt="Equipo de trabajo R.I Certificación" className="w-full max-w-sm" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">Conózcanos</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Desde el 2014 trabajamos en el aseguramiento de las operaciones a través de la evaluación de
                competencias de personal en izaje de cargas. Contamos con una amplia experiencia en certificación
                de personas y equipos como: Montacargas, puente grúas, grúas móviles, plataformas de elevación,
                excavadoras, cargadores y elementos de izaje.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/conozcanos" className="bg-secondary text-primary font-bold px-6 py-2.5 hover:bg-secondary-light transition-colors text-sm">
                  Más Información
                </Link>
                <a href="/static/brochures/BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf" target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary font-bold px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors text-sm">
                  Brochure Personas
                </a>
                <a href="/static/brochures/BROCHURE-RI-CERTIFICACION-E-INSPECCION-2023.pdf" target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary font-bold px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors text-sm">
                  Brochure Inspección
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Consulta Certificados */}
      <motion.section className="bg-surface py-20 md:py-28" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white border border-gray-200 md:grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">Consulta de Certificados</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Consulte nuestra base de datos de certificados con su número de identificación y código de carné.
              </p>
              <a href="https://intranet.ricertificacion.com/_Modulos/ConsultaCarne" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary text-primary font-bold px-8 py-3 hover:bg-secondary-light transition-colors self-start">
                Ingresar
              </a>
            </div>
            <div className="flex items-center justify-center p-6 md:p-0 order-1 md:order-2">
              <img src="/static/images/imagen-certificado4.jpg" alt="Certificado R.I" className="w-full max-w-sm" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Políticas */}
      <motion.section className="bg-primary text-white py-20 md:py-28" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/5 border border-white/10 md:grid md:grid-cols-2">
            <div className="flex items-center justify-center p-6 md:p-0">
              <img src="/static/images/foto_politicas.jpg" alt="Políticas R.I Certificación" className="w-full max-w-sm" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">Políticas</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Consulte nuestras políticas, cláusulas y reglamentos de certificación e inspección.
              </p>
              <Link to="/politicas" className="bg-secondary text-primary font-bold px-6 py-2.5 hover:bg-secondary-light transition-colors self-start">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Queja o Apelación */}
      <motion.section className="bg-surface py-20 md:py-28" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white border border-gray-200 md:grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">Queja o Apelación</h2>
              <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                Ponemos a su disposición nuestro formato para registrar, atender y solucionar toda queja o apelación.
              </p>
              <Link to="/quejas" className="inline-block bg-secondary text-primary font-bold px-8 py-3 hover:bg-secondary-light transition-colors self-start">
                Formulario
              </Link>
            </div>
            <div className="flex items-center justify-center p-6 md:p-0 order-1 md:order-2">
              <img src="/static/images/IMG-20210915-WA0002.jpg" alt="Formulario de queja o apelación" className="w-full max-w-sm" />
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
