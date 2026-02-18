"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/motion"

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    event: "Wedding",
    text: "Eventiverich made our wedding day absolutely magical. Every detail was perfect, from the stunning floral arrangements to the seamless coordination. We could not have asked for a better team.",
  },
  {
    name: "Priya Sharma",
    event: "Engagement",
    text: "The team went above and beyond for our engagement celebration. The decor was breathtaking, and every guest was amazed by the attention to detail. Truly a dream come true.",
  },
  {
    name: "David Chen",
    event: "Corporate Gala",
    text: "Our annual corporate gala was elevated to a new level thanks to Eventiverich. Professional, creative, and incredibly organized. Our clients were thoroughly impressed.",
  },
  {
    name: "Amara Okafor",
    event: "Birthday Party",
    text: "My daughter's birthday party was nothing short of spectacular. The creativity and care that went into every element was remarkable. The kids loved it, and so did the adults.",
  },
]

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="The love and trust of our clients is our greatest reward."
        />

        <FadeIn>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
              <Quote size={28} />
            </div>

            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-serif text-lg font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-primary">{testimonials[current].event}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
