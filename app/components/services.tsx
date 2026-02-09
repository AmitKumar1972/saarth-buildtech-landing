import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                We provide the <span className="italic">best solutions</span>{" "}
                for your dream home
              </h2>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon="/images/service-icons/interior-design.svg"
              title="Architectural & Interior design"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies."
            />

            <ServiceItem
              icon="/images/service-icons/building-renovation.svg"
              title="Building Renovation"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies."
            />

            <ServiceItem
              icon="/images/service-icons/construction.svg"
              title="Construction Management"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
