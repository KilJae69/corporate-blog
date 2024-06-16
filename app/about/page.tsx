import MarqueeBanner from "@/components/shared/marquee-banner";
import PrimaryLinkButton from "@/components/shared/primary-link-button";
import TeamCard from "@/components/team-card";
import { teamData } from "@/constants/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover our team's passion for technology and collaboration. Learn how we support startups and companies by bringing your vision to life through innovative solutions. Meet our dedicated team committed to fostering growth and partnership. Get in touch to start your journey with us today.",
};

export default function AboutPage() {
  return (
    <>
      <div className=" relative min-h-[30%] w-full pb-16 pt-[calc(50px+var(--header-height))]">
        <Image
          src="/images/main-background.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-[#16202a]/40"></div>
      </div>
      <section className="bg-[#f4f8fa] px-4  pt-10 md:px-8 md:pt-16 lg:px-16 xl:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:gap-14">
          <h1 className="sr-only">About our company and our team</h1>
          <div className="relative aspect-video size-full md:md:aspect-[10/14] md:w-1/2">
            <Image
              className="absolute inset-0 size-full object-cover"
              src={"/images/about-image-2.avif"}
              fill
              sizes="(min-width: 1500px) 640px, (min-width: 1040px) 41.82vw, (min-width: 780px) calc(50vw - 32px), calc(100vw - 32px)"
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
            <PrimaryLinkButton
              variant="primary"
              href="/contact"
              label="Get in Touch"
            />
          </div>
        </div>
      </section>
      <MarqueeBanner text="We help realize business ideas"/>
      <section className="bg-[#f4f8fa] px-4 pb-24  md:px-10 md:pb-44 ">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-14">
          <h2 className="text-xs font-semibold uppercase text-[#16202a] md:text-lg xl:text-xl">
            Meet our team
          </h2>
          <span className="text-clamp-md font-bold">
            Technology leadership, strategic vision, and process improvement
          </span>
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
            {teamData.map((member) => (
              <TeamCard
                href={`/about/${member.slug}`}
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                linkedIn={member.linkedIn}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
