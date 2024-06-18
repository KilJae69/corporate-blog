"use client";

import Link from "next/link";

type PrimaryLinkButtonProps = {
  label: string;
  variant?: "light" | "dark" | "primary";
  href: string;
};

export default function PrimaryLinkButton({
  label,
  variant = "primary",
  href,
}: PrimaryLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[50px] w-[200px] cursor-pointer items-center justify-center overflow-hidden border  bg-transparent font-semibold uppercase 
        ${variant === "light" && "border-white text-white"}
        ${variant === "dark" && "border-black text-black"}
        ${variant === "primary" && "border-accent text-accent"}`}
    >
      <span
        className={`ease absolute left-0 top-0 size-full -translate-x-full transition-all duration-700 group-hover:translate-x-0
          ${variant === "light" && "bg-white"}
          ${variant === "dark" && "bg-black"}
          ${variant === "primary" && "bg-accent"}
        `}
      ></span>
      <span
        className={`ease relative z-10  transition duration-300 
          ${variant === "light" && "text-white group-hover:text-black"}
          ${variant === "dark" && "text-black group-hover:text-white"}
          ${variant === "primary" && "text-accent group-hover:text-white"}
        `}
      >
        {label}
      </span>
    </Link>
  );
}
