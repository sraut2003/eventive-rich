"use client"

import Image from "next/image"
import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

export function Introduction() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Who We Are"
              title="Turning Dreams Into Extraordinary Celebrations"
              align="left"
            />
            <FadeIn delay={0.3}>
              <p className="text-base leading-relaxed text-muted-foreground">
                At Eventiverich, we believe every celebration deserves to be extraordinary. With years of experience in luxury event management, our team of creative professionals works tirelessly to bring your vision to life. From intimate gatherings to grand celebrations, we handle every detail with precision and elegance.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our passion for perfection and eye for detail ensures that every event we create becomes a cherished memory for you and your guests.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-wedding.jpg"
                  alt="Luxury wedding decoration by Eventiverich"
                  width={600}
                  height={700}
                  className="h-[500px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-lg">
                <p className="font-serif text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Events Delivered</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
