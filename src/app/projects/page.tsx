import { Container, Heading } from '@/design-system'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/design-system'

export default function ProjectsPage() {
  return (
    <Container className="py-24">
      <Heading as="h1" className="mb-8">
        Projects
      </Heading>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </Container>
  )
}
