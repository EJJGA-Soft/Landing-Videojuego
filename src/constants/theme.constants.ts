// Theme Colors - Paleta Rojo-Morado-Blanco-Negro
export const COLORS = {
  primary: {
    red: '#dc2626',      // red-600
    redDark: '#991b1b',  // red-800
    redLight: '#ef4444', // red-500
  },
  secondary: {
    purple: '#9333ea',     // purple-600
    purpleDark: '#7e22ce', // purple-700
    purpleLight: '#a855f7',// purple-500
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

// Gradients
export const GRADIENTS = {
  hero: 'linear-gradient(135deg, #dc2626 0%, #7e22ce 50%, #000000 100%)',
  primary: 'linear-gradient(135deg, #ef4444 0%, #9333ea 100%)',
  secondary: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
  dark: 'linear-gradient(180deg, #000000 0%, #1f2937 100%)',
  redPurple: 'linear-gradient(90deg, #dc2626 0%, #9333ea 100%)',
  purpleBlack: 'linear-gradient(180deg, #9333ea 0%, #000000 100%)',
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
    redPurple: 'bg-gradient-to-r from-red-400 via-purple-400 to-purple-600 bg-clip-text text-transparent',
    purpleWhite: 'bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent',
    redWhite: 'bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent',
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
