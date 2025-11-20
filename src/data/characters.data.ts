import vampyrImg from "../assets/personajes/MAINPLAYER.png";
import draculaImg from "../assets/personajes/DRACULA.png";
import braunerImg from "../assets/personajes/BLOODKNIGHT.png";
import mentorImg from "../assets/personajes/MENTOR.png";
import skeletonImg from "../assets/personajes/SKELETON.png";
import zombieImg from "../assets/personajes/ZOMBIE.png";
import slimeImg from "../assets/personajes/SLIME.png";
import batImg from "../assets/personajes/BAT.png";

export interface Character {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  type: "hero" | "villain" | "ally" | "enemy";
  stats?: {
    health?: string;
    damage?: string;
    special?: string;
  };
}

export const MAIN_CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Vampyr (Adrián)",
    role: "Protagonista / Clan: Cazador de Monstruos",
    description: "Un joven que soñaba con ser caballero. Tras la masacre de su aldea por Brauner, se convirtió en vampiro para obtener el poder necesario y vengar a su familia.",
    image: vampyrImg,
    type: "hero",
    stats: {
      health: "100 HP base",
      damage: "Variable según arma",
      special: "Regeneración vampírica"
    }
  },
  {
    id: 2,
    name: "Drácula",
    role: "Antagonista Principal / Jefe Final",
    description: "El ser oscuro que tiraniza el continente. Comanda las fuerzas de la noche desde la Sala del Trono. Ataca con espada y bolas de fuego.",
    image: draculaImg,
    type: "villain",
    stats: {
      health: "500 HP",
      damage: "Alto",
      special: "Bolas de fuego + Espada"
    }
  },
  {
    id: 3,
    name: "Brauner - Caballero de Sangre",
    role: "Jefe Opcional / Elite de Drácula",
    description: "Responsable directo de la masacre de la familia de Vampyr. Un guerrero letal con hacha que posee mayor vida, resistencia y daño.",
    image: braunerImg,
    type: "villain",
    stats: {
      health: "400 HP",
      damage: "Muy Alto",
      special: "Ataque de hacha devastador"
    }
  },
  {
    id: 4,
    name: "El Mentor",
    role: "Aliado / Maestro",
    description: "El misterioso hombre que rescató y entrenó a Adrián como cazador de monstruos. Guarda un oscuro secreto sobre su verdadera identidad.",
    image: mentorImg,
    type: "ally"
  }
];

export const ENEMIES: Character[] = [
  {
    id: 5,
    name: "Esqueleto",
    role: "Enemigo Común / Catacumbas",
    description: "Caballero revivido que ataca con una espada oxidada. Dropea armas aleatorias al ser derrotado.",
    image: skeletonImg,
    type: "enemy",
    stats: {
      health: "30 HP",
      damage: "15",
      special: "Drop: Armas aleatorias"
    }
  },
  {
    id: 6,
    name: "Zombie",
    role: "Enemigo Común / Catacumbas",
    description: "Muerto viviente de bajo nivel que ataca con una espada ensangrentada. Dropea armas aleatorias.",
    image: zombieImg,
    type: "enemy",
    stats: {
      health: "25 HP",
      damage: "12",
      special: "Drop: Armas aleatorias"
    }
  },
  {
    id: 7,
    name: "Slime",
    role: "Enemigo Común / Alcantarillas",
    description: "Dañino al contacto. No posee un ataque directo consciente. Dropea armas aleatorias.",
    image: slimeImg,
    type: "enemy",
    stats: {
      health: "20 HP",
      damage: "10 (contacto)",
      special: "Drop: Armas aleatorias"
    }
  },
  {
    id: 8,
    name: "Murciélago",
    role: "Enemigo Común / Profundidades",
    description: "Vuela erráticamente por el castillo y ataca cuando se siente amenazado. Dropea armas aleatorias.",
    image: batImg,
    type: "enemy",
    stats: {
      health: "15 HP",
      damage: "8",
      special: "Vuelo errático"
    }
  }
];

export const ALL_CHARACTERS = [...MAIN_CHARACTERS, ...ENEMIES];
