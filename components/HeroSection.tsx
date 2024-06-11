export default function HeroSection() {
  return (
    <section className="h-screen ">
      <div className="relative h-1/2 bg-hero bg-cover bg-center bg-no-repeat pt-[calc(100px+var(--header-height))]">
        <h1 className="h1-clamp gradient-text text-4xl font-bold">
          Your Vision. <br />
          Our bytes.
        </h1>

        <p className="text-white">
          Bring your start up or company vision! You bring the Why, we can help
          on the How.
        </p>
      </div>
      <video
        className="aspect-video"
        src="/images/bg-video.mp4"
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
}
