import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo-teric.png"
      width={180}
      height={45}
      alt="Teric Logo"
    />
  );
}
