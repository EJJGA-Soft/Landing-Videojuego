import { FaMobileAlt } from 'react-icons/fa';
import { Carousel3D } from "../shared/Carousel";
import Button from "../shared/Button";
import { GAME_INFO } from "../../constants/app.constants";

export default function HeroSection() {
  const scrollToApp = () => {
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-purple-950/40 to-black z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-30">
        <Carousel3D />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              {GAME_INFO.title}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4 font-semibold">
            {GAME_INFO.tagline}
          </p>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {GAME_INFO.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={scrollToApp}
              icon={<FaMobileAlt />}
            >
              Descarga la App 
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="#about"
            >
              Descubre Más
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="text-gray-400 text-sm">Disponible en:</span>
            {GAME_INFO.platforms.map((platform) => (
              <div 
                key={platform}
                className="px-4 py-2 bg-black/50 border border-purple-900/30 rounded-lg text-purple-300 text-sm font-medium"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
