'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

const services = [
  {
    id: '1',
    title: 'Planning & Budgeting',
    description: 'Develop practical, goal-oriented financial plans and implement budgeting systems that work in real life.',
    icon: Home,
    href: '#contact'
  },
  {
    id: '2',
    title: 'Cash Flow & Business Performance',
    description: 'Review and improve business cash flow, provide insights into financial health, and identify growth opportunities.',
    icon: TrendingUp,
    href: '#contact'
  },
  {
    id: '3',
    title: 'Lending & Finance Support',
    description: 'Personalised solutions for borrowers, homeowners, and investors with direct bank liaison.',
    icon: Building2,
    href: '#contact'
  },
  {
    id: '4',
    title: 'Investment & Portfolio Reviews',
    description: 'Assess property and investment portfolios for performance and tax efficiency.',
    icon: TrendingUp,
    href: '#contact'
  },
  {
    id: '5',
    title: 'Financial Health Checks',
    description: 'Full review of your current financial position with clear recommendations for improvement.',
    icon: Home,
    href: '#contact'
  },
  {
    id: '6',
    title: 'Consultation & Ongoing Advice',
    description: 'Act as your trusted financial sounding board with honest, strategic advice.',
    icon: Building2,
    href: '#contact'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-ColorOffWhite">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 xl:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ColorBlack mb-5">
            Our core services
          </h2>
          <p className="text-base xl:text-lg text-ColorBlack/70 max-w-2xl mx-auto">
            Supporting individuals, families, and business owners with clear, practical financial advice
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-masco text-center flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg xl:text-xl font-semibold text-ColorBlack mb-4">
                  {service.title}
                </h3>

                <p className="text-sm xl:text-base text-ColorBlack/70 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <Button
                  variant="outline-teal"
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="md:hidden px-1 mb-2 flex items-center gap-2 text-xs text-ColorBlack/60">
          <span>Swipe</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative md:hidden h-scroll h-scroll-reveal-next mt-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="h-scroll-item w-[75%] max-w-xs card-masco text-center mr-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white mb-3">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-ColorBlack mb-2">{service.title}</h3>
              <p className="text-xs text-ColorBlack/70 mb-4">{service.description}</p>
              <Button variant="outline-teal" size="sm" onClick={() => scrollToSection('#contact')}>Learn More</Button>
            </motion.div>
          ))}
          <div className="h-scroll-cue" />
        </div>
      </div>
    </section>
  )
} 