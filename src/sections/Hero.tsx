import { FadeIn } from '@/components/animations/FadeIn'
import { Button, Container, Heading, Text } from '@/design-system'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-10 md:py-20">
      <Container className="text-center">
        <FadeIn>
          <div className="bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
            👋
          </div>
          <Heading as="h1" className="sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <br className="hidden sm:block" />
            <span className="text-primary text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
              Nishant Mudgal
            </span>
          </Heading>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Text
            variant="muted"
            className="mx-auto mt-6 max-w-[800px] leading-relaxed md:text-xl"
          >
            Software Engineer (Frontend) with 3+ years of experience building
            scalable, performant, and accessible products using React, Next.js,
            TypeScript, and GraphQL. Skilled in frontend architecture, design
            systems, CI/CD, and performance optimization.
          </Text>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#projects">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Download Resume
              </Button>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
