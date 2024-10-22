import Breadcrumb from "@/components/Common/Breadcrumb";
import TOS from "@/components/TOS/TOS";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Visignite",
  description: "Terms of Service for Visignite",
  // other metadata
};

const TermsOfService = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service Page"
        description="If you would like to reach out to us for any inqueries, feel free to do so! We will consult with you free of charge."
      />

      <TOS/>
    </>
  );
};

export default TermsOfService;
