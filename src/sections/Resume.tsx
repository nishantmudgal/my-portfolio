import { Container, Heading } from '@/design-system'
import { Download } from 'lucide-react'
import { experience, education, summary } from '@/data/resume'

export default function Resume() {
  return (
    <section id="resume" className="bg-background py-24">
      <Container>
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            Resume
          </Heading>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Summary & Education */}
          <div>
            <h3 className="text-foreground mb-6 text-2xl font-bold">Summary</h3>
            <div className="border-primary/30 before:border-primary before:bg-background relative border-l-2 pb-6 pl-6 before:absolute before:top-0 before:left-[-9px] before:h-4 before:w-4 before:rounded-full before:border-2">
              <h4 className="text-primary text-xl font-bold uppercase">
                {summary.name}
              </h4>
              <p className="text-muted-foreground mt-2 italic">
                {summary.description}
              </p>
              <ul className="text-muted-foreground mt-4 list-disc pl-4">
                <li>{summary.address}</li>
                <li>{summary.phone}</li>
                <li>{summary.email}</li>
              </ul>
            </div>

            <h3 className="text-foreground mt-8 mb-6 text-2xl font-bold">
              Education
            </h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border-primary/30 before:border-primary before:bg-background relative border-l-2 pb-6 pl-6 before:absolute before:top-0 before:left-[-9px] before:h-4 before:w-4 before:rounded-full before:border-2 last:pb-0"
              >
                <h4 className="text-primary text-lg font-bold uppercase">
                  {edu.degree}
                </h4>
                <h5 className="bg-secondary my-2 inline-block px-4 py-1 text-sm font-semibold">
                  {edu.period}
                </h5>
                <p className="text-muted-foreground mb-2 italic">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Experience */}
          <div>
            <h3 className="text-foreground mb-6 text-2xl font-bold">
              Professional Experience
            </h3>
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="border-primary/30 before:border-primary before:bg-background relative border-l-2 pb-6 pl-6 before:absolute before:top-0 before:left-[-9px] before:h-4 before:w-4 before:rounded-full before:border-2 last:pb-0"
              >
                <h4 className="text-primary text-lg font-bold uppercase">
                  {job.role}
                </h4>
                <h5 className="bg-secondary my-2 inline-block px-4 py-1 text-sm font-semibold">
                  {job.period}
                </h5>
                <p className="text-muted-foreground mb-2 italic">
                  {job.company}
                </p>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
