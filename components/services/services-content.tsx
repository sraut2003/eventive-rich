"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Building2, PartyPopper, Palette, Camera, CheckCircle2 } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Your wedding day should be the most magical day of your life. Our expert planners work closely with you to create a celebration that perfectly reflects your love story. From venue selection to the last dance, every detail is thoughtfully curated.",
    features: ["Full wedding coordination", "Venue sourcing & management", "Vendor selection & negotiation", "Day-of coordination", "Custom theme design", "Guest experience management"],
    image: "/images/hero-wedding.jpg",
  },
  {
    icon: Sparkles,
    title: "Engagement Events",
    description: "Mark the beginning of your forever with an engagement celebration as unique as your love. We create intimate yet spectacular events that set the perfect tone for your journey to the altar.",
    features: ["Surprise proposal planning", "Engagement party design", "Custom decor themes", "Catering coordination", "Entertainment booking", "Photo/video arrangements"],
    image: "/images/engagement-event.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Elevate your brand presence with professionally managed corporate events that leave lasting impressions. From product launches to annual galas, we deliver events that align with your brand identity.",
    features: ["Conference management", "Product launch events", "Annual galas & dinners", "Team building events", "Brand activations", "Awards ceremonies"],
    image: "/images/corporate-event.jpg",
  },
  {
    icon: PartyPopper,
    title: "Birthday & Private Parties",
    description: "Every birthday deserves to be extraordinary. Whether it's a milestone celebration or an intimate gathering, we create personalized party experiences that delight guests of all ages.",
    features: ["Theme conceptualization", "Custom cake & dessert design", "Entertainment & activities", "Balloon & floral decor", "Party favors & gifts", "Full event coordination"],
    image: "/images/birthday-event.jpg",
  },
  {
    icon: Palette,
    title: "Decor & Styling",
    description: "Transform any space into a breathtaking setting with our bespoke decor and styling services. Our design team brings artistic vision and technical expertise to create stunning environments.",
    features: ["Floral design & installation", "Lighting design", "Table styling & linens", "Stage & backdrop design", "Furniture & prop rental", "Custom installations"],
    image: "/images/decor-styling.jpg",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Preserve your precious moments with our professional photography and videography services. Our talented visual artists capture the emotion, beauty, and joy of your celebration.",
    features: ["Professional photography", "Cinematic videography", "Drone coverage", "Photo booth services", "Same-day edits", "Album design & delivery"],
    image: "/images/photography.jpg",
  },
]

export function ServicesPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What We Offer
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Our Services
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A comprehensive suite of luxury event services designed to create unforgettable celebrations for every occasion.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={500}
                      className="h-[400px] w-full object-cover"
                    />
                    <div className="absolute left-6 top-6 flex size-14 items-center justify-center rounded-full bg-card/90 text-primary shadow-lg">
                      <service.icon size={24} />
                    </div>
                  </div>
                </FadeIn>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <FadeIn>
                    <h2 className="font-serif text-3xl font-bold text-foreground">{service.title}</h2>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="shrink-0 text-primary" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
                    >
                      Get a Quote
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Start Planning?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Let us bring your vision to life. Reach out today for a complimentary consultation.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-xl"
              >
                Book a Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
