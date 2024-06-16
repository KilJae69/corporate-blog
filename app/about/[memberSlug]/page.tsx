import SkillsProgress from "@/components/shared/skills-progress";
import { teamData } from "@/constants/data";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import ContactForm from "@/components/contact-form";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const paths = teamData.map((member) => ({
    memberSlug: member.slug,
  }));

  return paths;
}

export default function MemberSinglePage({
  params,
}: {
  params: { memberSlug: "ryan-seifart" | "mike-nydell" };
}) {
  const member = teamData.find((member) => member.slug === params.memberSlug);

  if (!member) {
    return notFound();
  }

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

      <section className="bg-[#f4f8fa] px-4 py-10 md:px-8 md:pb-[300px] md:pt-16 2md:pb-48 lg:px-16 xl:pt-20">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-3">
          <div className="mb-6">
            <span className="text-xs uppercase text-[#5a5a67] md:text-lg xl:text-xl">
              {member.role}
            </span>
            <h1 className="text-clamp-md text-xl font-semibold text-[#16202a]">
              {member.name}
            </h1>
          </div>

          <div className="flex flex-col gap-5 md:w-full md:flex-row  md:gap-16 ">
            <div className="flex-1">
              <div className="relative mb-3 aspect-square size-full overflow-hidden">
                <Image
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  src={"/images/boss-1.jpg"} // Replace with real Image data
                  fill
                  sizes="(min-width: 1500px) 608px, (min-width: 1040px) 41.82vw, (min-width: 780px) calc(50vw - 64px), calc(100vw - 32px)"
                  alt={`${member.role} Image`}
                />
              </div>
              <a href={member.linkedIn} target="__blank">
                <span className="sr-only">
                  Link to {member.role} LinkedIn profile
                </span>
                <FaLinkedin className="size-8 cursor-pointer transition-colors hover:text-primary" />
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
                    Mike has 30 years of experience in IT, software development,
                    and technology consulting.
                  </p>
                  <p>
                    In his roles as Technology Director, Technical Sales Lead,
                    Architect, Developer, and Consultant has provided him
                    valuable experiences in operations, training, sales,business
                    development, and delivery.
                  </p>
                  <p>
                    Mike received his Bachelor of Science in Electrical
                    Engineering from the University of Connecticut.
                  </p>
                  <p>
                    He currently resides in Porter Texas with his wife of 30
                    years and has two adult boys. He loves to golf, enjoys a
                    good bourbon, and used to travel for fun.
                  </p>
                </div>
              </div>
            </div>
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
