import Footer from "@/components/Footer";
import Elevating from "@/components/about/Elevating";
import Features from "@/components/features";
import Trust from "@/components/about/Trust";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <div className="lg:w-[1400px] px-6 w-full flex flex-col w-screen min-h-screen space-y-12">
      <Trust />
      <Elevating />
      <Features />
      <Partners />
      <Footer />
    </div>
  );
}
