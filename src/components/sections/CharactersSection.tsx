import { FaStar, FaSkull, FaHandshake } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import { MAIN_CHARACTERS } from "../../data/characters.data";

export default function CharactersSection() {
  return (
    <section id="characters" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Personajes Principales"
          subtitle="Conoce a los protagonistas de esta historia oscura"
          gradient="purpleWhite"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {MAIN_CHARACTERS.map((character, index) => (
            <div 
              key={character.id}
              className={`group relative bg-gradient-to-br ${
                character.type === 'hero' 
                  ? 'from-purple-950/40 via-black/60 to-purple-950/40' 
                  : character.type === 'villain'
                  ? 'from-red-950/40 via-black/60 to-red-950/40'
                  : 'from-black/60 via-purple-950/40 to-black/60'
              } rounded-2xl overflow-hidden border ${
                character.type === 'hero' 
                  ? 'border-purple-900/30 hover:border-purple-500/50' 
                  : character.type === 'villain'
                  ? 'border-red-900/30 hover:border-red-500/50'
                  : 'border-purple-900/30 hover:border-purple-500/50'
              } shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-bold z-10 flex items-center gap-2 ${
                character.type === 'hero' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
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
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${
                character.type === 'hero' 
                  ? 'from-purple-600/0 to-purple-600/20' 
                  : 'from-red-600/0 to-red-600/20'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 p-8`}>
                <div className="flex-shrink-0 flex items-center justify-center lg:w-1/3">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      character.type === 'hero' ? 'from-purple-500' : 'from-red-500'
                    } to-transparent blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="relative w-full max-w-xs h-auto object-contain drop-shadow-[0_0_30px_rgba(147,51,234,0.7)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center relative">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r ${
                    character.type === 'hero' 
                      ? 'from-purple-300 to-white' 
                      : 'from-red-300 to-white'
                  } bg-clip-text text-transparent`}>
                    {character.name}
                  </h3>
                  
                  <p className={`${
                    character.type === 'hero' ? 'text-purple-400' : 'text-red-400'
                  } font-semibold mb-4`}>
                    {character.role}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {character.description}
                  </p>

                  {character.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {character.stats.health && (
                        <div className={`bg-black/40 px-4 py-3 rounded-lg border ${
                          character.type === 'hero' ? 'border-purple-900/40' : 'border-red-900/40'
                        }`}>
                          <div className="text-gray-400 text-xs mb-1">HP</div>
                          <div className={`font-bold ${
                            character.type === 'hero' ? 'text-purple-300' : 'text-red-300'
                          }`}>
                            {character.stats.health}
                          </div>
                        </div>
                      )}
                      {character.stats.damage && (
                        <div className={`bg-black/40 px-4 py-3 rounded-lg border ${
                          character.type === 'hero' ? 'border-purple-900/40' : 'border-red-900/40'
                        }`}>
                          <div className="text-gray-400 text-xs mb-1">Daño</div>
                          <div className={`font-bold ${
                            character.type === 'hero' ? 'text-purple-300' : 'text-red-300'
                          }`}>
                            {character.stats.damage}
                          </div>
                        </div>
                      )}
                      {character.stats.special && (
                        <div className={`bg-black/40 px-4 py-3 rounded-lg border ${
                          character.type === 'hero' ? 'border-purple-900/40' : 'border-red-900/40'
                        }`}>
                          <div className="text-gray-400 text-xs mb-1">Especial</div>
                          <div className={`font-bold text-sm ${
                            character.type === 'hero' ? 'text-purple-300' : 'text-red-300'
                          }`}>
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
