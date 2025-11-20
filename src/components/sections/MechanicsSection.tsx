import SectionHeader from "../shared/SectionHeader";
import { GAME_MECHANICS } from "../../data/gameInfo.data";

export default function MechanicsSection() {
  return (
    <section id="mechanics" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Mecánicas del Juego"
          subtitle="Una experiencia única que combina lo mejor del RogueLike con la exploración Metroidvania"
          gradient="redPurple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_MECHANICS.map((mechanic) => (
            <div 
              key={mechanic.id}
              className="group relative bg-gradient-to-br from-purple-950/40 via-red-950/30 to-black/80 p-8 rounded-xl border border-purple-900/30 hover:border-red-500/50 shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-200">
                  {mechanic.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {mechanic.description}
                </p>

                <ul className="space-y-2">
                  {mechanic.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-red-500 mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
