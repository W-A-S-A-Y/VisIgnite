import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Visignite",
  description: "Contact Page for Visignite",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="If you would like to reach out to us for any inqueries, feel free to do so! We will consult with you free of charge."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
