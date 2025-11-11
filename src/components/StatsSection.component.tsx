export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
          Estadísticas del Juego
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Descubre los números detrás de la oscura aventura
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { n: "3", title: "Niveles", desc: "Del calabozo hasta la sala del trono" },
          { n: "6+", title: "Enemigos", desc: "Diferentes tipos de criaturas" },
          { n: "3", title: "Jefes", desc: "Batallas épicas inolvidables" },
          { n: "∞", title: "Armas", desc: "Sistema de drop aleatorio" },
          { n: "1", title: "Poción", desc: "Única oportunidad de curación" },
          { n: "2", title: "Finales", desc: "Diferentes destinos posibles" },
          { n: "100%", title: "Adrenalina", desc: "Acción y tensión constantes" },
          { n: "0", title: "Saves", desc: "Sin puntos de guardado" },
        ].map((s) => (
          <div
            key={s.title}
            className="bg-gradient-to-br from-red-950/60 to-black p-8 rounded-xl border-2 border-red-900/60 shadow-lg shadow-red-900/40 hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                {s.n}
              </div>
              <h3 className="text-red-100 font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
