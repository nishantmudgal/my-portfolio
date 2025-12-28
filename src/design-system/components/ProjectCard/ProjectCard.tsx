import { Button } from '../Button'
import { Text } from '../Text'
import { Heading } from '../Heading'

type ProjectCardProps = {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border p-6 text-left">
      <Heading as="h3">{title}</Heading>

      <Text className="mt-2" variant="muted">
        {description}
      </Text>

      <ul className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li key={tech} className="bg-muted rounded px-2 py-1 text-xs">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {githubUrl && <Button variant="secondary">GitHub</Button>}
        {liveUrl && <Button>Live</Button>}
      </div>
    </div>
  )
}
