import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import SocialLinks from "./social-links";
import { navbarLinks } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#131313] pb-8">
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-6">
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-1.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-2.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-3.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-4.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-5.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
        <div className="relative aspect-square max-w-[725px]">
          <Image
            className="object-cover"
            src="/images/footer-image-6.avif"
            fill
            sizes="(max-width:479px) 50vw, (max-width:767px) 33vw, 20vw"
            alt="image"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3">
        <div className="mx-auto mt-[70px] flex max-w-[600px] flex-col items-center gap-5 ">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary">
            <FaPaperPlane className="size-5 translate-x-[-2px] text-white" />
          </div>
          <p className="text-center text-xl font-semibold text-white">
            Get the best blog stories into your inbox!
          </p>
          <div className="flex w-full flex-col items-center gap-4 xs:h-14 xs:flex-row xs:gap-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full flex-1 bg-[#232323] p-4 text-white outline-none focus:bg-[#232323]/50 active:bg-[#232323]/50"
            />
            <button className="group relative flex min-h-14 max-w-[155px] items-center justify-center gap-2 bg-[#232323] px-5 uppercase text-white transition-all hover:text-primary ">
              <span className="absolute left-0 h-4/5 w-px bg-[#2b2b2b] " />
              <FaPaperPlane className="size-3 text-white transition-all group-hover:text-primary" />
              Subscribe
            </button>
          </div>
        </div>

        <Separator className="mt-8 block h-px bg-[#e2e2e1]/30" />

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 xl:mt-12 xl:flex-row-reverse xl:justify-between">
          <SocialLinks withBackground />

          <nav className="hidden md:block">
            <ul className="flex gap-5 font-semibold ">
              {navbarLinks.map((link) => (
                <li
                  className="text-white transition-colors hover:text-[#ff472b]"
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
