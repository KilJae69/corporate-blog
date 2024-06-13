import ContactUsButton from "@/components/shared/contact-us-button";
import MarqueeBanner from "@/components/shared/marquee-banner";
import { Metadata } from "next";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover our team's passion for technology and collaboration. Learn how we support startups and companies by bringing your vision to life through innovative solutions. Meet our dedicated team committed to fostering growth and partnership. Get in touch to start your journey with us today.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f4f8fa] px-4 pb-10 pt-[calc(50px+var(--header-height))] md:px-10 md:pb-32 md:pt-56">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:gap-14">
          <h1 className="sr-only">About our company and our team</h1>
          <div className="relative aspect-video size-full md:md:aspect-[10/14] md:w-1/2">
            <Image
              className="absolute inset-0 size-full object-cover"
              src={"/images/about-image-2.avif"}
              fill
              sizes="(max-width:767px) 100vw,50vw"
              alt="Collaboration image"
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-1">
            <h2 className="text-xs font-semibold uppercase text-[#16202a] md:text-lg xl:text-xl">
              About us
            </h2>
            <span className="text-clamp-md font-bold">
              Growth through collaboration and partnership
            </span>
            <p className="text-clamp-xs tracking-wide text-[#5a5a67]">
              We are technologists with a passion to help the people who change
              the world. We focus on supporting your vision through close
              collaboration, open communication, and perpetual transparency.
            </p>
            <p className="text-clamp-xs tracking-wide text-[#5a5a67]">
              Growth for you, your company, and your users starts with a
              collaborative discussion. We know an open mind and multiple view
              points lead to the best results. Together we can leap forward.
            </p>
            <ContactUsButton variant="primary" label="Get in Touch" />
          </div>
        </div>
        <MarqueeBanner />
      </section>
      <section className="bg-[#f4f8fa] px-4 pb-24  md:px-10 md:pb-44 ">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-14">
          <h2 className="text-xs font-semibold uppercase text-[#16202a] md:text-lg xl:text-xl">
            Meet our team
          </h2>
          <span className="text-clamp-md font-bold">
            Technology leadership, strategic vision, and process improvement
          </span>
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
            <div className="flex w-full max-w-xl flex-col gap-3">
              <div className="relative aspect-square size-full">
                <Image
                  className="object-cover"
                  src={"/images/ceo-image.png"}
                  fill
                  alt="CEO Image"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#16202a]">
                Ryan Seifert
              </h3>
              <span className="text-lg text-[#5a5a67]">CEO</span>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/ryangregoryseifert/"
              >
                <span className="sr-only">Link to CEO LinkedIn profile</span>
                <FaLinkedin className="size-9 cursor-pointer transition-colors hover:text-primary" />
              </a>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-3">
              <div className="relative aspect-square size-full">
                <Image
                  className="object-cover"
                  src={"/images/coo-image.png"}
                  fill
                  alt="CEO Image"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#16202a]">
                Mike Nydell
              </h3>
              <span className="text-lg text-[#5a5a67]">COO</span>
              <a
                href="https://www.linkedin.com/in/mikenydell/"
                target="__blank"
              >
                <span className="sr-only">Link to COO LinkedIn profile</span>
                <FaLinkedin className="size-9 cursor-pointer transition-colors hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
