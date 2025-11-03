import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'teal' | 'teal-dark' | 'outline-teal' | 'outline-black' | 'white' | 'black'
  size?: 'sm' | 'default' | 'lg' | 'large'
  rounded?: 'small' | 'default' | 'full'
  animated?: boolean
  asChild?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'teal',
    size = 'default',
    rounded = 'small',
    animated = false,
    fullWidth = false,
    children,
    ...props
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-Poppins font-semibold uppercase tracking-tighter transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      teal: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 border-2 border-teal-500',
      'teal-dark': 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-600 border-2 border-teal-600',
      'outline-teal': 'bg-transparent text-teal-500 border-2 border-teal-500 hover:bg-teal-500 hover:text-white focus:ring-teal-500',
      'outline-black': 'bg-transparent text-ColorBlack border-2 border-ColorBlack hover:bg-ColorBlack hover:text-white focus:ring-ColorBlack',
      white: 'bg-white text-ColorBlack border-2 border-ColorBlack hover:bg-gray-50 focus:ring-gray-300',
      black: 'bg-ColorBlack text-white border-2 border-ColorBlack hover:bg-gray-900 focus:ring-gray-900',
    }

    const sizes = {
      sm: 'px-6 py-2 text-xs',
      default: 'px-8 py-3 text-sm',
      lg: 'px-10 py-4 text-sm',
      large: 'px-8 py-3 text-sm xl:px-10 xl:py-4',
    }

    const roundedStyles = {
      small: 'rounded-[3px]',
      default: 'rounded-md',
      full: 'rounded-full',
    }

    const animatedStyles = animated ? 'hover:scale-105 active:scale-95' : ''

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          roundedStyles[rounded],
          animatedStyles,
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
