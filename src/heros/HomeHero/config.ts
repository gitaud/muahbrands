
import type { Field } from 'payload'

export const heroSlider: Field = {
  name: 'heroSlider',
  type: 'group',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
    },
    {
      name: 'cta_label',
      type: 'text',
      label: 'CTA Label'
    },
    {
      name: 'cta_link',
      type: 'text',
      label: 'CTA Link'
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true
        }
      ]
    }
  ]
}