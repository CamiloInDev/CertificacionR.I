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
    id: 'vehiculos',
    slug: 'vehiculos',
    title: 'Conductor de Vehículo Liviano Categoría C1',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en la conducción de vehículo liviano Categoría C1 (automóviles, camperos, camionetas y microbuses).',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: [
      'NSCL 280601099 SENA Versión 1. Alistar automotores livianos de acuerdo con la normativa legal y técnica. Fecha de aprobación 2017-05-19.',
      'NSCL 280601100 SENA Versión 1. Conducir vehículos livianos de acuerdo con procedimientos técnicos y normativa de tránsito y transporte. Fecha de aprobación 2017-05-19.',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: '1 hora de examen teórico para un grupo máximo de siete (7) candidatos durante la misma jornada. 1 hora por cada examen práctico por candidato.',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Copia del documento de identidad.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Poseer licencia de conducción vigente', 'Copia de la licencia de conducción vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Experiencia en operación del vehículo', 'Certificado laboral, curso de capacitación o certificado ONAC vigente.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Paz y salvo de infracciones de tránsito', 'Constancia SIMIT.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Pagar el valor del servicio', 'Comprobante de pago, orden de servicio o factura.', 'Según acuerdo', 'SI', 'SI', 'SI'],
          ['Aprobar examen teórico', 'Responder acertadamente el mínimo de preguntas indicadas por módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Aprobar examen práctico', 'Cumplir todos los criterios de desempeño del módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Al aplicar las pruebas', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Al aplicar las pruebas', 'N/A', 'N/A', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'cargador',
    slug: 'cargador',
    title: 'Operador de Cargador',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de cargadores frontales.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: [
      'Operador de Cargador Frontal',
      'Norma UNE-ISO 7130-2014, Maquinaria para movimiento de tierras – Formación del operador - Contenido y métodos',
      '4.2 Criterios',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada (donde se realizarán pruebas teóricas y prácticas).',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Copia del documento de identidad.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Experiencia en operación de montacargas', 'Certificado laboral (mín. 6 meses), curso de formación (mín. 8 horas) o certificado ONAC vigente.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Pagar el valor del servicio', 'Comprobante de pago, orden de servicio o factura.', 'Según acuerdo', 'SI', 'SI', 'SI'],
          ['Aprobar examen teórico', 'Responder acertadamente el mínimo de preguntas indicadas por módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Aprobar examen práctico', 'Cumplir todos los criterios de desempeño del módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
        ],
      },
    ],
  },
  {
    id: 'aparejador',
    slug: 'aparejador',
    title: 'Aparejador / Señalero de Izaje de Cargas',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para certificar la competencia de una persona en la operación de aparejamiento de cargas.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Aparejador / Señalero de Izaje de Cargas'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'puente',
    slug: 'puente',
    title: 'Operador de Puente Grúa y Grúa de Pórtico',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para certificar la competencia de una persona en los diferentes tipos de puente grúa y/o grúa pórtico.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: [
      'Operador de Puente Grúa: Norma ASME B30.2 – 2016 Overhead and Gantry Cranes (Top Running Bridge, Single or Multiple Girder, Top Running Trolley Hoist) 2-3.3.4 Responsibilities of Crane Operators',
      'Operador de Grúa Pórtico: Norma ASME B 30.17 – 2020 17-3.3.4 Responsibilities of Operators',
    ],
    capacidad: 'El alcance se limita de acuerdo al tipo de mando (Cabina, Botonera o Control remoto) con que se presenta el examen práctico, así como a la capacidad máxima del equipo.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Copia del documento de identidad.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Experiencia en operación del equipo', 'Certificado laboral, curso de formación (mín. 4 horas) o certificado ONAC vigente.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Pagar el valor del servicio', 'Comprobante de pago, orden de servicio o factura.', 'Según acuerdo', 'SI', 'SI', 'SI'],
          ['Aprobar examen teórico', 'Responder acertadamente el mínimo de preguntas indicadas por módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Aprobar examen práctico', 'Cumplir todos los criterios de desempeño del módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, evaluación o certificado.', 'Junto con las pruebas', 'N/A', 'N/A', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'manlift',
    slug: 'manlift',
    title: 'Operador de Plataforma Aérea – MANLIFT',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en la operación de manlift.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: [
      'ANSI SAIA A92.22: 2021 Safe Use of Mobile Elevating Work Platforms (MEWPs)',
      'Maintenance, Inspection and Repair 5.5 Pre-start Inspection',
      '6 Operation - 6.2 MEWP Personnel Qualifications and Training Requirements',
    ],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: true,
    prereqs: [
      {
        title: 'Pre-requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Tener mínimo 18 años', 'Copia del documento de identidad.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Entregar el formato SOLICITUD EVALUACIÓN DE LA CONFORMIDAD', 'CP-RE-005 completamente diligenciado en su versión vigente.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
          ['Certificado de curso de trabajo seguro en alturas', 'Copia del CERTIFICADO DE TRABAJO AVANZADO EN ALTURAS con fecha de emisión no mayor a 1 año.', 'Al aplicar la solicitud', 'SI', 'SI', 'SI'],
        ],
      },
    ],
    reqs: [
      {
        title: 'Requisitos para la Certificación',
        headers: ['Requisito', 'Documentos', 'Cuándo se entrega', 'Mantenimiento', 'Ampliación', 'Renovación'],
        rows: [
          ['Experiencia en operación del equipo', 'Certificado laboral, curso de formación (mín. 8 horas) o certificado ONAC vigente.', 'Al aplicar la solicitud', 'NA', 'NA', 'NA'],
          ['Pagar el valor del servicio', 'Comprobante de pago, orden de servicio o factura.', 'Según acuerdo', 'SI', 'SI', 'SI'],
          ['Aprobar examen teórico', 'Responder acertadamente el mínimo de preguntas indicadas por módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Aprobar examen práctico', 'Cumplir todos los criterios de desempeño del módulo.', 'Al ser calificado', 'Iguales', 'Iguales', 'Iguales'],
          ['Contrato de certificación', 'Formato diligenciado y firmado.', 'Junto con las pruebas', 'SI', 'SI', 'SI'],
          ['Entrevista estructurada', 'Formato diligenciado y firmado.', 'Junto con las pruebas', 'N/A', 'N/A', 'SI'],
          ['Curso de refuerzo en técnicas de levantamiento mecánico de cargas', 'Registro de asistencia, evaluación o certificado.', 'Junto con las pruebas', 'N/A', 'N/A', 'SI'],
        ],
      },
    ],
  },
  {
    id: 'montacargas-at',
    slug: 'montacargas-at',
    title: 'Operador de Montacargas Todo Terreno y TELEHANDLER',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de montacargas.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Operador de Montacargas Todo Terreno y TELEHANDLER'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'montacargas-apilador',
    slug: 'montacargas-apilador',
    title: 'Operador de Montacargas y Apiladores',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de montacargas y apiladores.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Operador de Montacargas y Apiladores'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'brazo-articulado',
    slug: 'brazo-articulado',
    title: 'Operador de Grúas de Brazo Articulado',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de grúas de brazo articulado.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Operador de Grúas de Brazo Articulado'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'grua-movil',
    slug: 'grua-movil',
    title: 'Operador de Grúas Móviles y Locomotoras',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona en los diferentes tipos de grúas móviles.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Operador de Grúas Móviles y Locomotoras'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'supervisor-izaje',
    slug: 'supervisor_izaje',
    title: 'Supervisor de Izaje de Cargas',
    shortDesc: 'Determinar los requisitos del esquema de certificación que se deben cumplir para establecer la competencia de una persona que supervisa las operaciones de izaje.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Supervisor de Izaje de Cargas'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
  {
    id: 'operador-winche',
    slug: 'operador_winche',
    title: 'Operador de Winche',
    shortDesc: 'Determinar los requisitos del Esquema de certificación que se deben cumplir para certificar la competencia de una persona como Operador de Winche.',
    fullDesc: 'Esta certificación de personas está acreditada por el Organismo Nacional de Acreditación de Colombia ONAC, de acuerdo con el alcance establecido en el anexo 13-OCP-005.',
    normas: ['Esquema de certificación para Operador de Winche'],
    capacidad: 'El alcance de esta certificación se limita a la capacidad máxima de los equipos en los que se realizará el examen práctico.',
    duracion: 'Se debe disponer del personal durante una jornada de 8 horas de un grupo máximo de siete (7) candidatos, por jornada.',
    hasPrereqs: false,
    prereqs: [],
    reqs: [],
  },
];
