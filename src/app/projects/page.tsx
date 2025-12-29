import { Container, Heading } from '@/design-system'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/design-system'
import { FadeIn } from '@/components/animations/FadeIn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected projects showcasing scalable frontend architecture and design systems.',
}

export default function ProjectsPage() {
  return (
    <Container className="py-24">
      <Heading as="h1" className="mb-8">
        Projects
      </Heading>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.05}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
