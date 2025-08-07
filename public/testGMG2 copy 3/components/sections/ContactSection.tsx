'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '1300 GMG FIN',
    href: 'tel:1300GMGFIN'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@gmgfinancial.com.au',
    href: 'mailto:info@gmgfinancial.com.au'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Melbourne, Australia',
    href: '#'
  }
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take control of your financial future? Let's start the conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-teal-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              className="mt-12 p-6 bg-white rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-heading text-gray-900 mb-3">
                Why Choose GMG?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 20+ years of combined experience</li>
                <li>• Clear, practical financial advice</li>
                <li>• Personalised solutions that work</li>
                <li>• Ongoing support and consultation</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Your Name *"
                {...register('name')}
                error={errors.name?.message}
                placeholder="Enter your full name"
              />

              <Input
                label="Your Email *"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="Enter your email address"
              />

              <Input
                label="Your Phone"
                type="tel"
                {...register('phone')}
                error={errors.phone?.message}
                placeholder="Enter your phone number"
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">
                  Service Required *
                </label>
                <select
                  {...register('service')}
                  className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="planning">Planning & Budgeting</option>
                  <option value="cashflow">Cash Flow & Business Performance</option>
                  <option value="lending">Lending & Finance Support</option>
                  <option value="investment">Investment & Portfolio Reviews</option>
                  <option value="health-check">Financial Health Check</option>
                  <option value="consultation">Consultation & Ongoing Advice</option>
                </select>
                {errors.service && (
                  <p className="text-sm text-red-600" role="alert">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-colors duration-200"
                  placeholder="Tell us about your needs and goals..."
                />
              </div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 