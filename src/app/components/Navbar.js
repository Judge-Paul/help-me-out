"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "sonner";
import { signOutUser } from "@/firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, username } = useAuthContext();
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = async () => {
    const { error } = await signOutUser();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out successfully!");
      router.push("/");
    }
  };
  return (
    <nav className="flex justify-between px-8 py-12 md:px-16 lg:px-24">
      <Link href="/">
        <Image src={Logo} width={140} height={10} alt="logo" />
      </Link>
      {!user ? (
        <>
          <ul className="hidden md:flex font-medium">
            <li className="px-3">
              <Link href="#features">Features</Link>
            </li>
            <li className="px-3">
              <Link href="#howitworks">How it Works</Link>
            </li>
          </ul>
          <p className="hidden md:block text-[#120B48] font-semibold">
            Get Started
          </p>
          <div className="md:hidden" onClick={() => setIsOpen(true)}>
            <IoMenu size={37} className="text-[#120B48] cursor-pointer" />
          </div>
          {isOpen && (
            <div className="md:hidden top-0 left-0 h-screen w-screen fixed bg-[#120B48] text-white z-[9999] flex justify-center items-center">
              <div className="font-bold text-center">
                {[
                  { name: "Features", route: "#features" },
                  { name: "How it Works", route: "#howitworks" },
                  { name: "Get Started", route: "/" },
                ].map((link) => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="block my-3 text-lg hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-5 flex mx-auto items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-200"
                >
                  <IoClose size={30} className="text-[#120B48]" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        // For Authenticated users
        <div
          className="flex relative items-center border border-gray-500 rounded p-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <h4 className="mr-5 bg-gray-500 rounded-full px-[1.15rem] py-2.5 text-white font-bold">
            {username[0]?.toUpperCase()}
          </h4>
          <span className="hidden md:flex mr-2 truncate md:max-w-[120px]">
            {username || "User"}
          </span>
          <IoIosArrowDown
            className={`text-xl ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-44 w-48 z-[100] bg-white border border-gray-300 shadow-lg rounded">
              {/* Dropdown content */}
              <ul className="text-center">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li
                  onClick={handleSignOut}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
