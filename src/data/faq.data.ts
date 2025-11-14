export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "gameplay" | "technical" | "app" | "general";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "¿En qué plataformas está disponible el juego?",
    answer: "Actualmente Vampyr está disponible para PC (Windows, Mac, Linux) a través de Steam e Itch.io. Estamos trabajando en versiones para consolas.",
    category: "general"
  },
  {
    id: 2,
    question: "¿El juego tiene guardado automático?",
    answer: "No. Como parte de la experiencia RogueLike, no hay puntos de guardado. Cada run comienza desde cero, pero tu progreso general y desbloqueos se guardan.",
    category: "gameplay"
  },
  {
    id: 3,
    question: "¿Cuánto dura una partida completa?",
    answer: "Una run completa puede durar entre 30 minutos y 2 horas dependiendo de tu habilidad y el camino que elijas. La rejugabilidad es infinita gracias al sistema de drops aleatorios.",
    category: "gameplay"
  },
  {
    id: 4,
    question: "¿Necesito la app móvil para jugar?",
    answer: "No, la app es completamente opcional. Es un complemento que te permite revisar tus estadísticas, logros y competir en rankings globales, pero el juego funciona independientemente.",
    category: "app"
  },
  {
    id: 5,
    question: "¿Cómo funciona la sincronización con la app?",
    answer: "El juego se conecta automáticamente a tu cuenta cuando juegas. Después de cada partida, tus stats se sincronizan en la nube y puedes verlas en la app móvil en tiempo real.",
    category: "app"
  },
  {
    id: 6,
    question: "¿Qué son los dos finales diferentes?",
    answer: "Al llegar al final del juego, puedes elegir entre enfrentar a Drácula (final principal) o desviarte para enfrentar a Brauner y escapar del castillo (final alternativo). Cada uno tiene su propia cinemática.",
    category: "gameplay"
  },
  {
    id: 7,
    question: "¿El juego tiene modo multijugador?",
    answer: "Actualmente no, pero está planeado para futuras actualizaciones. Puedes competir de forma asíncrona a través de los rankings globales en la app.",
    category: "general"
  },
  {
    id: 8,
    question: "¿Cuáles son los requisitos mínimos del sistema?",
    answer: "OS: Windows 10 64-bit | Procesador: Intel Core i3 | RAM: 4 GB | Gráficos: Integrados | Almacenamiento: 500 MB. El juego está optimizado para correr en la mayoría de PCs.",
    category: "technical"
  },
  {
    id: 9,
    question: "¿Habrá actualizaciones de contenido gratuitas?",
    answer: "Sí, todas las actualizaciones de contenido planeadas en nuestro roadmap serán completamente gratuitas para todos los jugadores que posean el juego.",
    category: "general"
  },
  {
    id: 10,
    question: "¿El juego soporta controles?",
    answer: "Sí, el juego es compatible con controles de Xbox, PlayStation y genéricos. También se puede jugar perfectamente con teclado.",
    category: "technical"
  }
];

export const FAQ_CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "gameplay", label: "Gameplay" },
  { id: "technical", label: "Técnicas" },
  { id: "app", label: "App Móvil" },
  { id: "general", label: "General" }
];
