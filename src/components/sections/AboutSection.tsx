'use client'

import React from 'react'
 
import { Eye } from 'lucide-react'
import { AnimatedFeatureSpotlight } from '@/components/ui/feature-spotlight'

// Removed legacy credentials list and icon usage

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-ColorOffWhite">
      <div className="container-custom">
        <AnimatedFeatureSpotlight
          preheaderIcon={<Eye className="h-4 w-4" />}
          preheaderText="About GMG Financial Services"
          heading={
            <>
              <span className="text-teal-500">Clear</span> Practical Financial Advice
            </>
          }
          description="We support individuals, families, and business owners with tailored strategies across budgeting, cash flow, lending support, and investment reviews. 20+ years across accounting, finance, and banking."
          buttonText="Free Consultation"
          buttonProps={{ variant: 'teal', size: 'large' }}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Professional financial advisor meeting with clients"
          boxed={false}
        />
      </div>
    </section>
  )
}