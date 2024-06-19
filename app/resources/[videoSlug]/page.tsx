import ShareLinks from "@/components/share-links";
import SubHeader from "@/components/shared/sub-header";
import VideoCard from "@/components/video-card";

import { videosData } from "@/constants/data";
import { generateSlug } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type SingleVideoPageProps = {
  params: {
    videoSlug: string;
  };
};

export async function generateMetadata({
  params,
}: SingleVideoPageProps): Promise<Metadata> {
  // read route params
  const videoSlug = params.videoSlug;

  // fetch data
  const video = videosData.find((video) => video.slug === videoSlug);
  if (!video) return notFound();

  return {
    title: video.title,
    // ## Temporary dummy description / replace with video content
    description: "Teric video",
  };
}

export function generateStaticParams() {
  const paths = videosData.map((video) => ({
    videoSlug: video.slug,
  }));

  return paths;
}

const YouTubeEmbed = dynamic(() => import("@/components/youtube-embed"), { ssr: false });

export default function SingleVideoPage({ params }: SingleVideoPageProps) {
  const video = videosData.find((video) => video.slug === params.videoSlug);

  if (!video) {
    return notFound();
  }

  const { title, createdAt, author, authorImg } = video;

  const formatedDate = format(new Date(createdAt), "MMMM dd, yyyy");
  return (
    <>
      <SubHeader>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-20 text-start md:px-8  lg:px-16 ">
          <h1 className="text-clamp-lg     font-bold text-white">{title}</h1>
          <Link href={`/about/${generateSlug(author)}`} className="flex items-center gap-4 text-xs text-[#ccd1d9] md:text-lg xl:text-xl">
            <Image
              src={authorImg}
              width={40}
              height={40}
              alt={"Author Image"}
              className="rounded-full"
            />
            <span className=" font-semibold text-accent ">{author}</span>{" "}
            <span>&diams;</span>
            <span className="">{formatedDate}</span>
          </Link>
        </div>
      </SubHeader>
      <section className="relative   bg-lightBg px-4 pt-20 md:px-8 lg:px-16">
        <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-20">
          <aside className="sticky top-4 flex translate-y-[-150px] flex-col gap-8 overflow-hidden bg-white p-8 shadow-md lg:min-w-[370px]">
            <span className="text-xl font-semibold text-primary">
              Share this on
            </span>
            <ShareLinks />
            <span className="text-xl font-semibold text-primary">Most Popular</span>
            <ul className="grid gap-5  xs:grid-cols-2 lg:grid-cols-1">
              {videosData.map((video, index) => {
                if (index < 2)
                  return (
                    <li key={video.id}>
                      <VideoCard {...video} />
                    </li>
                  );

                return null;
              })}
            </ul>
          </aside>
          <div>
            <article className="relative flex translate-y-[-150px] flex-col gap-6 text-[1rem] leading-8 text-[#5a5a67]">
              <YouTubeEmbed videoUrl={video.videoUrl} />
              <p>{video.description}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
