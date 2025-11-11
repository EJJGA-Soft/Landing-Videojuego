import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { SlideProps } from "../types/Props";

// Importar imágenes de personajes
import vampyrImg from "../assets/personajes/MAINPLAYER.png";
import draculaImg from "../assets/personajes/DRACULA.png";
import braunerImg from "../assets/personajes/BLOODKNIGHT.png";
import mentorImg from "../assets/personajes/MENTOR.png";
import skeletonImg from "../assets/personajes/SKELETON.png";
import zombieImg from "../assets/personajes/ZOMBIE.png";
import slimeImg from "../assets/personajes/SLIME.png";
import batImg from "../assets/personajes/BAT.png";

type Slide = {
  id: number;
  title: string;
  tag: string;
  description: string;
  image?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Vampyr (Adrián)",
    tag: "Protagonista / Clan: Cazador de Monstruos",
    description: "Un joven que soñaba con ser caballero. Tras la masacre de su aldea por Brauner, se convirtió en vampiro para obtener el poder necesario y vengar a su familia.",
    image: vampyrImg,
  },
  {
    id: 2,
    title: "Drácula",
    tag: "Antagonista Principal / Jefe Final",
    description: "El ser oscuro que tiraniza el continente. Comanda las fuerzas de la noche desde la Sala del Trono. Ataca con espada y bolas de fuego.",
    image: draculaImg,
  },
  {
    id: 3,
    title: "Brauner - Caballero de Sangre",
    tag: "Jefe Opcional / Elite de Drácula",
    description: "Responsable directo de la masacre de la familia de Vampyr. Un guerrero letal con hacha que posee mayor vida, resistencia y daño.",
    image: braunerImg,
  },
  {
    id: 4,
    title: "El Mentor",
    tag: "Aliado / Maestro",
    description: "El misterioso hombre que rescató y entrenó a Adrián como cazador de monstruos. Guarda un oscuro secreto sobre su verdadera identidad.",
    image: mentorImg,
  },
  {
    id: 5,
    title: "Esqueleto",
    tag: "Enemigo Común / Catacumbas",
    description: "Caballero revivido que ataca con una espada oxidada. Dropea armas aleatorias al ser derrotado.",
    image: skeletonImg,
  },
  {
    id: 6,
    title: "Zombie",
    tag: "Enemigo Común / Catacumbas",
    description: "Muerto viviente de bajo nivel que ataca con una espada ensangrentada. Dropea armas aleatorias.",
    image: zombieImg,
  },
  {
    id: 7,
    title: "Slime",
    tag: "Enemigo Común / Alcantarillas",
    description: "Dañino al contacto. No posee un ataque directo consciente. Dropea armas aleatorias.",
    image: slimeImg,
  },
  {
    id: 8,
    title: "Murciélago",
    tag: "Enemigo Común / Profundidades",
    description: "Vuela erráticamente por el castillo y ataca cuando se siente amenazado. Dropea armas aleatorias.",
    image: batImg,
  },
];

export function Carousel3D({ ...props }: SlideProps) {
  return (
    <section
      className={`${props.className} w-full h-screen relative overflow-hidden`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 300,
            modifier: 1.2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-[80vh] w-full px-6 "
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id} style={{ width: "60vw", height: "70vh" }}>
              <div className="h-full rounded-3xl p-6 shadow-2xl bg-gradient-to-b from-red-950/80 via-black to-black border-2 border-red-900/50 flex flex-col">
                <div className="flex-1 flex items-center justify-center bg-red-950/10 rounded-xl overflow-hidden border border-red-900/30">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="max-w-[55vw] max-h-[60vh] object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    />
                  ) : (
                    <div className="w-56 h-56 bg-red-950/50 rounded-md" />
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-red-100 text-3xl font-semibold drop-shadow-[0_0_10px_rgba(220,38,38,0.7)]">
                    {s.title}
                  </h3>
                  <p className="text-red-400 text-base mt-1 font-medium">{s.tag}</p>
                  <p className="text-gray-300 text-sm mt-3 line-clamp-3">{s.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export function TripleSlider() {
  return (
      <div className="max-w-6xl mx-auto py-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="triple-swiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={`tr-${s.id}`}>
            <div className="bg-gradient-to-b from-red-950/60 via-black to-black rounded-xl p-4 h-80 flex flex-col border-2 border-red-900/40 shadow-lg shadow-red-900/30">
              <div className="flex-1 flex items-center justify-center bg-red-950/10 rounded-lg border border-red-900/20">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-32 h-32 object-contain drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-red-100 font-bold text-lg">{s.title}</h3>
                <p className="text-red-400 text-xs font-medium mt-1">{s.tag}</p>
                <p className="text-gray-300 text-xs mt-2 line-clamp-2">{s.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel3D;
