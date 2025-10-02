import React from 'react'
import { CTASection } from '@/components/CTA/CTACentered'
import type { CTABlock as CTABlockProps } from '@/payload-types'

export const CTACenteredBlock: React.FC<CTABlockProps> = async (props) => {
 const { title, description, link } = props
  return(
  <CTASection badge={{text: 'Get to Printing'}} title={title} description={description} link={link}/>
 )
} 