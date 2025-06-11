"use client"

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export default function BackedCarouselPlayer({ items, delay = 3000 }: { items: any[], delay?: number }) {
  return <Carousel
    className="mt-4"
    opts={{
      align: "center",
      loop: true,
    }}
    plugins={[Autoplay({ delay })]}>
    <CarouselContent>
      {items.map((logo) => (
        <CarouselItem key={logo.name} className="flex justify-center items-center basis-1/3 md:basis-1/5">
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            width={150}
            height={50}
            className="object-contain mx-auto"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
}