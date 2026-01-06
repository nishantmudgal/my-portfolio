import { Container, Heading, Button } from '@/design-system'
import { Mail, MapPin, Phone } from 'lucide-react'
import { personalData } from '@/data/personal'

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <Container>
        <div className="mb-12">
          <Heading
            as="h2"
            className="after:bg-primary relative mb-4 text-3xl font-bold tracking-wider uppercase after:absolute after:mt-2 after:block after:h-[3px] after:w-16 after:content-['']"
          >
            Contact
          </Heading>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Info Columns */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-card flex items-start gap-4 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="bg-primary/10 text-primary rounded-full p-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-muted-foreground">
                  {personalData.contact.address}
                </p>
              </div>
            </div>

            <div className="bg-card flex items-start gap-4 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="bg-primary/10 text-primary rounded-full p-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Call Me</h3>
                <p className="text-muted-foreground">
                  {personalData.contact.phone}
                </p>
              </div>
            </div>

            <div className="bg-card flex items-start gap-4 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="bg-primary/10 text-primary rounded-full p-3">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email Us</h3>
                <p className="text-muted-foreground">
                  {personalData.contact.email}
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <form className="bg-card space-y-6 rounded-lg p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <div className="text-center">
                <Button size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
