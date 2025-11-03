'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Calculators', href: '#calculators' },
  { name: 'About', href: '#about' },
  { name: 'News', href: '#latest-news' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded z-[60] transition-all"
      >
        Skip to main content
      </a>
      
      <nav className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-ColorBlack/95 backdrop-blur-md border-b-2 border-teal-500/20'
          : 'bg-transparent'
      )}>
        <div className="container-custom">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center group" aria-label="GMG Financial Services homepage">
            <h1 className="text-xl xl:text-2xl font-bold text-white transition-colors group-hover:text-teal-500">
              GMG
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-3" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-all duration-300 rounded-full px-5 py-2.5",
                  "focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-ColorBlack",
                  activeSection === item.href.substring(1)
                    ? "bg-teal-500 text-white font-semibold"
                    : "text-white hover:bg-white/10 hover:text-teal-300"
                )}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden touch-target rounded-full p-2 text-white hover:text-teal-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ColorBlack/98 backdrop-blur-md border-t-2 border-teal-500/20"
          >
            <div className="container-custom py-6 space-y-3">
              <nav className="flex flex-col gap-3" role="navigation" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "text-left text-sm font-medium uppercase tracking-wide transition-all duration-300 rounded-full px-5 py-3 touch-target",
                      "focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-ColorBlack",
                      activeSection === item.href.substring(1)
                        ? "bg-teal-500 text-white font-semibold"
                        : "text-white hover:bg-white/10 hover:text-teal-300"
                    )}
                    aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  )
} 