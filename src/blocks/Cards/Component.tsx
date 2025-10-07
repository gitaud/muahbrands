import { Gallery } from '@/components/ui/gallery'
import type { Service, CardsBlock as CardsBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const CardsBlock: React.FC<
  CardsBlockProps & { id?: string }> 
 = async (props) => {
  const { limit: limitFromProps, populatedBy } = props;

  const limit = limitFromProps || 5;

  let services: Service[] = [];

  if (populatedBy === 'collection') {
    const payload = await getPayload({ config: configPromise });

    const fetchedServices = await payload.find({
      collection: 'services',
      depth: 1,
      limit
    })
    services = fetchedServices.docs
  } else {

  }



  return(
    // @ts-expect-error gallery item conflicts, ignore
    <Gallery heading={'Services'} demoUrl='about-us' items={
      services.map(service => {
        return {
          id: service.id,
          title: service.name,
          summary: service.description,
          url: "/services/" + service.slug,
          // @ts-expect-error media types may mismatch, ignore
          image: (service?.meta?.image ? "/media/" + service.meta?.image?.filename : '/muah_logo.jpg')
        }
      })
    }/>
  )
}