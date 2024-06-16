import { videosData } from "@/constants/data";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <>
      <div className=" relative min-h-[30%] w-full pb-16 pt-[calc(50px+var(--header-height))]">
        <Image
          src="/images/main-background.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-[#16202a]/40"></div>
        <h1 className="text-clamp-lg container relative z-10 text-center font-bold text-white">
          Videos
        </h1>
      </div>
      <section className=" bg-[#f4f8fa] px-4 py-20 md:px-10 md:pb-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video w-full  overflow-hidden hover:cursor-pointer "
            >
              <Image
                src={video.thumbnail}
                alt=""
                fill
                sizes="(min-width: 1440px) 405px, (min-width: 1040px) 27.89vw, (min-width: 780px) calc(50vw - 56px), (min-width: 640px) calc(50vw - 32px), (min-width: 580px) 500px, 89.23vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#16202a]/60" />
              <div className="absolute bottom-2 left-2 text-white">
                <div>
                  <span>VIDEO</span> <span>{video.createdAt}</span>
                </div>
                <h2>{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
