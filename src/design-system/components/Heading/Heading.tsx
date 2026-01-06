import { cn } from '../../utils/cn'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  children: React.ReactNode
}

export function Heading({
  as: Component = 'h2',
  className,
  children,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'font-heading text-foreground tracking-tight',
        Component === 'h1' && 'text-4xl font-bold lg:text-5xl',
        Component === 'h2' && 'text-3xl font-semibold lg:text-4xl',
        Component === 'h3' && 'text-2xl font-semibold lg:text-3xl',
        Component === 'h4' && 'text-xl font-semibold lg:text-2xl',
        className,
      )}
    >
      {children}
    </Component>
  )
}
