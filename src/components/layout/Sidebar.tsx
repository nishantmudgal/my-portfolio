'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'
import { siteConfig } from '@/config/site'
import {
  Home,
  User,
  FileText,
  Image as ImageIcon,
  Mail,
  Server,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { cn } from '@/design-system/utils/cn'

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Resume', href: '#resume', icon: FileText },
  { name: 'Portfolio', href: '#projects', icon: ImageIcon },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export function Sidebar({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'minimal'
}) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100 // Offset for header/padding

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (variant === 'minimal') {
    return (
      <aside
        className={cn(
          'fixed top-0 bottom-0 left-0 z-40 flex hidden flex-col justify-center bg-transparent px-4 py-8 md:flex',
          className,
        )}
      >
        <nav className="flex w-full flex-col items-start gap-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'group hover:bg-primary flex h-[56px] w-[56px] items-center overflow-hidden rounded-full p-0 shadow-sm transition-all duration-300 hover:w-full hover:text-white dark:bg-gray-800/50',
                  isActive
                    ? 'bg-primary w-full text-white'
                    : 'text-muted-foreground bg-gray-100/50',
                )}
              >
                <div className="flex h-[56px] w-[56px] min-w-[56px] items-center justify-center">
                  <item.icon className="h-6 w-6" />
                </div>
                <span
                  className={cn(
                    'pr-6 pl-2 text-base font-medium whitespace-nowrap transition-opacity duration-300',
                    isActive
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100',
                  )}
                >
                  {item.name}
                </span>
              </a>
            )
          })}
          {/* Theme Toggle within the minimal nav, perhaps as a standalone icon? */}
          <div className="group text-muted-foreground hover:bg-primary flex h-[56px] w-[56px] items-center overflow-hidden rounded-full bg-gray-100/50 shadow-sm transition-all duration-300 hover:text-white dark:bg-gray-800/50">
            <div className="flex h-full w-full items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </aside>
    )
  }

  return (
    <aside
      className={cn(
        'bg-background fixed top-0 left-0 z-40 hidden h-screen w-[300px] overflow-y-auto border-r px-6 py-8 shadow-lg md:flex md:flex-col',
        className,
      )}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="border-muted/20 mb-6 h-32 w-32 overflow-hidden rounded-full border-8">
          <img
            src="/assets/img/profile-img.jpg"
            alt={siteConfig.name}
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-foreground mb-2 text-2xl font-bold">
          {siteConfig.name}
        </h1>

        <div className="mb-8 flex gap-4">
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-4 transition-colors',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span
                    className={cn(
                      'text-lg font-medium decoration-2 underline-offset-4',
                      isActive
                        ? 'decoration-primary underline'
                        : 'group-hover:underline',
                    )}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="text-muted-foreground mt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </aside>
  )
}
