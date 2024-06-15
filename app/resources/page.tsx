import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <>
      <div className=" min-h-[30%] w-full bg-[#16202a] pb-16 pt-[calc(50px+var(--header-height))]">
        <h1 className="text-clamp-lg container text-center font-bold text-white">
          Videos
        </h1>
      </div>
      <section className=" bg-[#f4f8fa] px-4 pb-24 pt-20 md:px-10 md:pb-44 md:pt-56">
        <div className="relative">
          <div className="pb-14">
            <h2 className="text-xs font-semibold uppercase text-[#16202a] md:text-lg xl:text-xl">
              Our videos
            </h2>
            <span className="text-clamp-lg font-semibold text-[#16202a]">
              Pupular videos
            </span>
            <p className="text-[#5a5a67]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe
              consectetur dolorem vitae tenetur quis cumque at atque esse.
            </p>
          </div>
          <div className="w-full">
            <Carousel className="">
              <CarouselContent>
                <CarouselItem className="bg-rose-200">
                  <div className="relative aspect-video">
                    <Image src={"/images/video-image-1.jpg"} fill alt="video" />
                  </div>
                </CarouselItem>
                <CarouselItem className="bg-rose-400">Item2...</CarouselItem>
                <CarouselItem className="bg-rose-600">Item3...</CarouselItem>
              </CarouselContent>
              <div className="absolute left-12 top-[180px]">
                <CarouselPrevious
                  variant={"ghost"}
                  className="size-6 text-black hover:text-primary"
                />
                <CarouselNext
                  variant={"ghost"}
                  className="size-6 text-black hover:text-primary"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
