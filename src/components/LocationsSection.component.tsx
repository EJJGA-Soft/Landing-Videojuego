import Card from "./Card.component";

type Props = {
  images: string[];
};

export default function LocationsSection({ images }: Props) {
  return (
    <section className="max-w-7xl mx-auto py-16 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
          Locaciones del Castillo
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">Explora las profundidades malditas del castillo y enfrenta tus miedos</p>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Catacumbas/Ruinas (Nivel 1)"
          description="Mapa explorable estilo Metroidvania. Aquí habitan todos los enemigos comunes: Esqueletos, Zombis, Murciélagos y Slimes. Dos caminos conducen a los jefes finales."
          imageUrl={images[0]}
          size="large"
          titlecenter
        />
        <Card
          title="Sala del Trono (Nivel 2)"
          description="Stage fijo dedicado a la batalla épica contra Drácula. Ataca con espada y lanzamiento de bolas de fuego. El enfrentamiento final."
          imageUrl={images[1]}
          size="large"
          titlecenter
        />
        <Card
          title="Salida del Castillo (Nivel 3)"
          description="Stage fijo para el enfrentamiento opcional contra Brauner, el Caballero de Sangre. Vencerlo te permite escapar del castillo (final alternativo)."
          imageUrl={images[2]}
          size="large"
          titlecenter
        />
      </div>
    </section>
  );
}
