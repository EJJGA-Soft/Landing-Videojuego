import Card from "./Card.component";
import logoImage from "../assets/logo.jpeg";

export default function MechanicsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
          Mecánicas del Juego
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Una experiencia única que combina lo mejor del RogueLike con la exploración Metroidvania
        </p>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Sistema de Combate RogueLike"
          description="Basado en ataques cuerpo a cuerpo. Los enemigos derrotados dropean armas aleatorias con diferentes estadísticas que debes recolectar para progresar."
          imageUrl={logoImage}
          size="large"
          titlecenter
        />
        <Card
          title="Sistema de Sangre/Curación"
          description="Comienzas con UNA única Poción de Curación no recargable. Gestiona tu salud extremadamente o perderás la partida."
          imageUrl={logoImage}
          size="large"
          titlecenter
        />
        <Card
          title="Progresión RogueLike + Metroidvania"
          description="RogueLike en armas (aleatoriedad) y Metroidvania en el mapa (exploración). Sin XP ni economía. Todo depende del drop de armas."
          imageUrl={logoImage}
          size="large"
          titlecenter
        />
      </div>
    </section>
  );
}
