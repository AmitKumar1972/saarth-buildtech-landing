import Eyebrow from "./eyebrow";

const MissionVision = () => {
  return (
    <section id="mission">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:py-28 md:py-20 py-12">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="OUR MISSION" />
            <h2 className="font-display text-display-md md:text-display-lg font-normal pb-2">
              Our <span className="italic">Mission</span>
            </h2>
            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              To transform our clients&apos; ideas into reality by delivering
              strong, durable, and high-quality construction solutions.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="OUR VISION" />
            <h2 className="font-display text-display-md md:text-display-lg font-normal pb-2">
              Our <span className="italic">Vision</span>
            </h2>
            <p className="text-body-md md:text-body-lg font-light text-neutral-700">
              To become a leading and reliable construction company recognized
              for quality workmanship, trust, and long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
