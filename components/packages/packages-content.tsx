"use client"

import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const packages = [
  {
    name: "Silver",
    tagline: "Perfect for Intimate Gatherings",
    price: "Starting at $2,500",
    popular: false,
    features: [
      "Event consultation & planning",
      "Venue sourcing assistance",
      "Basic decor & styling",
      "Day-of coordination",
      "Vendor recommendations",
      "Up to 50 guests",
      "Email & phone support",
    ],
    excluded: [
      "Custom theme design",
      "Photography & videography",
      "Entertainment booking",
      "Full vendor management",
    ],
  },
  {
    name: "Gold",
    tagline: "Our Most Popular Package",
    price: "Starting at $5,500",
    popular: true,
    features: [
      "Full event planning & design",
      "Venue sourcing & negotiation",
      "Custom theme & decor design",
      "Day-of coordination team",
      "Vendor selection & management",
      "Up to 150 guests",
      "Photography coordination",
      "Entertainment booking",
      "Guest experience management",
      "Priority support",
    ],
    excluded: [
      "Premium floral installations",
      "Videography coordination",
    ],
  },
  {
    name: "Premium",
    tagline: "The Ultimate Luxury Experience",
    price: "Starting at $12,000",
    popular: false,
    features: [
      "Bespoke event design & planning",
      "Unlimited venue options",
      "Luxury custom decor & florals",
      "Full coordination team",
      "Complete vendor management",
      "Unlimited guest capacity",
      "Photography & videography",
      "Premium entertainment",
      "Guest concierge services",
      "Custom invitations & stationery",
      "Post-event cleanup",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    excluded: [],
  },
]

const addOns = [
  { name: "Destination Event Planning", price: "From $3,000" },
  { name: "Premium Floral Installations", price: "From $1,500" },
  { name: "Live Band / DJ Services", price: "From $800" },
  { name: "Custom Cake & Dessert Bar", price: "From $500" },
  { name: "Drone Coverage", price: "From $600" },
  { name: "After-Party Planning", price: "From $1,200" },
]

export function PackagesPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Investment
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Our Packages
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Flexible pricing tiers designed to match the scale and style of your celebration. Every package is fully customizable.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                    pkg.popular
                      ? "border-primary bg-card shadow-lg"
                      : "border-border bg-card shadow-sm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                        <Star size={12} fill="currentColor" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6 text-center">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pkg.tagline}</p>
                    <p className="mt-4 font-serif text-3xl font-bold text-primary">{pkg.price}</p>
                  </div>

                  <div className="mb-8 h-px bg-border" />

                  <div className="flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                    {pkg.excluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 opacity-40">
                        <Check size={16} className="mt-0.5 shrink-0" />
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`group mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              All prices are customizable based on your specific requirements. Contact us for a personalized quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Enhancements"
            title="Add-On Services"
            description="Enhance your package with these premium add-ons to make your event even more special."
          />

          <StaggerContainer className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <div className="flex items-center justify-between rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-medium text-foreground">{addon.name}</span>
                  <span className="text-sm font-semibold text-primary">{addon.price}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Compare"
            title="Feature Comparison"
            description="See what's included in each package at a glance."
          />

          <FadeIn>
            <div className="mt-16 overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-left text-sm font-semibold text-foreground">Feature</th>
                    <th className="pb-4 text-center text-sm font-semibold text-foreground">Silver</th>
                    <th className="pb-4 text-center text-sm font-semibold text-primary">Gold</th>
                    <th className="pb-4 text-center text-sm font-semibold text-foreground">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "Event Consultation", silver: true, gold: true, premium: true },
                    { feature: "Venue Sourcing", silver: true, gold: true, premium: true },
                    { feature: "Day-of Coordination", silver: true, gold: true, premium: true },
                    { feature: "Custom Theme Design", silver: false, gold: true, premium: true },
                    { feature: "Vendor Management", silver: false, gold: true, premium: true },
                    { feature: "Photography Coordination", silver: false, gold: true, premium: true },
                    { feature: "Entertainment Booking", silver: false, gold: true, premium: true },
                    { feature: "Videography Coordination", silver: false, gold: false, premium: true },
                    { feature: "Premium Florals", silver: false, gold: false, premium: true },
                    { feature: "Guest Concierge", silver: false, gold: false, premium: true },
                    { feature: "Custom Stationery", silver: false, gold: false, premium: true },
                    { feature: "Dedicated Account Manager", silver: false, gold: false, premium: true },
                    { feature: "24/7 Support", silver: false, gold: false, premium: true },
                  ].map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 text-sm text-foreground/80">{row.feature}</td>
                      <td className="py-4 text-center">
                        {row.silver ? (
                          <Check size={16} className="mx-auto text-primary" />
                        ) : (
                          <span className="mx-auto block h-px w-4 bg-border" />
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {row.gold ? (
                          <Check size={16} className="mx-auto text-primary" />
                        ) : (
                          <span className="mx-auto block h-px w-4 bg-border" />
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {row.premium ? (
                          <Check size={16} className="mx-auto text-primary" />
                        ) : (
                          <span className="mx-auto block h-px w-4 bg-border" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Not Sure Which Package Is Right?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our team will help you choose the perfect package for your celebration. Every event is unique, and we are happy to customize any tier to match your needs.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-xl"
              >
                Schedule a Free Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
