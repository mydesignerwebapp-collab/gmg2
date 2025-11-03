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
    <footer className="bg-ColorBlack text-white border-t-2 border-teal-500/20">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-Poppins font-bold mb-6">
              GMG Financial Services
            </h3>
            <p className="text-base text-white/80 mb-8 leading-relaxed">
              Supporting individuals, families, and business owners with clear, practical financial advice
              tailored to their unique circumstances. 20+ years of experience across accounting, finance, and banking.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a
                  href="tel:1300GMGFIN"
                  className="hover:text-teal-300 transition-colors"
                >
                  1300 GMG FIN
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a
                  href="mailto:info@gmgfinancial.com.au"
                  className="hover:text-teal-300 transition-colors"
                >
                  info@gmgfinancial.com.au
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-Poppins font-bold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-teal-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-teal-500/10 mt-16 pt-12">
          <div className="mb-8">
            <h4 className="text-sm font-Poppins font-bold text-white/90 mb-4">General Disclaimer</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              This page provides general information only and has been prepared without taking into account your objectives,
              financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances
              and your full financial situation will need to be reviewed prior to acceptance of any offer or product.
              Information relating to credit services does not constitute legal, tax or financial advice and you should
              always seek professional advice in relation to your individual circumstances.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-Poppins font-bold text-white/90 mb-4">Licensing & Business Details</h4>
            <div className="text-xs text-white/60 space-y-2 leading-relaxed">
              <p>MG Accounting Services Pty Ltd – ABN 17 595 831 549</p>
              <p>GMG Financial Services Pty Ltd – ABN 15 618 903 861</p>
              <p>Credit Representative 405166 of Connective Credit Services Pty Ltd</p>
              <p>Australian Credit Licence 389328</p>
              <p>Credit Representative 405166 is authorised under Australian Credit Licence 389328. Your full financial situation will need to be assessed prior to acceptance of any offer or product.</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-Poppins font-bold text-white/90 mb-4">Non-Credit Services</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              All non-credit services offered by GMG Financial Services are conducted under a separate licence or registration.
              These services are not authorised under Australian Credit Licence 389328.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-teal-500/10">
            <p className="text-sm text-white/70">
              © 2024 GMG Financial Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
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