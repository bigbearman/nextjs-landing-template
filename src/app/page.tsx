'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { Button, Dialog, Drawer, DefaultCarousel, SwiperCarousel } from '@/libs/ui'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section id="home">
          <Hero />
        </section>
        
        {/* Default Carousel */}
        <section id="default-carousel" className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Default Carousel</h2>
          <DefaultCarousel autoPlay interval={5000}>
            <div className="h-96 bg-red-500 flex items-center justify-center text-white">Slide 1</div>
            <div className="h-96 bg-blue-500 flex items-center justify-center text-white">Slide 2</div>
            <div className="h-96 bg-green-500 flex items-center justify-center text-white">Slide 3</div>
          </DefaultCarousel>
        </section>

        {/* Swiper Carousel */}
        <section id="swiper-carousel" className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Swiper Carousel</h2>
          <SwiperCarousel effect="fade" autoPlay interval={5000}>
            <div className="h-96 bg-purple-500 flex items-center justify-center text-white">Swiper 1</div>
            <div className="h-96 bg-pink-500 flex items-center justify-center text-white">Swiper 2</div>
            <div className="h-96 bg-yellow-500 flex items-center justify-center text-white">Swiper 3</div>
          </SwiperCarousel>
        </section>

        <section id="dialog">
          <Button variant="primary" size="md" onClick={() => setIsOpen(true)}>Click me</Button>

          <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello">
            <p>Dialog content</p>
          </Dialog>

          <Drawer isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} side="right">
            <div className="p-4">Drawer content</div>
          </Drawer>
        </section>

        <section id="features">
          <Features />
        </section>
        <section id="about">
          <CTA />
        </section>
        <Footer />
      </main>
    </>
  )
}
