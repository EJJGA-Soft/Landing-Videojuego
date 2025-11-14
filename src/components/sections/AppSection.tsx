import { type JSX } from 'react';
import { FaMobileAlt, FaChartLine, FaScroll, FaTrophy, FaGlobe, FaUser, FaBell } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";
import Button from "../shared/Button";
import { APP_FEATURES, APP_SYNC_FEATURES, APP_INFO } from "../../data/appInfo.data";

export default function AppSection() {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      chart: <FaChartLine className="text-5xl" />,
      scroll: <FaScroll className="text-5xl" />,
      trophy: <FaTrophy className="text-5xl" />,
      globe: <FaGlobe className="text-5xl" />,
      user: <FaUser className="text-5xl" />,
      bell: <FaBell className="text-5xl" />
    };
    return icons[iconName] || null;
  };

  return (
    <section id="app" className=" scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="App Móvil Vampyr"
          subtitle="Lleva tu experiencia de juego al siguiente nivel con estadísticas en tiempo real"
          gradient="purpleWhite"
        />

        <div className="mb-16 relative">
          <div className="bg-gradient-to-r from-purple-950/60 via-red-950/40 to-purple-950/60 p-12 rounded-2xl border border-purple-500/30 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 flex justify-center text-purple-400">
                <FaMobileAlt />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent mb-2 py-2">
                {APP_INFO.name}
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {APP_INFO.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="gradient" size="lg" href={APP_INFO.downloadLinks.android} icon={<FaMobileAlt />}>
                  Descargar para Android
                </Button>
                <Button variant="secondary" size="lg" href={APP_INFO.downloadLinks.ios} icon={<FaMobileAlt />}>
                  Descargar para iOS
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {APP_FEATURES.map((feature) => (
            <FeatureCard 
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={getIcon(feature.icon)}
            />
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent mb-8">
            Sincronización Perfecta Juego ↔ App
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APP_SYNC_FEATURES.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-950/30 to-black/60 p-6 rounded-xl border border-purple-900/30 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-950/40 via-black/60 to-purple-950/40 p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Escanea y Descarga
            </h3>
            <p className="text-gray-300 mb-6">
              Usa tu cámara para escanear el código QR y descargar la app directamente
            </p>
            <div className="inline-block p-4 bg-white rounded-xl">
              <img 
                src={APP_INFO.downloadLinks.qrCode}
                alt="QR Code para descargar la app"
                className="w-48 h-48"
              />
            </div>
            <p className="text-purple-400 text-sm mt-4 font-medium">
              Disponible para Android e iOS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
