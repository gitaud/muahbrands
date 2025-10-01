import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateInfoPage: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context }
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/info/${doc.slug}`

      payload.logger.info(`Revalidating info page at path : ${path}`)

      revalidatePath(path);
      revalidateTag('infopages-sitemap')
    }
  }
  return doc;
}

export const revalidateDelete: CollectionAfterDeleteHook = ({ 
  doc, 
  req: { context } 
}) => {
  if (!context.disableRevalidate) {
    const path = `/info/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('infopages-sitemap')

  }

  return doc
}