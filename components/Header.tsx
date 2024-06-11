import { navbarLinks } from "@/constants/data";
import ContactUsButton from "./ContactUsButton";
import Logo from "./Logo";
import MobileNavbarToggle from "./MobileNavbarToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 mx-auto flex h-header-height w-full max-w-[2400px]  items-center justify-between bg-transparent px-5 py-2.5">
      <Logo />
      <div className="flex items-center gap-5">
        <div className="block xl:hidden">
          <MobileNavbarToggle />
        </div>
        <nav className="mr-10 hidden xl:block">
          <ul className="flex gap-5 font-semibold text-[#ccd1d9]">
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
          <ContactUsButton />
        </div>
      </div>
    </header>
  );
}
