import { SectionId } from '../types';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      blog: 'Noticias',
      contact: 'Contacto',
    },
    hero: {
      title: 'Conectando el mejor talento',
      titleHighlight: 'con empresas líderes en Venezuela.',
      subtitle: 'Agencia experta en Selección de Personal, Caza Talentos, Evaluaciones Psicométricas y Consultoría de RRHH Estratégica.',
      ctaPrimary: 'Contáctanos',
      ctaSecondary: 'Nuestros Servicios',
    },
    about: {
      badge: 'Sobre Nosotros',
      title: 'Impulsamos el éxito a través del',
      titleHighlight: 'talento humano',
      yearsBadge: 'Años de experiencia',
      tabs: {
        history: 'Historia',
        purpose: 'Propósito',
        vision: 'Visión',
      },
      content: {
        historyTitle: 'Nuestra Historia',
        historySubtitle: 'Más de 15 años de trayectoria y confianza.',
        historyText: 'Con más de 15 años de excelente trabajo, brindando diversos servicios de Gestión Humana tanto en lo funcional como operativo a variados clientes que han utilizado nuestros servicios en Venezuela.',
        purposeTitle: 'Nuestro Propósito',
        purposeSubtitle: 'Conectamos talento con oportunidades reales.',
        purposeText: 'Conectar el mejor talento con las mejores oportunidades, impulsando el crecimiento de las empresas y el desarrollo profesional de las personas.',
        visionTitle: 'Nuestra Vision',
        visionSubtitle: 'Liderazgo, innovación y excelencia en gestión humana.',
        visionText: 'Ser la empresa líder en la gestión del talento humano, reconocida por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.',
      },
      cultureTitle: 'Nuestra cultura es nuestra mayor fortaleza.',
      valuesTitle: 'Nuestros Valores',
      values: [
        { title: "Conciencia organizacional", desc: "Entendemos profundamente la cultura y necesidades de cada cliente." },
        { title: "Trabajo en equipo", desc: "Fomentamos la colaboración y la sinergia para alcanzar resultados." },
        { title: "Compromiso y calidad", desc: "Nos dedicamos a entregar excelencia y rigor en cada proceso." },
        { title: "Ética y sencillez", desc: "Actuamos con transparencia, honestidad y claridad." },
        { title: "Flexibilidad y adaptación", desc: "Nos ajustamos ágilmente a los cambios del mercado." },
        { title: "Innovación y creatividad", desc: "Buscamos constantemente nuevas formas de aportar valor." },
        { title: "Integridad", desc: "Mantenemos la coherencia entre lo que decimos y lo que hacemos." },
      ]
    },
    services: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones de Recursos Humanos',
      subtitle: 'Ofrecemos un portafolio completo de servicios diseñados para optimizar la gestión del capital humano.',
      readMore: 'Leer más',
      modal: {
        featuresTitle: 'Características del servicio',
        ctaButton: 'Solicitar este servicio',
        closeButton: 'Cerrar',
      },
      items: {
        s1: {
          title: 'Selección de Candidatos',
          desc: 'Encontramos el perfil ideal para cada posición mediante procesos ágiles.',
          details: 'Nuestro proceso de Reclutamiento y Selección garantiza la incorporación del talento más idóneo mediante una metodología ágil centrada en la cultura organizacional.',
          features: ['Levantamiento detallado del perfil.', 'Entrevistas por competencias.', 'Verificación de referencias.', 'Garantía de reposición.']
        },
        s2: {
          title: 'Caza Talentos',
          desc: 'Búsqueda especializada de talento clave y perfiles difíciles de encontrar.',
          details: 'Servicio de Headhunting diseñado para identificar y atraer profesionales con habilidades especializadas. Mapeamos el mercado para encontrar la pieza exacta que su organización necesita con absoluta discreción.',
          features: ['Búsqueda de perfiles escasos.', 'Mapeo profundo del mercado.', 'Confidencialidad y discreción.', 'Atracción de talento pasivo.']
        },
        s3: {
          title: 'Evaluaciones de Competencias',
          desc: 'Medición precisa de habilidades y aptitudes para garantizar desempeño.',
          details: 'Implementamos metodologías objetivas para medir el nivel de desarrollo de competencias clave y detectar potencial de crecimiento.',
          features: ['Definición de competencias claves de un cargo.', 'Medición de competencias claves: sobresalientes, por reforzar y a desarrollar.', 'Detección de Necesidades de Adiestramiento (DNA).', 'Informes detallados.']
        },
        s4: {
          title: 'Evaluaciones Psicométricas',
          desc: 'Pruebas estandarizadas para conocer personalidad y potencial.',
          details: 'Utilizamos baterías de pruebas psicológicas validadas para predecir el comportamiento laboral, inteligencia y valores.',
          features: [
            'Pruebas de personalidad (Wonderlic, Inteligencia Abstracta y otras)',
            'Pruebas de Inteligencia',
            'Pruebas de comportamiento',
            'Pruebas de valores',
            'Aplicación on-line o presencial',
            'Resultados en 24 - 48 horas'
          ]
        },
        s5: {
          title: 'Outsourcing de Nóminas',
          desc: 'Gestión eficiente y confidencial de pagos y administración.',
          details: 'Delegue la carga operativa de la nómina en expertos. Aseguramos el cumplimiento exacto de cálculos bajo la normativa legal vigente.',
          features: [
            'Cálculo de nóminas',
            'Cálculo de utilidades, vacaciones, liquidaciones de prestaciones sociales',
            'Cumplimiento legal',
            'Recibos digitales',
            'Confidencialidad'
          ]
        },
        s6: {
          title: 'Obligaciones Legales Laborales',
          desc: 'Asesoría y cumplimiento en materia laboral venezolana.',
          details: 'Acompañamiento experto para asegurar que su empresa cumpla con el marco regulatorio para-fiscal y laboral, evitando sanciones onerosas.',
          features: ['Asesoría LOTTT', 'Auditorías Laborales', 'Gestión de solvencias (IVSS, FAOV, INCES, RNET)', 'Asesoría en seguridad y salud (LOPCYMAT).', 'Orientación y/o acompañamiento ante entes públicos.']
        }
      }
    },
    blog: {
      badge: 'Noticias',
      title: 'Noticias & Tendencias',
      showing: 'Mostrando',
      of: 'de',
      articles: 'artículos',
      readMore: 'Leer más',
      quickRead: 'Lectura rápida',
      modalClose: 'Cerrar artículo',
      footerText: 'Para Profiles Group, entender estas dinámicas es fundamental para ofrecer soluciones que realmente aporten valor.',
    },
    contact: {
      badge: 'Contacto',
      title: '¿Listo para potenciar tu equipo?',
      subtitle: 'Déjanos un mensaje y uno de nuestros consultores expertos se pondrá en contacto contigo.',
      formTitle: 'Envíanos un mensaje',
      labels: {
        name: 'Nombre',
        lastname: 'Apellido',
        email: 'Correo Electrónico',
        service: 'Servicio de Interés',
        message: 'Mensaje',
      },
      placeholders: {
        name: 'Tu nombre',
        lastname: 'Tu apellido',
        email: 'nombre@empresa.com',
        service: 'Selecciona una opción',
        message: '¿Cómo podemos ayudarte?',
      },
      options: {
        selection: 'Selección de Candidatos',
        headhunting: 'Caza Talentos',
        evaluations: 'Evaluaciones',
        payroll: 'Outsourcing de Nómina',
        legal: 'Obligaciones Legales Laborales',
      },
      errors: {
        name: 'El nombre es obligatorio.',
        lastname: 'El apellido es obligatorio.',
        email: 'Introduce un correo válido.',
        service: 'Por favor selecciona un servicio.',
        message: 'El mensaje debe tener al menos 10 caracteres.',
      },
      consent: 'Al enviar este formulario, acepto que Grupo E Profiles, C.A. trate mis datos para gestionar mi consulta de acuerdo con su Política de Privacidad. Reconozco mi derecho de acceso y rectificación según el Art. 28 de la CRBV.',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje Enviado!',
      successMsg: 'Gracias por contactarnos. Te responderemos a la brevedad.',
    },
    footer: {
      rights: 'Grupo E Profiles, C.A. RIF J-40463871-7. Todos los derechos reservados.',
      legalNote: 'El uso de este sitio web implica la aceptación de nuestros Términos y Condiciones y nuestra Política de Privacidad.',
      links: { privacy: 'Privacidad', terms: 'Términos', cookies: 'Cookies' },
      legal: {
        privacyTitle: 'Política de Privacidad',
        privacyContent: `**POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES**\n\n**GRUPO E PROFILES, C.A.**\n\n*Fecha de entrada en vigor: 15 de diciembre de 2025*\n\nEn **Grupo E Profiles, C.A.**, asumimos el compromiso de proteger la privacidad de nuestros usuarios. La presente Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal de acuerdo con el ordenamiento jurídico de la República Bolivariana de Venezuela.\n\n### 1. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO\nEl responsable del tratamiento de los datos captados a través del portal Profilesge.com es:\n• **Razón Social:** Grupo E Profiles, C.A.\n• **RIF:** J-40463871-7\n• **Dirección:** Av. Francisco de Miranda, Torre Profesional, Caracas, Venezuela.\n• **Correo electrónico de contacto:** privacidad@profilesge.com\n\n### 2. BASE LEGAL DEL TRATAMIENTO\nA falta de una ley orgánica específica en la materia, este documento se fundamenta en los principios de protección de datos reconocidos en Venezuela:\n• **Constitución de la República (CRBV):** Artículos 28 (Habeas Data) y 60 (Protección a la intimidad y confidencialidad).\n• **Ley sobre Mensajes de Datos y Firmas Electrónicas:** Que otorga validez jurídica a los datos electrónicos y exige el respeto a la privacidad.\n• **Ley Especial contra los Delitos Informáticos:** Que sanciona el uso indebido de información de terceros.\n\n### 3. DATOS RECOPILADOS Y FINALIDAD\nRecopilamos información bajo las siguientes categorías y propósitos:\n• **Gestión de Consultas:** Nombre y correo electrónico para responder solicitudes enviadas por el usuario.\n• **Comunicaciones Informativas:** Envío de boletines (Newsletter) previo consentimiento expreso.\n• **Datos Técnicos y de Navegación:** Dirección IP, cookies y datos analíticos para mejorar la seguridad y la experiencia de usuario en nuestra plataforma.\n• **Gestión Comercial:** Datos necesarios para la ejecución de contratos de servicios o facturación.\n\n### 4. DESTINATARIOS DE LOS DATOS\nSus datos personales no serán vendidos, alquilados ni cedidos a terceros. Solo podrán ser comunicados a:\n1. **Encargados de Tratamiento:** Proveedores tecnológicos necesarios para el funcionamiento de la web (Hosting, Google Analytics, servicios de E-mail Marketing).\n2. **Autoridades Competentes:** Únicamente cuando exista una orden judicial o requerimiento legal conforme a las leyes venezolanas.\n\n### 5. PLAZO DE CONSERVACIÓN\nLos datos se conservarán mientras dure la relación comercial o informativa. El usuario puede solicitar la supresión de sus datos en cualquier momento, salvo que exista una obligación legal de conservarlos (por ejemplo, por razones contables o tributarias ante el SENIAT).\n\n### 6. DERECHOS DEL TITULAR (HABEAS DATA)\nDe acuerdo con el Artículo 28 de la Constitución, usted tiene derecho a conocer, actualizar, rectificar y suprimir la información que sobre usted conste en nuestras bases de datos.\nPara ejercer estos derechos, debe enviar una solicitud al correo privacidad@profilesge.com adjuntando copia de su Cédula de Identidad para verificar su identidad como titular.\n\n### 7. SEGURIDAD\nImplementamos estándares de seguridad electrónica para proteger su información contra accesos no autorizados o uso indebido. Sin embargo, el usuario reconoce que las medidas de seguridad en internet no son inexpugnables.\n\n### 8. ACTUALIZACIONES\nNos reservamos el derecho de modificar esta Política para adaptarla a futuras reformas legales o cambios en nuestro modelo de negocio. Las modificaciones serán publicadas en este mismo enlace.`,
        termsTitle: 'Términos y Condiciones',
        termsContent: `**TÉRMINOS Y CONDICIONES DE USO**\n\n**PROFILESGE.COM / GRUPO E PROFILES, C.A.**\n\n*Fecha de última actualización: 15 de diciembre de 2025*\n\nEl presente documento establece las condiciones legales que regulan el acceso y uso del sitio web www.profilesge.com (en adelante, "el Sitio Web"), propiedad de **Grupo E Profiles, C.A.** (en adelante, "la Empresa"), sociedad mercantil domiciliada en Caracas, Venezuela, e inscrita bajo el **RIF: J-40463871-7**.\n\n### 1. ACEPTACIÓN DE LOS TÉRMINOS\nAl acceder, navegar o utilizar el Sitio Web, el Usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones. El uso del portal atribuye la condición de Usuario e implica la aceptación plena de todas las disposiciones incluidas en este texto y en nuestra Política de Privacidad.\n\n### 2. OBJETO DE LA PLATAFORMA\nEl Sitio Web funciona como un portal informativo y de gestión para:\n• La difusión de servicios de consultoría en Recursos Humanos.\n• La publicación de resúmenes de noticias y artículos de interés profesional.\n• La captación de talento y contacto corporativo.\n\n### 3. DESCARGO DE RESPONSABILIDAD PROFESIONAL (RRHH Y BLOG)\nPara proteger la integridad de la Empresa, el Usuario acepta que:\n• **Carácter Informativo:** Los contenidos del blog y noticias son de carácter divulgativo. No constituyen asesoría legal, laboral o contable. La Empresa no se hace responsable por decisiones tomadas por el Usuario basadas en esta información sin previa consulta profesional directa.\n• **Intermediación Laboral:** La recepción de currículos o perfiles a través del sitio no garantiza la obtención de un empleo ni establece una relación de subordinación con la Empresa. La selección final de candidatos es responsabilidad exclusiva de las empresas contratantes.\n• **Veracidad de Datos:** La Empresa no se hace responsable por la veracidad de la información suministrada por candidatos o empresas terceras en sus perfiles o vacantes.\n\n### 4. OBLIGACIONES DEL USUARIO\nEl Usuario se compromete a:\n• No utilizar el Sitio Web para fines ilícitos o fraudulentos.\n• No introducir virus o software malicioso, bajo las sanciones previstas en la Ley Especial contra los Delitos Informáticos.\n• Suministrar información veraz en los formularios de contacto y carga de perfiles.\n\n### 5. PROPIEDAD INTELECTUAL\nTodo el contenido (textos, artículos del blog, logotipos, gráficas y software) está protegido por la Ley sobre el Derecho de Autor. Queda estrictamente prohibida la reproducción total o parcial del contenido de Profilesge.com sin autorización previa y por escrito de la Empresa.\n\n### 6. EXCLUSIÓN DE GARANTÍAS\nGrupo E Profiles, C.A. no garantiza la disponibilidad ininterrumpida del Sitio Web debido a fallas técnicas, eléctricas o de conectividad ajenas a su control. Asimismo, se reserva el derecho de modificar o suspender cualquier servicio o sección del portal sin previo aviso.\n\n### 7. ENLACES A TERCEROS\nEl Sitio Web puede contener enlaces a portales externos. La Empresa no asume responsabilidad alguna por el contenido, políticas de privacidad o prácticas de sitios web de terceros.\n\n### 8. MODIFICACIONES\nLa Empresa se reserva el derecho de actualizar estos Términos y Condiciones para adaptarlos a novedades legislativas en Venezuela o cambios en sus políticas comerciales.\n\n### 9. LEY APLICABLE Y JURISDICCIÓN\nCualquier controversia derivada del uso del Sitio Web se regirá por las leyes de la República Bolivariana de Venezuela. Las partes se someten a la jurisdicción de los tribunales de la Circunscripción Judicial del Área Metropolitana de Caracas, renunciando a cualquier otro fuero.`,
        cookiesTitle: 'Política de Cookies',
        cookiesContent: `**POLÍTICA DE COOKIES**\n\n**PROFILESGE.COM / GRUPO E PROFILES, C.A.**\n\n*Fecha de última actualización: 4 de febrero de 2026*\n\nEn **Grupo E Profiles, C.A.** (en adelante, "la Empresa"), utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico y personalizar contenidos. Esta política explica qué son estas tecnologías y cómo puede controlarlas conforme a los principios de transparencia del ordenamiento jurídico venezolano.\n\n### 1. ¿QUÉ SON LAS COOKIES?\nUna "cookie" es un pequeño archivo de datos que se almacena en su navegador (computadora o dispositivo móvil) al visitar nuestro sitio web. Permiten que el portal recuerde información sobre su visita, como su idioma preferido o sus credenciales, lo que facilita su próxima visita y hace que el sitio resulte más útil.\n\n### 2. TIPOS DE COOKIES QUE UTILIZAMOS\nEn Profilesge.com clasificamos las cookies en tres categorías según su finalidad:\n\n**A. Cookies Técnicas o Esenciales (Obligatorias)**\nSon indispensables para que el sitio web funcione correctamente. Permiten la navegación, el uso de áreas seguras y la gestión de la sesión.\n• **Base Legal:** Necesidad técnica para la prestación del servicio.\n• **Ejemplos:** session_id (mantenimiento de sesión), cookie_consent (almacena su elección de privacidad).\n\n**B. Cookies de Análisis o Rendimiento (Estadísticas)**\nNos permiten entender cómo interactúan los visitantes con el sitio (qué páginas visitan más, tiempo de permanencia, errores de carga). Esta información es anónima y se usa solo para fines de mejora.\n• **Base Legal:** Interés legítimo en la optimización del servicio.\n• **Herramienta:** Google Analytics (_ga, _gid).\n\n**C. Cookies de Marketing y Publicidad (Si aplica)**\nSe utilizan para rastrear a los visitantes a través de los sitios web con la intención de mostrar anuncios que sean relevantes y atractivos para el usuario individual.\n• **Base Legal:** Consentimiento previo del usuario.\n• **Herramienta:** Píxel de Meta (Facebook), Google Ads.\n\n### 3. CONTROL Y DESACTIVACIÓN DE COOKIES\nUsted tiene el derecho de decidir si acepta o rechaza las cookies no esenciales (Análisis y Marketing).\n\n**A. A través de nuestro Banner de Privacidad:**\nAl ingresar a la web, verá un aviso que le permite "Aceptar todas", "Rechazar todas" o "Configurar".\n\n**B. A través de su navegador:**\nPuede restringir, bloquear o borrar las cookies configurando las preferencias de su navegador:\n• Google Chrome\n• Mozilla Firefox\n• Apple Safari\n• Microsoft Edge\n\n*Nota: La desactivación de cookies técnicas puede impedir el uso de ciertas funciones de la página.*\n\n### 4. PRIVACIDAD Y SEGURIDAD\nEl tratamiento de la información captada por las cookies se rige por nuestra Política de Privacidad. En cumplimiento con la Ley Especial contra los Delitos Informáticos, Grupo E Profiles, C.A. garantiza que no utiliza cookies para acceder a información privada de su dispositivo que no haya sido autorizada previamente.\n\n### 5. ACTUALIZACIONES\nEsta política puede ser modificada para adaptarse a nuevos requerimientos técnicos o cambios legislativos en la República Bolivariana de Venezuela. Las actualizaciones entrarán en vigor de forma inmediata tras su publicación.\n\n### 6. CONTACTO\nPara cualquier duda sobre el uso de cookies, puede escribirnos a: privacidad@profilesge.com.`
      }
    },
    chatbot: {
      title: 'Asistente Virtual',
      initialMessage: '¡Hola! Soy el asistente virtual de Profiles Group. ¿En qué puedo ayudarte hoy con tus necesidades de Recursos Humanos?',
      placeholder: 'Escribe tu consulta...',
      error: 'Lo siento, hubo un error.',
      help: {
        title: "¿Cómo funciona este chat?",
        description: "Puedes hacer preguntas directas sobre nuestros servicios, solicitar información de contacto o conocer nuestros valores.",
        topics: "Temas sugeridos: Selección, Headhunting, Nómina, Evaluaciones Psicométricas.",
        note: "Soy una IA entrenada para ayudar, pero para cotizaciones exactas, siempre te pondremos en contacto con nuestro equipo humano."
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blog: 'News',
      contact: 'Contact',
    },
    hero: {
      title: 'Connecting the best talent',
      titleHighlight: 'with leading companies in Venezuela.',
      subtitle: 'Expert agency in Staffing, Talent Hunting, Psychometric Assessments, and Strategic HR Consulting.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'Our Services',
    },
    about: {
      badge: 'About Us',
      title: 'Driving success through',
      titleHighlight: 'human talent',
      yearsBadge: 'Years of Experience',
      tabs: {
        history: 'History',
        purpose: 'Purpose',
        vision: 'Vision',
      },
      content: {
        historyTitle: 'Our History',
        historySubtitle: 'More than 15 years of trajectory and trust.',
        historyText: 'Over 15 years of excellent work, providing diverse Human Management services, both functional and operational, to varied clients who have used our services in Venezuela.',
        purposeTitle: 'Our Purpose',
        purposeSubtitle: 'We connect talent with real opportunities.',
        purposeText: 'Connecting the best talent with the best opportunities, driving business growth and professional development for individuals.',
        visionTitle: 'Our Vision',
        visionSubtitle: 'Leadership, innovation, and excellence in human management.',
        visionText: 'To be the leading company in human talent management, recognized for our excellence, innovation, and commitment to our clients success.',
      },
      cultureTitle: 'Our culture is our greatest strength.',
      valuesTitle: 'Our Values',
      values: [
        { title: "Organizational Awareness", desc: "We deeply understand the culture and needs of each client." },
        { title: "Teamwork", desc: "We foster collaboration and synergy to achieve extraordinary results." },
        { title: "Commitment & Quality", desc: "We are dedicated to delivering excellence and rigor in every process." },
        { title: "Ethics & Simplicity", desc: "We act with transparency, honesty, and clarity." },
        { title: "Flexibility & Adaptation", desc: "We adjust agilely to market changes." },
        { title: "Innovation & Creativity", desc: "We constantly seek new ways to add value." },
        { title: "Integrity", desc: "We maintain consistency between what we say and what we do." },
      ]
    },
    services: {
      badge: 'Our Services',
      title: 'HR Solutions',
      subtitle: 'We offer a complete portfolio of services designed to optimize human capital management.',
      readMore: 'Read more',
      modal: {
        featuresTitle: 'Service Features',
        ctaButton: 'Request this service',
        closeButton: 'Close',
      },
      items: {
        s1: {
          title: 'Candidate Selection',
          desc: 'We find the ideal profile for each position through agile filtering processes.',
          details: 'Our recruitment process guarantees the best talent acquisition through an agile approach focused on organizational fit.',
          features: ['Detailed profile definition.', 'Competency-based interviews.', 'Reference checks.', 'Replacement guarantee.']
        },
        s2: {
          title: 'Headhunting',
          desc: 'Specialized search for key talent and hard-to-find profiles.',
          details: 'Executive search service designed to attract professionals with specialized skills. We map the market to find the exact match for your organization with full discretion.',
          features: ['Niche talent search.', 'Market mapping.', 'Confidentiality and discretion.', 'Passive talent attraction.']
        },
        s3: {
          title: 'Competency Assessments',
          desc: 'Precise measurement of skills and aptitudes to ensure optimal performance.',
          details: 'We use objective methodologies to measure key competencies and identify future growth potential.',
          features: ['Definition of key competencies for a role.', 'Key competency measurement: outstanding, to reinforce, and to develop.', 'Training needs detection (TND).', 'Detailed reports.']
        },
        s4: {
          title: 'Psychometric Assessments',
          desc: 'Standardized tests to understand candidate personality and potential.',
          details: 'We use validated test batteries to predict workplace behavior, intelligence, and organizational values.',
          features: [
            'Personality tests (Wonderlic, Abstract Intelligence and others)',
            'Intelligence tests',
            'Behavioral tests',
            'Values tests',
            'Online or on-site application',
            'Results in 24 - 48 hours'
          ]
        },
        s5: {
          title: 'Payroll Outsourcing',
          desc: 'Efficient and confidential management of payment and personnel administration.',
          details: 'Delegate the administrative burden of payroll to experts. We ensure 100% compliance with Venezuelan labor laws.',
          features: [
            'Payroll calculation',
            'Calculation of profit-sharing, vacations, and social benefits settlements',
            'Legal compliance',
            'Digital receipts',
            'Confidentiality'
          ]
        },
        s6: {
          title: 'Legal Compliance',
          desc: 'Advisory and compliance regarding Venezuelan labor laws.',
          details: 'Expert guidance to ensure your company complies with all para-fiscal and labor regulations, avoiding penalties.',
          features: ['LOTTT Advisory', 'Labor Audits', 'Social Security filings (IVSS, FAOV, INCES, RNET)', 'Safety & Health advisory (LOPCYMAT).', 'Guidance and/or representation before public entities.']
        }
      }
    },
    blog: {
      badge: 'News',
      title: 'News & Trends',
      showing: 'Showing',
      of: 'of',
      articles: 'articles',
      readMore: 'Read more',
      quickRead: 'Quick read',
      modalClose: 'Close article',
      footerText: 'For Profiles Group, understanding these dynamics is essential to offering high-value solutions.',
    },
    contact: {
      badge: 'Contact',
      title: 'Ready to empower your team?',
      subtitle: 'Leave us a message and one of our expert consultants will contact you shortly.',
      formTitle: 'Send us a message',
      labels: {
        name: 'Name',
        lastname: 'Last Name',
        email: 'Email',
        service: 'Service of Interest',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        lastname: 'Your last name',
        email: 'name@company.com',
        service: 'Select an option',
        message: 'How can we help you?',
      },
      options: {
        selection: 'Candidate Selection',
        headhunting: 'Headhunting',
        evaluations: 'Assessments',
        payroll: 'Payroll Outsourcing',
        legal: 'Legal Obligations',
      },
      errors: {
        name: 'Name is required.',
        lastname: 'Last name is required.',
        email: 'Enter a valid email.',
        service: 'Please select a service.',
        message: 'Message must be at least 10 chars.',
      },
      consent: 'By submitting this form, I accept that Grupo E Profiles, C.A. processes my data to manage my inquiry in accordance with its Privacy Policy. I acknowledge my right to access and rectification according to Art. 28 of the CRBV.',
      submit: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMsg: 'Thank you for contacting us. We will respond shortly.',
    },
    footer: {
      rights: 'Grupo E Profiles, C.A. RIF J-40463871-7. All rights reserved.',
      legalNote: 'Use of this website implies acceptance of our Terms and Conditions and our Privacy Policy.',
      links: { privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies' },
      legal: {
        privacyTitle: 'Privacy Policy',
        privacyContent: `**PRIVACY POLICY AND PERSONAL DATA PROTECTION**\n\n**GRUPO E PROFILES, C.A.**\n\n*Effective Date: December 15, 2025*\n\nAt **Grupo E Profiles, C.A.**, we are committed to protecting our users' privacy. This Privacy Policy describes how we collect, use, and protect your personal information in accordance with the legal system of the Bolivarian Republic of Venezuela.\n\n### 1. IDENTITY OF THE DATA CONTROLLER\nThe person responsible for processing data collected through the Profilesge.com portal is:\n• **Company Name:** Grupo E Profiles, C.A.\n• **RIF:** J-40463871-7\n• **Address:** Av. Francisco de Miranda, Torre Profesional, Caracas, Venezuela.\n• **Contact Email:** privacidad@profilesge.com\n\n### 2. LEGAL BASIS FOR PROCESSING\nIn the absence of a specific organic law on the subject, this document is based on the data protection principles recognized in Venezuela:\n• **Constitution of the Republic (CRBV):** Articles 28 (Habeas Data) and 60 (Protection of privacy and confidentiality).\n• **Law on Data Messages and Electronic Signatures:** Which grants legal validity to electronic data and requires respect for privacy.\n• **Special Law against Information Crimes:** Which sanctions the undue use of third-party information.\n\n### 3. COLLECTED DATA AND PURPOSE\nWe collect information under the following categories and purposes:\n• **Inquiry Management:** Name and email to respond to requests sent by the user.\n• **Informational Communications:** Sending newsletters with prior express consent.\n• **Technical and Navigation Data:** IP address, cookies, and analytical data to improve the security and user experience of our platform.\n• **Commercial Management:** Data necessary for the execution of service contracts or billing.\n\n### 4. RECIPIENTS OF THE DATA\nYour personal data will not be sold, rented, or transferred to third parties. It may only be communicated to:\n1. **Data Processors:** Technology providers necessary for the functioning of the web (Hosting, Google Analytics, Email Marketing services).\n2. **Competent Authorities:** Only when there is a judicial order or legal requirement in accordance with Venezuelan laws.\n\n### 5. RETENTION PERIOD\nData will be kept for as long as the commercial or informational relationship lasts. The user can request the deletion of their data at any time, unless there is a legal obligation to keep it (for example, for accounting or tax reasons before SENIAT).\n\n### 6. RIGHTS OF THE HOLDER (HABEAS DATA)\nAccording to Article 28 of the Constitution, you have the right to know, update, rectify, and delete the information about you in our databases.\nTo exercise these rights, you must send a request to the email privacidad@profilesge.com attaching a copy of your ID Card to verify your identity as the holder.\n\n### 7. SECURITY\nWe implement electronic security standards to protect your information against unauthorized access or misuse. However, the user acknowledges that security measures on the internet are not impregnable.\n\n### 8. UPDATES\nWe reserve the right to modify this Policy to adapt it to future legal reforms or changes in our business model. Modifications will be published in this same link.`,
        termsTitle: 'Terms and Conditions',
        termsContent: `**TERMS AND CONDITIONS OF USE**\n\n**PROFILESGE.COM / GRUPO E PROFILES, C.A.**\n\n*Last updated: December 15, 2025*\n\nThis document establishes the legal conditions that regulate the access and use of the website www.profilesge.com (hereinafter, "the Website"), owned by **Grupo E Profiles, C.A.** (hereinafter, "the Company"), a commercial company domiciled in Caracas, Venezuela, and registered under **RIF: J-40463871-7**.\n\n### 1. ACCEPTANCE OF TERMS\nBy accessing, browsing, or using the Website, the User declares to have read, understood, and accepted these Terms and Conditions. The use of the portal attributes the condition of User and implies full acceptance of all provisions included in this text and in our Privacy Policy.\n\n### 2. OBJECT OF THE PLATFORM\nThe Website functions as an information and management portal for:\n• The dissemination of Human Resources consulting services.\n• The publication of news summaries and articles of professional interest.\n• Talent acquisition and corporate contact.\n\n### 3. PROFESSIONAL DISCLAIMER (HR AND BLOG)\nTo protect the integrity of the Company, the User accepts that:\n• **Information Purposes:** Blog contents and news are for informational purposes. They do not constitute legal, labor, or accounting advice. The Company is not responsible for decisions made by the User based on this information without prior direct professional consultation.\n• **Labor Intermediation:** The reception of resumes or profiles through the site does not guarantee employment nor establish a relationship of subordination with the Company. The final selection of candidates is the exclusive responsibility of the hiring companies.\n• **Data Veracity:** The Company is not responsible for the veracity of information provided by candidates or third-party companies in their profiles or vacancies.\n\n### 4. USER OBLIGATIONS\nThe User agrees to:\n• Not use the Website for illegal or fraudulent purposes.\n• Not introduce viruses or malicious software, under the sanctions provided for in the Special Law against Information Crimes.\n• Provide true information in contact forms and profile uploads.\n\n### 5. INTELLECTUAL PROPERTY\nAll content (texts, blog articles, logos, graphics, and software) is protected by Copyright Law. Total or partial reproduction of the content of Profilesge.com is strictly prohibited without prior written authorization from the Company.\n\n### 6. EXCLUSIÓN DE GARANTÍAS\nGrupo E Profiles, C.A. does not guarantee the uninterrupted availability of the Website due to technical, electrical, or connectivity failures beyond its control. Likewise, it reserves the right to modify or suspend any service or section of the portal without prior notice.\n\n### 7. ENLACES A TERCEROS\nThe Website may contain links to external portals. The Company assumes no responsibility for the content, privacy policies, or practices of third-party websites.\n\n### 8. MODIFICACIONES\nThe Company reserves the right to update these Terms and Conditions to adapt them to legislative updates in Venezuela or changes in its business policies.\n\n### 9. APPLICABLE LAW AND JURISDICTION\nAny controversy derived from the use of the Website will be governed by the laws of the Bolivarian Republic of Venezuela. The parties submit to the jurisdiction of the courts of the Judicial District of the Metropolitan Area of Caracas, waiving any other jurisdiction.`,
        cookiesTitle: 'Cookie Policy',
        cookiesContent: `**COOKIE POLICY**\n\n**PROFILESGE.COM / GRUPO E PROFILES, C.A.**\n\n*Last updated: February 4, 2026*\n\nAt **Grupo E Profiles, C.A.** (hereinafter, "the Company"), we use cookies and similar technologies to improve your browsing experience, analyze traffic, and personalize content. This policy explains what these technologies are and how you can control them in accordance with the transparency principles of the Venezuelan legal system.\n\n### 1. WHAT ARE COOKIES?\nA "cookie" is a small data file that is stored on your browser (computer or mobile device) when visiting our website. They allow the portal to remember information about your visit, such as your preferred language or credentials, which facilitates your next visit and makes the site more useful.\n\n### 2. TYPES OF COOKIES WE USE\nOn Profilesge.com we classify cookies into three categories based on their purpose:\n\n**A. Technical or Essential Cookies (Mandatory)**\nThese are indispensable for the website to function correctly. They allow navigation, the use of secure areas, and session management.\n• **Legal Basis:** Technical necessity for service provision.\n• **Examples:** session_id (session maintenance), cookie_consent (stores your privacy choice).\n\n**B. Analysis or Performance Cookies (Statistics)**\nThey allow us to understand how visitors interact with the site (which pages they visit most, stay time, load errors). This information is anonymous and used only for improvement purposes.\n• **Legal Basis:** Legitimate interest in service optimization.\n• **Tool:** Google Analytics (_ga, _gid).\n\n**C. Marketing and Advertising Cookies (If applicable)**\nThese are used to track visitors across websites with the intention of displaying ads that are relevant and engaging for the individual user.\n• **Legal Basis:** Prior user consent.\n• **Tool:** Meta Pixel (Facebook), Google Ads.\n\n### 3. CONTROL AND DEACTIVATION OF COOKIES\nYou have the right to decide whether to accept or reject non-essential cookies (Analytics and Marketing).\n\n**A. Through our Privacy Banner:**\nUpon entering the web, you will see a notice that allows you to "Accept all", "Reject all", or "Configure".\n\n**B. Through your browser:**\nYou can restrict, block, or delete cookies by configuring your browser preferences:\n• Google Chrome\n• Mozilla Firefox\n• Apple Safari\n• Microsoft Edge\n\n*Note: Deactivating technical cookies may prevent the use of certain site features.*\n\n### 4. PRIVACY AND SECURITY\nThe treatment of information captured by cookies is governed by our Privacy Policy. In compliance with the Special Law against Computer Crimes, Grupo E Profiles, C.A. guarantees that it does not use cookies to access private information from your device that has not been previously authorized.\n\n### 5. UPDATES\nThis policy may be modified to adapt to new technical requirements or legislative changes in the Bolivarian Republic of Venezuela. Updates will take effect immediately upon publication.\n\n### 6. CONTACT\nFor any questions about the use of cookies, you can write to us at: privacidad@profilesge.com.`
      }
    },
    chatbot: {
      title: 'Virtual Assistant',
      initialMessage: 'Hello! I am the Profiles Group virtual assistant. How can I help you today with your HR needs?',
      placeholder: 'Type your query...',
      error: 'Sorry, there was an error.',
      help: {
        title: "How does this chat work?",
        description: "You can ask direct questions about our services, request contact information, or learn about our values.",
        topics: "Suggested topics: Recruitment, Headhunting, Payroll, Psychometric Assessments.",
        note: "I am an IA trained to help, but for exact quotes, we will always connect you with our human team."
      }
    }
  }
};