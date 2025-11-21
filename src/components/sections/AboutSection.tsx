import { FaGamepad, FaDesktop, FaCalendarAlt, FaBullseye, FaSyncAlt, FaSkull, FaBookDead } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";
import { GAME_INFO } from "../../constants/app.constants";
import { GAME_STATS } from "../../data/gameInfo.data";
import { GRADIENTS, BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES, TYPOGRAPHY } from "../../constants/theme.constants";

export default function AboutSection() {
  return (
    <section id="about" className={`py-20 md:py-32 scroll-mt-20 ${GRADIENTS.sectionAlt}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Sobre el Juego"
          subtitle={GAME_INFO.description}
          gradient="redred"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            title="Género"
            description={GAME_INFO.genre}
            icon={<FaGamepad className="text-5xl" />}
          />
          <FeatureCard 
            title="Plataformas"
            description={GAME_INFO.platforms.join(", ")}
            icon={<FaDesktop className="text-5xl" />}
          />
          <FeatureCard 
            title="Lanzamiento"
            description={`${GAME_INFO.releaseDate} • ${GAME_INFO.rating}`}
            icon={<FaCalendarAlt className="text-5xl" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold ${TYPOGRAPHY.gradient.redLight}`}>
              Lo Que Te Espera
            </h3>
            <div className="space-y-4">
              {[
                "Sistema de combate RogueLike con drops aleatorios infinitos",
                "Exploración Metroidvania en un castillo oscuro e interconectado",
                "Sin saves ni checkpoints - cada run es única y definitiva",
                "2 finales diferentes basados en tus decisiones",
                "Boss fights épicos contra Drácula y el Caballero de Sangre",
                "Sistema único de curación mediante sangre enemiga"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaBullseye className="text-white text-xs" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={`text-3xl font-bold ${TYPOGRAPHY.gradient.redLight}`}>
              Por Qué Jugar Vampyr
            </h3>
            <div className="space-y-4">
              <div className={`${BG_CLASSES.card} p-6 rounded-xl ${BORDER_CLASSES.default}`}>
                <div className="flex items-center gap-2 mb-2">
                  <FaSyncAlt className="text-red-300" />
                  <h4 className="text-xl font-bold text-red-300">Alta Rejugabilidad</h4>
                </div>
                <p className="text-gray-300">
                  Cada partida es diferente gracias al sistema de drops aleatorios y múltiples caminos
                </p>
              </div>
              <div className={`${BG_CLASSES.card} p-6 rounded-xl ${BORDER_CLASSES.default}`}>
                <div className="flex items-center gap-2 mb-2">
                  <FaSkull className="text-red-300" />
                  <h4 className="text-xl font-bold text-red-300">Desafío Constante</h4>
                </div>
                <p className="text-gray-300">
                  Sin guardado automático, cada decisión cuenta y la tensión nunca baja
                </p>
              </div>
              <div className={`${BG_CLASSES.card} p-6 rounded-xl ${BORDER_CLASSES.default}`}>
                <div className="flex items-center gap-2 mb-2">
                  <FaBookDead className="text-red-300" />
                  <h4 className="text-xl font-bold text-red-300">Historia Profunda</h4>
                </div>
                <p className="text-gray-300">
                  Una narrativa oscura de venganza, redención y las consecuencias de nuestros actos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`text-3xl font-bold text-center ${TYPOGRAPHY.gradient.redLight} mb-12`}>
            Estadísticas del Juego
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GAME_STATS.map((stat, index) => (
              <div 
                key={index}
                className={`group relative ${BG_CLASSES.cardGradient} p-8 rounded-xl ${BORDER_CLASSES.hover} ${SHADOW_CLASSES.hover} hover:scale-105 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-red-200 transition-colors duration-200">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
