import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'

interface Policy {
  id: string
  label: string
  code: string
  version: string
  content: React.ReactNode
}

const policies: Policy[] = [
  {
    id: 'quejas',
    label: 'Quejas y Apelaciones',
    code: 'CP-PO-006',
    version: 'Versión 04 21/mar/2023',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong> reconoce el derecho que tienen los solicitantes y
          candidatos, a presentar una queja relacionada con la atención de nuestro personal o por
          incumplimiento en el proceso de certificación. De igual forma, el candidato solicitante
          puede apelar una decisión tomada por RI Certificación.
        </p>
        <p>
          La atención a solución de quejas y apelaciones se atiende de manera constructiva,
          imparcial y oportuna de los procedimientos en forma equitativa a todos a quienes aplique
          sin discriminación alguna.
        </p>
        <p>
          RI Certificación es responsable de todas las decisiones tomadas en todos los niveles del
          proceso de tratamiento de quejas y apelaciones. Siempre se confirmará si procede para
          comenzar a realizar la investigación pertinente y poder dar respuesta a la queja y
          apelación dentro de los términos establecidos, notificando formalmente a la persona que
          apela o que se queja.
        </p>
      </>
    ),
  },
  {
    id: 'seguridad',
    label: 'Seguridad',
    code: 'CP-PO-004',
    version: 'Versión 04 21/mar/2023',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong>, como organismo certificador de personas bajo la norma{' '}
          <strong>NTC-ISO/IEC 17024</strong>, está consciente de la importancia de mantener en
          cadena de custodia los instrumentos de evaluación para evitar el fraude en el desarrollo
          de las evaluaciones.
        </p>
        <p>Para garantizar lo anterior se ha establecido la siguiente política:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            RI Certificación asegura la custodia de todo instrumento relacionado con los exámenes
            de evaluación, el cual cuenta con un BACK UP custodiado por la dirección de
            Certificación.
          </li>
          <li>
            La documentación generada durante el procedimiento de certificación debe cumplir con
            las instrucciones definidas en el proceso de certificación.
          </li>
          <li>
            RI Certificación dentro del Reglamento de Certificación de personas estipula la
            prohibición de ingreso de cámaras fotográficas o celulares para evitar el fraude.
          </li>
          <li>
            RI Certificación asegura la seguridad a lo largo de todo el proceso de certificación
            e implementa medidas para tomar acciones correctivas cuando ocurren fallos de
            seguridad.
          </li>
          <li>
            RI Certificación establece disposiciones que permiten asegurar la seguridad de la
            ubicación de los esquemas, exámenes, instructivos, informes de resultados, amenazas
            resultantes del uso repetitivo de los materiales del examen y de las tentativas de
            fraude en el examen.
          </li>
          <li>Todos los aspectos antes mencionados están contemplados en el procedimiento de certificación de personas.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'certificacion',
    label: 'Certificación',
    code: 'CP-PO-003',
    version: 'Versión 05 21/mar/2023',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong>, bajo los lineamientos de la norma ISO/IEC 17024,
          garantiza el acceso al proceso de evaluación de la conformidad a todo solicitante,
          candidato solicitante que cumpla con los requisitos exigidos por la norma y los
          procedimientos establecidos. Asegura la decisión para certificar personas basados en los
          resultados de las evaluaciones teóricas y prácticas y se reserva el derecho de otorgar
          la certificación en caso de que exista algún antecedente que pueda poner en riesgo la
          credibilidad y la confianza de R.I. Certificación, o que pueda vulnerar los principios
          de independencia, imparcialidad y confidencialidad que deben ser salvaguardados por el
          organismo de certificación.
        </p>
      </>
    ),
  },
  {
    id: 'imparcialidad',
    label: 'Imparcialidad',
    code: 'CP-PO-001',
    version: 'Versión 04 21/mar/2023',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong>, como organismo de evaluación de la conformidad bajo
          la norma ISO/IEC 17024, desarrolla sus actividades con independencia, objetividad y
          equidad con lo cual asegura la imparcialidad y transparencia requerida para actuar y
          decidir de manera autónoma, idónea y confiable, cumpliendo de la siguiente manera:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            La alta dirección de RI Certificación cuenta con un código de ética que indica las
            condiciones y limitaciones de todas las personas que intervienen en la prestación de
            los servicios, con el fin de evitar conflictos de interés y amenazas a la
            imparcialidad.
          </li>
          <li>
            En RI Certificación se evita que cualquiera de sus directivos, empleados, contratistas
            o personal intervenga dentro de las actividades de certificación y actúe en su propio
            interés. Para ello, todo conflicto será reportado como lo exige el código de ética.
          </li>
          <li>
            RI Certificación no asignará personal con el que se evidencie algún conflicto para
            llevar a cabo actividades de certificación dentro del servicio específico que se
            reporta.
          </li>
          <li>
            RI Certificación dispone de una matriz de conflicto de interés para orientar a su
            personal y partes interesadas con el fin que no se dejen afectar en su criterio para
            el desarrollo de sus actividades por posibles intimidaciones, coacciones o tráfico de
            influencias.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'confidencialidad',
    label: 'Confidencialidad',
    code: 'CP-PO-002',
    version: 'Versión 05 27/Nov/2025',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong>, como organismo de evaluación de la conformidad bajo
          la norma ISO/IEC 17024, comprende de la importancia de mantener la confidencialidad de
          la información que se obtiene e integra a los involucrados en los procesos de
          certificación.
        </p>
        <p>
          Por lo tanto, <strong>RI Certificación</strong> mediante el código de ética y las
          cláusulas de los contratos tanto para personal interno como externo, expresa e impulsa
          la confidencialidad de la información obtenida o creada en el curso de sus actividades
          en todos los niveles de su estructura, incluidos los comités o personas externas que
          actúan en su nombre.
        </p>
        <p>
          La información será de uso exclusivo de <strong>R.I. Certificación</strong>, salvo en
          los casos en que exista autorización expresa del candidato solicitante para divulgarla a
          un tercero, incluyendo a su patrocinador en caso de que así lo autorice. Asimismo, la
          información podrá ser divulgada cuando sea requerida por una entidad pública o
          administrativa en ejercicio de sus funciones legales o por orden judicial.
        </p>
      </>
    ),
  },
  {
    id: 'suspension',
    label: 'Suspensión, Retiro o Reducción',
    code: 'CP-PO-008',
    version: 'Versión 02 21/mar/2023',
    content: (
      <>
        <p>
          <strong>RI Certificación</strong>, como organismo de evaluación de la conformidad bajo
          la norma ISO/IEC 17024, establece las siguientes directrices en cada uno de los
          siguientes casos:
        </p>

        <h4 className="font-bold text-primary mt-6 mb-2">Suspensión del certificado</h4>
        <p>
          La suspensión implica que el certificado pierde su vigencia temporalmente. Cuando no se
          resuelven los problemas que dieron lugar a la suspensión en el plazo establecido por RI
          Certificación, se debe retirar la certificación. En caso de suspender la certificación,
          el cliente debe abstenerse de publicitar su certificado y esta situación se publicará en
          la página web www.ricertificacion.com. RI Certificación notificará, por escrito, a la
          persona afectada la suspensión del certificado.
        </p>
        <p className="font-semibold mt-3">Las causales para suspender un certificado pueden incluir:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>La persona certificada ha dejado de cumplir con el alcance estipulado en el certificado.</li>
          <li>Si no se ha tomado decisión de mantener el certificado de la persona por parte de RI Certificación, antes o igual a la fecha de vencimiento de la vigilancia.</li>
          <li>Si no se ha tomado decisión de renovar el certificado de la persona por parte de RI Certificación, antes o igual a la fecha de vencimiento del certificado.</li>
          <li>Se reciban de parte de empleadores o partes interesadas quejas relacionadas con el desempeño de la persona certificada, previa investigación y comprobación del caso por parte de RI Certificación.</li>
          <li>Por solicitud directa de la persona certificada.</li>
          <li>El certificado sea utilizado por terceros para fines considerados fraudulentos, previa investigación y comprobación del caso por parte de RI Certificación.</li>
          <li>La persona certificada tuvo un accidente grave que le impide desempeñar las funciones para las cuales fue certificado.</li>
        </ul>

        <h4 className="font-bold text-primary mt-6 mb-2">Retiro del certificado</h4>
        <p>
          El retiro del certificado implica que el certificado pierde su validez definitivamente y
          debe ser destruido o devuelto a RI Certificación. En caso de retirar la certificación el
          cliente se debe abstener de publicitar su certificado y esta situación se publicará en la
          página web www.ricertificacion.com. RI Certificación notificará, por escrito, a la
          persona afectada del retiro del certificado.
        </p>
        <p className="font-semibold mt-3">Las causales para retirar un certificado:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>La persona certificada no se presenta a la renovación de la certificación de acuerdo con las fechas determinadas en el certificado.</li>
          <li>Se adultere o haga uso mal intencionado del mismo.</li>
          <li>La persona no dio solución a la causal de suspensión dentro del plazo estipulado por RI Certificación.</li>
          <li>La persona no aplicó a la renovación de la certificación en las fechas estipuladas.</li>
          <li>La persona no aplicó a la vigilancia, excediendo los dos meses, después de la fecha indicada para la vigilancia respectiva de la certificación.</li>
          <li>Se compruebe con evidencia que se cometió fraude durante los procesos previos a la certificación.</li>
          <li>El certificado sea utilizado por terceros para fines considerados fraudulentos, previa investigación y comprobación del caso por parte de RI Certificación.</li>
          <li>En caso de muerte del suscriptor del certificado o en caso de enfermedad o condición física permanente que le impida realizar de manera segura las tareas relacionadas con el certificado.</li>
          <li>Por resolución judicial o administrativa que lo ordene.</li>
          <li>Por cualquier causa que razonablemente induzca a creer que el servicio de certificación haya sido comprometido hasta el punto de que se ponga en duda la fiabilidad del Certificado.</li>
          <li>La persona certificada tuvo un accidente grave y no lo reportó a RI Certificación.</li>
        </ul>

        <h4 className="font-bold text-primary mt-6 mb-2">Reducción de la certificación</h4>
        <p>
          R.I. Certificación como organismo de certificación de personas y debido a la naturaleza
          de las certificaciones emitidas no realiza la reducción o ampliación de las
          certificaciones emitidas, debido a lo anterior cada certificado poseerá un alcance único
          y una persona podrá obtener más de un certificado. El aumento o disminución de la
          capacidad será recategorización en el mismo alcance.
        </p>
      </>
    ),
  },
]

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

        <div className="bg-gradient-to-br from-primary to-[#0d2f5e] text-white rounded-lg shadow-md p-6 md:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center justify-center w-14 h-14 bg-white/15 rounded-full shrink-0">
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v4m0 0l-2-2m2 2l2-2" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold safety-stripe">Procedimiento de Certificación de Personas</h3>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">
              Descarga el documento donde se describe el procedimiento completo para la certificación de personas,
              incluyendo solicitud, evaluación, decisión y renovación.
            </p>
          </div>
          <a
            href="/static/brochures/CP-PR-011-Certificacion-de-personas-V.16.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-2.5 rounded hover:bg-secondary-light transition-colors text-sm shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar PDF
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow mb-10">
          <h2 className="text-xl font-bold text-primary mb-2 safety-stripe">
            CP-RG-001 Reglamento de Certificación
          </h2>
          <p className="text-sm text-gray-500 mb-4">V.22 01/oct/2025</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Reglamento que establece las condiciones y requisitos para la certificación de personas
            bajo la norma ISO/IEC 17024.
          </p>
          <a
            href="/static/brochures/CP-RG-001-Reglamento-de-Certificacion-V.22.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-primary font-bold px-6 py-2 rounded hover:bg-secondary-light transition-colors text-sm"
          >
            Descargar Reglamento
          </a>
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

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            to="/consulta-certificados/personas"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-secondary-light transition-colors text-sm"
          >
            Consultar Certificados de Personas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 safety-stripe">Políticas de Certificación</h2>

        <PoliticasCertificacion />
      </section>
    </div>
  )
}

function PoliticasCertificacion() {
  const [activeTab, setActiveTab] = useState(policies[0].id)

  const active = policies.find((p) => p.id === activeTab)!

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="flex flex-wrap border-b border-gray-200">
        {policies.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === p.id
                ? 'bg-secondary text-primary border-b-2 border-secondary'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8 text-gray-700 space-y-4 leading-relaxed">
        {active.content}
        <div className="pt-4 mt-4 border-t border-gray-100 text-sm text-gray-500 flex items-center justify-between">
          <span className="font-mono">{active.code}</span>
          <span>{active.version}</span>
        </div>
      </div>
    </div>
  )
}
