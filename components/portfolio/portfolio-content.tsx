"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const categories = ["All", "Weddings", "Engagements", "Corporate", "Birthdays"]

const galleryItems = [
  { src: "/images/hero-wedding.jpg", title: "Enchanted Garden Wedding", category: "Weddings", height: "tall" },
  { src: "/images/gallery-2.jpg", title: "Romantic Candlelit Engagement", category: "Engagements", height: "normal" },
  { src: "/images/gallery-3.jpg", title: "Annual Corporate Gala", category: "Corporate", height: "normal" },
  { src: "/images/gallery-4.jpg", title: "Royal Birthday Celebration", category: "Birthdays", height: "tall" },
  { src: "/images/gallery-1.jpg", title: "Garden Ceremony", category: "Weddings", height: "normal" },
  { src: "/images/engagement-event.jpg", title: "Sunset Engagement Soiree", category: "Engagements", height: "tall" },
  { src: "/images/corporate-event.jpg", title: "Executive Dinner", category: "Corporate", height: "normal" },
  { src: "/images/birthday-event.jpg", title: "Milestone Birthday Party", category: "Birthdays", height: "normal" },
  { src: "/images/gallery-5.jpg", title: "Crystal Ballroom Reception", category: "Weddings", height: "tall" },
  { src: "/images/gallery-6.jpg", title: "Sunset Cocktail Evening", category: "Corporate", height: "normal" },
  { src: "/images/gallery-7.jpg", title: "Traditional Wedding Ceremony", category: "Weddings", height: "normal" },
  { src: "/images/gallery-8.jpg", title: "Private Dinner Party", category: "Birthdays", height: "tall" },
]

export function PortfolioPageContent() {
  const [filter, setFilter] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Work
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A curated collection of our most cherished celebrations, each one a unique masterpiece.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-foreground/70 hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 break-inside-avoid"
                >
                  <button
                    onClick={() => setLightbox(index)}
                    className="group relative block w-full overflow-hidden rounded-2xl"
                    aria-label={`View ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={600}
                      height={item.height === "tall" ? 500 : 350}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        item.height === "tall" ? "h-80 md:h-96" : "h-56 md:h-72"
                      }`}
                    />
                    <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full bg-card/20 text-white transition-colors hover:bg-card/40"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox]?.src || ""}
                alt={filtered[lightbox]?.title || ""}
                width={1200}
                height={800}
                className="h-auto max-h-[80vh] w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {filtered[lightbox]?.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {filtered[lightbox]?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
