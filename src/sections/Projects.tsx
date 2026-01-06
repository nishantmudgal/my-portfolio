'use client'

import { useState } from 'react'
import { Container, Heading, ProjectCard } from '@/design-system'
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import { cn } from '@/design-system/utils/cn'
import { projects, portfolioFilters } from '@/data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'All' ? true : project.category === activeFilter,
  )

  return (
    <section id="projects" className="bg-secondary/10 py-24">
      <Container>
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            Portfolio
          </Heading>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex justify-center">
          <ul className="bg-background/50 flex flex-wrap justify-center gap-4 rounded-full px-6 py-2 shadow-sm">
            {portfolioFilters.map((filter) => (
              <li
                key={filter}
                className={cn(
                  'hover:text-primary cursor-pointer text-sm font-semibold uppercase transition-colors',
                  activeFilter === filter
                    ? 'text-primary'
                    : 'text-muted-foreground',
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
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
