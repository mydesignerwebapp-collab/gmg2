'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button-masco'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card-masco'
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
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading leading-snug mb-6">
            Our core services
          </h2>
          <p className="section-description leading-relaxed max-w-3xl mx-auto">
            Supporting individuals, families, and business owners with clear, practical financial advice
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-500 text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="leading-relaxed mb-6 text-center">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline-teal"
                    size="default"
                    onClick={() => scrollToSection('#contact')}
                    className="mt-auto group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="md:hidden px-1 mb-2 flex items-center gap-2 text-xs text-gray-500">
          <span>Swipe</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="relative md:hidden h-scroll h-scroll-reveal-next mt-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="h-scroll-item w-[80%] max-w-xs mr-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-4 mx-auto">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-sm mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline-teal"
                    size="sm"
                    onClick={() => scrollToSection('#contact')}
                    className="mt-auto"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div className="h-scroll-cue" />
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                All non-credit services offered by GMG Financial Services are conducted under a separate licence or registration.
                These services are not authorised under Australian Credit Licence 389328.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 