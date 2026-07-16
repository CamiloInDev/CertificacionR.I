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

function UsersIcon() {
  return (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

type SplitSectionProps = {
  id?: string
  dark?: boolean
  reverse?: boolean
  eyebrow: string
  icon: React.ReactNode
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition?: string
  children: React.ReactNode
}

function SplitSection({ id, dark, reverse, eyebrow, icon, title, description, image, imageAlt, imagePosition = 'object-center', children }: SplitSectionProps) {
  return (
    <motion.section id={id} className={`${dark ? 'bg-primary text-white' : 'bg-surface'} py-20 md:py-28`} {...fadeUp}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`overflow-hidden rounded-3xl shadow-xl md:grid md:grid-cols-2 ${
            dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100'
          }`}
        >
          <div className={`relative h-72 md:h-auto ${reverse ? 'md:order-2' : ''}`}>
            <img src={image} alt={imageAlt} className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`} />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                dark ? 'from-primary/85 via-primary/20 to-primary/5' : 'from-black/60 via-black/10 to-black/0'
              }`}
            />
          </div>
          <div className={`p-8 md:p-12 flex flex-col justify-center ${reverse ? 'md:order-1' : ''}`}>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                {icon}
              </span>
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-secondary/80' : 'text-secondary'}`}>
                {eyebrow}
              </span>
            </div>
            <h2 className={`font-display text-3xl md:text-4xl mb-6 leading-tight ${dark ? 'text-white' : 'text-primary'}`}>
              {title}
            </h2>
            <p className={`leading-relaxed mb-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
            <div className="flex flex-wrap gap-3">{children}</div>
          </div>
        </div>
      </div>
    </motion.section>
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
      <SplitSection
        id="inicio1"
        dark
        eyebrow="Sobre Nosotros"
        icon={<UsersIcon />}
        title="Conózcanos"
        description="Desde el 2014 trabajamos en el aseguramiento de las operaciones a través de la evaluación de competencias de personal en izaje de cargas. Contamos con una amplia experiencia en certificación de personas y equipos como: Montacargas, puente grúas, grúas móviles, plataformas de elevación, excavadoras, cargadores y elementos de izaje."
        image="/static/images/1-1.png"
        imageAlt="Equipo de trabajo R.I Certificación"
        imagePosition="object-top"
      >
        <Link to="/conozcanos" className="bg-secondary text-primary font-bold px-6 py-2.5 hover:bg-secondary-light transition-colors text-sm">
          Más Información
        </Link>
        <a href="/static/brochures/BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf" target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary font-bold px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors text-sm">
          Brochure Personas
        </a>
        <a href="/static/brochures/BROCHURE-RI-CERTIFICACION-E-INSPECCION-2023.pdf" target="_blank" rel="noopener noreferrer" className="border border-secondary text-secondary font-bold px-6 py-2.5 hover:bg-secondary hover:text-primary transition-colors text-sm">
          Brochure Inspección
        </a>
      </SplitSection>

      {/* Consulta Certificados */}
      <SplitSection
        reverse
        eyebrow="Verificación"
        icon={<SearchIcon />}
        title="Consulta de Certificados"
        description="Consulte nuestra base de datos de certificados con su número de identificación y código de carné."
        image="/static/images/imagen-certificado4.jpg"
        imageAlt="Certificado R.I"
      >
        <a href="https://intranet.ricertificacion.com/_Modulos/ConsultaCarne" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary text-primary font-bold px-8 py-3 hover:bg-secondary-light transition-colors self-start">
          Ingresar
        </a>
      </SplitSection>

      {/* Políticas */}
      <SplitSection
        dark
        eyebrow="Marco Normativo"
        icon={<DocumentIcon />}
        title="Políticas"
        description="Consulte nuestras políticas, cláusulas y reglamentos de certificación e inspección."
        image="/static/images/foto_politicas.jpg"
        imageAlt="Políticas R.I Certificación"
      >
        <Link to="/politicas" className="bg-secondary text-primary font-bold px-6 py-2.5 hover:bg-secondary-light transition-colors self-start">
          Leer más
        </Link>
      </SplitSection>

      {/* Queja o Apelación */}
      <SplitSection
        reverse
        eyebrow="Atención al Cliente"
        icon={<ChatIcon />}
        title="Queja o Apelación"
        description="Ponemos a su disposición nuestro formato para registrar, atender y solucionar toda queja o apelación."
        image="/static/images/IMG-20210915-WA0002.jpg"
        imageAlt="Formulario de queja o apelación"
        imagePosition="object-top"
      >
        <Link to="/quejas" className="inline-block bg-secondary text-primary font-bold px-8 py-3 hover:bg-secondary-light transition-colors self-start">
          Formulario
        </Link>
      </SplitSection>

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
