export type Project = {
  title: string
  category: string
  description: string
  techStack: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Platform',
    category: 'Web',
    description:
      'A production-grade personal portfolio built with Next.js and TypeScript, designed with an SEO-first and performance-focused architecture. The application leverages the App Router, server components, and server actions, integrates a Supabase-backed PostgreSQL database for server-side data handling, and features a GPU-accelerated Three.js animated background with light and dark theme support. Deployed via Vercel with automated CI/CD, analytics, and security hardening.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Three.js',
      'Supabase',
      'PostgreSQL',
      'Vercel',
      'Vercel Analytics',
      'ESLint',
      'Prettier',
    ],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
    liveUrl: 'https://my-portfolio-drab-six-49.vercel.app/',
    githubUrl: 'https://github.com/nishantmudgal/my-portfolio',
  },
  {
    title: 'Neo Matrix Design System',
    category: 'Web',
    description:
      'A scalable, themeable design system built with React and TypeScript, featuring reusable UI components, token-based theming with light and dark modes, and interactive documentation via Storybook. Implemented as a monorepo with automated CI/CD pipelines to publish packages to npm and deploy Storybook.',
    techStack: [
      'React',
      'TypeScript',
      'Turborepo',
      'pnpm',
      'Storybook',
      'Vite',
      'GitHub Actions',
      'npm',
      'Vercel',
    ],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
    liveUrl: 'https://neo-matrix-storybook.vercel.app',
    githubUrl: 'https://github.com/nishantmudgal/neo-matrix',
  },
]

export const portfolioFilters = ['All', 'App', 'Card', 'Web']
