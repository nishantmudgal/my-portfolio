import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', size = 'md', className, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          'focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          // Variants
          variant === 'primary' &&
            'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
          variant === 'secondary' &&
            'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
          variant === 'outline' &&
            'border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm',
          variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
          // Sizes
          size === 'sm' && 'h-8 px-3 text-xs',
          size === 'md' && 'h-9 px-4 py-2 text-sm',
          size === 'lg' && 'text-md h-10 px-8',
          size === 'icon' && 'h-9 w-9',
          className,
        )}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
