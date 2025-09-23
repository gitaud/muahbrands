import { Accordion } from "@/fields/accordion";
import { GlobalConfig } from "payload";
import { link as Link } from '@/fields/link'

export const Nav: GlobalConfig = {
  slug: 'nav',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'accordion',
      label: 'Accordion Links',
      type: 'array',
      fields: [Accordion]
    },
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      fields: [Link({appearances: false})]
    }
  ]
}