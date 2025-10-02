import type { Field, GlobalConfig } from 'payload'
import { revalidateValues } from './hooks/revalidateValues'

export const ValueFields: Field = {
  name: 'value',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    }
  ]
}

export const OurValues: GlobalConfig = {
  slug: 'ourValues',
  typescript: {
    interface: 'ourValues',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'values',
      type: 'array',
      fields: [ValueFields],
      required: true
    }
  ],
  hooks: {
    afterChange: [revalidateValues]
  }
}