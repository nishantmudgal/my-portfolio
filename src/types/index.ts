export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NavLink {
  href: string
  label: string
}
