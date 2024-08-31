import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
                title="Our Services"
                paragraph=""
                mb="44px"
              />
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Virtual Agents
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our team of highly skilled Virtual Assistants (VAs) is dedicated to assisting your business in multiple ways. Whether it&apos;s handling customer or client queries, generating and nurturing leads, booking appointments, supporting sales efforts, or developing effective sales strategies, our VAs are equipped to help you succeed.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Marketing and SEO Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                In today&apos;s digital world, visibility is key. Visignite offers cutting-edge marketing and SEO services to help your brand stand out. From creating impactful campaigns on platforms like TikTok and Facebook to optimizing your website’s reach, we cover it all. Our expertise extends to holistic campaign management, content creation, brand development, and social media strategy, ensuring your business connects with its target audience.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Insurance Virtual Professional Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                The insurance industry demands precision and reliability, and our specialized Insurance Virtual Professionals are here to deliver. We provide top-notch administrative support, quoting & re-quoting services, customer service assistance, customer relationship management, and policy endorsement processing. Our focus is on ensuring your insurance business runs smoothly, allowing you to focus on what matters most—your clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
