import AwardItem from "./awardItem";
import awards from "../data/awards.json";

const Awards = () => {
  return (
    <section className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex items-start md:items-center gap-5 py-6">
          <div className="flex items-center gap-2 md:gap-5">
            <p className="font-display text-display-xs italic text-white opacity-50 vertical-rl -rotate-180">
              Awards
            </p>
            <hr className="w-6 md:w-16 border-t border-white opacity-50" />
          </div>

          <div className="grid grow grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-6 md:gap-x-10 md:gap-y-8 xl:gap-16">
            {awards.map((award, index) => (
              <AwardItem
                key={`${award.title}-${index}`}
                logo={award.logo}
                title={award.title}
                year={award.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
