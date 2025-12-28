import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'design-system',
    title: 'Reusable Design System',
    description:
      'A scalable, token-based design system built with React and Tailwind.',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/yourname/design-system',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'A Next.js portfolio with CI/CD, SEO, and design-system-driven UI.',
    techStack: ['Next.js', 'Vercel', 'CI/CD'],
    liveUrl: 'https://your-site.vercel.app',
  },
]
