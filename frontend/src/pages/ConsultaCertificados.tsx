import { useState } from 'react'
import { motion } from 'framer-motion'

const portales = [
  {
    id: 'personas',
    titulo: 'Certificación de Personas',
    descripcion: 'Consulte certificados de personas digitando su número de identificación y código de carné.',
    url: 'https://intranet.ricertificacion.com/_Modulos/ConsultaCarne',
  },
  {
    id: 'inspeccion',
    titulo: 'Certificación de Inspección',
    descripcion: 'Consulte certificados de inspección de equipos de izaje.',
    url: 'https://intranet.ricertificacion.com/_ModulosInspeccion/CertificadoWeEquipos.aspx',
  },
]

export default function ConsultaCertificados() {
  const [errores, setErrores] = useState<Record<string, boolean>>({})
  const [reintentar, setReintentar] = useState<Record<string, number>>({})

  const handleIframeError = (id: string) => {
    setErrores((prev) => ({ ...prev, [id]: true }))
  }

  const handleReintentar = (id: string) => {
    setErrores((prev) => ({ ...prev, [id]: false }))
    setReintentar((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold safety-stripe">Consulta de Certificados</h1>
          <p className="text-gray-200 max-w-2xl mt-6 leading-relaxed">
            Consulte nuestra base de datos de certificados ingresando su número de identificación
            y código de carné.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {portales.map((portal, i) => (
            <motion.div
              key={portal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="p-6 pb-4">
                <div className="w-10 h-1 bg-secondary rounded mb-4" />
                <h2 className="text-xl font-bold text-primary mb-2">{portal.titulo}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{portal.descripcion}</p>
              </div>

              {errores[portal.id] ? (
                <div className="mx-6 mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center flex-1 flex flex-col items-center justify-center gap-4">
                  <p className="text-gray-500 text-sm">
                    El portal no pudo cargarse directamente. Puede requerir autenticación previa.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleReintentar(portal.id)}
                      className="bg-secondary text-primary font-bold px-5 py-2 rounded text-sm hover:bg-secondary-light transition-colors"
                    >
                      Reintentar
                    </button>
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white font-bold px-5 py-2 rounded text-sm hover:bg-primary-light transition-colors"
                    >
                      Abrir en nueva ventana
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex-1 border-t border-gray-100">
                  <iframe
                    key={reintentar[portal.id] || 0}
                    src={portal.url}
                    title={portal.titulo}
                    className="w-full border-0"
                    style={{ height: '500px' }}
                    onError={() => handleIframeError(portal.id)}
                    sandbox="allow-forms allow-scripts allow-same-origin"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
