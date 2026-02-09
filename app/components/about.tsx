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
              Saarth Buildtech Private Limited is a trusted and professional
              construction company providing high-quality construction services
              for residential, commercial, and industrial projects.Saarth
              Buildtech Private Limited is a rapidly Growing Construction
              company headquartered in Chandigarh, Saarth Buildtech private
              Limited Founded by Mr. Devesh Pal Singh,we bring over 11 Years of
              work Experiance to the industry.With a background in working with
              reputable construction Company. Mr Devesh has honed His Skillsand
              cultivated a customer base of over 150 Clients.
            </p>

            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              Our focus is on strong structures, modern designs, and on-time
              project delivery. We prioritize safety, quality, and complete
              client satisfaction in every project we undertake.
            </p>
            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              SAARTH BUILDTECH PRIVATE LIMITED offers a comprehensive range of
              Construction services across 20 cities in Punjab, Chandigarh,
              Himachal Pradesh, and Delhi NCR. Our commitment to 100% client
              satisfaction drives everything we do.
            </p>
            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              At Saarth, we believe that every space has the potential to
              inspire, comfort, and reflect the essence of those who inhabit it.
              Whether you’re looking to construct your home, office, Hotel or
              commercial space, our team of experienced Architect and Civil
              Engineer is dedicated to delivering exceptional results that
              exceed your expectations.
            </p>
            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              With years of experience in the industry, we have built a
              reputation for delivering exceptional results that exceed our
              clients’ expectations. From conceptualization to execution, we
              guide you through every step of the design process, ensuring that
              your vision is realized with precision and care
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
