export const siteConfig = {
  name: 'My Portfolio',
  description: 'A modern portfolio website showcasing my projects and skills',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:your.email@example.com',
  },
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
  },
}
