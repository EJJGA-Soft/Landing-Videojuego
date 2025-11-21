import SectionHeader from "../shared/SectionHeader";
import { MAIN_CHARACTERS } from "../../data/characters.data";
import { BG_CLASSES, BORDER_CLASSES, TYPOGRAPHY } from "../../constants/theme.constants";

export default function CharactersSection() {
  return (
    <section id="characters" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Personajes Principales"
          subtitle="Conoce a los protagonistas de esta historia oscura"
          gradient="redWhite"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {MAIN_CHARACTERS.map((character, index) => (
            <div 
              key={character.id}
              className={`group relative ${BG_CLASSES.cardGradient} rounded-2xl overflow-hidden ${BORDER_CLASSES.hover} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
            >
              {/* <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-bold z-10 flex items-center gap-2 ${
                character.type === 'hero' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                  : character.type === 'villain'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
              }`}>
                {character.type === 'hero' ? (
                  <><FaStar /> Héroe</>
                ) : character.type === 'villain' ? (
                  <><FaSkull /> Villano</>
                ) : (
                  <><FaHandshake /> Aliado</>
                )}
              </div> */}

              <div className={`absolute inset-0 bg-gradient-to-br ${
                character.type === 'hero' 
                  ? 'from-red-600/0 to-red-600/20' 
                  : 'from-red-600/0 to-red-600/20'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 p-8`}>
                <div className="flex-shrink-0 flex items-center justify-center lg:w-1/3">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      character.type === 'hero' ? 'from-red-500' : 'from-red-500'
                    } to-transparent blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="relative w-full max-w-xs h-auto object-contain drop-shadow-[0_0_30px_rgba(255, 0, 43, 0.92)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center relative">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-3 ${TYPOGRAPHY.gradient.redWhite200}`}>
                    {character.name}
                  </h3>
                  
                  <p className={`${
                    character.type === 'hero' ? 'text-red-400' : 'text-red-400'
                  } font-semibold mb-4`}>
                    {character.role}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {character.description}
                  </p>

                  {character.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {character.stats.health && (
                        <div className="bg-black/40 px-3 py-3 rounded-lg border border-red-900/40">
                          <div className="text-gray-400 text-xs mb-1">HP</div>
                          <div className="font-bold text-red-300 text-sm">
                            {character.stats.health}
                          </div>
                        </div>
                      )}
                      {character.stats.damage && (
                        <div className="bg-black/40 px-3 py-3 rounded-lg border border-red-900/40">
                          <div className="text-gray-400 text-xs mb-1">Daño</div>
                          <div className="font-bold text-red-300 text-sm">
                            {character.stats.damage}
                          </div>
                        </div>
                      )}
                      {character.stats.special && (
                        <div className="bg-black/40 px-3 py-3 rounded-lg border border-red-900/40">
                          <div className="text-gray-400 text-xs mb-1">Especial</div>
                          <div className="font-bold text-red-300 text-xs leading-tight break-words">
                            {character.stats.special}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
