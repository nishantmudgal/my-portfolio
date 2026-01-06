import { Container, Heading } from '@/design-system'
import { personalData } from '@/data/personal'

export default function About() {
  return (
    <section id="about" className="bg-background py-24">
      <Container>
        {/* Section Title */}
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            About
          </Heading>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            {personalData.about.description}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <img
              src="/assets/img/profile-img.jpg"
              alt="Profile"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-primary mb-4 text-2xl font-bold">
              {personalData.about.title}
            </h3>
            <p className="text-muted-foreground mb-6 italic">
              {personalData.about.description}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                {personalData.about.details.slice(0, 4).map((detail) => (
                  <div key={detail.label} className="flex items-center gap-2">
                    <span className="text-primary font-bold">{'>'}</span>
                    <strong>{detail.label}:</strong> <span>{detail.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {personalData.about.details.slice(4).map((detail) => (
                  <div key={detail.label} className="flex items-center gap-2">
                    <span className="text-primary font-bold">{'>'}</span>
                    <strong>{detail.label}:</strong> <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6">{personalData.about.longDescription}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
