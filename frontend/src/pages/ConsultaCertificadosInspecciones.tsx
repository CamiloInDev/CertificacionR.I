import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ConsultaCertificadosInspecciones() {
  const [error, setError] = useState(false)
  const [retry, setRetry] = useState(0)

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/" className="text-secondary hover:underline text-sm font-semibold mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 safety-stripe">Certificados de Inspección</h1>
          <p className="text-gray-200 max-w-2xl mt-6 leading-relaxed">
            Consulte certificados de inspección de equipos de izaje.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
        >
          {error ? (
            <div className="p-10 bg-gray-50 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center gap-4">
              <p className="text-gray-500 text-sm">
                El portal no pudo cargarse directamente. Puede requerir autenticación previa.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => { setError(false); setRetry((r) => r + 1) }}
                  className="bg-secondary text-primary font-bold px-5 py-2 rounded text-sm hover:bg-secondary-light transition-colors"
                >
                  Reintentar
                </button>
                <a
                  href="https://intranet.ricertificacion.com/_ModulosInspeccion/CertificadoWeEquipos.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-bold px-5 py-2 rounded text-sm hover:bg-primary-light transition-colors"
                >
                  Abrir en nueva ventana
                </a>
              </div>
            </div>
          ) : (
            <iframe
              key={retry}
              src="https://intranet.ricertificacion.com/_ModulosInspeccion/CertificadoWeEquipos.aspx"
              title="Certificados de Inspección"
              className="w-full border-0"
              style={{ height: '600px' }}
              onError={() => setError(true)}
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          )}
        </motion.div>
      </section>
    </div>
  )
}
