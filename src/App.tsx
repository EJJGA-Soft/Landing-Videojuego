import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import StorySection from "./components/sections/StorySection";
import CharactersSection from "./components/sections/CharactersSection";
import MechanicsSection from "./components/sections/MechanicsSection";
import EnemiesSection from "./components/sections/EnemiesSection";
import GallerySection from "./components/sections/GallerySection";
import LocationsSection from "./components/sections/LocationsSection";
import AppSection from "./components/sections/AppSection";
import FAQSection from "./components/sections/FAQSection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/StatsSection";
import ContactSection from "./components/sections/ContactSection";

import catacumbas from "./assets/locaciones/catacumbas.jpg";
import salaDelTrono from "./assets/locaciones/tronos.jpg";
import salidaDelCastillo from "./assets/locaciones/castillo.jpg";

export default function App() {
  const locationImages = [catacumbas, salaDelTrono, salidaDelCastillo];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-purple-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <StorySection />
          <CharactersSection />
          <MechanicsSection />
          <EnemiesSection />
          <GallerySection />
          <LocationsSection images={locationImages} />
          <StatsSection />
          <AppSection />
          <FAQSection />
          <ContactSection />
          <TeamSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
