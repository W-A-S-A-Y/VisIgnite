import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import WhyChooseUs from "@/components/WhyChooseUs/chooseUs";
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
      <WhyChooseUs />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
