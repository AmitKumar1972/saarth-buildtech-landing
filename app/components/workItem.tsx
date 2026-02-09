import Image from "next/image";

type WorkItemProps = {
  image: string;
  title: string;
  description: string;
};

const WorkItem = ({ image, title, description }: WorkItemProps) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
        className="w-full h-auto"
      />

      <div className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-md pb-4">{title}</h3>

        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
