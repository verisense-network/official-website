import Footer from "@/components/Footer";
import Ecosystem from "@/components/about/Ecosystem";
import Elevating from "@/components/about/Elevating";
import Restakers from "@/components/about/Restakers";
import Trust from "@/components/about/Trust";
import Validator from "@/components/about/Validator";

export default function Home() {
  return (
    <div className="lg:w-[1400px] w-full flex flex-col w-screen min-h-screen space-y-12">
      <Trust />
      <Elevating />
      <Restakers />
      <Validator />
      <Ecosystem />
      <Footer />
    </div>
  );
}
