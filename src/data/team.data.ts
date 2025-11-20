export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar?: string;
  social?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Emmanuel Rojas",
    role: "Game Director & Lead Programmer",
    description: "Arquitecto principal del sistema de combate y mecánicas RogueLike. 5+ años de experiencia en desarrollo con Unity.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "José Martínez",
    role: "Mobile Developer & Backend Engineer",
    description: "Desarrollador de la app móvil y web con sistemas backend. Especialista en sincronización en tiempo real.",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Gerardo Díaz",
    role: "Lead Artist & Animator",
    description: "Responsable del arte conceptual, sprites de personajes y animaciones. Especialista en pixel art y diseño de personajes.",
    social: {
      portfolio: "#"
    }
  },
  {
    id: 4,
    name: "Antony Salazar",
    role: "Level Designer & Game Designer",
    description: "Diseñador de niveles y balanceo de mecánicas. Creador del sistema de progresión Metroidvania del castillo.",
    social: {
      github: "#"
    }
  },
  {
    id: 5,
    name: "Joshua Romero",
    role: "Sound Designer & Composer",
    description: "Compositor de la banda sonora original y diseñador de efectos de sonido. Especialista en música atmosférica.",
    social: {
      portfolio: "#"
    }
  },
  
];
