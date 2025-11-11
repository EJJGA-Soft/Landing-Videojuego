import { TripleSlider } from "./Carousel.component";

export default function GallerySection() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
          Galería de Arte
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
      </div>
      <TripleSlider />
    </section>
  );
}
