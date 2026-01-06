'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/design-system'
import { personalData } from '@/data/personal'
import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react'

const TYPING_SPEED = 150
const DELETING_SPEED = 100
const PAUSE_TIME = 2000

const roles = personalData.roles

function Typewriter() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
      } else {
        setText(currentRole.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME)
        return
      }

      if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
    }

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="border-primary text-primary-foreground border-b-2 pb-1">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col justify-center bg-[url('/assets/img/hero-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-6xl font-bold tracking-tight text-white md:text-7xl">
            {personalData.name}
          </h1>
          <p className="text-3xl font-medium text-white md:text-4xl">
            I&apos;m <Typewriter />
          </p>

          <div className="flex justify-center gap-6 pt-4 text-white md:justify-start">
            <a
              href={personalData.socialParams.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalData.socialParams.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalData.socialParams.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href={personalData.socialParams.email}
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="flex justify-center pt-8 md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="group hover:bg-primary flex h-[56px] w-[200px] items-center overflow-hidden rounded-full bg-black/40 p-0 text-white shadow-sm transition-all duration-300 hover:text-white"
            >
              <div className="flex h-[56px] w-[56px] min-w-[56px] items-center justify-center">
                <Download className="h-6 w-6" />
              </div>
              <span className="pr-6 pl-2 text-base font-medium whitespace-nowrap">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
