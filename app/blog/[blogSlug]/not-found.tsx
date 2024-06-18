import PrimaryLinkButton from "@/components/shared/primary-link-button";
import SubHeader from "@/components/shared/sub-header";

export default function NotFoundBlogPage() {
  return (
    <>
      <SubHeader title="Blog Not Found" />
      <section className="bg-lightBg px-4 pb-24  md:px-8 md:pb-44 md:pt-56">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2">
          <h1 className="text-clamp-huge font-semibold text-[#d3dce0]">404</h1>
          <div className="flex flex-col items-center gap-4">
            <span className="text-clamp-md text-primary">Oops..</span>
            <p className="text-clamp-xs font-thin">
              We are sorry, but it looks like that blog does not exists.
            </p>
            <PrimaryLinkButton href="/blog" label="Go back" />
          </div>
        </div>
      </section>
    </>
  );
}
