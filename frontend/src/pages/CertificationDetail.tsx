import { useParams, Link } from 'react-router-dom'
import { certifications } from '../data/certifications'

export default function CertificationDetail() {
  const { slug } = useParams()
  const cert = certifications.find((c) => c.slug === slug)

  if (!cert) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Certificación no encontrada</h1>
        <Link to="/personas" className="text-secondary hover:underline font-bold">← Volver a Personas</Link>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/personas" className="text-secondary hover:underline text-sm font-semibold mb-2 inline-block">
            ← Volver a Personas
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 safety-stripe">{cert.title}</h1>
          <p className="text-gray-200 mt-6 max-w-3xl leading-relaxed">{cert.fullDesc}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <p className="text-gray-700 leading-relaxed text-lg">{cert.shortDesc}</p>

        {cert.normas.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-4 safety-stripe">Norma de Referencia</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-6">
              {cert.normas.map((n, i) => <li key={i} className="leading-relaxed">{n}</li>)}
            </ul>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold text-primary mb-4 safety-stripe">Capacidad</h2>
          <p className="text-gray-700 mt-6 leading-relaxed">{cert.capacidad}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-4 safety-stripe">Duración</h2>
          <p className="text-gray-700 mt-6 leading-relaxed">{cert.duracion}</p>
        </div>

        {cert.hasPrereqs && [...cert.prereqs, ...cert.reqs].map((group, gi) => (
          <div key={gi}>
            <h2 className="text-xl font-bold text-primary mb-4 safety-stripe">{group.title}</h2>
            <div className="overflow-x-auto mt-6 rounded-lg shadow border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    {group.headers.map((h, hi) => (
                      <th key={hi} className="p-3 text-left font-semibold border-b border-primary-light whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="p-3 border-t border-gray-200 text-gray-700 whitespace-pre-wrap">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-gray-200">
          <a
            href="/static/brochures/BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors shadow"
          >
            Descargar Brochure
          </a>
        </div>
      </section>
    </div>
  )
}
