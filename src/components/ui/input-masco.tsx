import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-[30px] top-1/2 -translate-y-1/2 text-ColorBlack/50">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-full border border-ColorBlack/50 bg-white px-[30px] py-[15px] text-base transition-all duration-300',
            'placeholder:text-ColorBlack/50',
            'focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20',
            'disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-[60px]',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
