import { Container, Heading, ProjectCard } from '@/design-system'
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'

const projects = [
  {
    title: 'McKinsey.com Navigation Redesign',
    description:
      'Complete frontend architecture overhaul improving navigation performance by ~32% and achieving WCAG AA accessibility compliance.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Accessibility'],
    githubUrl: undefined,
    liveUrl: '#',
  },
  {
    title: 'Global JAMstack Platform',
    description:
      'High-traffic platform for 5M+ monthly users. Improved page load time by ~28% through optimized bundling and caching strategies.',
    techStack: ['Next.js', 'JAMstack', 'Performance', 'Caching'],
    githubUrl: undefined,
    liveUrl: '#',
  },
  {
    title: 'Biometric Access Firmware',
    description:
      'Production firmware for biometric access control terminals. Optimized hardware-software integration for stability.',
    techStack: ['C++', 'Linux', 'Embedded Systems'],
    githubUrl: undefined,
    liveUrl: undefined,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <FadeIn>
          <div className="mb-16 text-center">
            <Heading as="h2">Featured Projects</Heading>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
              A selection of projects that showcase my skills in frontend
              development and user interface design.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <FadeIn key={project.title}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  )
}
