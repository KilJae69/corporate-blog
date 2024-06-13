import { navbarLinks } from "@/constants/data";
import ContactUsButton from "./shared/contact-us-button";
import Logo from "./shared/logo";
import MobileNavbarToggle from "./mobile-navbar-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 mx-auto h-header-height w-full  bg-transparent px-5 py-2.5">
      <div className="container flex size-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <div className="block xl:hidden">
            <MobileNavbarToggle />
          </div>
          <nav className="mr-10 hidden xl:block">
            <ul className="flex gap-5 font-semibold text-[#ccd1d9] xl:text-xl">
              {navbarLinks.map((link) => (
                <li className="group relative" key={link.id}>
                  <Link
                    className="transition-colors group-hover:text-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#ccd1d9] transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <ContactUsButton variant="light" label="Get in Touch" />
          </div>
        </div>
      </div>
    </header>
  );
}
