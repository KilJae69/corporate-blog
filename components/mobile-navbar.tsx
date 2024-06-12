"use client";
import { navbarLinks } from "@/constants/data";
import Logo from "./logo";
import MobileNavbarToggle from "./mobile-navbar-toggle";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { Separator } from "./ui/separator";
import useNavbarStore from "@/hooks/store/useNavbarStore";
import SocialLinks from "./social-links";

export default function MobileNavbar() {
  const { isNavbarOpen } = useNavbarStore();
  return (
    <div
      className={`absolute inset-0 z-50 h-screen bg-[#16202A] px-5 transition-all duration-500
    ${isNavbarOpen ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div
        className={`flex items-center justify-between py-8 transition-opacity delay-500 duration-500
        ${isNavbarOpen ? "opacity-100" : "opacity-0"}
        `}
      >
        <Logo />
        <MobileNavbarToggle close />
      </div>
      <nav className="mt-16">
        <ul className="flex flex-col gap-4 border-b-white text-2xl font-semibold text-[#ccd1d9]">
          {navbarLinks.map((link) => (
            <li className="group flex items-center gap-5" key={link.id}>
              <Link
                className="transition-colors group-hover:text-white"
                href={link.href}
              >
                {link.title}
              </Link>
              <FaArrowRightLong className="text-sm transition-all group-hover:translate-x-2 group-hover:text-white" />
            </li>
          ))}
        </ul>
      </nav>
      <Separator className="mt-10 h-px bg-[#b7b9bd]/40" />
      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  );
}
