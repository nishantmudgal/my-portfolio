import { personalData } from '@/data/personal'

export const siteConfig = {
  name: personalData.name,
  title: `${personalData.name} | ${personalData.about.title}`,
  description: personalData.about.longDescription,
  url: 'https://nishantmudgal.com', // Placeholder URL
  ogImage: '/og-image.jpg',
  links: personalData.socialParams,
  author: {
    name: personalData.name,
    email: personalData.contact.email,
  },
}
