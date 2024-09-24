
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import Carousel from "@/components/suii/suii";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Here's a detail on our past work.",
  // other metadata
};

const Portfolio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Here's a detail on our past work."
      />
        <Carousel/>
        <PortfolioGrid />
    </>
  );
};
export default Portfolio;