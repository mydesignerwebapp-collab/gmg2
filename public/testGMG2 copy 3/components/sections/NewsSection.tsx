'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqItems = [
  {
    id: '1',
    question: 'What services does GMG Financial Services offer?',
    answer: 'We offer comprehensive financial services including planning & budgeting, cash flow management, lending support, investment reviews, financial health checks, and ongoing consultation. Our 20+ years of experience covers accounting, finance, and banking.'
  },
  {
    id: '2',
    question: 'How much experience do you have in financial services?',
    answer: 'We have over 20 years of combined experience across accounting, finance, and banking industries. This gives us deep insights into various financial scenarios and allows us to provide practical, real-world advice.'
  },
  {
    id: '3',
    question: 'Do you work with individuals and businesses?',
    answer: 'Yes, we support individuals, families, and business owners. Our services are tailored to each client\'s unique circumstances, whether you\'re planning personal finances or managing business cash flow and performance.'
  },
  {
    id: '4',
    question: 'What areas do you service?',
    answer: 'We primarily service Melbourne and surrounding areas, but can work with clients across Australia depending on their needs and the specific services required.'
  },
  {
    id: '5',
    question: 'How do I get started with a consultation?',
    answer: 'Getting started is easy! Simply contact us via phone (1300 GMG FIN), email, or fill out our contact form. We\'ll arrange a free initial consultation to discuss your financial goals and how we can help.'
  },
  {
    id: '6',
    question: 'What makes GMG different from other financial advisors?',
    answer: 'Our approach is practical and results-focused. We translate complex financial matters into plain language, provide honest strategic advice, and focus on solutions that work in real life. Plus, our 20+ years of experience across multiple financial disciplines gives us a unique perspective.'
  }
]

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services and approach
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="card border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <h3 className="text-lg font-heading text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 