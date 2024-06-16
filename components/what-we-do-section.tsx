import { servicesData } from "@/constants/data";
import Image from "next/image";
import AboutUsCard from "./about-us-card";
import React from "react";

export default function WhatWeDoSection() {
  return (
    <section className=" bg-[#16202a] px-4 py-10 text-[#ccd1d9] md:px-8 md:py-20 lg:px-16 xl:py-32">
      <div className="container mx-auto flex flex-col gap-5 pb-20 md:gap-8 md:pb-32 xl:gap-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-xs uppercase text-white md:text-lg xl:text-xl">
            What we do
          </h2>
          <p className="text-clamp-lg  leading-10 md:max-w-[50%] md:leading-[1.2] xl:leading-[1.2]">
            <span className="gradient-text inline-block ">
              Constantly coming
            </span>{" "}
            <span className="gradient-text inline-block">
              up with new creative ideas
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-5  md:flex-row md:gap-10">
          <div className="flex flex-col gap-5 md:min-w-[40%] md:gap-9 md:text-xl xl:text-3xl">
            <p>
              Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, sed do eiusm od tempor.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={"/images/ceo-image.png"}
                width={80}
                height={80}
                alt="CEO Image"
                className="rounded-full"
              />
              <p className="flex flex-col">
                <span className="inline-block text-lg text-white xl:text-4xl">
                  Ryan Seifert
                </span>
                <span className="inline-block ">CEO</span>
              </p>
            </div>
          </div>

          <div className="grid gap-4 leading-7 md:grid-cols-2 xl:text-xl">
            <p
              className="first-letter:float-left
            first-letter:mr-3 first-letter:text-5xl first-letter:font-semibold
  first-letter:text-white first-line:tracking-widest"
            >
              Qauris aliquam nisi non neque dignissim lobortis. Aenean purus
              nisl, sollicitudin efficitur tortor ac, semper hendrerit diam.
            </p>
            <p>
              Donec interdum urna et auctor mattis. Nam imperdiet lobortis nibh
              cursus. Suspendisse viverra nec massa eget ornare.
            </p>
            <p>
              Mauris maximus dui nec neque consectetur, vel auctor eros laoreet.
              Vestibulum ut justo tincidunt.
            </p>
            <p>
              Nunc rhoncus pharetra porttitor. Proin a tellus quis neque gravida
              venenatis. Nulla eget fermentum.
            </p>
          </div>
        </div>
      </div>

      <div className=" grid justify-items-center gap-5 xl:container sm:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service) => (
          <React.Fragment key={service.id}>
            <AboutUsCard
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
