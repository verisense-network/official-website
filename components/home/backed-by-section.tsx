import { BACKED_BY_LOGOS } from "@/lib/constants"
import BackedCarouselPlayer from "./backed-carousel-player"

export default function BackedBySection() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Loved and Supported By</h2>
        <BackedCarouselPlayer items={BACKED_BY_LOGOS} delay={3000} />
      </div>
    </section>
  )
}
