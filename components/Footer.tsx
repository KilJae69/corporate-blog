import { FaPaperPlane } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import SocialLinks from "./shared/social-links";
import {  navbarMobileLinks } from "@/constants/data";
import Link from "next/link";
import SubscribeForm from "./subscribe-form";

const Footer = () => {
  return (
    <footer className=" bg-primary px-4 pb-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl  pt-[70px] md:pt-[90px] xl:pt-[120px]">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-8 ">
          <div className="flex size-10 items-center justify-center rounded-full bg-accent">
            <FaPaperPlane className="size-5 translate-x-[-2px] text-white" />
          </div>
          <p className="text-clamp-md text-center text-xl font-semibold text-white">
            Get the best blog stories into your inbox!
          </p>
          <div className="flex w-full flex-col items-center gap-4 xs:h-14 xs:flex-row xs:gap-0">
            
            <SubscribeForm />
          </div>
        </div>

        <Separator className="my-8 block h-px bg-[#e2e2e1]/30 md:my-10 xl:my-14" />

        <div className=" flex w-full flex-col items-center justify-center gap-3 xl:flex-row-reverse xl:justify-between">
          <SocialLinks withBackground />

          <nav className="hidden md:block">
            <ul className="flex gap-5 font-semibold ">
              {navbarMobileLinks.map((link) => (
                <li
                  className="text-white transition-colors hover:text-accent"
                  key={link.id}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <small className="mt-5 text-xs text-white">
            Copyright © 2023 Teric Technolgy LLC. All Rights Reserved | Sitemap
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
