import { Button } from '../Button'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { cn } from '../../utils/cn'

type ProjectCardProps = {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group bg-card text-card-foreground overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md',
        className,
      )}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <Heading as="h3" className="text-xl font-bold">
          {title}
        </Heading>

        <Text className="mt-2 line-clamp-3" variant="muted">
          {description}
        </Text>

        <ul className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                GitHub
              </Button>
            </a>
          )}

          {/* Always show View Project or Live if url exists */}
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm">Live Demo</Button>
            </a>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="pointer-events-none opacity-50"
            >
              Demo N/A
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
