import SkillsProgress from "@/components/shared/skills-progress";
import { teamData } from "@/constants/data";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import ContactForm from "@/components/contact-form";
import { notFound } from "next/navigation";

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
      <section className="bg-[#f4f8fa] px-4 pb-10 pt-[calc(50px+var(--header-height))] md:px-10 md:pb-[300px] 2md:pb-48">
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
                  sizes="(max-width:639px) 100vw, (max-width:1365px) 50vw, 30vw"
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
                    Qauris aliquam nisi non neque dignissim lobortis. Aenean
                    purus nisl, sollicitudin efficitur tortor ac, semper
                    hendrerit diam.
                  </p>
                  <p>
                    Donec interdum urna et auctor mattis. Nam imperdiet lobortis
                    nibh cursus. Suspendisse viverra nec massa eget ornare.
                  </p>
                  <p>
                    Mauris maximus dui nec neque consectetur, vel auctor eros
                    laoreet. Vestibulum ut justo tincidunt.
                  </p>
                  <p>
                    Nunc rhoncus pharetra porttitor. Proin a tellus quis neque
                    gravida venenatis. Nulla eget fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-14 lg:py-32">
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
