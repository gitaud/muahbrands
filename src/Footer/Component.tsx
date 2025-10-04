import { Footer as FooterComponent } from "@/components/ui/footer";
import { getCachedGlobal } from "@/utilities/getGlobals";
import React from "react";
import type { Footer as FooterType } from "@/payload-types";



export const Footer: React.FC = async () => {
  const footerData: FooterType = await getCachedGlobal('footer', 1)() as FooterType;
  
  return(
    <FooterComponent sections={footerData.footerLinks}/>
  )
}