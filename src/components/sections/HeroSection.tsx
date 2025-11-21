import { FaMobileAlt } from 'react-icons/fa';
import { Carousel3D } from "../shared/Carousel";
import Button from "../shared/Button";
import { GAME_INFO } from "../../constants/app.constants";
import { GRADIENTS, BG_CLASSES, BORDER_CLASSES } from "../../constants/theme.constants";
import titleImage from "../../assets/title.png";

export default function HeroSection() {
  const scrollToApp = () => {
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 ${GRADIENTS.heroBg} z-0`}></div>
      
      <div className="absolute inset-0 z-0 opacity-30">
        <Carousel3D />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
        <div className="max-w-5xl mx-auto">

          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <img 
              src={titleImage} 
              alt={GAME_INFO.title}
              className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl h-auto object-contain drop-shadow-2xl animate-pulse-slow"
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            {GAME_INFO.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12">
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

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
            <span className="text-gray-400 text-xs sm:text-sm">Disponible en:</span>
            {GAME_INFO.platforms.map((platform) => (
              <div 
                key={platform}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 ${BG_CLASSES.card} ${BORDER_CLASSES.default} rounded-lg text-red-300 text-xs sm:text-sm font-medium`}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
