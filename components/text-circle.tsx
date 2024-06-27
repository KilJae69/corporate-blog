"use client"
import Link from "next/link";

import { FaArrowDown } from "react-icons/fa6";

export default function TextCircle() {
  const handleScroll = (event:any) => {
    event.preventDefault();
    const target = document.querySelector("#what-we-do");
   if(target)  target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href={"#what-we-do"}
      aria-label="Scroll down to the next section"
      className="relative block w-max hover:cursor-pointer"
      onClick={handleScroll}
    >
      <svg
        className="relative size-[150px] animate-spin-slow  md:size-[200px] lg:size-[250px]"
        viewBox="0 0 250 250"
      >
        <path
        onClick={e => e.preventDefault()}
          id="curve"
          d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
        ></path>
        <text className="text text-xl">
          <textPath href="#curve" startOffset="0%">
            Scroll down &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scroll down
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scroll down
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --------------------
          </textPath>
        </text>
      </svg>
      <FaArrowDown className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white" />
    </Link>
  );
}
