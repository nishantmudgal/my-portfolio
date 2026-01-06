import { Container, Heading, Text, Button } from '@/design-system'
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn'
import { Download, Briefcase, GraduationCap, Calendar } from 'lucide-react'

const experience = [
  {
    role: 'Software Engineer',
    company: 'McKinsey & Company',
    period: 'June 2022 - Present',
    description:
      'Led and delivered complete frontend architecture for navigation redesign (32% perf improvement, WCAG AA). Built global-scale JAMstack platform for 5M+ monthly users (28% load time reduction). Engineered GSAP animations, built a reusable design system (40% dev time reduction), and implemented strict CSP.',
  },
  {
    role: 'Software Engineer',
    company: 'IDEMIA',
    period: 'June 2018 - Sept 2019',
    description:
      'Developed production firmware for biometric access control terminals using C++ and Linux. Built secure web interfaces using JavaScript and HTML. Collaborated with Agile Scrum teams to ship stable firmware releases.',
  },
  {
    role: 'Associate Software Engineer (Intern)',
    company: 'IDEMIA',
    period: 'Jan 2018 - June 2018',
    description:
      'Contributed to firmware modules for Access Control Systems. Built an internal Android application to automate employee data management, reducing manual processing by 70%.',
  },
]

const education = [
  {
    degree: 'Masters of Technology - Information Technology',
    institution: 'Netaji Subhas University of Technology, Delhi',
    period: '2020 - 2022',
    description:
      'Specialization: Machine Intelligence & Data Analytics. CGPA: 7.2',
  },
  {
    degree: 'Bachelor of Technology - Computer Science',
    institution: 'Chitkara University, Punjab',
    period: '2014 - 2018',
    description: 'CGPA: 7.8',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <FadeIn>
            <Heading as="h2" className="mb-4">
              Resume
            </Heading>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              My professional journey and educational background.
            </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </FadeIn>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <FadeIn>
              <div className="mb-8 flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <Briefcase className="h-6 w-6" />
                </div>
                <Heading as="h3" className="text-2xl">
                  Experience
                </Heading>
              </div>
            </FadeIn>

            <FadeInStagger>
              <div className="space-y-8">
                {experience.map((job) => (
                  <FadeIn key={job.company}>
                    <div className="border-muted relative border-l-2 pb-8 pl-8 last:pb-0">
                      <div className="bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full" />
                      <Heading as="h4" className="text-lg font-semibold">
                        {job.role}
                      </Heading>
                      <div className="text-muted-foreground mt-1 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-foreground font-medium">
                          {job.company}
                        </span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>{job.period}</span>
                      </div>
                      <Text className="text-sm">{job.description}</Text>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </div>

          <div>
            <FadeIn>
              <div className="mb-8 flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <Heading as="h3" className="text-2xl">
                  Education
                </Heading>
              </div>
            </FadeIn>

            <FadeInStagger>
              <div className="space-y-8">
                {education.map((edu) => (
                  <FadeIn key={edu.institution}>
                    <div className="border-muted relative border-l-2 pb-8 pl-8 last:pb-0">
                      <div className="bg-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full" />
                      <Heading as="h4" className="text-lg font-semibold">
                        {edu.degree}
                      </Heading>
                      <div className="text-muted-foreground mt-1 mb-2 flex items-center gap-2 text-sm">
                        <span className="text-foreground font-medium">
                          {edu.institution}
                        </span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                      <Text className="text-sm">{edu.description}</Text>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
