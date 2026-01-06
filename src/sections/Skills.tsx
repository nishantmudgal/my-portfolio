import { Container, Heading } from '@/design-system'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary/10 py-24">
      <Container>
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            Skills
          </Heading>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between py-1">
                <span className="text-foreground text-sm font-bold uppercase">
                  {skill.name}
                </span>
                <span className="text-foreground text-sm font-bold">
                  {skill.val}%
                </span>
              </div>
              <div className="bg-muted mt-1 h-3 w-full overflow-hidden">
                <div
                  className="bg-primary h-full"
                  style={{ width: `${skill.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
