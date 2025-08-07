'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Users } from 'lucide-react'

const credentials = [
  {
    id: '1',
    icon: GraduationCap,
    text: '20+ Years Experience'
  },
  {
    id: '2',
    icon: Award,
    text: 'Accounting, Finance & Banking'
  },
  {
    id: '3',
    icon: Users,
    text: 'Individuals, Families & Businesses'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-8">
              About GMG Financial Services
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At GMG Financial Services, we support individuals, families, and business owners 
                with clear, practical financial advice tailored to their unique circumstances. 
                With over 20 years of experience across accounting, finance, and banking, 
                we empower our clients to make confident decisions.
              </p>
              
              <p>
                We take control of your financial future by providing personalised solutions 
                that work in real life. Our approach is practical, professional, and focused 
                on achieving your short and long-term financial goals.
              </p>
            </div>

            {/* Credentials */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.id}
                  className="flex items-center gap-4 text-teal-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <credential.icon className="h-6 w-6" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {credential.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional financial advisor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-lg opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 