"use client";

import useInViewHeroSection from "@/hooks/useInViewHeroSection";
import MarqueeBanner from "./shared/marquee-banner";
import TextCircle from "./text-circle";
import { MotionH1, MotionSpan } from "./shared/framer";
import Image from "next/image";


export default function HeroSection() {
  const ref = useInViewHeroSection();

  return (
    <section ref={ref} id="hero" className=" mb-auto">
      <div className="relative h-[70%] px-4 pb-14 pt-[calc(50px+var(--header-height))] md:px-8 md:pb-24 lg:px-16 xl:pb-32">
        <Image
          src="/images/bg-image.webp"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={30}
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container relative flex flex-col gap-8">
          <MotionH1 className="font-bold">
            <MotionSpan className="gradient-text text-clamp-max-xl">
              Your Vision.
            </MotionSpan>{" "}
            <br />
            <MotionSpan className="gradient-text text-clamp-max-xl">
              Our bytes.
            </MotionSpan>
          </MotionH1>

          {/* <p className="text-clamp-xs mt-8 text-white xs:max-w-[50%] xl:absolute xl:left-[60%] xl:top-[10%] xl:max-w-[40%]">
            Bring your start up or company vision! You bring the Why, we can
            help on the How.
          </p> */}
          <div className="relative md:absolute md:bottom-0 md:right-14 md:block md:max-h-[200px] md:max-w-[200px] lg:right-32">
            <TextCircle />
          </div>
        </div>
      </div>
      <MarqueeBanner
        text="Bring your start up or company vision! You bring the Why, we can
            help on the How."
      />
      {/* <div className="relative">
        <video
          className=" h-[30%] max-h-[700px] w-full object-cover"
          src="/images/bg-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 z-10 bg-black/40"></div>
      </div> */}
    </section>
  );
}
