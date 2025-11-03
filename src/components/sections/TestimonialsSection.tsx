'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Melbourne Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop',
    quote: 'GMG Financial Services helped us navigate complex business financing with clarity and confidence. Their practical advice made all the difference.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Melbourne Family',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    quote: 'Thanks to GMG, we secured our dream home with a loan structure that actually works for our family. Professional, responsive, and genuinely helpful.',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Melbourne Professional',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    quote: 'The refinancing strategy GMG provided saved us thousands. They took time to understand our situation and delivered results that exceeded expectations.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 xl:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ColorBlack mb-5">
            Client Testimonials
          </h2>
          <p className="text-base xl:text-lg text-ColorBlack/70 max-w-2xl mx-auto">
            Real stories from clients who trust GMG Financial Services with their financial future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-10 xl:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card-masco text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-base font-semibold text-ColorBlack">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-ColorBlack/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-sm xl:text-base text-ColorBlack/70 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="teal"
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Video Testimonials
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
