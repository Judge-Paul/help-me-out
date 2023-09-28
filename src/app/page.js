import Link from "next/link";
import Image from "next/image";
import Gap from "./components/Gap";
import Hero from "@/assets/hero.png";
import FeaturesImage from "@/assets/features-image.svg";
import FeatOne from "@/assets/features-icon-one.svg";
import FeatTwo from "@/assets/features-icon-two.svg";
import FeatThree from "@/assets/features-icon-three.svg";
import Card from "@/assets/howitworks-card.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-4 px-8 sm:px-12 md:px-60 lg:px-24 mb-20">
        <section className="lg:flex w-full">
          <div className="flex object-center items-center lg:w-1/2 lg:pr-20">
            <div>
              <h4 className="font-bold text-4xl lg:text-5xl xl:text-6xl">
                Show Them Don't Just Tell
              </h4>
              <p className="mt-8 mb-10 text-gray-500">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <Link
                href="/"
                className="block text-center lg:w-max bg-[#120B48] text-white py-3 px-10 rounded-md"
              >
                Install HelpMeOut {"->"}{" "}
              </Link>
            </div>
          </div>
          <div className="mt-14 lg:mt-0 lg:w-1/2">
            <Image src={Hero} width={650} alt="Hero Image" />
          </div>
        </section>
        <Gap />
        <section id="features" className="pt-40">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">Features</h2>
            <p className="mt-3 text-gray-500 font-medium">
              Key Highlights of Our Extension
            </p>
          </div>
          <div className="lg:flex w-full mt-6">
            <div className="lg:w-1/2 lg:pr-10 xl:pr-20 mt-10 py-auto">
              <div className="flex my-6">
                <div>
                  <Image src={FeatOne} width={75} alt="Recording Icon" />
                </div>
                <div className="mt-3 ml-3">
                  <h4 className="text-[#1B233D] font-semibold text-xl">
                    Simple Screen Recording
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <div>
                  <Image src={FeatTwo} width={75} alt="Recording Icon" />
                </div>
                <div className="mt-3 ml-3">
                  <h4 className="text-[#1B233D] font-semibold text-xl">
                    Easy-to-Share URL
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <div>
                  <Image src={FeatThree} width={75} alt="Recording Icon" />
                </div>
                <div className="mt-3 ml-3">
                  <h4 className="text-[#1B233D] font-semibold text-xl">
                    Revisit Recordings
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10">
              <Image
                src={FeaturesImage}
                width={630}
                alt="Screenshot of Dashboard"
              />
            </div>
          </div>
        </section>
        <Gap />
        <section id="howitworks" className="pt-40">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">How it works</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-5">
            <div className="text-center mt-16">
              <span className="bg-[#1B233D] px-5 py-3 text-white text-3xl font-bold rounded-full">
                1
              </span>
              <h4 className="mt-10 text-[#1B233D] font-semibold text-xl">
                Record Screen
              </h4>
              <p className="mt-5 mb-7 text-gray-500">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <Image
                src={Card}
                width={360}
                alt="How it works tutorial card"
                className="mx-auto"
              />
            </div>
            <div className="text-center mt-16">
              <span className="bg-[#1B233D] px-5 py-3 text-white text-3xl font-bold rounded-full">
                2
              </span>
              <h4 className="mt-10 text-[#1B233D] font-semibold text-xl">
                Share Your Recording
              </h4>
              <p className="mt-5 mb-7 text-gray-500">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <Image
                src={Card}
                width={360}
                alt="How it works tutorial card"
                className="mx-auto"
              />
            </div>
            <div className="text-center mt-16">
              <span className="bg-[#1B233D] px-5 py-3 text-white text-3xl font-bold rounded-full">
                3
              </span>
              <h4 className="mt-10 text-[#1B233D] font-semibold text-xl">
                Learn Effortlessly
              </h4>
              <p className="mt-5 mb-7 text-gray-500">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <Image
                src={Card}
                width={360}
                alt="How it works tutorial card"
                className="mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
