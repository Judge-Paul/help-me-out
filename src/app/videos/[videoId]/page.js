"use client";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Thumbnail from "@/assets/video-thumbnail.svg";
import {
  FaRegEdit,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaAngleDown,
} from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import Link from "next/link";
import { toast } from "sonner";

export default function Page({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useAuthContext();
  return (
    <main className="py-4 px-8 sm:px-12 md:px-16 lg:px-24 mb-20">
      <div className="flex text-[#120B48]">
        <h4 className="text-md md:text-lg lg:text-xl font-semibold mr-4 max-w-80">
          How to create A Facebook Ad Listing
        </h4>
        {user && <FaRegEdit className="cursor-pointer" size="25px" />}
      </div>
      <div className="mt-4 border border-[#E7E7ED] rounded-xl p-4 w-full">
        <div className="w-full">
          <iframe
            className="w-full aspect-video rounded-xl"
            src="https://www.youtube.com/embed/xFFs9UgOAlE?si=mnUNwYoxl9CpMYAB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <Image src={Thumbnail} width={1200} alt="Video thumbnail" /> */}
        </div>
      </div>
      <div className="mt-5 w-full md:flex md:space-x-5 lg:space-x-24">
        <div className="mt-5 w-full flex space-x-4 bg-[#E7E7ED] py-2.5 px-5 rounded-xl">
          <input
            type="text"
            className="text-[#434343] placeholder-[#434343] bg-transparent focus:outline-none flex-1"
            placeholder="enter email receiver"
          />
          <button className="bg-[#605C84] rounded-lg text-white px-5 py-2">
            Send
          </button>
        </div>
        <div
          onClick={() => toast.success("URL Copied")}
          className="mt-5 w-full flex space-x-4 bg-[#FAFAFA] border border-[#929292] py-2 px-3 rounded-xl"
        >
          <input
            disabled
            type="text"
            value="Gege"
            className="text-[#434343] bg-transparent focus:outline-none flex-1"
          />
          <button className="flex border border-[#120B48] rounded-lg text-[#120B48] px-3 py-2 hover:bg-gray-100">
            <BiCopy size="20px" className="my-auto mr-2" />
            Copy
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-[#08051E] font-semibold">Share your video</h4>
        <div className="sm:flex sm:space-x-2 mt-5 text-sm">
          <Link
            href="https://facebook.com/Gege"
            className="mt-3 sm:mt-0 flex justify-center py-2.5 rounded-lg px-4 w-full sm:w-max border border-[#0A0628] hover:bg-gray-100"
          >
            <FaFacebook size="18px" className="mr-2 text-[#1877F2]" />
            Facebook
          </Link>
          <Link
            href="https://facebook.com/Gege"
            className="mt-3 sm:mt-0 flex justify-center py-2.5 rounded-lg px-4 w-full sm:w-max border border-[#0A0628] hover:bg-green-100"
          >
            <FaWhatsapp size="18px" className="mr-2 text-[#25D366]" />
            Whatsapp
          </Link>
          <Link
            href="https://facebook.com/Gege"
            className="mt-3 sm:mt-0 flex justify-center py-2.5 rounded-lg px-4 w-full sm:w-max border border-[#0A0628] hover:bg-blue-100"
          >
            <FaTelegram size="18px" className="mr-2 text-[#2A68EE]" />
            Telegram
          </Link>
        </div>
      </div>
      <div className="mt-10 w-full overflow-y-scroll max-h-[270px] text-justify lg:pr-24 bg-gradient-to-t from-0% to-50% from-white relative">
        <div className="relative z-[-100] p-4">
          Hello this is the video description as of right now this is empty but
          it will be populated soon.
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-[#08051E] font-semibold">Transcript</h4>
        <div className="mt-5 relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="flex border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
          >
            English
            <FaAngleDown className="ml-2 my-auto text-gray-500" />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 px-10 bg-white border border-gray-300 shadow-md rounded-md">
              <ul>
                <li className="hover:bg-gray-100 py-2 px-4 cursor-pointer">
                  English
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
