import { motion } from 'framer-motion'

export default function Conozcanos() {
  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold safety-stripe">Conózcanos</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 safety-stripe">Nuestra Experiencia</h2>
          <p className="text-gray-700 leading-relaxed mt-6 mb-4">
            Desde el año 2014 trabajamos en procura de asegurar las operaciones a través de la certificación
            de personas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Específicamente en certificación, tenemos amplia experiencia en la evaluación de competencias que
            realizan sus actividades empleando equipos tales como: montacargas, puente grúas, grúas móviles,
            plataformas de elevación (Manlift), brazo articulado, excavadora, cargador frontal, Winche,
            telehandler y otros cargos como: aparejador, supervisor y conductor de vehículo liviano (C1).
            Nuestra amplia lista de clientes revela no solo el gran nivel de nuestra atención, sino nuestro
            gran conocimiento de cada especialidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 safety-stripe">Nuestras Acreditaciones</h2>
          <p className="text-gray-700 mt-6 mb-6 leading-relaxed">
            Acreditaciones emitidas a favor nuestro por el Organismo Nacional de Acreditación de Colombia ONAC.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="w-10 h-1 bg-secondary rounded mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Certificación de Personas</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                INSTITUTO RI SAS SIGLA: GRUPO RI. Acreditación ONAC vigente con código{' '}
                <strong>13-OCP-005</strong> bajo la norma ISO/IEC 17024:2012.
              </p>
              <a
                href="/static/brochures/13-OCP-005-Vig-ONAC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-primary font-bold px-4 py-2 rounded text-sm hover:bg-secondary-light transition-colors"
              >
                Descargar Certificado
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="w-10 h-1 bg-secondary rounded mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Inspección de Equipos</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                RI CERTIFICACIÓN E INSPECCIÓN SAS. Acreditación ONAC vigente con código{' '}
                <strong>19-OIN-095</strong> bajo la norma ISO/IEC 17020:2012.
              </p>
              <a
                href="/static/brochures/19-OIN-095.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-primary font-bold px-4 py-2 rounded text-sm hover:bg-secondary-light transition-colors"
              >
                Descargar Certificado
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
