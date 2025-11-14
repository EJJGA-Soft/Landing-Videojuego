export interface RoadmapItem {
  id: number;
  phase: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  date: string;
  features: string[];
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: 1,
    phase: "Fase 1",
    title: "Lanzamiento Alpha",
    description: "Versión inicial con mecánicas core y primer nivel completo",
    status: "completed",
    date: "Q4 2024",
    features: [
      "Sistema de combate básico",
      "Nivel 1: Catacumbas completas",
      "4 tipos de enemigos",
      "Boss: Drácula",
      "Sistema de drops aleatorios"
    ]
  },
  {
    id: 2,
    phase: "Fase 2",
    title: "Expansión de Contenido",
    description: "Adición de todos los niveles y jefe opcional",
    status: "completed",
    date: "Q1 2025",
    features: [
      "Nivel 2: Sala del Trono",
      "Nivel 3: Salida del Castillo",
      "Boss opcional: Brauner",
      "Sistema de 2 finales",
      "Mejoras de balanceo"
    ]
  },
  {
    id: 3,
    phase: "Fase 3",
    title: "App Móvil Companion",
    description: "Lanzamiento de la aplicación móvil para tracking de stats",
    status: "in-progress",
    date: "Q2 2025",
    features: [
      "Sincronización de estadísticas",
      "Historial de partidas",
      "Sistema de logros",
      "Ranking global",
      "Perfil personalizado"
    ]
  },
  {
    id: 4,
    phase: "Fase 4",
    title: "Actualización de Contenido",
    description: "Nuevos enemigos, armas y mecánicas",
    status: "planned",
    date: "Q3 2025",
    features: [
      "3 nuevos tipos de enemigos",
      "15+ armas nuevas",
      "Sistema de habilidades especiales",
      "Modo New Game+",
      "Desafíos diarios"
    ]
  },
  {
    id: 5,
    phase: "Fase 5",
    title: "Expansión Multiplayer",
    description: "Modo cooperativo y competitivo online",
    status: "planned",
    date: "Q4 2025",
    features: [
      "Co-op para 2 jugadores",
      "Modo Arena PvP",
      "Leaderboards en tiempo real",
      "Eventos temporales",
      "Sistema de clanes"
    ]
  }
];
