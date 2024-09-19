
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";


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

        <PortfolioGrid />
    </>
  );
};
export default Portfolio;