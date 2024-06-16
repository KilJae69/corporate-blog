import { blogPostsData } from "@/constants/data";
import Image from "next/image";

import BlogCard from "@/components/blog-card";

export default function BlogPage() {
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
          Blogs
        </h1>
      </div>
      <section className=" bg-[#f4f8fa] px-4 py-20 md:px-10 md:pb-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogPostsData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
}
