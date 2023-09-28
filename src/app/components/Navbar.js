import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-12 md:px-16 lg:px-24">
      <Image src={Logo} width={140} height={10} alt="logo" />
      <ul className="flex font-medium">
        <li className="px-3">
          <Link href="#features">Features</Link>
        </li>
        <li className="px-3">
          <Link href="#howitworks">How it Works</Link>
        </li>
      </ul>
      <p className="text-[#120B48] font-semibold">Get Started</p>
    </nav>
  );
}
