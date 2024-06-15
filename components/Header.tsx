"use client";
import { navbarLinks } from "@/constants/data";

import Logo from "./shared/logo";
import MobileNavbarToggle from "./mobile-navbar-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryLinkButton from "./shared/primary-link-button";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="absolute top-0 z-50 mx-auto h-header-height w-full  bg-transparent py-2.5">
      <div className="container flex size-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <div className="block xl:hidden">
            <MobileNavbarToggle />
          </div>
          <nav className="mr-10 hidden xl:block">
            <ul
              className={`flex gap-5 font-semibold  xl:text-xl
              ${
                pathname === "/" || pathname === "/resources"
                  ? "text-[#ccd1d9] "
                  : "text-[#16202a]"
              }
              `}
            >
              {navbarLinks.map((link) => (
                <li className="group relative" key={link.id}>
                  <Link
                    className={`transition-colors 
                      ${pathname === "/" || pathname === "/resources" ? "group-hover:text-white " : ""}
                      `}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-0  transition-all duration-500 group-hover:w-full
                    ${pathname === "/" || pathname === "/resources" ? "bg-[#ccd1d9]" : "bg-[#16202a]"}
                    `}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <PrimaryLinkButton
              href="/contact"
              variant={pathname === "/" || pathname === "/resources" ? "light" : "dark"}
              label="Get in Touch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
