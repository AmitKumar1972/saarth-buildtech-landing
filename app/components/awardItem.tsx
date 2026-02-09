import Image from "next/image";

type AwardItemProps = {
  logo: string;
  title: string;
  year: string;
};

const AwardItem = ({ logo, title, year }: AwardItemProps) => {
  return (
    <div className="flex flex-row items-center gap-3 grow">
      <Image
        src={logo}
        alt={title}
        width={80}
        height={80}
        className="shrink-0"
      />

      <div className="flex flex-col">
        <p className="text-body-sm font-normal text-neutral-300">{title}</p>
        <p className="text-body-sm font-normal text-neutral-300">{year}</p>
      </div>
    </div>
  );
};

export default AwardItem;
