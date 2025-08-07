'use client'

import React from 'react'
import { motion } from 'framer-motion'

const socialProofData = [
  {
    id: '1',
    value: '20+',
    label: 'Years Industry Experience'
  },
  {
    id: '2',
    value: '500+',
    label: 'Happy Clients'
  },
  {
    id: '3',
    value: '200+',
    label: 'Successful Home Loan Applications'
  },
  {
    id: '4',
    value: '100%',
    label: 'Independent Financial Guidance'
  }
]

export function SocialProofSection() {
  return (
    <section className="py-12 bg-teal-500">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialProofData.map((item, index) => (
            <motion.div
              key={item.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {item.value}
              </h3>
              <p className="text-white/90 text-sm lg:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 