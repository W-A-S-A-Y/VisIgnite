import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ServicesCarousel from "@/components/About/ServicesCarousel";

import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VisIgnite",
  description: "Seamless Hiring process, Flexible Service Plans, Proven Track Record, Customized Solutions, and more.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About VisIgnite"
        description="Learn more about our company services."
      />
      <ServicesCarousel/>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
