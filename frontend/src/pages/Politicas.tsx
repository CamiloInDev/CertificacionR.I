import { useState } from 'react'

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

export default function Politicas() {
  const [activeTab, setActiveTab] = useState(policies[0].id)

  const active = policies.find((p) => p.id === activeTab)!

  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold safety-stripe">Políticas</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-primary mb-6 safety-stripe">
            Autorización Tratamiento de Datos Personales
          </h2>

          <div className="text-gray-700 space-y-5 leading-relaxed mt-8">
            <p>
              Los datos personales aquí recolectados serán recolectados, almacenados, procesados, usados,
              compilados, transmitidos, transferidos, actualizados y dispuestos conforme lo establece la Ley
              1581 de 2012, el Decreto 1377 de 2013, compilado en el capítulo 25 del Decreto 1074 de 2015
              (Único Reglamentario del Sector Comercio, industria y Turismo).
            </p>

            <p>
              La sociedad INSTITUTO RI SAS. como responsable del tratamiento de los datos personales aquí
              consignados, en cumplimiento de la Ley 1581 de 2012 y del Decreto 1377 de 2013, informa al
              titular de los datos personales que le asisten los siguientes derechos: acceder a sus datos
              personales; conocer, actualizar y rectificar sus datos personales; solicitar prueba de la
              autorización otorgada; revocar la autorización y/o solicitar la supresión del dato y en general
              todos los derechos consignados en el artículo 8 de la Ley 1581 de 2012.
            </p>

            <p>
              Me ha sido informado (a) la finalidad de la recolección de los datos personales, la cual
              consiste en: validar la información suministrada, tratamiento y protección de mis datos. El
              INSTITUTO RI SAS. garantizará la confidencialidad, libertad, seguridad, veracidad, transparencia,
              acceso y circulación restringida de mis datos y se reservará el derecho de modificar su Política
              de Tratamiento de Datos Personales en cualquier momento. Cualquier cambio será informado y
              publicado oportunamente en la página web del INSTITUTO RI SAS.
            </p>

            <p>
              Estos derechos derivados de la protección de datos los puedo ejercer a través de los canales
              dispuestos por el INSTITUTO RI SAS según lo establecido para ello por la Política de Tratamiento
              de datos personales disponibles en la página web https://grupori.com/ a la dirección: Calle 85
              #24-39, en la ciudad de Bogotá, Teléfono: +57 6358147 / 316 5254814.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/static/brochures/CP-RE-005-Formato-Solicitud.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md border border-gray-100 p-5 hover:shadow-xl transition-shadow flex items-start gap-3"
          >
            <img
              src="https://ricertificacion.com/wp-content/plugins/download-manager/assets/file-type-icons/pdf.svg"
              alt="PDF"
              className="w-10 h-10 shrink-0 mt-1"
            />
            <div>
              <p className="font-bold text-sm text-primary leading-snug">
                CP-RE-005 Formato Solicitud Evaluación de la Conformidad y Autorización de Divulgación de Resultados
              </p>
              <p className="text-xs text-gray-500 mt-1">216.72 KB</p>
            </div>
          </a>

          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 hover:shadow-xl transition-shadow">
            <p className="font-bold text-sm text-primary leading-snug">
              CP-PR-011 Certificación de personas V.16
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 hover:shadow-xl transition-shadow">
            <p className="font-bold text-sm text-primary leading-snug">
              Procedimiento Quejas y Apelaciones V.08 2023-07-14
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-3 italic">
          Para dar trámite a su solicitud descargue el documento PDF y envíelo luego de completar la información
          al correo electrónico: comercial@ricertificacion.com.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 safety-stripe">Políticas de Certificación</h2>

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
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-bold text-primary mb-2 safety-stripe">
            CP-RG-001 Reglamento de Certificación
          </h2>
          <p className="text-sm text-gray-500 mb-4">V.22 01/oct/2025</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Reglamento que establece las condiciones y requisitos para la certificación de personas
            bajo la norma ISO/IEC 17024.
          </p>
          <a
            href="/static/brochures/CP-RG-001-Reglamento-Certificacion.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-primary font-bold px-6 py-2 rounded hover:bg-secondary-light transition-colors text-sm"
          >
            Descargar Reglamento
          </a>
        </div>
      </section>
    </div>
  )
}
