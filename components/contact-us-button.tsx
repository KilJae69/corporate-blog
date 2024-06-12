"use client";

export default function ContactUsButton() {
  return (
    <button
      className={` group relative h-[50px] w-[200px] cursor-pointer overflow-hidden border border-white bg-transparent uppercase text-white`}
    >
      <span className="ease absolute left-0 top-0 size-full -translate-x-full bg-white transition-all duration-700 group-hover:translate-x-0"></span>
      <span className="ease relative z-10 text-white transition duration-300 group-hover:text-black">
        Get in Touch
      </span>
    </button>
  );
}
