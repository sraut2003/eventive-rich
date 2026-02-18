"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/motion"

const featuredEvents = [
  { src: "/images/gallery-1.jpg", title: "Royal Garden Wedding", category: "Wedding" },
  { src: "/images/gallery-2.jpg", title: "Candlelit Engagement", category: "Engagement" },
  { src: "/images/gallery-3.jpg", title: "Corporate Gala Night", category: "Corporate" },
  { src: "/images/gallery-4.jpg", title: "Elegant Birthday Bash", category: "Birthday" },
]

export function FeaturedGallery() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Featured Events"
          title="A Glimpse of Our Work"
          description="Every event tells a unique story. Here are some of our most memorable celebrations."
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredEvents.map((event, index) => (
            <StaggerItem key={event.title}>
              <div
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 || index === 3 ? "md:row-span-1" : ""
                }`}
              >
                <Image
                  src={event.src}
                  alt={event.title}
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                    {event.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View Full Portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
