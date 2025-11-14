import { FaEnvelope } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import { TEAM_MEMBERS } from "../../data/team.data";

export default function TeamSection() {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <section id="team" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Equipo de Desarrollo"
          subtitle="Conoce a las mentes creativas detrás de Vampyr"
          gradient="purpleWhite"
        />

        <div className="flex flex-wrap justify-center gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-purple-950/40 via-black/60 to-black/80 p-6 rounded-xl border border-purple-900/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105 w-full max-w-sm md:w-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-950/40 to-black/60 p-8 rounded-xl border border-purple-900/30 inline-block max-w-2xl">
            <p className="text-gray-300 text-lg mb-6">
              ¿Quieres unirte a nuestro equipo o colaborar en el proyecto?
            </p>
            <a
              href="mailto:team@vampyrgame.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope className="inline mr-2" />
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
