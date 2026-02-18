"use client";

import Link from "next/link";
// import Image from "next/image";s
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-secondary relative min-h-screen overflow-hidden flex items-center">
      {/* decorative blur background */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE TEXT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              Premium Event Management
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-5xl lg:text-6xl"
            >
              Creating Moments
              <span className="text-primary"> That Last Forever</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
            >
              From elegant weddings to grand corporate galas, we transform your
              vision into extraordinary celebrations. Every detail perfectly
              curated.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:shadow-xl"
              >
                Plan Your Event
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border bg-white/30 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-white/10 hover:shadow-xl"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            {/* floating animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              <img
                src="/images/hero-image.jpg"
                alt="event"
                className="rounded-[20px]  shadow-2xl"
              />

              {/* floating cards */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 rounded-2xl bg-card p-4 shadow-xl"
              >
                <p className="text-sm font-bold text-primary">500+ Events</p>
                <span className="text-xs text-muted-foreground">
                  Successfully Managed
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-10 rounded-2xl bg-white p-4 shadow-xl"
              >
                <p className="text-sm font-bold text-primary">10+ Years</p>
                <span className="text-xs text-muted-foreground">
                  Experience
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
