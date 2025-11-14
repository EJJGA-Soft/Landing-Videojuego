import { GAME_INFO, SOCIAL_LINKS } from "../../constants/app.constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-950/20 to-black border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {GAME_INFO.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {GAME_INFO.tagline}
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 EJJGA-Soft. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Sobre el Juego
                </a>
              </li>
              <li>
                <a href="#characters" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Personajes
                </a>
              </li>
              <li>
                <a href="#app" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Descarga la App
                </a>
              </li>
              
              <li>
                <a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white">GH</span>
              </a>
              <a 
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white">DC</span>
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white">X</span>
              </a>
              <a 
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white">YT</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-2">Contacto:</p>
            <a href="mailto:contact@vampyrgame.com" className="text-purple-400 hover:text-purple-300 text-sm">
              contact@vampyrgame.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-900/30 text-center">
          <p className="text-gray-500 text-sm">
            Desarrollado por el equipo de EJJGA-Soft 
          </p>
        </div>
      </div>
    </footer>
  );
}
