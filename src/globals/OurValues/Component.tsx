import { FeatureList } from "@/components/ui/FeatureList";
import { getCachedGlobal } from '@/utilities/getGlobals'

import type { OurValues } from '@/payload-types'

export async function OurValues() {
  const ourValuesData = await getCachedGlobal('ourValues', 1)()

  const values = (ourValuesData as OurValues)?.values || []

  return <FeatureList title={'Our Values'} subtitle={"Why We're the best"} items={values.map(value => value.value)}/>
}