import { problemsData } from "@/constants/data";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarqueeBanner from "./shared/marquee-banner";

export default function ProblemsSection() {
  return (
    <section className=" bg-[#F4F8FA] px-5 pb-20 pt-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center xl:gap-24">
        <div className="relative aspect-video size-full md:aspect-[10/14]">
          <Image
            className="object-cover"
            src="/images/problems-image-2.avif"
            fill
            alt="Teamwork"
          />
        </div>

        <div className="w-full">
          <h2 className="mb-10 text-xs font-bold uppercase text-black md:text-lg xl:text-xl">
            Problems we solve
          </h2>
          <Accordion type="single" className="" collapsible>
            {problemsData.map((problem) => (
              <AccordionItem key={problem.id} value={`item-${problem.id}`}>
                <AccordionTrigger className="gap-3 text-start hover:text-primary data-[state=open]:text-primary xl:text-xl">
                  {problem.title}
                </AccordionTrigger>
                <AccordionContent className="relative max-w-[95%] text-sm leading-6 tracking-wider text-black/50 xl:text-lg">
                  {problem.solution}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <MarqueeBanner />
    </section>
  );
}
