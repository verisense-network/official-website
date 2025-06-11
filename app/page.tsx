import HeroSection from "@/components/home/hero-section"
import WhyVerisenseSection from "@/components/home/why-verisense-section"
import KeyTechnologySection from "@/components/home/key-technology-section"
import KeyApplicationsSection from "@/components/home/key-applications-section"
import BackedBySection from "@/components/home/backed-by-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative bg-[url('/bg-lines.svg')] bg-no-repeat bg-position-[center_240px] md:bg-position-[60%_240px] z-10">
        <WhyVerisenseSection />
        <KeyTechnologySection />
        <KeyApplicationsSection />
      </div>
      <BackedBySection />
    </>
  )
}
