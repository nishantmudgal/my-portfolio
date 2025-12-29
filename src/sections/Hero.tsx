import { FadeIn } from '@/components/animations/FadeIn'
import { Button, Container, Heading, Text } from '@/design-system'

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container className="text-center">
        <FadeIn>
          <Heading as="h1">Hi, I’m Nishant 👋</Heading>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Text variant="muted" className="mt-4">
            Frontend-focused software developer building scalable,
            high-performance web applications.
          </Text>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
