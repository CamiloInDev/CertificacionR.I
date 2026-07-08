import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'

export default function Personas() {
  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 safety-stripe">Certificación de Personas</h1>
          <p className="text-gray-200 max-w-3xl mt-6 leading-relaxed">
            Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.
            Las actividades para que un organismo de certificación determine que una persona cumple los requisitos
            de certificación, que incluye la solicitud, la evaluación, la decisión de certificación, la renovación
            y el uso de certificados y logotipos/marcas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-3 safety-stripe">Alcance de Certificación</h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            RI Certificación cuenta con esquemas revisados y aprobados para la certificación de personas en cada
            uno de los alcances ofrecidos. Las políticas y procedimientos son equitativos para todos los
            solicitantes y candidatos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/personas/${cert.slug}`}
                className="block bg-white rounded-lg shadow-md border border-gray-100 p-6 h-full transition-all hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-1 bg-secondary rounded mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{cert.shortDesc}</p>
                <span className="inline-block bg-secondary text-primary text-sm font-bold px-4 py-1.5 rounded group-hover:bg-secondary-light transition-colors">
                  Ver esquema →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
