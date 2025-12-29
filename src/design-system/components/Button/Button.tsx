import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'rounded-md px-4 py-2 text-sm font-medium',
        variant === 'primary' && 'bg-[hsl(var(--ds-primary))] text-white',
        variant === 'secondary' && 'bg-[hsl(var(--ds-secondary))] text-black',
        className,
      )}
    >
      {children}
    </button>
  )
}
