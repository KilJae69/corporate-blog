import TextCircle from "./text-circle";

export default function HeroSection() {
  return (
    <section className=" mb-auto">
      <div className="relative h-[70%] bg-hero bg-cover bg-center bg-no-repeat px-8 pb-14 pt-[calc(50px+var(--header-height))] md:pb-24 xl:px-16 xl:pb-32">
        <div className="relative">
          <h1 className="font-bold">
            <span className="gradient-text h1-clamp">Your Vision.</span> <br />
            <span className="gradient-text h1-clamp">Our bytes.</span>
          </h1>

          <p className="subtitle-clamp mt-8 max-w-[50%] text-white xl:absolute xl:left-[60%] xl:top-[10%] xl:max-w-[40%]">
            Bring your start up or company vision! You bring the Why, we can
            help on the How.
          </p>
        </div>
        <div className="absolute bottom-32 right-32 hidden max-h-[200px] max-w-[200px] md:block">
          <TextCircle />
        </div>
      </div>
      <div className="relative">
        <video
          className=" h-[30%] max-h-[700px] w-full object-cover"
          src="/images/bg-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 z-10 bg-black/40"></div>
      </div>
    </section>
  );
}
