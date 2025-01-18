import Configs from '@/lib/config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${Configs.SITE_URL}/sitemap.xml`,
  }
}