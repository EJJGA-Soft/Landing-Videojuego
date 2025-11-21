// Theme Colors - Paleta Rojo-Negro-Blanco
export const COLORS = {
  primary: {
    red: {
      50: '#fef2f2',   // red-50
      100: '#fee2e2',  // red-100
      200: '#fecaca',  // red-200
      300: '#fca5a5',  // red-300
      400: '#f87171',  // red-400
      500: '#ef4444',  // red-500
      600: '#dc2626',  // red-600
      700: '#b91c1c',  // red-700
      800: '#991b1b',  // red-800
      900: '#7f1d1d',  // red-900
      950: '#450a0a',  // red-950
    },
  },
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  }
} as const;

// Gradients - CSS Strings
export const GRADIENTS = {
  hero: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #000000 100%)',
  primary: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  secondary: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
  dark: 'linear-gradient(180deg, #000000 0%, #1f2937 100%)',
  redRed: 'linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)',
  redBlack: 'linear-gradient(180deg, #dc2626 0%, #000000 100%)',
  // Tailwind Class Strings
  heroBg: 'bg-gradient-to-br from-red-950/30 via-red-950/40 to-black',
  sectionAlt: 'bg-gradient-to-b from-black via-red-950/10 to-black',
  cardGradient: 'bg-gradient-to-br from-red-950/40 via-black/60 to-black/80',
} as const;

// Tailwind Class Utilities - Fondos y Bordes
export const BG_CLASSES = {
  card: 'bg-gradient-to-br from-red-950/40 via-black/60 to-black/80',
  cardGradient: 'bg-gradient-to-br from-red-950/40 via-black/60 to-black/80',
  cardHover: 'group-hover:from-red-900/50 group-hover:via-black/70 group-hover:to-black/90',
  cardOverlay: 'bg-gradient-to-br from-red-600/0 to-red-600/10',
  section: 'bg-gradient-to-r from-red-950/40 via-red-950/60 to-red-950/40',
  sectionAlt: 'bg-gradient-to-b from-black via-red-950/10 to-black',
  sectionDark: 'bg-black',
  button: {
    primary: 'bg-gradient-to-r from-red-600 to-red-700',
    primaryHover: 'hover:from-red-500 hover:to-red-600',
    gradient: 'bg-gradient-to-r from-red-500 via-red-500 to-red-600',
    gradientHover: 'hover:from-red-400 hover:via-red-400 hover:to-red-500',
  },
} as const;

export const BORDER_CLASSES = {
  default: 'border border-red-900/30',
  hover: 'border border-red-900/30 hover:border-red-500/50',
  divider: 'bg-gradient-to-r from-transparent via-red-500 to-transparent',
  outline: 'border-2 border-red-500',
} as const;

export const SHADOW_CLASSES = {
  base: 'shadow-lg shadow-red-900/20',
  hover: 'shadow-lg hover:shadow-red-600/30',
  button: {
    primary: 'shadow-lg hover:shadow-red-500/50',
    gradient: 'shadow-xl hover:shadow-red-500/50',
  },
} as const;

// Spacing
export const SPACING = {
  section: {
    py: 'py-20 md:py-24 lg:py-32',
    pySmall: 'py-12 md:py-16',
    mb: 'mb-12 md:mb-16',
  },
  container: {
    maxWidth: 'max-w-7xl',
    padding: 'px-4 sm:px-6 lg:px-8',
  }
} as const;

// Typography
export const TYPOGRAPHY = {
  heading: {
    h1: 'text-5xl sm:text-6xl lg:text-7xl font-bold',
    h2: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
    h3: 'text-3xl sm:text-4xl font-bold',
    h4: 'text-2xl sm:text-3xl font-bold',
  },
  gradient: {
    redRed: 'bg-gradient-to-r from-red-400 via-red-400 to-red-600 bg-clip-text text-transparent',
    redWhite200: 'bg-gradient-to-r from-red-200 via-white to-red-200 bg-clip-text text-transparent',
    redWhite300: 'bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent',
    redLight: 'bg-gradient-to-r from-red-300 via-red-300 to-red-400 bg-clip-text text-transparent',
  },
  colors: {
    white: 'text-white',
    black: 'text-black',
    gray: {
      300: 'text-gray-300',
      400: 'text-gray-400',
      500: 'text-gray-500',
    },
    red: {
      200: 'text-red-200',
      300: 'text-red-300',
      400: 'text-red-400',
      500: 'text-red-500',
    },
  },
  hover: {
    red200: 'hover:text-red-200',
    red300: 'hover:text-red-300',
    red400: 'hover:text-red-400',
    white: 'hover:text-white',
  }
} as const;

// Animations
export const ANIMATIONS = {
  transition: 'transition-all duration-300',
  transitionSlow: 'transition-all duration-500',
  hover: {
    scale: 'hover:scale-105',
    scaleLarge: 'hover:scale-110',
    brightness: 'hover:brightness-110',
  }
} as const;

// Navigation
export const NAV_SECTIONS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre el Juego' },
  { id: 'story', label: 'Historia' },
  { id: 'characters', label: 'Personajes' },
  { id: 'mechanics', label: 'Mecánicas' },
  { id: 'enemies', label: 'Enemigos' },
  { id: 'locations', label: 'Locaciones' },
  { id: 'app', label: 'App Móvil' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'faq', label: 'FAQ' },
  { id: 'team', label: 'Equipo' },
] as const;
