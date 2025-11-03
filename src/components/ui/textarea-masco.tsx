import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex w-full rounded-[30px] border border-ColorBlack/50 bg-white px-[30px] py-[15px] text-base transition-all duration-300 min-h-[130px] resize-y',
          'placeholder:text-ColorBlack/50',
          'focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
