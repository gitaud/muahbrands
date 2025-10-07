import type { Block, Field } from 'payload'

export const Feature: Field = {
  name: 'feature',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ]
}

export const FeatureBlock: Block = {
  slug: 'featureBlock',
  interfaceName: 'FeatureBlock',
  fields: [
    {
      name: 'features',
      type: 'array',
      fields: [Feature]
    }
  ]
}
