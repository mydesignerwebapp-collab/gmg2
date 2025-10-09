'use client'

import React from 'react'
import { motion, useTransform } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

const socialProofData = [
  {
    id: '1',
    value: 20,
    suffix: '+',
    label: 'Years Industry Experience'
  },
  {
    id: '2',
    value: 500,
    suffix: '+',
    label: 'Happy Clients'
  },
  {
    id: '3',
    value: 200,
    suffix: '+',
    label: 'Successful Home Loan Applications'
  },
  {
    id: '4',
    value: 100,
    suffix: '%',
    label: 'Independent Financial Guidance'
  }
]

export function SocialProofSection() {
  // Initialize all count-up hooks at the component level
  const count1 = useCountUp({
    end: socialProofData[0].value,
    delay: 500,
    duration: 3500,
  })
  
  const count2 = useCountUp({
    end: socialProofData[1].value,
    delay: 800,
    duration: 3500,
  })
  
  const count3 = useCountUp({
    end: socialProofData[2].value,
    delay: 1100,
    duration: 3500,
  })
  
  const count4 = useCountUp({
    end: socialProofData[3].value,
    delay: 1400,
    duration: 3500,
  })

  const displayValue1 = useTransform(count1, (latest) => Math.round(latest))
  const displayValue2 = useTransform(count2, (latest) => Math.round(latest))
  const displayValue3 = useTransform(count3, (latest) => Math.round(latest))
  const displayValue4 = useTransform(count4, (latest) => Math.round(latest))

  const counts = [displayValue1, displayValue2, displayValue3, displayValue4]

  return (
    <section className="py-12 bg-teal-500">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {socialProofData.map((item, index) => (
            <motion.div
              key={item.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + (index * 0.15) }}
            >
              <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                <motion.span>{counts[index]}</motion.span>
                <span>{item.suffix}</span>
              </motion.h3>
              <p className="social-proof-label">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 