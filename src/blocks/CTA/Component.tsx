import React from "react";

import { CTA } from "@/components/CTA/CTA";
import type { CTABlock as CTABlockProps } from '@/payload-types'

export const CTABlock: React.FC<CTABlockProps> = async (props) => {
  const { title, description, items, link } = props
  return (
    <CTA title={title} description={description} items={items.map(item => {
      return item.item!
    })} buttonText={link.label} buttonUrl={link.url!} />
  )
}