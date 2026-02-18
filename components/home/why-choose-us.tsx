"use client"

import { Shield, Clock, Star, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/motion"

const reasons = [
  {
    icon: Star,
    title: "Bespoke Experiences",
    description: "Every event is uniquely tailored to reflect your personal style and vision.",
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Years of experience delivering flawless events for discerning clients.",
  },
  {
    icon: Clock,
    title: "Stress-Free Planning",
    description: "We handle every detail so you can focus on enjoying your celebration.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A passionate team of professionals committed to exceeding your expectations.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Events Completed" },
  { value: 350, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Team Members" },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="Excellence in Every Detail"
          description="We go above and beyond to ensure your event is nothing short of extraordinary."
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="rounded-2xl bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <reason.icon size={24} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-primary lg:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
