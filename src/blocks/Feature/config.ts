import type { Block } from 'payload'

export const FeatureBlock: Block = {
  slug: 'featureBlock',
  interfaceName: 'FeatureBlock',
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

// export const FeaturesBlock: Block = {
//   slug: 'featuresBlock',
  
// }