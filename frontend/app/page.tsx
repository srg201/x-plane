import {
  getAboutUsData,
  getAircraftDesignAndCertificationData,
  getMainSectionData,
  getProjectHydrogenData,
} from "@/lib/actions";
import { AboutUs } from "@/sections/about-us";
import { Certification } from "@/sections/certification";
import { ContactUs } from "@/sections/contact-us";
import { Hero } from "@/sections/hero";
import { ProjectHydrogen } from "@/sections/project-hydrogen";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function Home() {
  const mainSectionData = await getMainSectionData();
  const projectHydrogenData = await getProjectHydrogenData();
  const aboutUsData = await getAboutUsData();
  const certificationData = await getAircraftDesignAndCertificationData();

  return (
    <>
      <Header />
      <Hero data={mainSectionData} />
      <ProjectHydrogen data={projectHydrogenData} />
      <Certification data={certificationData} />
      <AboutUs data={aboutUsData} />
      <ContactUs />
      <Footer />
    </>
  );
}
