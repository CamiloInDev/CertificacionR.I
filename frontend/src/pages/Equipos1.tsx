import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface EquipoImg {
  src: string
  label: string
}

interface Equipo {
  nombre: string
  norma: string
  tipos: string[]
  imagenes: EquipoImg[]
}

const equipos: Equipo[] = [
  {
    nombre: 'MONTACARGAS',
    norma: 'ANSI/ITSDF B56.1a Safety Standard for Low Lift and High Lift Trucks',
    tipos: ['Contrabalanceado', 'Eléctrico'],
    imagenes: [
      { src: '222Recurso-1-300x262.png', label: 'Contrabalanceado' },
      { src: '222Recurso-2-252x300.png', label: 'Eléctrico' },
    ],
  },
  {
    nombre: 'GRÚA MÓVIL',
    norma: 'ASME B30.5 Mobile and Locomotive Cranes',
    tipos: ['Grúa terreno áspero', 'Grúa todo terreno', 'Grúa montada sobre camión comercial', 'Grúa montada sobre camión'],
    imagenes: [
      { src: '222Recurso-3-300x242.png', label: 'Grúa terreno áspero' },
      { src: '333Recurso-3-300x164.png', label: 'Grúa todo terreno' },
      { src: '444Recurso-3-300x201.png', label: 'Grúa camión comercial' },
      { src: 'uijkhjRecurso-3-300x134.png', label: 'Grúa montada sobre camión' },
    ],
  },
  {
    nombre: 'BRAZO ARTICULADO',
    norma: 'ASME B30.22 Articulating Boom Cranes',
    tipos: ['Brazo en camión atrás', 'Brazo articulado en camión', 'Brazo en camión adelante'],
    imagenes: [
      { src: 'uijkhjRecurso-4-281x300.png', label: 'Brazo en camión atrás' },
      { src: 'uijkhjRecurso-5-300x159.png', label: 'Brazo articulado en camión' },
      { src: 'uijkhjRecurso-6-300x189.png', label: 'Brazo en camión adelante' },
    ],
  },
  {
    nombre: 'PLATAFORMA AÉREA',
    norma: 'ANSI/SAIA A92.22 Safe Use of Mobile Elevating Work Platforms (MEWPs)',
    tipos: ['Plataforma tijera', 'Manlift articulado', 'Manlift telescópico'],
    imagenes: [
      { src: 'uijkhjzsdcszxfcsdfRecurso-4.png', label: 'Plataforma tijera' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-6.png', label: 'Manlift articulado' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-7.png', label: 'Manlift telescópico' },
    ],
  },
  {
    nombre: 'PUENTE GRÚA',
    norma: 'ASME B30.17 Cranes and Monorails (With Underhung Trolley or Bridge)',
    tipos: ['Suspendido bajo viga'],
    imagenes: [
      { src: 'uijkhjzsdcszxfcsdfRecurso-8.png', label: 'Puente grúa 1' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-9.png', label: 'Puente grúa 2' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-10.png', label: 'Puente grúa 3' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-11.png', label: 'Puente grúa 4' },
    ],
  },
  {
    nombre: 'APAREJOS',
    norma: 'Normas aplicables a accesorios de izaje',
    tipos: ['Cadenas', 'Cable de acero', 'Bloque', 'Grillete', 'Gancho', 'Eslinga', 'Argolla maestra'],
    imagenes: [
      { src: 'uijkhjzsdcszxfcsdfRecurso-12.png', label: 'Cadenas' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-13.png', label: 'Cable de acero' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-14.png', label: 'Bloque' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-15.png', label: 'Grillete' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-16.png', label: 'Gancho' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-18.png', label: 'Eslinga' },
      { src: 'uijkhjzsdcszxfcsdfRecurso-17.png', label: 'Argolla maestra' },
    ],
  },
]

const baseImg = '/static/images/equipos'

export default function Equipos1() {
  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 safety-stripe">Inspección de Equipos</h1>
          <p className="text-gray-200 max-w-3xl mt-6 leading-relaxed">
            Servicio de inspección estructural y operacional de equipos de izaje de carga, elevación de personas,
            maquinaria de movimiento de tierra, manejo de materiales y accesorios de izaje de carga.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipos.map((eq, i) => (
            <motion.div
              key={eq.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-2 overflow-x-auto p-3 bg-gray-50 snap-x snap-mandatory scrollbar-thin">
                {eq.imagenes.map((img) => (
                  <figure key={img.src} className="snap-start shrink-0">
                    <img
                      src={`${baseImg}/${img.src}`}
                      alt={img.label}
                      className="h-24 w-auto rounded border border-gray-200 bg-white"
                    />
                    <figcaption className="text-[10px] text-gray-500 text-center mt-0.5">{img.label}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="p-5 pt-4">
                <h3 className="text-lg font-bold text-primary mb-2">{eq.nombre}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{eq.norma}</p>
                <div className="flex flex-wrap gap-1.5">
                  {eq.tipos.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-3">Reglas del Servicio de Inspección</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Reglas establecidas por RI Certificación e Inspección para prestar el servicio de inspección
              estructural y operacional de equipos de izaje de carga, elevación de personas, maquinaria de
              movimiento de tierra, manejo de materiales y accesorios de izaje de carga.
            </p>
            <a
              href="/static/brochures/reglas-del-servicio-de-inspeccion-de-equipos-de-izaje-de-cargas-y-aparejos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary font-bold px-6 py-2 rounded hover:bg-secondary-light transition-colors text-sm"
            >
              Descargar Reglas
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-3">Procedimiento Quejas / Apelaciones</h2>
            <a
              href="/static/brochures/7.5-PROCEDIMIENTO-QUEJAS-APELACIONES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary font-bold px-6 py-2 rounded hover:bg-secondary-light transition-colors text-sm"
            >
              Descargar Procedimiento
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            to="/consulta-certificados/inspecciones"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-secondary-light transition-colors text-sm"
          >
            Consultar Certificados de Inspección
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
