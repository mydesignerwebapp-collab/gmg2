'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'teal' | 'black' | 'white' | 'outline-black' | 'outline-white' | 'outline-teal'
  size?: 'sm' | 'default' | 'lg' | 'large'
  rounded?: 'small' | 'default' | 'full'
}

interface FeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
	preheaderIcon?: React.ReactNode
	preheaderText?: string
	heading: React.ReactNode
	description: string
	buttonText?: string
	buttonProps?: ButtonProps
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
			? 'w-full max-w-6xl mx-auto p-8 xl:p-12 rounded-[3px] bg-white overflow-hidden'
			: 'w-full p-0 bg-transparent overflow-visible';

		return (
			<section
				ref={ref}
				className={cn(wrapperClasses, className)}
				aria-labelledby="feature-spotlight-heading"
				{...props}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col space-y-4 xl:space-y-6 text-left"
					>
						{(preheaderIcon || preheaderText) && (
							<div className="flex items-center gap-2 text-sm font-semibold text-teal-500 uppercase tracking-wide">
								{preheaderIcon}
								{preheaderText && <span>{preheaderText}</span>}
							</div>
						)}
						<h2 id="feature-spotlight-heading" className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ColorBlack">
							{heading}
						</h2>
						<p className="text-base xl:text-lg text-ColorBlack/70 leading-relaxed">{description}</p>
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
						className="relative w-full min-h-[260px] xl:min-h-[320px] flex items-center justify-center"
					>
						<img src={imageUrl} alt={imageAlt} className="w-full max-w-md xl:max-w-lg object-contain rounded-[3px]" />
					</motion.div>
				</div>
			</section>
		)
	}
)

AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight'


