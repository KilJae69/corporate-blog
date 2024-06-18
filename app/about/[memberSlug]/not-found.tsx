import PrimaryLinkButton from "@/components/shared/primary-link-button";
import SubHeader from "@/components/shared/sub-header";

export default function NotFoundMemberPage() {
  return (
    <>
      <SubHeader title="Member Not Found" />
      <section className="bg-lightBg px-4 pb-24 md:px-8 md:pb-44 md:pt-56">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2">
          <h1 className="text-clamp-huge font-semibold text-[#d3dce0]">404</h1>
          <div className="flex flex-col items-center gap-4">
            <span className="text-clamp-md text-primary">Oops..</span>
            <p className="text-clamp-xs font-thin">
              We are sorry, but something went wrong.
            </p>
            <PrimaryLinkButton href="/" label="Go back to home" />
          </div>
        </div>
      </section>
    </>
  );
}
