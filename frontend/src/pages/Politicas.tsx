export default function Politicas() {
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

          <a
            href="/static/brochures/CP-PR-011-Certificacion-de-personas-V.16.pdf"
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
                CP-PR-011 Certificación de personas V.16
              </p>
            </div>
          </a>

          <a
            href="/static/brochures/CP-PR-016-Quejas-y-apelaciones-V.08_2023-07-14.pdf"
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
                Procedimiento Quejas y Apelaciones V.08 2023-07-14
              </p>
            </div>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-3 italic">
          Para dar trámite a su solicitud descargue el documento PDF y envíelo luego de completar la información
          al correo electrónico: comercial@ricertificacion.com.
        </p>
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
            href="/static/brochures/CP-RG-001-Reglamento-de-Certificacion-V.22.pdf"
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
