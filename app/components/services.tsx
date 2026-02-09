import Eyebrow from "./eyebrow";
import services from "../data/services.json";

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Our <span className="italic">Services</span>
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0">
            {services.map((name) => (
              <li
                key={name}
                className="flex flex-col justify-center md:p-6 p-5 border border-primary-100 font-display text-display-sm md:text-display-md font-normal text-neutral-900"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
