import type { GlobalConfig, GroupField, Field } from 'payload';
import { link as Link } from '@/fields/link'
import  { revalidateFooter } from './hooks/revalidateFooter'

export const LinkGroup: GroupField = {
  name: 'links',
  type: 'group',
  label: 'Footer Link Group',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [Link({ appearances: false})]
    }
  ],
}

export const Links: Field = {
  name: 'footerLinks',
  type: 'array',
  required: true,
  fields: [LinkGroup]
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [Links],
  hooks: {
    afterChange: [revalidateFooter],
  }
}