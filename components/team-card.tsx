import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

type TeamCardProps = {
  href: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
};

export default function TeamCard({
  href,
  name,
  role,
  imageUrl,
  linkedIn,
}: TeamCardProps) {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Link className="cursor-pointer" href={href}>
        <div className="relative mb-3 aspect-square size-full overflow-hidden">
          <Image
            className="object-cover transition-transform duration-500 hover:scale-105"
            src={imageUrl}
            fill
            sizes="(max-width:639px) 100vw, (max-width:1365px) 50vw, 30vw"
            alt={`${role} Image`}
          />
        </div>
        <h3 className="text-xl font-semibold text-[#16202a]">{name}</h3>
      </Link>
      <span className="text-lg text-[#5a5a67]">{role}</span>
      <a href={linkedIn} target="__blank">
        <span className="sr-only">Link to {role} LinkedIn profile</span>
        <FaLinkedin className="size-9 cursor-pointer transition-colors hover:text-primary" />
      </a>
    </div>
  );
}
