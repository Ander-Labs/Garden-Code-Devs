export interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date: string | undefined;
  process: boolean;
}

export const RoadmapItems: RoadmapItem[] = [
  {
    id: 1,
    title: "🚀 Fase 1: Lanzamiento Inicial",
    description:
      "En esta primera etapa, nos enfocamos en lanzar la base de Garden Code, ofreciendo a los desarrolladores recursos esenciales como contenido educativo y herramientas clave para mejorar su flujo de trabajo. También integramos una función de búsqueda optimizada para facilitar la navegación en la plataforma.",
    completed: true,
    process: false,
    date: "30-08-2024",
  },
  {
    id: 2,
    title: "🌱 Fase 1.5: Ajustes y Estabilidad",
    description:
      "Después del lanzamiento inicial, nos centramos en recoger feedback de los usuarios y hacer mejoras rápidas para asegurar la estabilidad de la plataforma. Esto incluye correcciones de bugs, optimización del rendimiento y mejoras basadas en las primeras interacciones de la comunidad.",
    completed: false,
    process: true,
    date: undefined,
  },
  {
    id: 3,
    title: "🌟Fase 2: Mejora de la Experiencia UI",
    description:
      "Con la plataforma en marcha, nos dedicaremos a mejorar la experiencia del usuario. Aumentaremos la cantidad de recursos disponibles, haremos ajustes en la interfaz para mejorar la usabilidad y brindaremos soporte en varios idiomas, haciendo que Garden Code sea accesible a más desarrolladores en todo el mundo.",
    completed: false,
    process: false,
    date: undefined,
  },
  {
    id: 4,
    title: "🌟 Fase 2.5: Colaboración Comunitaria",
    description:
      "En este punto, habilitamos mecanismos que permitan a los usuarios contribuir con sus propios recursos, herramientas o tutoriales, fomentando una mayor participación de la comunidad. Además, añadiremos nuevas funcionalidades para compartir contenido y colaborar entre desarrolladores.",
    completed: false,
    process: false,
    date: undefined,
  },
  {
    id: 5,
    title: "🔮 Fase 3: Expansión y Nuevas Funcionalidades",
    description:
      "De cara al futuro, planeamos incorporar tecnologías avanzadas como la inteligencia artificial para personalizar las recomendaciones de recursos. Además, ofreceremos acceso a eventos exclusivos y colaboraciones con líderes del sector, ampliando las oportunidades de crecimiento para nuestra comunidad.",
    completed: false,
    process: false,
    date: undefined,
  },
  {
    id: 6,
    title: "🔮 Fase 3.5: Internacionalización y Ecosistema",
    description:
      "Además de las grandes expansiones de funcionalidades, esta fase incluye la internacionalización completa de la plataforma, traduciendo recursos y adaptando la experiencia de usuario para varios mercados globales. También trabajaremos en la creación de un ecosistema en torno a Garden Code, con integraciones y soporte para nuevas tecnologías.",
    completed: false,
    process: false,
    date: undefined,
  },
];
