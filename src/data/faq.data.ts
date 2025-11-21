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
    answer: "Vampyr: Rise Of The Night Walkers está disponible para PC (Windows). El juego está optimizado para correr en la mayoría de computadoras.",
    category: "general"
  },
  {
    id: 2,
    question: "¿El juego tiene guardado automático?",
    answer: "No. Como parte de la experiencia RogueLike pura, no hay puntos de guardado ni checkpoints. Cada run comienza desde cero en las profundidades de las catacumbas. La muerte es permanente.",
    category: "gameplay"
  },
  {
    id: 3,
    question: "¿Quién es Vampyr y por qué está en el castillo?",
    answer: "Vampyr es Adrián, un joven que soñaba con ser caballero. Tras la masacre de su aldea por Brauner, un Caballero de Sangre, se convirtió en vampiro para obtener el poder necesario para vengarse. Ahora está atrapado en la celda más fría del castillo de Drácula.",
    category: "general"
  },
  {
    id: 4,
    question: "¿Cómo funciona el sistema de combate?",
    answer: "El combate es cuerpo a cuerpo con drops aleatorios de armas. Los enemigos comunes (Esqueletos, Zombis, Murciélagos, Slimes) dropean armas con diferentes estadísticas y aspectos que debes recolectar para progresar. Controles: WASD (movimiento), Espacio (saltar), J (ataque).",
    category: "gameplay"
  },
  {
    id: 5,
    question: "¿Cómo funciona el sistema de curación?",
    answer: "Comienzas cada partida con una única Poción de Curación (tecla L o I). Este recurso NO es recargable ni comerciable, lo que exige una gestión extrema de tu salud durante toda la run.",
    category: "gameplay"
  },
  {
    id: 6,
    question: "¿Qué son los dos finales diferentes?",
    answer: "Al explorar las catacumbas encontrarás dos caminos: uno lleva a la Sala del Trono para enfrentar a Drácula (final principal), el otro lleva a la Salida del Castillo para enfrentar a Brauner y escapar (final alternativo).",
    category: "gameplay"
  },
  {
    id: 7,
    question: "¿Hay sistema de experiencia o economía?",
    answer: "No. NO HAY sistema de XP ni economía. Tu progresión depende enteramente de las armas aleatorias que dropeen los enemigos. Es un RogueLike puro centrado en la habilidad y la suerte.",
    category: "gameplay"
  },
  {
    id: 8,
    question: "¿Cuáles son los requisitos mínimos del sistema?",
    answer: "OS: Windows 10 64-bit | Procesador: Intel Core i3 | RAM: 4 GB | Gráficos: Integrados | Almacenamiento: 500 MB. El juego está optimizado para hardware modesto.",
    category: "technical"
  },
  {
    id: 9,
    question: "¿Quién es El Mentor que entrenó a Vampyr?",
    answer: "El Mentor es un personaje misterioso que rescató y entrenó a Adrián como cazador de monstruos. Su identidad verdadera se revela en el lore profundo del juego y es clave para entender la historia.",
    category: "general"
  },
  {
    id: 10,
    question: "¿Necesito la app móvil para jugar?",
    answer: "No, la app es completamente opcional. Es un complemento que te permite revisar tus estadísticas, historial de partidas, logros y competir en rankings globales, pero el juego funciona de forma independiente.",
    category: "app"
  },
  {
    id: 11,
    question: "¿Cómo son los jefes finales?",
    answer: "Drácula (Sala del Trono) ataca con espada y bolas de fuego. Brauner (Salida del Castillo) es un Caballero de Sangre de elite con ataques erráticos de hacha, mayor vida, resistencia y daño. Ambos requieren estrategia y las armas correctas.",
    category: "gameplay"
  },
  {
    id: 12,
    question: "¿Qué es el sistema Metroidvania del juego?",
    answer: "Las Catacumbas/Ruinas son un mapa explorable estilo Metroidvania de pequeña escala donde habitan todos los enemigos comunes. El ascenso o descenso por las secciones se desbloquea tras enfrentar jefes.",
    category: "gameplay"
  }
];

export const FAQ_CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "gameplay", label: "Gameplay" },
  { id: "technical", label: "Técnicas" },
  { id: "app", label: "App Móvil" },
  { id: "general", label: "General" }
];
