"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import type { Page } from "@/payload-types";
import { getMediaUrl } from "@/utilities/getMediaUrl";
import { Button } from "../ui/button";

export function ImagesSliderComponent(
  { images, headline, subheadline, cta_label, cta_link }: Page['heroSlider'] = {}
) {
  const imgs = images?.map(image => {
    if (image.image && typeof image.image === "object" && "url" in image.image && "updatedAt" in image.image) {
      return getMediaUrl(image.image.url, image.image.updatedAt);
    }
    return [];
  }).filter(Boolean);
  
  return (
    // @ts-expect-error images type mismatch
    <ImagesSlider className="h-[80vh]" images={imgs}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-6xl max-w-[60%] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {headline}
        </motion.p>
        <motion.p className="font-bold text-2xl max-w-[55%] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {subheadline}
        </motion.p>
        <a  href={cta_link!}>
          <Button className="outline bg-transparent">
            {cta_label}
          </Button>
        </a>
      </motion.div>
    </ImagesSlider>
  );
}
