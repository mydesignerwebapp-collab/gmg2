import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-[30px] top-1/2 -translate-y-1/2 text-ColorBlack/50 pointer-events-none">
            {icon}
          </div>
        )}
        <select
          className={cn(
            'flex w-full appearance-none rounded-full border border-ColorBlack/50 bg-white px-[30px] py-[15px] pr-[60px] text-base transition-all duration-300',
            'focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20',
            'disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-[60px]',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-[30px] top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-ColorBlack/50" />
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }
