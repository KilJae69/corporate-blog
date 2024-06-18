"use client";

import useInViewSubHeader from "@/hooks/useInViewSubHeader";
import Image from "next/image";
import React from "react";

type SubHeaderProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function SubHeader({ title, children }: SubHeaderProps) {
  const ref = useInViewSubHeader();
  return (
    <div
      ref={ref}
      className=" relative min-h-[30%] w-full pb-16 pt-[calc(50px+var(--header-height))]"
    >
      <Image
        src="/images/main-background.jpg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={50}
      />
      <div className="absolute inset-0 bg-primary/40"></div>
      {title && (
        <h1 className="text-clamp-lg container relative z-10 text-center font-bold text-white">
          {title}
        </h1>
      )}

      {children && children}
    </div>
  );
}
