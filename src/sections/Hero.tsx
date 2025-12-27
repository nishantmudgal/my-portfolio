import { Button } from '@/design-system'

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-bold">Hi, I’m Nishant 👋</h1>

      <p className="text-muted-foreground max-w-xl">
        Frontend-focused software developer building scalable, high-performance
        web applications.
      </p>

      <div className="flex gap-4">
        <Button>View Projects</Button>
        <Button variant="secondary">Contact Me</Button>
      </div>
    </section>
  )
}
