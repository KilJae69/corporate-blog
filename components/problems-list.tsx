import { problemsData } from "@/constants/data";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProblemsList() {
  return (
    <Accordion type="single" className="" collapsible>
      {problemsData.map((problem) => (
        <AccordionItem key={problem.id} value={`item-${problem.id}`}>
          <AccordionTrigger className=" gap-3 text-start xl:text-xl">
            {problem.title}
          </AccordionTrigger>
          <AccordionContent className="relative max-w-[80%] text-sm leading-6 tracking-wider text-black/50 xl:text-lg">
            {problem.solution}
            <Image
              className={`  absolute right-[-20%] top-0 `}
              src={"/images/solved-stamp.png"}
              alt="solved"
              width={100}
              height={50}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
