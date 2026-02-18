"use client"

import Image from "next/image"
import { Target, Eye, Heart, Gem, Clock, Users, Sparkles, CheckCircle2 } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const values = [
  { icon: Heart, title: "Passion", description: "We pour our heart into every event, treating each celebration as if it were our own." },
  { icon: Gem, title: "Excellence", description: "We set the highest standards in every aspect of our work, from planning to execution." },
  { icon: Users, title: "Client-Centric", description: "Your vision drives everything we do. We listen, understand, and deliver beyond expectations." },
  { icon: Sparkles, title: "Creativity", description: "We bring fresh, innovative ideas that transform ordinary spaces into extraordinary experiences." },
]

const timeline = [
  { step: "01", title: "Discovery", description: "We start by understanding your vision, preferences, and the story you want to tell." },
  { step: "02", title: "Design", description: "Our creative team crafts a detailed concept that brings your vision to life on paper." },
  { step: "03", title: "Planning", description: "We coordinate every vendor, timeline, and logistics to ensure flawless execution." },
  { step: "04", title: "Execution", description: "On the day, our team manages every detail so you can be fully present and enjoy." },
]

const teamMembers = [
  { name: "Isabella Montague", role: "Founder & Creative Director", image: "/images/founder.jpg" },
  { name: "David Sterling", role: "Operations Manager", image: "/images/corporate-event.jpg" },
  { name: "Amara Rose", role: "Lead Designer", image: "/images/decor-styling.jpg" },
]

export function AboutPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Where Elegance Meets Excellence
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Founded with a passion for perfection, Eventiverich has been transforming celebrations into extraordinary experiences for over a decade.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="relative">
                <Image
                  src="/images/hero-wedding.jpg"
                  alt="Eventiverich team at work"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                  <p className="font-serif text-3xl font-bold">12+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>

            <div>
              <SectionHeading
                label="About Eventiverich"
                title="A Legacy of Memorable Celebrations"
                align="left"
              />
              <FadeIn delay={0.2}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  What began as a small passion project has blossomed into one of the most sought-after event management companies in the region. Our founder, Isabella Montague, envisioned a company that would redefine how people celebrate life's most precious moments.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Today, with a team of over 50 talented professionals, we continue to push the boundaries of event design and management. Each celebration we create is a testament to our unwavering commitment to excellence, creativity, and client satisfaction.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-card p-10 shadow-sm">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Target size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To create extraordinary, bespoke events that reflect the unique personality and vision of each client. We are committed to transforming every celebration into an unforgettable experience through meticulous planning, innovative design, and flawless execution.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-card p-10 shadow-sm">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Eye size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To be the premier luxury event management company, recognized globally for our creativity, attention to detail, and ability to turn dreams into reality. We aspire to set the gold standard in the celebrations industry.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Magic"
            description="Meet the passionate professionals who bring your celebrations to life."
          />

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-1 text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Work Process Timeline */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="From initial concept to the final farewell, every step is carefully orchestrated."
          />

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative rounded-2xl bg-card p-8 shadow-sm">
                  <span className="font-serif text-4xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="The core principles that guide everything we do."
          />

          <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
