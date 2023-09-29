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

export default function Navbar() {
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
