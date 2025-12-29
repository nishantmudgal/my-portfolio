import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      lastModified: new Date(),
    },
  ]
}
