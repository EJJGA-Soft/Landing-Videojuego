import { useState, useEffect } from "react";

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
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      "home", "about", "story", "characters", "mechanics", 
      "enemies", "gallery", "locations", "stats", "app", "faq", "contact", "team"
    ];

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

  const scrollToSection = (id: string) => {
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
          ? "bg-gradient-to-r from-purple-950/95 via-black/95 to-purple-950/95 backdrop-blur-lg shadow-xl shadow-purple-900/30"
          : "bg-gradient-to-r from-purple-950/60 via-black/60 to-purple-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
              <h1 className="relative font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                Vampyr
              </h1>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  activeSection === link.id
                    ? "text-white bg-purple-900/50"
                    : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 transition-opacity duration-200 rounded-lg ${
                  activeSection === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-900/30 transition-colors duration-200"
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
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-purple-950/95 to-black/95 backdrop-blur-lg border-t border-purple-900/30">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                activeSection === link.id
                  ? "text-white bg-purple-900/50"
                  : "text-gray-300 hover:text-white hover:bg-purple-900/30"
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
