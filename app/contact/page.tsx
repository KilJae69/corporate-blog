import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/shared/social-links";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team to discuss your technology needs and vision. Whether you have questions or need support, we're here to help. Contact us through our form or email, and connect with us on social media. Let's collaborate to achieve your goals together.",
};

export default function ContactPage() {
  return (
    <>
      <div className=" relative min-h-[30%] w-full pb-16 pt-[calc(50px+var(--header-height))]">
        <Image
          src="/images/main-background.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-[#16202a]/40"></div>
      </div>
      <section className="bg-[#f4f8fa] px-4  py-20 md:px-8 md:py-24 lg:px-16 xl:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-9 md:flex-row md:gap-14">
          <div className="mx-auto w-full max-w-2xl">
            <ContactForm formTitle="Contact Form" />
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className="text-xs font-semibold uppercase text-[#16202a] md:text-lg xl:text-xl">
              Contact us
            </h1>
            <span className="text-clamp-md font-bold">
              Have questions? Get in touch?
            </span>
            <a
              className="transition-colors hover:text-primary"
              href="mailto:sales@terictechnology.com"
            >
              sales@terictechnology.com
            </a>
            <SocialLinks withBackground />
          </div>
        </div>
      </section>
    </>
  );
}
