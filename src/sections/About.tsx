import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import { Container, Heading, Text } from '@/design-system'

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Figma',
]

export default function About() {
  return (
    <section id="about" className="bg-secondary/30 py-20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">
          About Me
        </Heading>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="space-y-4">
              <Heading as="h3" className="text-2xl">
                Who I Am
              </Heading>
              <Text>
                I am a dedicated software developer with a passion for building
                digital products that look great and perform even better. I
                enjoy turning complex problems into simple, beautiful, and
                intuitive designs.
              </Text>
              <Text>
                When I&apos;m not coding, you&apos;ll find me reading about new
                technologies, tweaking my setup, or exploring the outdoors.
              </Text>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.2}>
              <Heading as="h3" className="mb-6 text-2xl">
                Skills
              </Heading>
            </FadeIn>
            <FadeInStagger>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <FadeIn key={skill}>
                    <span className="bg-background hover:border-primary cursor-default rounded-full border px-3 py-1 text-sm font-medium transition-colors">
                      {skill}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
