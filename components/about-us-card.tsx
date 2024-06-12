import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

type AboutUsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function AboutUsCard({
  title,
  description,
  imageUrl,
}: AboutUsCardProps) {
  return (
    <div className="group relative aspect-[10/12] size-full max-w-[550px] cursor-pointer overflow-hidden">
      <Image
        className="object-cover"
        src={imageUrl}
        sizes="(max-width:639px) 100vw, (max-width:1279px) 50vw, 25vw"
        alt={`Service ${title} image`}
        fill
      />
      <div className="absolute inset-x-2 bottom-2 translate-y-[calc(100%-60px)] bg-white transition-all duration-500 group-hover:translate-y-0">
        {" "}
        <div className="flex items-center justify-between px-5 pt-5">
          <h3 className="text-xl font-semibold text-black group-hover:text-primary">
            {title}
          </h3>
          <FaArrowRightLong className="text-black transition-all group-hover:-rotate-45 group-hover:text-primary" />
        </div>
        <p className="mt-3 p-5 text-sm text-black/0 transition-all duration-500 group-hover:text-black/50 md:text-lg xl:text-sm 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
