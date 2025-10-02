import type { GlobalAfterChangeHook } from "payload";
import { revalidateTag } from 'next/cache';

export const revalidateValues: GlobalAfterChangeHook = (
{
  doc, req: { payload, context} 
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating values')

    revalidateTag('global_ourValues')
  }

  return doc;
}