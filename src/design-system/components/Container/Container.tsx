import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 md:px-6', className)}>
      {children}
    </div>
  )
}
