import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import gameArt from '../assets/react.svg'

type Slide = {
  id: number
  title: string
  tag: string
  image?: string
}

const slides: Slide[] = [
  { id: 1, title: 'Vampyr: Rise of the Night Walkers', tag: 'Acción / Horror', image: gameArt },
  { id: 2, title: 'Nebula Drift', tag: 'Ciencia ficción', image: gameArt },
  { id: 3, title: 'Blade of Echoes', tag: 'RPG / Aventura', image: gameArt },
  { id: 4, title: 'Skyforge Racers', tag: 'Carreras', image: gameArt },
  { id: 5, title: 'Mystic Arena', tag: 'Multijugador', image: gameArt }
]

export function Carousel3D() {
  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">

      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 300,
            modifier: 1.2,
            slideShadows: true
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-[80vh] w-full px-6"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id} style={{ width: '60vw', height: '70vh' }}>
              <div className="h-full rounded-3xl p-6 shadow-2xl bg-gradient-to-b from-gray-900/60 to-black flex flex-col">
                <div className="flex-1 flex items-center justify-center bg-white/5 rounded-xl overflow-hidden">
                  {s.image ? (
                    <img src={s.image} alt={s.title} className="max-w-[55vw] max-h-[60vh] object-contain" />
                  ) : (
                    <div className="w-56 h-56 bg-gray-700 rounded-md" />
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-white text-3xl font-semibold">{s.title}</h3>
                  <p className="text-gray-300 text-base mt-2">{s.tag}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export function TripleSlider() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-white text-2xl mb-6">Triple Slider — Highlights</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={`tr-${s.id}`}>
            <div className="bg-gradient-to-b from-indigo-900/40 via-black to-black rounded-xl p-4 h-64 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <img src={s.image} alt={s.title} className="w-28 h-28 object-contain" />
              </div>
              <div className="mt-3">
                <h3 className="text-white font-bold">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.tag}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel3D
