'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface FeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
	preheaderIcon?: React.ReactNode
	preheaderText?: string
	heading: React.ReactNode
	description: string
	buttonText?: string
	buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
	imageUrl: string
	imageAlt?: string
  boxed?: boolean
}

export const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, FeatureSpotlightProps>(
	(
		{
			className,
			preheaderIcon,
			preheaderText,
			heading,
			description,
			buttonText,
			buttonProps,
			imageUrl,
			imageAlt = 'Feature illustration',
			boxed = true,
			...props
		},
		ref
	) => {
		const wrapperClasses = boxed
			? 'w-full max-w-6xl mx-auto p-8 md:p-12 rounded-2xl bg-white border overflow-hidden'
			: 'w-full container-custom p-0 bg-transparent border-0 rounded-none overflow-visible';

		return (
			<section
				ref={ref}
				className={cn(wrapperClasses, className)}
				aria-labelledby="feature-spotlight-heading"
				{...props}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col space-y-6 text-left"
					>
						{(preheaderIcon || preheaderText) && (
							<div className="flex items-center gap-2 text-sm font-medium text-gray-600">
								{preheaderIcon}
								{preheaderText && <span>{preheaderText}</span>}
							</div>
						)}
						<h2 id="feature-spotlight-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f2937]">
							{heading}
						</h2>
						<p className="text-base text-gray-600 leading-relaxed">{description}</p>
						{buttonText && (
							<div>
								<Button {...buttonProps}>{buttonText}</Button>
							</div>
						)}
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative w-full min-h-[260px] flex items-center justify-center"
					>
						<img src={imageUrl} alt={imageAlt} className="w-full max-w-md object-contain" />
					</motion.div>
				</div>
			</section>
		)
	}
)

AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight'


