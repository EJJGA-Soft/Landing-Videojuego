import SectionHeader from "../shared/SectionHeader";
import Card from "../shared/Card";

type Props = {
  images: string[];
};

export default function LocationsSection({ images }: Props) {
  const locations = [
    {
      title: "Catacumbas/Ruinas (Nivel 1)",
      description: "Mapa explorable estilo Metroidvania. Aquí habitan todos los enemigos comunes: Esqueletos, Zombis, Murciélagos y Slimes. Dos caminos conducen a los jefes finales.",
      image: images[0]
    },
    {
      title: "Sala del Trono (Nivel 2)",
      description: "Stage fijo dedicado a la batalla épica contra Drácula. Ataca con espada y lanzamiento de bolas de fuego. El enfrentamiento final.",
      image: images[1]
    },
    {
      title: "Salida del Castillo (Nivel 3)",
      description: "Stage fijo para el enfrentamiento opcional contra Brauner, el Caballero de Sangre. Vencerlo te permite escapar del castillo (final alternativo).",
      image: images[2]
    }
  ];

  return (
    <section id="locations" className="py-20 scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Locaciones del Castillo"
          subtitle="Explora las profundidades malditas del castillo y enfrenta tus miedos"
          gradient="purpleWhite"
        />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {locations.map((location, index) => (
            <Card
              key={index}
              title={location.title}
              description={location.description}
              imageUrl={location.image}
              size="large"
              titlecenter
            />
          ))}
        </div>
      </div>
    </section>
  );
}
