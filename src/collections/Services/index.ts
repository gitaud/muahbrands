import { CollectionConfig } from "payload";

import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone"

import { Banner } from "@/blocks/Banner/config";
import { CallToAction } from "@/blocks/CallToAction/config";
import { CTABlock } from '@/blocks/CTA/config';
import { FeatureBlock } from "@/blocks/Feature/config";

import { hero } from "@/heros/config";

import { revalidateService, revalidateDelete } from "./hooks/revalidateServices";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField
} from '@payloadcms/plugin-seo/fields'


export const Services: CollectionConfig<'services'> = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true 
    },
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      required: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            hero
          ],
          label: 'Hero'
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Banner, CallToAction, FeatureBlock, CTABlock ],
            }
          ],
          label: 'Content'
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            })
          ]
        }
      ]
    },
    
  ],
  hooks: {
    afterChange: [revalidateService],
    afterDelete: [revalidateDelete]
  }
}