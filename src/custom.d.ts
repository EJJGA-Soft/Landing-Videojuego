declare module '*.css'
declare module '*.svg'
declare module 'swiper/css'
declare module 'swiper/css/effect-coverflow'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'

// Generic module for swiper modules when typings are missing
declare module 'swiper/modules/*'

// Shim for top-level swiper exports used in the app
declare module 'swiper' {
	export const Navigation: any
	export const Pagination: any
	export const Autoplay: any
	export const EffectCoverflow: any
	const _default: any
	export default _default
}

declare module 'swiper/react' {
	import React from 'react'
	export const Swiper: React.ComponentType<any>
	export const SwiperSlide: React.ComponentType<any>
}

declare module 'swiper/modules' {
	export const Navigation: any
	export const Pagination: any
	export const Autoplay: any
	export const EffectCoverflow: any
}
