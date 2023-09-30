import {
  FaRegEdit,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaAngleDown,
} from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import Link from "next/link";

export default function Page({ params }) {
  return (
    <main className="py-4 px-8 sm:px-12 md:px-16 lg:px-24 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:border-r lg:border-[#BBBBBB] lg:pr-16">
          <h2 className="text-4xl font-semibold">Your video is ready!</h2>
          <div className="mt-6">
            <label className="text-sm text-[#727272]">Name</label>
            <div className="flex text-[#120B48]">
              <h4 className="text-xl font-semibold mr-4 w-72">
                {params.videoId}
              </h4>
              <FaRegEdit className="cursor-pointer" size="22px" />
            </div>
          </div>
          <div className="mt-10 flex space-x-4 bg-[#E7E7ED] py-2.5 px-5 rounded-xl">
            <input
              type="text"
              className="text-[#434343] placeholder-[#434343] bg-transparent focus:outline-none flex-1"
              placeholder="enter email receiver"
            />
            <button className="bg-[#605C84] rounded-lg text-white px-5 py-2">
              Send
            </button>
          </div>
          <div className="mt-10">
            <label className="font-semibold">Video Url</label>
            <div className="mt-3 flex space-x-4 bg-[#FAFAFA] border border-[#929292] py-2 px-3 rounded-xl">
              <input
                disabled
                type="text"
                value="Hello"
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
            <div className="sm:flex sm:space-x-2 mt-3 text-sm">
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
        </div>
        <div className="mt-10 lg:mt-0 lg:border-l lg:border-[#BBBBBB] lg:pl-8">
          <div className="w-full">
            <iframe
              className="w-full aspect-[6/4] rounded-xl"
              src="https://www.youtube.com/embed/xFFs9UgOAlE?si=mnUNwYoxl9CpMYAB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-10">
            <h4 className="text-[#08051E] font-semibold">Transcript</h4>
            <div className="mt-5 relative inline-block text-left">
              <button className="flex border border-gray-300 rounded-md px-2 py-2 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300">
                English
                <FaAngleDown className="ml-10 my-auto text-gray-500" />
              </button>
            </div>
          </div>
          <div className="mt-8 w-full overflow-y-scroll max-h-[270px] text-justify lg:pr-4 bg-gradient-to-t from-0% to-50% from-white relative">
            <div className="relative z-[-100] p-4">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex object-center justify-center">
        <div className="block text-center">
          <p className="font-semibold">
            To ensure the availability and privacy of your video, <br /> we
            recommend saving it to your account.
          </p>
          <button
            className="mt-7 px-6 py-2 text-white font-semibold rounded-lg block mx-auto bg-[#120B48]"
            href="/signup"
          >
            Save Video
          </button>
          <p className="text-gray-500 mt-7 font-semibold">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-[#120B48]">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
