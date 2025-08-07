import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Planning & Budgeting', href: '#services' },
      { label: 'Cash Flow & Business', href: '#services' },
      { label: 'Lending & Finance', href: '#services' },
      { label: 'Investment Reviews', href: '#services' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Financial Health Check', href: '#contact' },
      { label: 'Free Consultation', href: '#contact' },
      { label: 'Business Performance', href: '#contact' },
      { label: 'FAQ', href: '#contact' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              GMG Financial Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Supporting individuals, families, and business owners with clear, practical financial advice 
              tailored to their unique circumstances. 20+ years of experience across accounting, finance, and banking.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-teal-400" />
                <a 
                  href="tel:1300GMGFIN"
                  className="hover:text-teal-400 transition-colors"
                >
                  1300 GMG FIN
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-teal-400" />
                <a 
                  href="mailto:info@gmgfinancial.com.au"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@gmgfinancial.com.au
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-teal-400 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Finance Broker. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>20+ Years Experience</span>
              <span>•</span>
              <span>Melbourne Based</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 