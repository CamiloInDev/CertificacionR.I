export interface Certification {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  normas: string[];
  capacidad: string;
  duracion: string;
  hasPrereqs: boolean;
  prereqs: ReqGroup[];
  reqs: ReqGroup[];
}

export interface ReqGroup {
  title: string;
  headers: string[];
  rows: string[][];
}

export const certifications: Certification[] = [
  {
    id: 'aparejador',
    slug: 'aparejador',
    title: 'Aparejador / Señalero de Izaje de Cargas',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para certificar la competencia de una persona en la operación de aparejamiento de cargas.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'ASME B30.9: 2021 Slings',
      'Section 9-0.4: Rigger Responsibilities.',
    ],
    capacidad: 'NA.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizarán pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en aparejamiento de cargas.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de aparejador señalero de cargas\n- Entregar certificado laboral evidenciando experiencia como aparejador de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en aparejamiento de cargas en izaje de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'brazo-articulado',
    slug: 'brazo-articulado',
    title: 'Operador de Grúas de Brazo Articulado',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de grúas de brazo articulado.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'ASME B30.22:2023 Articulating Boom Cranes',
      '22-3.1.3.3.1 Responsibilities of the Crane Operator',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de brazo articulado\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'cargador',
    slug: 'cargador',
    title: 'Operador de Cargador',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de cargadores frontales.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Operador de Cargador Frontal',
      'Norma UNE-ISO 7130-2014, Maquinaria para movimiento de tierras – Formación del operador - Contenido y métodos',
      '4.2 Criterios',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de cargador frontal\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'grua-movil',
    slug: 'grua-movil',
    title: 'Operador de Grúas Móviles y Locomotoras',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de grúas móviles.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Norma ASME B30.5 – 2021 Mobile and Locomotive Cranes',
      '5-3.1.3 Responsibilities',
      '5-3.1.3.3 Responsibilities of Crane Operators',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de grúa móvil\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 16 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'manlift',
    slug: 'manlift',
    title: 'Operador de Plataforma Aérea – MANLIFT',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en la operación de manlift.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'ANSI SAIA A92.22: 2021 Safe Use of Mobile Elevating Work Platforms (MEWPs)',
      '5.5 Pre-start Inspection',
      '6 Operation',
      '6.2 MEWP Personnel Qualifications and Training Requirements',
      '6.3 Assistance to Operators',
      '6.4 Before Operation',
      '6.5 Work Place Inspection',
      '6.6 Prior to Each Operation',
      '6.7 Understanding of Hazardous Atmosphere Locations',
      '6.8 Specific Requirements of Operation',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de manlift\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Certificado de curso de trabajo seguro en alturas', 'Entregar copia del CERTIFICADO DE TRABAJO AVANZADO EN ALTURAS con fecha de emisión no mayor a 18 meses.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'montacargas-at',
    slug: 'montacargas-at',
    title: 'Operador de Montacargas Todo Terreno y TELEHANDLER',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de montacargas.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'ANSI/ITSDF B56.6: 2021 Safety Standard for Rough Terrain Forklift Trucks',
      '6 Operating Safety Rules and Practices',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de montacargas Todo Terreno y Telehandler\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'montacargas-apilador',
    slug: 'montacargas-apilador',
    title: 'Operador de Montacargas y Apiladores',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de montacargas y apiladores.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Norma ANSI/ITSDF B56.1-2020 Safety Standard for Low Lift and High Lift Trucks',
      '4.19 Operator Training',
      'Part II for the User – 5 Operating Safety Rules and Practices',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de montacargas y apiladores\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'puente',
    slug: 'puente',
    title: 'Operador de Puente Grúa y Grúa de Pórtico',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para certificar la competencia de una persona en los diferentes tipos de puente grúa y/o grúa pórtico.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Norma ASME B30.2 – 2022 Overhead and Gantry Cranes (Top Running Bridge, Single or Multiple Girder, Top Running Trolley Hoist)',
      '2-3.3.4 Responsibilities of Crane Operators',
      'Norma ASME B 30.17 – 2020 Cranes and Monorails (With Underhung Trolley or Bridge)',
      '17-3.3.4 Responsibilities of Operators',
    ],
    capacidad: 'El alcance se limita de acuerdo con el tipo de mando (Cabina, Botonera o Control remoto) con que se presenta el examen práctico, así como a la capacidad máxima del equipo en que se realiza el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de puente grúa / grúa pórtico\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 4 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'supervisor-izaje',
    slug: 'supervisor_izaje',
    title: 'Supervisor de Izaje de Cargas',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona que supervisa las operaciones de izaje.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Norma ASME B30.5 – 2021 Mobile and Locomotive Cranes',
      'Chapter 5-3.1.3.2.2 Lift Director. Excluidos 5-3.1.3.2.2 (k), 5-3.1.3.2.2 (j)(2)',
    ],
    capacidad: 'NA',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en supervisión de izaje.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de Supervisor de izaje\n- Entregar certificado laboral evidenciando experiencia como supervisor de izaje de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en supervisión izaje de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'operador-winche',
    slug: 'operador_winche',
    title: 'Operador de Winche',
    shortDesc: 'Determinar los requisitos del Esquema de certificación que se deben cumplir para certificar la competencia de una persona como Operador de Winche.',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'Norma ASME B30.7 – 2021',
      '7-3.1.3.3 Responsibilities of equipment operator.',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Certificado anterior emitido por RI CERTIFICACION en el alcance de operador de winche\n- Entregar certificado laboral evidenciando experiencia como operador del equipo de mínimo 6 meses\n- Copia de un certificado de un curso de formación práctica en operación del equipo de por lo menos 8 horas\n- Copia de certificado expedido por cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumpliento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'vehiculos',
    slug: 'vehiculos',
    title: 'Conductor de Vehículo Liviano Categoría C1',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en la conducción de vehículo liviano Categoría C1 (automóviles, camperos, camionetas y microbuses).',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'NSCL 280601099 SENA Versión 1. Alistar automotores livianos de acuerdo con la normativa legal y técnica. Fecha de aprobación 2017-05-19.',
      'NSCL 280601100 SENA Versión 1. Conducir vehículos livianos de acuerdo con procedimientos técnicos y normativa de tránsito y transporte. Fecha de aprobación 2017-05-19.',
    ],
    capacidad: 'N/A',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (8) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 20 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\n- Entregar certificado laboral evidenciando experiencia como conductor de vehículo liviano\n- Copia de certificado de curso de capacitación teórico práctica en conducción de vehículos expedido por un centro de enseñanza donde se relacione la categoría y las horas recibidas\n- Copia de certificado vigente expedido por RI Certificación o cualquier organismo de certificación acreditado ante la ONAC en el alcance para el cual está aplicando.\n*Para certificado laboral máximo 6 meses después de emisión.\n**Curso de formación máximo 1 año después de emisión.\n***Certificado ONAC 6 meses máximo posterior a finalizar la vigencia.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Poseer licencia de conducción vigente de la categoría en la cual se va a certificar', 'Entregar una copia de la licencia de conducción vigente en la categoría a la que se presenta.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de conducción de vehículos', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'carga-terrestre',
    slug: 'carga-terrestre',
    title: 'Operador para disposición y traslado de carga en transporte de carga terrestre (mayor a 3.5 toneladas)',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en la disposición y traslado de carga en transporte de carga terrestre (mayor a 3.5 toneladas).',
    fullDesc: 'En INSTITUTO RI SAS SIGLA: GRUPO RI. Contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 13-OCP-005 bajo la norma ISO/IEC 17024:2012.',
    normas: [
      'NSCL 280601109 31/12/2024',
      'Trasladar carga de acuerdo con procedimientos técnicos y normativa de tránsito y transporte.',
    ],
    capacidad: 'N/A',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de ocho (5) candidatos, por jornada (donde se realizará pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 21 años', 'Entregar una copia del documento de identidad.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Documento que indique la experiencia de la persona en operación del equipo.', 'Opciones:\nExisten las siguientes opciones:\n- Entregar certificado laboral evidenciando experiencia como operador de vehículo de carga mayores a 3.5 toneladas. Si el cargo es diferente, adjuntar el perfil del cargo, donde se evidencia la función de conducción de vehículos de carga mayores a 3.5 toneladas.\n- Para los casos en que el solicitante sea independiente, la experiencia deberá acreditarse mediante una certificación laboral o de prestación de servicios expedida por un cliente, contratante o empresa para la cual haya prestado el servicio.\n- Certificado del curso básico obligatorio de capacitación para conductores de vehículos que transportan mercancías peligrosas, Decreto 1079 del 26 de mayo de 2015 en la sección 8 con intensidad de 60 horas y estar vigente en la plataforma SISCONMP (solo si se transportan mercancías peligrosas)', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Poseer licencia de conducción vigente de la categoría en la cual se va a certificar', 'Entregar una copia de la licencia de conducción vigente en la categoría a la que se presenta C2/C3.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos que evidencia cumplimiento del requisito', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Obtener aprobación de cada uno de los módulos a evaluar en el examen teórico.', 'La aprobación de un módulo se obtiene respondiendo acertadamente como mínimo el número de preguntas indicadas en cada módulo.', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Obtener aprobación en cada uno de los módulos del examen práctico', 'La aprobación de un módulo se obtiene con el cumplimiento de todos los criterios de desempeño del módulo', 'Al calificarse por el examinador', 'SI', 'SI', 'SI'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de conducción de vehículos', 'Registro de asistencia, Registro de evaluación, Certificado', 'Junto con las pruebas teórico y prácticos', 'N/A', 'N/A', 'SI'],
          ['Pagar el valor del servicio según la oferta aceptada.', 'Entregar comprobante de pago, orden de servicio o factura al Comercial de RI Certificación según acuerdos comerciales.', 'Según acuerdo', 'SI', 'SI', 'SI'],
        ],
      },
    ],
  },
];