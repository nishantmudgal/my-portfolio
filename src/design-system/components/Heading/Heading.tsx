import { cn } from '../../utils/cn'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
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
        Component === 'h1' && 'text-4xl font-bold',
        Component === 'h2' && 'text-3xl font-semibold',
        Component === 'h3' && 'text-2xl font-semibold',
        className,
      )}
    >
      {children}
    </Component>
  )
}
