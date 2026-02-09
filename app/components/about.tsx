import Image from "next/image";
import Eyebrow from "./eyebrow";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 py-12 lg:py-32 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />

            <h2 className="font-display text-display-md md:text-display-xl font-normal pb-4">
              We help to bring your <span className="italic">dream home</span>{" "}
              to reality
            </h2>

            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>

            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6 relative flex flex-col gap-8">
            <Image
              src="/images/about-creative.png"
              alt="Interior Design"
              width={592}
              height={740}
              className="w-full h-auto"
              priority
            />

            <Image
              src="/images/award-badge.svg"
              alt="Award Badge"
              width={120}
              height={120}
              className="absolute left-[42%] -top-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
