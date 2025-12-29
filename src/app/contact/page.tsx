import { submitContact } from '@/app/actions/contact'
import { Button, Container, Heading, Text } from '@/design-system'

export default function ContactPage() {
  return (
    <Container className="max-w-xl py-24">
      <Heading as="h1">Contact</Heading>

      <form action={submitContact} className="mt-6 space-y-4">
        <input
          name="name"
          placeholder="Your name"
          className="w-full rounded border p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="w-full rounded border p-3"
        />

        <textarea
          name="message"
          placeholder="Your message"
          className="min-h-[120px] w-full rounded border p-3"
        />

        <Button type="submit">Send</Button>
      </form>
    </Container>
  )
}
