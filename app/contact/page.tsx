import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/shared/social-links";
import SubHeader from "@/components/shared/sub-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team to discuss your technology needs and vision. Whether you have questions or need support, we're here to help. Contact us through our form or email, and connect with us on social media. Let's collaborate to achieve your goals together.",
};

export default function ContactPage() {
  return (
    <>
      <SubHeader title="Contact Us"/>
      <section className="bg-lightBg px-4  py-20 md:px-8 md:py-24 lg:px-16 xl:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-9 md:flex-row md:gap-14">
          <div className="mx-auto w-full max-w-2xl">
            <ContactForm formTitle="Contact Form" />
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className="text-xs font-semibold uppercase text-primary md:text-lg xl:text-xl">
              Contact us
            </h1>
            <span className="text-clamp-md font-bold">
              Have questions? Get in touch?
            </span>
            <a
              className="transition-colors hover:text-accent"
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
