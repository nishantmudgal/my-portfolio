'use client'

import { Container, Heading, ProjectCard } from '@/design-system'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/10 py-24">
      <Container>
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            Projects
          </Heading>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="animate-in fade-in zoom-in duration-500"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
