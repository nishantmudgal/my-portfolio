export type Project = {
  title: string
  category: string
  description: string
  techStack: string[]
  image: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    title: 'McKinsey Redesign',
    category: 'Web',
    description:
      'Complete frontend architecture overhaul improving navigation performance by ~32% and achieving WCAG AA accessibility compliance.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Accessibility'],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
    liveUrl: '#',
  },
  {
    title: 'JAMstack Platform',
    category: 'Web',
    description:
      'High-traffic platform for 5M+ monthly users. Improved page load time by ~28% through optimized bundling.',
    techStack: ['Next.js', 'Performance', 'Caching'],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
    liveUrl: '#',
  },
  {
    title: 'Biometric Firmware',
    category: 'App',
    description:
      'Production firmware for biometric access control terminals. Optimized hardware-software integration.',
    techStack: ['C++', 'Linux', 'Embedded'],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
    liveUrl: '#',
  },
  {
    title: 'Project App 1',
    category: 'App',
    description: 'A dedicated mobile application for managing tasks.',
    techStack: ['Flutter', 'Dart'],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
    liveUrl: '#',
  },
  {
    title: 'Branding Design',
    category: 'Card',
    description: 'Corporate identity and branding materials.',
    techStack: ['Figma', 'Illustrator'],
    image: '/assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
    liveUrl: '#',
  },
]

export const portfolioFilters = ['All', 'App', 'Card', 'Web']
