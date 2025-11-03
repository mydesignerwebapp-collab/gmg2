import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            'w-full px-[30px] py-[15px] border rounded-[50px] transition-all duration-300 text-ColorBlack appearance-none bg-white focus:outline-none focus:ring-2',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-ColorBlack/50 focus:border-teal-500 focus:ring-teal-500/20',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-ColorBlack/50 pointer-events-none" />
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }
