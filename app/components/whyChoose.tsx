import Eyebrow from "./eyebrow";
import whyChoose from "../data/whyChoose.json";

const WhyChoose = () => {
  return (
    <section id="why-choose">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="WHY CHOOSE US" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Why Choose{" "}
                <span className="italic">Saarth Buildtech Private Limited</span>
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 md:p-6 p-5 border border-primary-100"
              >
                <span
                  className="shrink-0 mt-0.5 text-primary-600 font-display text-display-sm"
                  aria-hidden
                >
                  ★
                </span>
                <span className="text-body-lg font-light text-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
