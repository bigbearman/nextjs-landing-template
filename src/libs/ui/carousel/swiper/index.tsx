'use client'

import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface SwiperCarouselProps {
  children: ReactNode[]
  effect?: 'slide' | 'fade'
  autoPlay?: boolean
  interval?: number
  showNavigation?: boolean
  showPagination?: boolean
}

export default function SwiperCarousel({
  children,
  effect = 'slide',
  autoPlay = true,
  interval = 5000,
  showNavigation = true,
  showPagination = true,
}: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect={effect}
      slidesPerView={1}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      autoplay={autoPlay ? { delay: interval, disableOnInteraction: false } : false}
      loop={true}
      className="w-full"
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
} 