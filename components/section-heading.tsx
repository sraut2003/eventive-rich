import { FadeIn } from "@/components/motion"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <FadeIn>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg text-pretty">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
