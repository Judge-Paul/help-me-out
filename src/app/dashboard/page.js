"use client";
import { FaSearch } from "react-icons/fa";
import VideoCardLoading from "../components/VideoCardLoading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

export default function Dashboard() {
  const { user, username } = useAuthContext();
  const router = useRouter();

  // Redirect user to login if they haven't
  if (!user) router.push("/login");

  // Show Loading until the user object is available and username has been set
  return user && username ? (
    <>
      <Navbar />
      <main className="py-4 px-8 sm:px-12 md:px-60 lg:px-24 mb-20">
        <div className="lg:flex justify-between">
          <div className="mt-3">
            <h4 className="text-3xl font-bold">Hello, {username}</h4>
            <p className="mt-2 text-gray-500">Here are your recorded videos</p>
          </div>
          <div className="mt-5 flex relative text-gray-400 rounded-lg">
            <div className="ml-4 absolute left-0 flex h-full">
              <FaSearch className="my-auto" size="22px" />
            </div>
            <input
              className="bg-gray-100 py-4 lg:py-0 focus:outline-none w-[25rem] placeholder-gray-300 pl-12 pr-5 rounded-lg"
              placeholder="Search for a particular video"
            />
          </div>
        </div>
        <div className="mt-10">
          <h4 className="text-[#141414]/[80%] text-lg font-medium">
            Recent files
          </h4>
        </div>
        <div className="overflow-y-scroll mt-5 grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 h-[575px]">
          <VideoCardLoading />
          <VideoCardLoading />
          <VideoCardLoading />
          <VideoCardLoading />
        </div>
      </main>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}
