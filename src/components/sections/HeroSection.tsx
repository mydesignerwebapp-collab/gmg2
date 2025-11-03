'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId) as HTMLElement
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/HeroBG.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-4xl text-left text-white">
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-Poppins font-bold leading-[1.2] mb-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Take control of
            <br />
            <span className="text-teal-300">your financial future</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base xl:text-lg mb-10 xl:mb-12 text-white/90 max-w-2xl leading-relaxed text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Clear, practical financial advice tailored to your unique circumstances
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              LET'S GET STARTED
            </button>

            <button
              onClick={() => handleScrollToSection('#about')}
              className="px-8 py-4 bg-white hover:bg-ColorOffWhite text-ColorBlack rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              FREE CONSULTATION
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 