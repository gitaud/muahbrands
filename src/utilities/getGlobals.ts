import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  let args = {
    slug,
    depth
  }

  if (slug == 'nav') {
    args['populate'] = {
      accordion: {
        accordion: {
          link: {
            label: true,
            reference: {
              relationTo: true,
              value: {
                slug: true,
                id: false,
                name: false,
                description: false,
                layout: false,
                hero: false,
                meta: false,
                updatedAt: false
              }
            }
          }
        }
      },
      links: true
    }
  }

  const global = await payload.findGlobal(args)

  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
