import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Features: CollectionConfig = {
  slug: 'features',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      required: true
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true, 
    }
  ]
}