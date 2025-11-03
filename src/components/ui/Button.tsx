import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'teal' | 'black' | 'white' | 'outline-black' | 'outline-white' | 'outline-teal'
  size?: 'sm' | 'default' | 'lg' | 'large'
  rounded?: 'small' | 'default' | 'full'
  animated?: boolean
  fullWidth?: boolean
  loading?: boolean
  asChild?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'teal',
    size = 'default',
    rounded = 'full',
    animated = false,
    fullWidth = false,
    loading = false,
    disabled,
    children,
    ...props
  }, ref) => {

    const baseClasses = 'inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'

    const variants = {
      teal: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500',
      black: 'bg-ColorBlack hover:bg-ColorBlack/90 text-white focus:ring-ColorBlack',
      white: 'bg-white hover:bg-gray-100 text-ColorBlack border-2 border-ColorBlack focus:ring-gray-300',
      'outline-black': 'bg-transparent hover:bg-ColorBlack text-ColorBlack hover:text-white border-2 border-ColorBlack focus:ring-ColorBlack',
      'outline-white': 'bg-transparent hover:bg-white text-white hover:text-ColorBlack border-2 border-white focus:ring-white',
      'outline-teal': 'bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white border-2 border-teal-500 focus:ring-teal-500',
    }

    const sizes = {
      sm: 'px-6 py-2 text-xs',
      default: 'px-8 py-3 text-sm',
      lg: 'px-8 py-3 text-sm xl:px-10 xl:py-4',
      large: 'px-8 py-3 text-sm xl:px-10 xl:py-4 text-base',
    }

    const roundedOptions = {
      small: 'rounded-[3px]',
      default: 'rounded-md',
      full: 'rounded-[50px]',
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          roundedOptions[rounded],
          fullWidth && 'w-full',
          animated && 'group',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {animated ? (
          <span className="relative z-10">{children}</span>
        ) : (
          children
        )}

        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 