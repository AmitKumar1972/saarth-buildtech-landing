import Eyebrow from "./eyebrow";
import WorkItem from "./workItem";
import Button from "./button";

import works from "../data/works.json";

const Works = () => {
  return (
    <section id="works">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            {/* Left column */}
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="RECENT WORKS" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  Some of <span className="italic">our crafts</span> made with
                  love
                </h3>
              </div>

              {works.slice(0, 1).map((work) => (
                <WorkItem
                  key={work.id}
                  image={work.image}
                  title={work.title}
                  description={work.description}
                />
              ))}

              <div className="xl:flex hidden items-start">
                <Button label="CONTACT US" link="/" size="lg" />
              </div>
            </div>

            {/* Right column */}
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {works.slice(1, 3).map((work) => (
                <WorkItem
                  key={work.id}
                  image={work.image}
                  title={work.title}
                  description={work.description}
                />
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="xl:hidden flex items-start">
            <Button label="CONTACT US" link="/" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
