import { SectionId, ValueItem, BlogPost, Language } from './types';

export const COMPANY_INFO = {
  name: "Profiles Group",
  history: "Con más de 15 años de excelente trabajo, brindando diversos servicios de Gestión Humana tanto en lo funcional como operativo a variados clientes que han utilizado nuestros servicios en Venezuela.",
  purpose: "Conectar el mejor talento con las mejores oportunidades, impulsando el crecimiento de las empresas y el desarrollo profesional de las personas.",
  vision: "Ser la empresa líder en la gestión del talento humano, reconocida por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.",
};

export const COMPANY_VALUES: ValueItem[] = [
  { 
    title: "Conciencia organizacional",
    description: "Entendemos profundamente la cultura y necesidades de cada cliente para ofrecer soluciones alineadas."
  },
  { 
    title: "Trabajo en equipo",
    description: "Fomentamos la colaboración y la sinergia para alcanzar resultados extraordinarios juntos."
  },
  { 
    title: "Compromiso y calidad",
    description: "Nos dedicamos a entregar excelencia y rigor en cada proceso de selección y consultoría."
  },
  { 
    title: "Ética y sencillez",
    description: "Actuamos con transparencia, honestidad y claridad en todas nuestras relaciones profesionales."
  },
  { 
    title: "Flexibilidad y adaptación",
    description: "Nos ajustamos ágilmente a los cambios del mercado y a los requerimientos específicos."
  },
  { 
    title: "Innovación y creatividad",
    description: "Buscamos constantemente nuevas formas de aportar valor y mejorar nuestros procesos."
  },
  { 
    title: "Integridad",
    description: "Mantenemos la coherencia entre lo que decimos y lo que hacemos, generando confianza absoluta."
  },
];

export const NAV_LINKS = [
  { label: 'Inicio', href: `#${SectionId.HOME}` },
  { label: 'Nosotros', href: `#${SectionId.ABOUT}` },
  { label: 'Servicios', href: `#${SectionId.SERVICES}` },
  { label: 'Noticias', href: `#${SectionId.BLOG}` },
  { label: 'Contacto', href: `#${SectionId.CONTACT}` },
];

