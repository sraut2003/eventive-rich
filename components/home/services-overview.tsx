"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Sparkles, Building2, PartyPopper, Palette, Camera } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/motion"

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we craft the wedding of your dreams.",
    image: "/images/hero-wedding.jpg",
  },
  {
    icon: Sparkles,
    title: "Engagement Events",
    description: "Make your engagement announcement as magical as your love story.",
    image: "/images/engagement-event.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional events that reflect your brand's excellence and vision.",
    image: "/images/corporate-event.jpg",
  },
  {
    icon: PartyPopper,
    title: "Birthday Parties",
    description: "Celebrate another year with style, elegance, and unforgettable memories.",
    image: "/images/birthday-event.jpg",
  },
  {
    icon: Palette,
    title: "Decor & Styling",
    description: "Transform any venue into a breathtaking space with our bespoke styling.",
    image: "/images/decor-styling.jpg",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Capture every precious moment with our professional photography services.",
    image: "/images/photography.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Crafting Unforgettable Experiences"
          description="From concept to execution, we offer a comprehensive suite of event management services tailored to your unique vision."
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/services"
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/10" />
                  <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-card/90 text-primary">
                    <service.icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
