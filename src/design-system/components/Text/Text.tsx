import { cn } from '../../utils/cn'

type TextProps = {
  as?: 'p' | 'span' | 'div'
  variant?: 'body' | 'muted'
  className?: string
  children: React.ReactNode
}

export function Text({
  as: Component = 'p',
  variant = 'body',
  className,
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        variant === 'body' && 'text-foreground text-base',
        variant === 'muted' && 'text-muted-foreground text-sm',
        className,
      )}
    >
      {children}
    </Component>
  )
}
