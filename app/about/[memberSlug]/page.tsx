import { teamData } from "@/constants/data";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import ContactForm from "@/components/contact-form";
import { notFound } from "next/navigation";
import React from "react";

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
      <SubHeader>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-4  md:flex-row md:px-8  lg:px-16 ">
          <div className="relative w-max overflow-hidden rounded-full border-4 border-accent">
            <Image
              className=" object-cover"
              width={250}
              height={250}
              src={member.imageUrl}
              alt={`${member.role} Image`}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-clamp-md relative font-semibold text-white">
              {member.name}{" "}
              <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-md bg-accent" />
              <span className="text-white/50">({member.role})</span>
            </h1>
            <p className="text-clamp-sm text-[#ccd1d9]">{member.shortBio}</p>
            <FaLinkedin className="size-8 cursor-pointer text-white transition-colors hover:text-accent" />
          </div>
        </div>
      </SubHeader>

      <section className="bg-lightBg px-4 py-10 md:px-8 md:pb-20 md:pt-16 lg:px-16 xl:pt-20">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse gap-5 md:block">
          <div className="h-max rounded-bl-3xl rounded-tr-3xl bg-primaryAccent p-5 md:float-right md:ml-10 md:mt-[-150px]">
            <h2 className="text-clamp-md relative mb-5 font-semibold text-white">
              Specialties
              <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-md bg-accent" />
            </h2>
            <ul className="flex list-disc flex-col gap-3 p-4">
              {member.specialties.map((specialty, index) => (
                <li key={index} className="text-white/80 md:whitespace-nowrap">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-clamp-md mb-5 font-semibold text-primary">
              About {member.name.split(" ")[0]}
            </h2>
            <div className="text-clamp-xs leading-7 tracking-wider text-primary/60">
              {member.bio.map((para) => (
                <p className="mb-4" key={para.id}>
                  {para.paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-10 md:px-8 lg:px-16  lg:py-20 ">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-clamp-md relative mx-auto mb-5 w-max font-semibold text-[white]">
            Skill Sets/Focus
            <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-md bg-accent" />
          </h2>
          <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-10 md:flex-row">
            {member.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col gap-5 rounded-md bg-primaryAccent p-8 text-white md:min-h-[220px]"
              >
                <h3 className="text-clamp-sm text-accent">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-14 md:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row  md:gap-20">
          <div className="flex flex-1 flex-col gap-3 leading-7 text-[#5a5a67]">
            <h2 className="text-clamp-md mb-5 font-semibold text-[#131c26]">
              Interested in partnership with {member.name.split(" ")[0]}?
            </h2>
            <p className="italic leading-10 tracking-wider md:text-xl">
              We are always excited to explore new opportunities and collaborate
              with innovative partners. {member.name.split(" ")[0]} is dedicated
              to fostering mutually beneficial relationships that drive growth
              and success for all parties involved. If you share our vision and
              enthusiasm, we’d love to hear from you!
            </p>
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
