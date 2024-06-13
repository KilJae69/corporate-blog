import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/constants/data";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#16202a] px-5 pb-20 pt-10 lg:pt-20 xl:pt-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-xs font-bold uppercase text-white md:text-lg xl:text-xl">
          Client Testimonials
        </h2>

        <div className="mx-auto w-[90%]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className=""
          >
            <CarouselContent className="w-full">
              {testimonialsData.map((testimonial) => (
                <CarouselItem
                  className="flex flex-col items-center gap-5 text-center md:gap-10"
                  key={testimonial.id}
                >
                  <h3 className="text-clamp-lg text-white">{testimonial.quote}</h3>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.imageUrl}
                      width={80}
                      height={80}
                      alt="CEO Image"
                      className="rounded-full"
                    />
                    <p className="flex flex-col">
                      <span className="inline-block text-lg text-white xl:text-4xl">
                        {testimonial.fullName}
                      </span>
                      <span className="inline-block text-white/50">
                        {testimonial.tag}
                      </span>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className="-left-3 size-6 text-white hover:text-primary sm:left-0 sm:size-14"
            />
            <CarouselNext
              variant="ghost"
              className="-right-3 size-6 text-white hover:text-primary sm:right-0 sm:size-14"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
