import SkillsProgress from "@/components/shared/skills-progress";
import { teamData } from "@/constants/data";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import ContactForm from "@/components/contact-form";
import { notFound } from "next/navigation";
import React from "react";
import AboutUsCard from "@/components/about-us-card";
import SubHeader from "@/components/shared/sub-header";
import { Metadata } from "next";

type MemberSinglePageProps = {
  params: {
    memberSlug: string;
  };
};

export function generateStaticParams() {
  const paths = teamData.map((member) => ({
    memberSlug: member.slug,
  }));

  return paths;
}

// Will need to be async 
export async function generateMetadata({
  params,
}: MemberSinglePageProps): Promise<Metadata> {
  // read route params
  const memberSlug = params.memberSlug;

  // fetch data
  const member = teamData.find((member) => member.slug === memberSlug);
  if (!member) return notFound();

  const bio = member.bio.map((para) => para.paragraph).join(" ");

  return {
    title: member.name,
    description: bio,
  };
}

export default function MemberSinglePage({ params }: MemberSinglePageProps) {
  const member = teamData.find((member) => member.slug === params.memberSlug);

  if (!member) {
    return notFound();
  }

  return (
    <>
      <SubHeader title="Our team"/>

      <section className="bg-lightBg px-4 py-10 md:px-8 md:pb-[300px] md:pt-16 2md:pb-48 lg:px-16 xl:pt-20">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-3">
          <div className="mb-6">
            <span className="text-xs uppercase text-[#5a5a67] md:text-lg xl:text-xl">
              {member.role}
            </span>
            <h1 className="text-clamp-md text-xl font-semibold text-primary">
              {member.name}
            </h1>
          </div>

          <div className="flex flex-col gap-5 md:w-full md:flex-row  md:gap-16 ">
            <div className="flex-1">
              <div className="relative mb-3 aspect-square size-full overflow-hidden">
                <Image
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  src={member.imageUrl} // Replace with real Image data
                  fill
                  sizes="(min-width: 1500px) 608px, (min-width: 1040px) 41.82vw, (min-width: 780px) calc(50vw - 64px), calc(100vw - 32px)"
                  alt={`${member.role} Image`}
                />
              </div>
              <a href={member.linkedIn} target="__blank">
                <span className="sr-only">
                  Link to {member.role} LinkedIn profile
                </span>
                <FaLinkedin className="size-8 cursor-pointer transition-colors hover:text-accent" />
              </a>
            </div>

            <div className=" flex-1 lg:pt-16">
              <div className="flex flex-col gap-5">
                {member.skills.map((skill) => (
                  <SkillsProgress
                    key={skill.id}
                    skillTitle={skill.title}
                    skillValue={skill.value}
                  />
                ))}
              </div>

              <div className=" mt-9 md:absolute md:left-[40%] md:right-0">
                <div className=" grid gap-4 bg-white px-6 py-7 leading-7 text-[#5a5a67] md:grid-cols-2 md:px-8 md:py-9 xl:text-xl">
                  <p
                    className="first-letter:float-left
            first-letter:mr-3 first-letter:text-5xl first-letter:font-semibold
            first-letter:text-black/60 first-line:tracking-widest"
                  >
                    Qonsectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do eiusm od tempor incididunt ut
                    labore.
                  </p>
                  <p>
                    Adipiscing elit, sed do eiusm consectetur aonsectetur sed do
                    eiusm od tempor adipiscing elit, sed do eiusm od tempor.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do eiusm od tempor incididunt ut
                    labore.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do eiusm od tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e2ecf1] px-4 pb-10 md:px-8   lg:px-16 ">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-clamp-md mb-5 font-semibold text-[#131c26]">
            Skill Sets/Focus
          </h2>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-10">
            {member.skills.map((skill) => (
              <React.Fragment key={skill.id}>
                <AboutUsCard
                  className="max-w-[300px]"
                  title={skill.title}
                  description={skill.description}
                  imageUrl={skill.imgUrl}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-14 md:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row  md:gap-20">
          <div className="flex flex-1 flex-col gap-3 leading-7 text-[#5a5a67]">
            <h2 className="text-clamp-md mb-5 font-semibold text-[#131c26]">
              Biography
            </h2>
            {member.bio.map((para) => (
              <p key={para.id}>{para.paragraph}</p>
            ))}
          </div>
          <ContactForm
            className="flex-1 p-0 shadow-none xs:p-0 md:p-0 lg:p-0"
            formTitle="LET'S TALK"
          />
        </div>
      </section>
    </>
  );
}
