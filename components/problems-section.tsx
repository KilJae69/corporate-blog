import { problemsData } from "@/constants/data";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProblemsSection() {
  return (
    <section className=" bg-lightBg px-4 pt-10 md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center xl:gap-24">
        <div className="relative aspect-video size-full md:aspect-[10/14]">
          <Image
            className="object-cover"
            src="/images/problems-image-2.avif"
            fill
            alt="Teamwork"
            sizes="(min-width: 1460px) 592px, (min-width: 1040px) calc(39vw + 30px), (min-width: 780px) calc(50vw - 52px), calc(100vw - 32px)"
          />
        </div>

        <div className="w-full">
          <h2 className="mb-10 text-xs font-bold uppercase text-black md:text-lg xl:text-xl">
            Problems we solve
          </h2>
          <Accordion type="single" className="" collapsible>
            {problemsData.map((problem) => (
              <AccordionItem key={problem.id} value={`item-${problem.id}`}>
                <AccordionTrigger className="gap-3 text-start hover:text-accent data-[state=open]:text-accent xl:text-xl">
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
    </section>
  );
}
