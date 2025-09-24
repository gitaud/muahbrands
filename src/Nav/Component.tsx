import React from 'react'
import { Navbar } from "@/components/ui/navbar"
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Nav as NavType } from "@/payload-types"


export const Nav : React.FC = async () => {
  const navData: NavType = await getCachedGlobal('nav', 1)()
  return(
    <Navbar data={navData}/>
  )
}