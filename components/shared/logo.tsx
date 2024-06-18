import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src="/images/logo-teric.png"
        priority
        quality={100}
        width={180}
        height={45}
        alt="Teric Logo"
      />
    </Link>
  );
}
