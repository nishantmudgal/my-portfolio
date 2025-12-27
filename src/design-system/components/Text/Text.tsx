import { HTMLAttributes, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: 'p' | 'span' | 'div' | 'label'
  variant?: 'body' | 'caption' | 'small'
  className?: string
}

export default function Text({
  children,
  as: Component = 'p',
  variant = 'body',
  className = '',
  ...props
}: TextProps) {
  const variants = {
    body: 'text-base',
    caption: 'text-sm text-gray-600',
    small: 'text-xs text-gray-500',
  }

  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}

