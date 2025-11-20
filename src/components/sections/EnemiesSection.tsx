import { GiCrossedSwords } from 'react-icons/gi';
import SectionHeader from "../shared/SectionHeader";
import { ENEMIES } from "../../data/characters.data";

export default function EnemiesSection() {
  return (
    <section id="enemies" className="py-20 md:py-2 scroll-mt-20 bg-gradient-to-b from-black via-red-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Enemigos y Bestias"
          subtitle="Criaturas de la noche que habitan el castillo maldito"
          gradient="redPurple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ENEMIES.map((enemy) => (
            <div 
              key={enemy.id}
              className="group relative bg-gradient-to-b from-red-950/40 via-black/60 to-black/80 rounded-xl overflow-hidden border border-red-900/30 hover:border-red-500/50 shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative h-48 bg-black/60 flex items-center justify-center overflow-hidden">
                <img 
                  src={enemy.image} 
                  alt={enemy.name}
                  className="h-40 w-auto object-contain drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              <div className="relative p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-200">
                  {enemy.name}
                </h3>
                <p className="text-red-400 text-sm font-medium mb-3">
                  {enemy.role}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {enemy.description}
                </p>

                {enemy.stats && (
                  <div className="space-y-2 pt-3 border-t border-red-900/30">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">HP:</span>
                      <span className="text-red-300 font-semibold">{enemy.stats.health}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Daño:</span>
                      <span className="text-red-300 font-semibold">{enemy.stats.damage}</span>
                    </div>
                    {enemy.stats.special && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Drop:</span>
                        <span className="text-purple-300 font-semibold">{enemy.stats.special}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-red-950/40 to-black/60 p-6 rounded-xl border border-red-900/30">
            <p className="text-gray-300 text-center">
              <span className="text-red-400 font-bold flex items-center gap-2 justify-center">
                <GiCrossedSwords className="text-red-400" />
                Tip de Combate:
              </span>
              <span>Cada enemigo dropea armas aleatorias al morir.</span> 
              Adapta tu estrategia según el arma que consigas y aprende los patrones de ataque de cada criatura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
