import SectionHeader from "../shared/SectionHeader";
import { TEAM_MEMBERS } from "../../data/team.data";
import { BG_CLASSES, BORDER_CLASSES, SHADOW_CLASSES } from "../../constants/theme.constants";

export default function TeamSection() {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <section id="team" className="py-20 scroll-mt-20 mb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Equipo de Desarrollo"
          subtitle="Conoce a las mentes creativas detrás de Vampyr"
          gradient="redWhite"
        />

        <div className="flex flex-wrap justify-center gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className={`group relative ${BG_CLASSES.cardGradient} p-6 rounded-xl ${BORDER_CLASSES.hover} ${SHADOW_CLASSES.hover} transition-all duration-300 hover:scale-105 w-full max-w-sm md:w-80`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-red-400 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
