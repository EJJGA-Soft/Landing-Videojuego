import React from 'react';
import { FaCheckCircle, FaSyncAlt, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import { ROADMAP } from "../../data/roadmap.data";
import { BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES } from "../../constants/theme.constants";

export default function RoadmapSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-600 to-green-700";
      case "in-progress":
        return "from-purple-600 to-purple-700";
      case "planned":
        return "from-gray-600 to-gray-700";
      default:
        return "from-gray-600 to-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="flex items-center gap-2">
            <FaCheckCircle /> Completado
          </span>
        );
      case "in-progress":
        return (
          <span className="flex items-center gap-2">
            <FaSyncAlt /> En Progreso
          </span>
        );
      case "planned":
        return (
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> Planeado
          </span>
        );
      default:
        return status;
    }
  };

  return (
    <section id="roadmap" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Roadmap de Desarrollo"
          subtitle="Nuestro plan de actualización y expansión del juego"
          gradient="purpleWhite"
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-500 to-red-600"></div>

          {/* Roadmap items */}
          <div className="space-y-12">
            {ROADMAP.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 -ml-1.5 sm:-ml-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 ring-2 sm:ring-4 ring-black z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ml-12 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <div className={`group relative ${BG_CLASSES.cardGradient} p-6 rounded-xl ${BORDER_CLASSES.hover} ${SHADOW_CLASSES.hover} transition-all duration-300`}>
                    {/* Status badge */}
                    <div className={`absolute -top-3 -right-3 px-3 py-1 sm:px-4 bg-gradient-to-r ${getStatusColor(item.status)} text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg`}>
                      {getStatusLabel(item.status)}
                    </div>

                    <div className="mb-2">
                      <span className="text-purple-400 text-sm font-bold">{item.phase}</span>
                      <span className="text-gray-500 text-sm ml-2">• {item.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 mb-4">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-purple-500 mt-0.5">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap note */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-950/40 to-black/60 p-6 rounded-xl border border-purple-900/30">
            <p className="text-gray-300">
              <span className="text-purple-400 font-bold flex items-center gap-2 justify-center">
                <FaBullhorn />
                Nota:
              </span>
              Este roadmap es orientativo y puede sufrir cambios. 
              Escuchamos a nuestra comunidad y ajustamos prioridades según el feedback de los jugadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
