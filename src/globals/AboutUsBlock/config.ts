import type { GlobalConfig, GroupField, Field } from 'payload'
import { link } from '@/fields/link'

import { Media } from '@/collections/Media'

export const Logos: GroupField = {
  name: 'logos',
  type: 'group',
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'logos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ]
    }
  ]
}

export const Metric: Field = {
  name: 'metric',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    }
  ]
}

export const Metrics: GroupField = {
  name: 'metrics',
  type: 'group',
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'subHeadline',
      type: 'text'
    },
    {
      name: 'metrics',
      type: 'array',
      fields: [Metric] 
    }
  ]
}


export const AboutUsBlock: GlobalConfig = {
  slug: 'about_us',
  label: 'About Us',
  access: {
    read: () => true,
  },
  typescript: {
    interface: 'AboutUs',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'aboutUs',
      type: 'richText'
    },
    Logos,
    Metrics,
  ]
}