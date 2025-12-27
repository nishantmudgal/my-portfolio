import { Button } from '@/design-system'

export default function Projects() {
  return (
    <section className="py-24 text-center">
      <h2 className="mb-6 text-3xl font-semibold">Featured Projects</h2>

      <p className="text-muted-foreground mb-8">
        Selected work showcasing frontend architecture and performance.
      </p>

      <Button>View All Projects</Button>
    </section>
  )
}
