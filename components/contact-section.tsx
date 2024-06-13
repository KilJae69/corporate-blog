import ContactUsButton from "./shared/contact-us-button";

export default function ContactSection() {
  return (
    <section className="bg-[#F4F8FA] px-5 py-16 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
        <p className="gradient-text-dark text-clamp-md font-bold tracking-wider">
          We create effective solutions for your ideas
        </p>
        <ContactUsButton variant="dark" label="Contact us" />
      </div>
    </section>
  );
}
