import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getInfoPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = 
      process.env.NEXT_PUBLIC_SERVER_URL || 
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://muahbrands.com'

    const results = await payload.find({
      collection: 'info',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      }
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs ? 
      results.docs
        .filter((infopage) => Boolean(infopage?.slug))
        .map((infopage) => {
          return {
            loc: `${SITE_URL}/services/${infopage?.slug}`,
            lastmod: infopage.updatedAt || dateFallback

          }
        })
      : []
    
    return sitemap
  },
  ['infopages-sitemap'],
  {
    tags: ['infopages-sitemap']
  },
)

export async function GET() {
  const sitemap = await getInfoPagesSitemap()

  return getServerSideSitemap(sitemap)
}