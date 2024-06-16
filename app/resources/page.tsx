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
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative aspect-square w-full  max-w-[500px] overflow-hidden hover:cursor-pointer ">
            <Image
              src={"/images/footer-image-1.avif"}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#16202a]/40"></div>
          </div>

          <div className="group relative aspect-square max-w-[500px] overflow-hidden hover:cursor-pointer">
            <Image
              src={"/images/footer-image-2.avif"}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#16202a]/40"></div>
          </div>

          <div className="group relative aspect-square max-w-[500px] overflow-hidden hover:cursor-pointer">
            <Image
              src={"/images/footer-image-3.avif"}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#16202a]/40"></div>
          </div>
        </div>
      </section>
    </>
  );
}
