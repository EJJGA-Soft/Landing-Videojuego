import SectionHeader from "../shared/SectionHeader";
import { GAME_STORY } from "../../data/gameInfo.data";
import { BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES, TYPOGRAPHY } from "../../constants/theme.constants";

export default function StorySection() {
  return (
    <section id="story" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeader 
          title={GAME_STORY.title}
          gradient="redred"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {GAME_STORY.chapters.map((chapter, index) => (
            <div 
              key={index}
              className={`group relative ${BG_CLASSES.cardGradient} p-6 sm:p-8 rounded-xl ${BORDER_CLASSES.hover} ${SHADOW_CLASSES.hover} transition-all duration-300`}
            >
              {/* Chapter number */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                {index + 1}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${TYPOGRAPHY.gradient.redLight} mb-3 sm:mb-4`}>
                  {chapter.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {chapter.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
          <div className={`${BG_CLASSES.section} p-6 sm:p-8 rounded-2xl ${BORDER_CLASSES.default}`}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 italic leading-relaxed">
              "¿Qué estás dispuesto a sacrificar por venganza? 
              <span className="text-red-400"> Tu humanidad</span>, 
              <span className="text-red-400"> tu alma</span>, 
              <span className="text-white font-bold"> o tu destino</span>?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
