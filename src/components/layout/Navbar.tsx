import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { SHADOW_CLASSES } from '../../constants/theme.constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "home", "about", "story", "characters", "mechanics", 
      "enemies", "gallery", "locations", "stats", "app", "faq", "contact", "team"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Filtrar solo las secciones que están intersectando
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Encontrar la sección con mayor intersectionRatio
        const mostVisible = intersectingEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev;
        });
        
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    // Quitar el foco del botón para evitar que quede con el borde de focus
    if (event) {
      event.currentTarget.blur();
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Juego" },
    { id: "story", label: "Historia" },
    { id: "characters", label: "Personajes" },
    { id: "mechanics", label: "Mecánicas" },
    { id: "enemies", label: "Enemigos" },
    { id: "locations", label: "Locaciones" },
    { id: "stats", label: "Estadísticas" },
    { id: "app", label: "App" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contacto" },
    { id: "team", label: "Equipo" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `bg-gradient-to-r from-red-950/95 via-black/95 to-red-950/95 backdrop-blur-lg ${SHADOW_CLASSES.base}`
          : "bg-gradient-to-r from-red-950/60 via-black/60 to-red-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={(e) => scrollToSection("home", e)}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-500/30 transition-all duration-300"></div>
              <img 
                src={logo} 
                alt="Vampyr Logo" 
                className="relative h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group focus:outline-none ${
                  activeSection === link.id
                    ? "text-white bg-red-900/50 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-white hover:bg-red-900/30"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 transition-opacity duration-300 rounded-lg ${
                  activeSection === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-red-900/30 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-red-950/95 to-black/95 backdrop-blur-lg border-t border-red-900/30">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => scrollToSection(link.id, e)}
              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 focus:outline-none ${
                activeSection === link.id
                  ? "text-white bg-red-900/50 border-l-4 border-red-500"
                  : "text-gray-300 hover:text-white hover:bg-red-900/30"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
