import SectionHeader from "../shared/SectionHeader";
import { GAME_STORY } from "../../data/gameInfo.data";

export default function StorySection() {
  return (
    <section id="story" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title={GAME_STORY.title}
          gradient="redPurple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {GAME_STORY.chapters.map((chapter, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-purple-950/40 via-black/60 to-red-950/40 p-8 rounded-xl border border-purple-900/30 hover:border-red-500/50 shadow-lg hover:shadow-red-600/30 transition-all duration-300"
            >
              {/* Chapter number */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {index + 1}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-300 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-4">
                  {chapter.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {chapter.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-950/40 via-purple-950/60 to-red-950/40 p-8 rounded-2xl border border-red-900/30">
            <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
              "¿Qué estás dispuesto a sacrificar por venganza? 
              <span className="text-red-400"> Tu humanidad</span>, 
              <span className="text-purple-400"> tu alma</span>, 
              <span className="text-white font-bold"> o tu destino</span>?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
