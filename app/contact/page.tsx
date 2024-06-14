import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/shared/social-links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team to discuss your technology needs and vision. Whether you have questions or need support, we're here to help. Contact us through our form or email, and connect with us on social media. Let's collaborate to achieve your goals together.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#f4f8fa] px-4 pb-24 pt-[calc(50px+var(--header-height))] md:px-10 md:pb-44 md:pt-56">
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
  );
}
