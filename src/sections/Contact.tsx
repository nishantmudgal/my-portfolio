import { Button, Container, Heading } from '@/design-system'
import { FadeIn } from '@/components/animations/FadeIn'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary/30 py-24">
      <Container className="text-center">
        <FadeIn>
          <Heading as="h2" className="mb-6">
            Let’s Work Together
          </Heading>

          <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>

          <a href="mailto:3nishantmudgal@gmail.com">
            <Button size="lg" className="mb-12">
              <Mail className="mr-2 h-4 w-4" /> Say Hello
            </Button>
          </a>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
