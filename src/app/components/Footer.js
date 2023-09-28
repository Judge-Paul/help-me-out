import Image from "next/image";
import Logo from "@/assets/logo-white.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:flex justify-center bg-[#120B48] px-8 py-24 md:px-16 lg:px-24 text-white">
      <div className="lg:w-2/6">
        <Image
          src={Logo}
          width={170}
          alt="Footer Logo"
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="lg:flex lg:w-4/6 justify-between lg:pr-14 text-center lg:text-left">
        <ul className="mt-7 lg:mt-0">
          <li className="font-semibold text-lg">Menu</li>
          <li className="mt-5">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-5">
            <Link href="/">Converter</Link>
          </li>
          <li className="mt-5">
            <Link href="#howitworks">How it Works</Link>
          </li>
        </ul>
        <ul className="mt-7 lg:mt-0">
          <li className="font-semibold text-lg">About us</li>
          <li className="mt-5">
            <Link href="/">About</Link>
          </li>
          <li className="mt-5">
            <Link href="/">Contact Us</Link>
          </li>
          <li className="mt-5">
            <Link href="#howitworks">Privacy Policy</Link>
          </li>
        </ul>
        <ul className="mt-7 lg:mt-0">
          <li className="font-semibold text-lg">Screen Recorder</li>
          <li className="mt-5">
            <Link href="/">Browser Window</Link>
          </li>
          <li className="mt-5">
            <Link href="/">Desktop</Link>
          </li>
          <li className="mt-5">
            <Link href="#howitworks">Application</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
