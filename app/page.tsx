import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import MarqueeBanner from "@/components/shared/marquee-banner";
import TestimonialsSection from "@/components/testimonials-section";
import WhatWeDoSection from "@/components/what-we-do-section";



export default function Home() {
  return (
    <>
    <HeroSection/>
    <WhatWeDoSection/>
    <ProblemsSection/>
    <MarqueeBanner text="We help realize business ideas" />
    <TestimonialsSection/>
    <ContactSection/>
    </>
   
  );
}
