import Logo from "@/app/icon.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Image
        src={Logo}
        width={80}
        alt="Spinning Logo"
        className="animate-spin-slow"
      />
    </main>
  );
}
