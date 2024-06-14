"use client";
import useNavbarStore from "@/hooks/store/useNavbarStore";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";

type MobileNavbarToggleProps = {
  close?: boolean;
};

export default function MobileNavbarToggle({ close }: MobileNavbarToggleProps) {
  const { toggleNavbar } = useNavbarStore();
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (close) {
    return (
      <button
        onClick={toggleNavbar}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group flex cursor-pointer items-center gap-2 text-lg text-[#8c96a1]"
      >
        Close
        <IoClose
          className={cn(
            "size-7 text-white",

            isHovered ? "spin-animation" : "reverse-spin-animation"
          )}
        />
      </button>
    );
  }

  return (
    <button onClick={toggleNavbar}>
      <IoMenuOutline
        className={`size-8 ${
          pathname === "/" ? "text-white" : "text-[#16202a]"
        }`}
      />
    </button>
  );
}
