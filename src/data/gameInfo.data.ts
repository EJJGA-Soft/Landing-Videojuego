export interface GameMechanic {
  id: number;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

export const GAME_MECHANICS: GameMechanic[] = [
  {
    id: 1,
    title: "Sistema de Combate RogueLike",
    description: "Combate dinámico con drops aleatorios de armas y consumibles",
    features: [
      "Armas aleatorias con stats únicos",
      "Sistema de sangre como recurso de curación",
      "Combate cuerpo a cuerpo con timing estratégico",
      "Sin puntos de guardado - cada muerte reinicia la run"
    ]
  },
  {
    id: 2,
    title: "Sistema de Sangre/Curación",
    description: "Mecánica única de regeneración vampírica mediante sangre enemiga",
    features: [
      "1 poción de curación única por run",
      "Recolecta sangre de enemigos derrotados",
      "La sangre se acumula para usar estratégicamente",
      "Decisiones tácticas sobre cuándo curarte"
    ]
  },
  {
    id: 3,
    title: "Progresión RogueLike + Metroidvania",
    description: "Explora un castillo interconectado con rejugabilidad infinita",
    features: [
      "Mapa explorable tipo Metroidvania",
      "3 niveles: Catacumbas, Sala del Trono, Salida",
      "2 finales diferentes según tus decisiones",
      "Múltiples caminos y secretos por descubrir"
    ]
  }
];

export const GAME_STATS = [
  { number: "3", label: "Niveles", description: "Del calabozo hasta la sala del trono" },
  { number: "6+", label: "Enemigos", description: "Diferentes tipos de criaturas" },
  { number: "3", label: "Jefes", description: "Batallas épicas inolvidables" },
  { number: "∞", label: "Armas", description: "Sistema de drop aleatorio" },
  { number: "1", label: "Poción", description: "Única oportunidad de curación" },
  { number: "2", label: "Finales", description: "Diferentes destinos posibles" },
  { number: "100%", label: "Adrenalina", description: "Acción y tensión constantes" },
  { number: "0", label: "Saves", description: "Sin puntos de guardado" }
];

export const GAME_CONTROLS = [
  {
    key: "W/A/S/D",
    action: "Movimiento",
    description: "Controla a Vampyr por el castillo",
    keys: ["W", "A", "S", "D"]
  },
  {
    key: "SPACE",
    action: "Saltar",
    description: "Salta obstáculos y plataformas",
    keys: ["SPACE"]
  },
  {
    key: "J",
    action: "Ataque",
    description: "Ataque cuerpo a cuerpo con tu arma actual",
    keys: ["J"]
  },
  {
    key: "L / I",
    action: "Curarse",
    description: "Usa tu poción o sangre acumulada",
    keys: ["L", "I"]
  }
];

export const GAME_STORY = {
  title: "Una Historia de Venganza y Redención",
  chapters: [
    {
      title: "El Origen",
      content: "Adrián era un joven con sueños de convertirse en caballero. Su vida cambió para siempre cuando Brauner, el Caballero de Sangre al servicio de Drácula, masacró a su familia y toda su aldea."
    },
    {
      title: "El Despertar",
      content: "Un misterioso mentor lo rescató de entre las ruinas. Para obtener el poder necesario para su venganza, Adrián aceptó convertirse en vampiro, renunciando a su humanidad por la fuerza que necesitaba."
    },
    {
      title: "La Misión",
      content: "Ahora, como cazador de monstruos del Clan Vampyr, Adrián se infiltra en el castillo de Drácula. Su objetivo: llegar hasta la Sala del Trono y enfrentar al señor oscuro que gobierna desde las sombras."
    },
    {
      title: "El Dilema",
      content: "Pero en su camino se cruza con Brauner, el responsable directo de su tragedia. ¿Cumplirá su misión original o desviará su camino para satisfacer su sed de venganza personal?"
    }
  ]
};
