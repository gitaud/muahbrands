import { link as linkType } from '@/fields/link'
import type { Block } from 'payload'

export const CTABlock : Block = {
  slug: 'ctaBlock',
  interfaceName: 'CTABlock',
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true
    },
    {
      type: 'text',
      name: 'description',
      required: true
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text'
        }
      ]
    },
    linkType({
      appearances: ['default', 'outline'],
    }),
  ]
}