export const BLOG_POSTS: Record<Language, BlogPost[]> = {
  es: [
    {
      title: "Liderazgo Empático: La Tendencia de 2026",
      date: "03 Feb 2026",
      excerpt: "Por qué la inteligencia emocional superará a las habilidades técnicas en la alta gerencia este año.",
      content: "En el panorama empresarial de 2026, el liderazgo ya no se define por la autoridad jerárquica, sino por la capacidad de conectar genuinamente con los equipos. Las empresas líderes en Venezuela están priorizando perfiles gerenciales que demuestren una alta inteligencia emocional.\n\nEste cambio responde a una fuerza laboral que valora la seguridad psicológica y el reconocimiento tanto como el salario. Los líderes empáticos no solo retienen mejor el talento, sino que logran niveles de innovación superiores al fomentar entornos donde el error es visto como aprendizaje. En Profiles Group, hemos observado un incremento del 40% en solicitudes de evaluación de competencias centradas en la empatía y la resolución de conflictos.",
      category: "Liderazgo"
    },
    {
      title: "IA Generativa en RRHH: Aliada, no sustituta",
      date: "28 Ene 2026",
      excerpt: "Cómo automatizar tareas operativas para centrarse en lo que realmente importa: la gente.",
      content: "La adopción de IA generativa en los departamentos de Gestión Humana ha pasado de ser una novedad a una necesidad operativa. Desde la redacción automática de perfiles de cargo hasta el análisis preliminar de CVs, la tecnología está liberando a los consultores de horas de trabajo administrativo.\n\nSin embargo, el factor humano sigue siendo el diferenciador crítico. La IA puede filtrar datos, pero no puede percibir la chispa de pasión en una entrevista ni evaluar si un candidato encaja con los valores no escritos de una organización. El futuro pertenece a los profesionales de RRHH que aprendan a usar estas herramientas para potenciar su intuición, no para reemplazarla.",
      category: "Tecnología"
    },
    {
      title: "Salario Emocional en Tiempos de Cambio",
      date: "15 Ene 2026",
      excerpt: "Estrategias de compensación no monetaria que están funcionando hoy en las empresas venezolanas.",
      content: "Más allá del ajuste salarial, las empresas en Venezuela están compitiendo por talento a través del salario emocional. Beneficios como horarios flexibles, días de 'desconexión mental' y programas de formación continua se han vuelto determinantes.\n\nNuestra última encuesta revela que el 65% de los profesionales jóvenes considerarían cambiar de empleo por una oferta que garantice un mejor equilibrio vida-trabajo, incluso si el salario base es similar. El desafío para las organizaciones es diseñar paquetes de beneficios que sean personalizados y realmente impacten en la calidad de vida del colaborador.",
      category: "Compensación"
    },
    {
      title: "El Resurgir del Upskilling Interno",
      date: "20 Dic 2025",
      excerpt: "Invertir en tu propia gente es más rentable que buscar talento externo en mercados escasos.",
      content: "Ante la escasez de perfiles técnicos específicos, el 'Upskilling' o capacitación interna se posiciona como la estrategia más inteligente. En lugar de competir por el mismo puñado de candidatos externos, las empresas están creando sus propias academias de talento.\n\nInvertir en la evolución de los empleados actuales no solo cubre brechas de habilidades, sino que dispara la lealtad y el compromiso organizacional. Un plan de carrera claro es hoy una de las herramientas de retención más potentes con las que cuenta una empresa.",
      category: "Desarrollo"
    },
    {
      title: "Diversidad e Inclusión como Estrategia",
      date: "05 Dic 2025",
      excerpt: "Por qué los equipos diversos son un 25% más rentables según las métricas más recientes.",
      content: "La diversidad ya no es una cuestión de cumplimiento ético, es una ventaja competitiva medible. Equipos con diversas perspectivas, edades y backgrounds resuelven problemas complejos con mayor agilidad.\n\nPara que la inclusión sea real, debe penetrar la cultura de la empresa. No basta con contratar; hay que asegurar que todos tengan voz en la mesa de decisiones. Las empresas que logran esto reportan no solo mejores resultados financieros, sino una marca empleadora mucho más robusta.",
      category: "Cultura"
    },
    {
      title: "Gestión de Equipos Híbridos en 2025",
      date: "18 Nov 2025",
      excerpt: "Nuevas herramientas y metodologías para mantener la cohesión a pesar de la distancia.",
      content: "El trabajo híbrido ha evolucionado hacia un modelo de 'presencialidad con propósito'. Las oficinas se están convirtiendo en centros de colaboración e integración, mientras que el trabajo profundo se realiza de forma remota.\n\nEl reto principal es la comunicación asíncrona. Las empresas exitosas están documentando procesos de forma rigurosa y utilizando plataformas de gestión de proyectos que evitan el exceso de reuniones. La confianza es la nueva moneda de cambio en este entorno distribuido.",
      category: "Gestión"
    },
    {
      title: "Employer Branding: Atrae sin Vender",
      date: "02 Nov 2025",
      excerpt: "Cómo convertir a tus empleados en los mejores embajadores de tu marca.",
      content: "El Employer Branding efectivo no nace de una campaña publicitaria, sino de la experiencia real del empleado. Cuando tu gente habla bien de su lugar de trabajo en redes sociales de forma espontánea, el reclutamiento se vuelve mucho más sencillo.\n\nEn Profiles Group asesoramos a las empresas para auditar sus puntos de contacto con el talento. Desde la primera entrevista hasta el proceso de salida, cada interacción cuenta una historia sobre quiénes son como empleadores. Ser auténtico es la única estrategia sostenible.",
      category: "Marca"
    },
    {
      title: "Prevención del Burnout Ejecutivo",
      date: "15 Oct 2025",
      excerpt: "Identificando las señales de alerta antes de que impacten en la productividad y salud del equipo.",
      content: "El agotamiento laboral o burnout está alcanzando niveles preocupantes en los mandos medios y altos. El estrés crónico no solo afecta la salud del individuo, sino que nubla la toma de decisiones estratégicas.\n\nImplementar protocolos de bienestar, fomentar el derecho a la desconexión y formar a los gerentes en la detección temprana son pasos críticos. Una cultura que premia el sobre-esfuerzo constante está destinada a perder a sus mejores talentos en el largo plazo.",
      category: "Bienestar"
    },
    {
      title: "Nuevas Normativas Laborales en Venezuela",
      date: "01 Oct 2025",
      excerpt: "Resumen de los cambios legales y para-fiscales para iniciar el año con buen pie.",
      content: "El cumplimiento legal en Venezuela requiere una vigilancia constante. Este periodo trae consigo actualizaciones en bases de cálculo para-fiscales y nuevos criterios de inspección por parte de los entes reguladores.\n\nEstar al día con el IVSS, FAOV e INCES, así como mantener los expedientes de personal auditados según la LOTTT, es vital para evitar sanciones. Nuestro equipo legal recomienda realizar una revisión preventiva trimestral para asegurar que todos los procesos administrativos estén alineados con la normativa vigente.",
      category: "Legal"
    }
  ],
  en: [
    {
      title: "Empathetic Leadership: 2026's Top Trend",
      date: "03 Feb 2026",
      excerpt: "Why emotional intelligence is outperforming technical skills in executive roles this year.",
      content: "In the 2026 business landscape, leadership is no longer defined by hierarchical authority but by the ability to genuinely connect with teams. Leading companies are prioritizing executive profiles that demonstrate high emotional intelligence (EQ).\n\nThis shift responds to a workforce that values psychological safety and recognition as much as salary. Empathetic leaders not only retain talent better but also achieve higher levels of innovation by fostering environments where mistakes are seen as learning opportunities. At Profiles Group, we've seen a 40% increase in requests for competency assessments focused on empathy and conflict resolution.",
      category: "Leadership"
    },
    {
      title: "Generative AI in HR: Ally, Not Substitute",
      date: "28 Jan 2026",
      excerpt: "How to automate operational tasks and focus on what truly matters: people.",
      content: "The adoption of generative AI in Human Resource departments has moved from a novelty to an operational necessity. From automatic job description drafting to preliminary resume analysis, technology is freeing consultants from hours of administrative work.\n\nHowever, the human factor remains the critical differentiator. AI can filter data, but it cannot perceive the spark of passion in an interview nor assess whether a candidate fits an organization's unwritten values. The future belongs to HR professionals who learn to use these tools to enhance their intuition, not replace it.",
      category: "Technology"
    },
    {
      title: "Emotional Salary in Changing Times",
      date: "15 Jan 2026",
      excerpt: "Non-monetary compensation strategies that are working for companies today.",
      content: "Beyond salary adjustments, companies are competing for talent through 'emotional salary.' Benefits such as flexible schedules, 'mental disconnect' days, and continuous training programs have become decisive.\n\nOur latest survey reveals that 65% of young professionals would consider changing jobs for an offer that guarantees a better work-life balance, even if the base salary is similar. The challenge for organizations is to design benefit packages that are personalized and truly impact the collaborator's quality of life.",
      category: "Compensation"
    },
    {
      title: "The Resurgence of Internal Upskilling",
      date: "20 Dec 2025",
      excerpt: "Investing in your own people is more cost-effective than searching for external talent.",
      content: "Faced with a shortage of specific technical profiles, 'Upskilling' or internal training is positioning itself as the smartest strategy. Instead of competing for the same handful of external candidates, companies are creating their own talent academies.\n\nInvesting in the evolution of current employees not only fills skill gaps but also sky-rockets organizational loyalty and commitment. A clear career path is one of the most powerful retention tools a company has today.",
      category: "Development"
    },
    {
      title: "Diversity and Inclusion as a Strategy",
      date: "05 Dec 2025",
      excerpt: "Why diverse teams are 25% more profitable according to recent metrics.",
      content: "Diversity is no longer just a matter of ethical compliance; it is a measurable competitive advantage. Teams with diverse perspectives, ages, and backgrounds solve complex problems with greater agility.\n\nFor inclusion to be real, it must penetrate the company culture. It's not enough to hire; you must ensure everyone has a voice at the decision-making table. Companies that achieve this report not only better financial results but also a much more robust employer brand.",
      category: "Culture"
    },
    {
      title: "Managing Hybrid Teams in 2025",
      date: "18 Nov 2025",
      excerpt: "New tools and methodologies to maintain cohesion despite the distance.",
      content: "Hybrid work has evolved into a model of 'purposeful presence.' Offices are becoming centers for collaboration and integration, while deep work is performed remotely.\n\nThe main challenge is asynchronous communication. Successful companies are rigorously documenting processes and using project management platforms that avoid meeting overload. Trust is the new currency in this distributed environment.",
      category: "Management"
    },
    {
      title: "Employer Branding: Attract without Selling",
      date: "02 Nov 2025",
      excerpt: "How to turn your employees into your brand's best ambassadors.",
      content: "Effective Employer Branding isn't born from an advertising campaign but from the real employee experience. When your people spontaneously speak well of their workplace on social media, recruitment becomes much easier.\n\nAt Profiles Group, we advise companies to audit their talent touchpoints. From the first interview to the exit process, every interaction tells a story about who they are as employers. Being authentic is the only sustainable strategy.",
      category: "Branding"
    },
    {
      title: "Preventing Executive Burnout",
      date: "15 Oct 2025",
      excerpt: "Identifying red flags before they impact team productivity and health.",
      content: "Workplace exhaustion or burnout is reaching concerning levels in middle and upper management. Chronic stress not only affects an individual's health but also clouds strategic decision-making.\n\nImplementing wellness protocols, encouraging the right to disconnect, and training managers in early detection are critical steps. A culture that rewards constant over-effort is destined to lose its best talents in the long run.",
      category: "Wellness"
    },
    {
      title: "Labor Regulations Update in Venezuela",
      date: "01 Oct 2025",
      excerpt: "A summary of legal and payroll changes to start the year on the right foot.",
      content: "Legal compliance in Venezuela requires constant vigilance. This period brings updates in para-fiscal calculation bases and new inspection criteria by regulatory bodies.\n\nStaying up to date with IVSS, FAOV, and INCES, as well as keeping personnel files audited according to the LOTTT, is vital to avoid sanctions. Our legal team recommends performing a quarterly preventive review to ensure all administrative processes are aligned with current regulations.",
      category: "Legal"
    }
  ]
};