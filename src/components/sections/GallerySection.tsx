import SectionHeader from "../shared/SectionHeader";
import { TripleSlider } from "../shared/Carousel";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Galería de Personajes"
          subtitle="Explora visualmente a todos los habitantes del castillo"
          gradient="purpleWhite"
        />
        <TripleSlider />
      </div>
    </section>
  );
}
