"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/utilities/ui"
import { CMSLink } from "../Link"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  link: any
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  link,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden pt-0 md:pt-0 container ", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        {/* Badge */}
        {badge && (
          <Badge
            variant="outline"
            className=" animate-fade-in-up delay-100"
          >
            <span className="text-muted-foreground">{badge.text}</span>
          </Badge>
        )}

        {/* Title */}
        <h2 className="text-3xl font-semibold sm:text-5xl animate-fade-in-up delay-200">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-muted-foreground animate-fade-in-up delay-300">
            {description}
          </p>
        )}

        {/* Action Button */}
        <CMSLink {...link} />

        {/* Glow Effect */}
        {withGlow && (
          <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow animate-scale-in delay-700" />
        )}
      </div>
    </section>
  )
}
