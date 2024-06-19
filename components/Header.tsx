"use client";
import { navbarLinks } from "@/constants/data";

import Logo from "./shared/logo";
import MobileNavbarToggle from "./mobile-navbar-toggle";
import Link from "next/link";

import PrimaryLinkButton from "./shared/primary-link-button";
import { MotionHeader } from "./shared/framer";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import useSectionStore from "@/hooks/store/useSectionStore";
import { usePathname } from "next/navigation";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const pathname = usePathname();

  const {
    isHeroSectionVisible: heroInView,
    isSubHeaderVisible: subHeaderInView,
    setHeroSectionVisible,
    setSubHeaderVisible,
  } = useSectionStore((state) => state);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (
      ((heroInView || subHeaderInView) && latest > 0) ||
      (latest > previous! && latest > 0)
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset state on path change
    setHeroSectionVisible(false);
    setSubHeaderVisible(false);
  }, [pathname, setHeroSectionVisible, setSubHeaderVisible]);

  return (
    <MotionHeader
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 z-50 mx-auto h-header-height w-full ${
        initialLoad || heroInView || subHeaderInView
          ? "bg-transparent shadow-none"
          : "bg-primary shadow-lg shadow-black/40"
      } px-4 py-2.5  md:px-8 lg:px-16`}
    >
      <div className="container flex size-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <div className="block xl:hidden">
            <MobileNavbarToggle />
          </div>
          <nav className="mr-10 hidden xl:block">
            <ul
              className={`flex gap-5 font-semibold text-[#ccd1d9] xl:text-xl
              
              `}
            >
              {navbarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li className="group relative" key={link.id}>
                    <Link
                      className={`transition-colors group-hover:text-white
                      ${isActive && "text-white"}
                      `}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-0  bg-[#ccd1d9] transition-all duration-500 group-hover:w-full
                    ${isActive && "w-full "}
                    `}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden md:block">
            <PrimaryLinkButton
              href="/contact"
              variant={"light"}
              label="Get in Touch"
            />
          </div>
        </div>
      </div>
    </MotionHeader>
  );
}
