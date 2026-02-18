import { Hero } from "@/components/home/hero"
import { Introduction } from "@/components/home/introduction"
import { ServicesOverview } from "@/components/home/services-overview"
import { FeaturedGallery } from "@/components/home/featured-gallery"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSlider } from "@/components/home/testimonials-slider"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <FeaturedGallery />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTABanner />
    </>
  )
}
