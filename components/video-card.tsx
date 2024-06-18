import { videosData } from "@/constants/data";

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

type VideoCardProps = (typeof videosData)[number];

export default function VideoCard({
  createdAt,
  author,
  thumbnail,
  title,
  slug,
}: VideoCardProps) {
  const formatedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <Link
      href={`/resources/${slug}`}
      className="group relative w-full overflow-hidden bg-white shadow-md hover:cursor-pointer"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={thumbnail}
          alt=""
          fill
          sizes="(min-width: 1440px) 405px, (min-width: 1040px) 27.89vw, (min-width: 780px) calc(50vw - 56px), (min-width: 640px) calc(50vw - 32px), (min-width: 580px) 500px, 89.23vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-primary/40 transition-all duration-300 group-hover:bg-primary/0" />
      </div>

      <div className=" flex flex-col gap-3 px-3 pb-16 pt-3 text-white ">
        <h2 className="text-clamp-xs line-clamp-2 font-semibold text-primary">
          {title}
        </h2>
        <div className="space-x-3 text-xs text-[#ccd1d9] md:text-lg xl:text-xl">
          <span className=" font-semibold text-accent ">{author}</span>{" "}
          <span>&diams;</span>
          <span className="">{formatedDate}</span>
        </div>
      </div>
      <div className="absolute bottom-3 flex translate-x-[-70%] items-center gap-3 text-white transition-all duration-300 group-hover:translate-x-3 group-hover:text-accent">
        <span className="text-clamp-xs whitespace-nowrap">Watch now</span>
        <MdDoubleArrow className="size-8" />
      </div>
    </Link>
  );
}
