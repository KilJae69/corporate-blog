import { blogPostsData } from "@/constants/data";

import { format } from "date-fns";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";

type BlogCardProps = (typeof blogPostsData)[number]

export default function BlogCard({ createdAt,images,author,title }: BlogCardProps) {
  const formatedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  return (
    <div className="group relative aspect-square w-full overflow-hidden shadow-md hover:cursor-pointer ">
      <Image
        src={images[0]}
        alt=""
        fill
        sizes="(min-width: 1440px) 405px, (min-width: 1040px) 27.89vw, (min-width: 780px) calc(50vw - 56px), (min-width: 640px) calc(50vw - 32px), (min-width: 580px) 500px, 89.23vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="gradient-overlay absolute inset-0" />
      <div className="absolute bottom-2 left-2 flex flex-col gap-3 px-1 pb-12 pt-1 text-white ">
        <div className="space-x-3 text-xs text-[#ccd1d9] md:text-lg xl:text-xl">
          <span className=" font-semibold text-primary ">{author}</span>{" "}
          <span>&diams;</span>
          <span className="">{formatedDate}</span>
        </div>
        <h2 className="text-clamp-sm line-clamp-2 font-semibold text-white">
          {title}
        </h2>
      </div>
      <div className="absolute bottom-3 flex translate-x-[-70%] items-center gap-3 text-white transition-all duration-300 group-hover:translate-x-3 group-hover:text-primary">
        <span className="text-clamp-xs whitespace-nowrap">Read more</span>
        <MdDoubleArrow className="size-8" />
      </div>
    </div>
  );
}
