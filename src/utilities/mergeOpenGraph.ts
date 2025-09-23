import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Muah Branding Ltd, Your Preferred Branding and Printing Agency.',
  images: [
    {
      url: `${getServerSideURL()}/muah_logo.jpg`,
    },
  ],
  siteName: 'Muah Branding Ltd',
  title: 'Muah Branding Ltd',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
