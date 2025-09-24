import { Accordion } from "@/fields/accordion";
import { GlobalConfig } from "payload";
import { link as Link } from '@/fields/link'
import { revalidateNav } from "./hooks/revalidateNav";

export const Nav: GlobalConfig = {
  slug: 'nav',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateNav]
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'array',
      fields: []
    },
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
    },
    {
      name: 'ctas',
      label: 'CTAs',
      type: 'array',
      fields: [Link({appearances: ['default', 'outline']})]
    }
  ]
}