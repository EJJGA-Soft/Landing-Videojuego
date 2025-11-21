export interface AppFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const APP_FEATURES: AppFeature[] = [
  {
    id: 1,
    title: "Estadísticas en Tiempo Real",
    description: "Consulta tus stats de juego: muertes, kills, tiempo jugado, runs completadas y progreso general.",
    icon: "chart"
  },
  {
    id: 2,
    title: "Historial de Partidas",
    description: "Revisa todas tus runs anteriores con detalles: armas usadas, enemigos derrotados, causa de muerte y más.",
    icon: "scroll"
  },
  {
    id: 3,
    title: "Logros y Achievements",
    description: "Desbloquea logros especiales y comparte tus hazañas con la comunidad de jugadores.",
    icon: "trophy"
  },
  {
    id: 4,
    title: "Ranking Global",
    description: "Compite con jugadores de todo el mundo. ¿Serás capaz de llegar al top 10?",
    icon: "globe"
  },
  {
    id: 5,
    title: "Perfil Personalizado",
    description: "Customiza tu perfil, avatar y muestra tus mejores estadísticas y logros favoritos.",
    icon: "user"
  },
  {
    id: 6,
    title: "Notificaciones de Eventos",
    description: "Recibe alertas sobre eventos especiales, actualizaciones y desafíos temporales del juego.",
    icon: "bell"
  }
];

export const APP_SYNC_FEATURES = [
  {
    title: "Sincronización Automática",
    description: "Tu progreso se guarda automáticamente en la nube después de cada partida"
  },
  {
    title: "Multi-Plataforma",
    description: "Accede a tus stats desde cualquier dispositivo móvil con tu cuenta"
  },
  {
    title: "Backup Seguro",
    description: "Nunca pierdas tu progreso gracias a nuestro sistema de respaldo automático"
  },
  {
    title: "Análisis Avanzado",
    description: "Gráficos detallados de tu evolución como jugador a lo largo del tiempo"
  }
];

export const APP_INFO = {
  name: "Vampyr App",
  tagline: "Tu compañero definitivo para dominar el castillo",
  description: "Lleva tu experiencia de juego al siguiente nivel con estadísticas detalladas, rankings globales y más.",
  platforms: ["Android"],
  downloadLinks: {
    android: "#",
    ios: "#"
  }
};
