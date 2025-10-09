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
  { name: 'Latest News', href: '#latest-news' },
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
          ? 'bg-black/50 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}>
        <div className="container-custom">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="GMG Financial Services homepage">
            <h1 className="text-md font-semibold text-white">
              GMG Financial Services
            </h1>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1",
                  activeSection === item.href.substring(1)
                    ? "text-teal-300 font-semibold"
                    : "text-white hover:text-teal-300"
                )}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden touch-target rounded-md text-white hover:text-teal-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-950 border-t border-gray-800"
          >
            <div className="container-custom py-4 space-y-4">
              {/* Mobile navigation links */}
              <nav className="flex flex-col gap-4" role="navigation" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-sm font-medium uppercase tracking-wider text-white hover:text-teal-300 transition-colors touch-target focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-950 rounded px-2"
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