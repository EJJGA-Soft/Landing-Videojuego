export default function ControlsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
          Controles
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">Domina los controles para sobrevivir en el castillo maldito</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {/* Movement */}
        <div className="bg-gradient-to-br from-red-950/60 to-black p-6 rounded-xl border-2 border-red-900/60 shadow-lg shadow-red-900/40 hover:scale-105 transition-transform">
          <div className="text-center">
            <div className="bg-red-900/40 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4 border border-red-800/60">
              <span className="text-red-100 text-3xl font-bold">W</span>
            </div>
            <h3 className="text-red-100 font-bold text-lg mb-2">Movimiento</h3>
            <div className="flex justify-center gap-1 mb-2">
              <div className="bg-red-900/40 w-8 h-8 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 text-xs font-bold">W</span>
              </div>
            </div>
            <div className="flex justify-center gap-1">
              <div className="bg-red-900/40 w-8 h-8 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 text-xs font-bold">A</span>
              </div>
              <div className="bg-red-900/40 w-8 h-8 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 text-xs font-bold">S</span>
              </div>
              <div className="bg-red-900/40 w-8 h-8 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 text-xs font-bold">D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Jump */}
        <div className="bg-gradient-to-br from-red-950/60 to-black p-6 rounded-xl border-2 border-red-900/60 shadow-lg shadow-red-900/40 hover:scale-105 transition-transform">
          <div className="text-center">
            <div className="bg-red-900/40 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4 border border-red-800/60">
              <span className="text-red-100 text-2xl font-bold">SPACE</span>
            </div>
            <h3 className="text-red-100 font-bold text-lg mb-2">Saltar</h3>
            <div className="bg-red-900/40 px-4 py-2 rounded-lg border border-red-800/60 inline-block">
              <span className="text-red-200 text-sm font-mono">Barra Espaciadora</span>
            </div>
          </div>
        </div>

        {/* Attack */}
        <div className="bg-gradient-to-br from-red-950/60 to-black p-6 rounded-xl border-2 border-red-900/60 shadow-lg shadow-red-900/40 hover:scale-105 transition-transform">
          <div className="text-center">
            <div className="bg-red-900/40 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4 border border-red-800/60">
              <span className="text-red-100 text-4xl font-bold">J</span>
            </div>
            <h3 className="text-red-100 font-bold text-lg mb-2">Ataque</h3>
            <p className="text-gray-300 text-xs">Cuerpo a Cuerpo</p>
            <div className="bg-red-900/40 w-10 h-10 mx-auto mt-2 rounded flex items-center justify-center border border-red-800/60">
              <span className="text-red-200 font-bold">J</span>
            </div>
          </div>
        </div>

        {/* Heal */}
        <div className="bg-gradient-to-br from-red-950/60 to-black p-6 rounded-xl border-2 border-red-900/60 shadow-lg shadow-red-900/40 hover:scale-105 transition-transform">
          <div className="text-center">
            <div className="bg-red-900/40 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4 border border-red-800/60">
              <span className="text-red-100 text-4xl font-bold">L</span>
            </div>
            <h3 className="text-red-100 font-bold text-lg mb-2">Curarse</h3>
            <p className="text-gray-300 text-xs mb-2">Usar Poción</p>
            <div className="flex justify-center gap-2">
              <div className="bg-red-900/40 w-10 h-10 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 font-bold">L</span>
              </div>
              <span className="text-red-400 font-bold flex items-center">o</span>
              <div className="bg-red-900/40 w-10 h-10 rounded flex items-center justify-center border border-red-800/60">
                <span className="text-red-200 font-bold">I</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
