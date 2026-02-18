"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote, Star } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    event: "Wedding",
    text: "Eventiverich made our wedding day absolutely magical. Every detail was perfect, from the stunning floral arrangements to the seamless coordination. We could not have asked for a better team to bring our dream wedding to life.",
    image: "/images/gallery-1.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    event: "Engagement Celebration",
    text: "The team went above and beyond for our engagement celebration. The decor was breathtaking, and every guest was amazed by the attention to detail. From the lighting to the florals, everything was truly a dream come true.",
    image: "/images/gallery-2.jpg",
    rating: 5,
  },
  {
    name: "David Chen",
    event: "Corporate Gala",
    text: "Our annual corporate gala was elevated to a new level thanks to Eventiverich. Professional, creative, and incredibly organized. Our clients and partners were thoroughly impressed with the entire experience.",
    image: "/images/gallery-3.jpg",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    event: "Birthday Party",
    text: "My daughter's birthday party was nothing short of spectacular. The creativity and care that went into every element was remarkable. The kids absolutely loved it, and so did all the adults. An unforgettable celebration.",
    image: "/images/gallery-4.jpg",
    rating: 5,
  },
  {
    name: "Marcus & Elena Rivera",
    event: "Wedding Reception",
    text: "From the initial consultation to the last dance, Eventiverich delivered perfection. Our reception was everything we imagined and more. The team's professionalism and warmth made the entire planning process a joy.",
    image: "/images/gallery-5.jpg",
    rating: 5,
  },
  {
    name: "Fatima Al-Hassan",
    event: "Corporate Event",
    text: "We trusted Eventiverich with our product launch event and they exceeded every expectation. The venue styling was impeccable, and the flow of the evening was perfectly orchestrated. We have already booked them for next year.",
    image: "/images/gallery-6.jpg",
    rating: 5,
  },
  {
    name: "Oliver & Grace Thompson",
    event: "Engagement Ceremony",
    text: "Our engagement ceremony was an absolute masterpiece. The team listened to every detail of what we wanted and delivered beyond our wildest dreams. The intimate setting they created was pure magic.",
    image: "/images/gallery-7.jpg",
    rating: 5,
  },
  {
    name: "Nadia Petrova",
    event: "Private Dinner Party",
    text: "I hired Eventiverich for my husband's 50th birthday dinner and it was perfection. The elegant table settings, the ambient lighting, and the curated menu made it an evening none of us will ever forget.",
    image: "/images/gallery-8.jpg",
    rating: 5,
  },
]

export function TestimonialsPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Client Love
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Testimonials
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Hear from our delighted clients about their experiences. Their words are our greatest compliment.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-primary">{testimonial.event}</p>
                      <div className="mt-1 flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <Quote size={28} className="shrink-0 text-primary/20" />
                  </div>

                  <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Create Your Story?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Join our growing family of delighted clients. Let us make your celebration the next success story.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-xl"
              >
                Start Planning Your Event
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
