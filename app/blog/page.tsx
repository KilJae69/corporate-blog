import { blogPostsData } from "@/constants/data";

import BlogCard from "@/components/blog-card";
import SubHeader from "@/components/shared/sub-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore our blog to learn more about our services, solutions, and team. Discover how we can help you bring your vision to life through innovative technology and collaboration. Get in touch to start your journey with us today.",
};

export default function BlogPage() {
  return (
    <>
      <SubHeader title="Blog" />
      <section className=" bg-lightBg px-4 py-20 md:px-10 md:pb-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogPostsData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
}
