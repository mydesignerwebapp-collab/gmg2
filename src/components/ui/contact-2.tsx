"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Globe, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { Select } from "@/components/ui/Select"

interface Contact2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  web?: {
    label: string
    url: string
  }
}

export function Contact2({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "1300 GMG FIN",
  email = "info@gmgfinancial.com.au",
  web = { label: "gmgfinancial.com.au", url: "https://gmgfinancial.com.au" }
}: Contact2Props) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 xl:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ColorBlack mb-5">
            {title}
          </h2>
          <p className="text-base xl:text-lg text-ColorBlack/70 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="card-masco shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-Poppins font-bold text-ColorBlack">
                      Phone
                    </h3>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-ColorBlack/70 hover:text-teal-500 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-Poppins font-bold text-ColorBlack">
                      Email
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-ColorBlack/70 hover:text-teal-500 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-Poppins font-bold text-ColorBlack">
                      Website
                    </h3>
                    <a
                      href={web.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ColorBlack/70 hover:text-teal-500 transition-colors"
                    >
                      {web.label}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-ColorOffWhite rounded-[3px] p-6 xl:p-8">
                <h3 className="text-base xl:text-lg font-semibold text-ColorBlack mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-ColorBlack/70">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-Poppins font-bold text-ColorBlack mb-8">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                      required
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                      required
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Service Required *
                    </Label>
                    <Select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="planning">Planning & Budgeting</option>
                      <option value="cashflow">Cash Flow & Business Performance</option>
                      <option value="lending">Lending & Finance Support</option>
                      <option value="investment">Investment & Portfolio Reviews</option>
                      <option value="health-check">Financial Health Check</option>
                      <option value="consultation">Consultation & Ongoing Advice</option>
                    </Select>
                    {errors.service && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.service}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your financial goals and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="teal"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 