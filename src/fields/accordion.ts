import type { GroupField } from 'payload';
import { link as Link } from '@/fields/link'

export const Accordion: GroupField = {
  name: 'accordion',
  type: 'group',
  label: 'Accordion Link',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title'
    },
    {
      name: 'items',
      type: 'array',
      fields: [Link({ appearances: false})]
    }
  ]
}