import { AboutUs } from "@/sections/about-us";
import { Certification } from "@/sections/certification";
import { ContactUs } from "@/sections/contact-us";
import { Hero } from "@/sections/hero";
import { ProjectHydrogen } from "@/sections/project-hydrogen";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectHydrogen />
      <AboutUs />
      <Certification />
      <ContactUs />
    </>
  );
}
