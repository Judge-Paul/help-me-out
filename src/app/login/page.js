"use client";
import { useState, useEffect } from "react";
import { signIn } from "@/firebase/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { BiLoader } from "react-icons/bi";
import Or from "@/assets/or.svg";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { useAuthContext } from "@/context/AuthContext";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required.");
    } else if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
    } else if (!formData.password) {
      toast.error("Password is required.");
    } else {
      setIsLoading(true);
      const { result, error } = await signIn(formData.email, formData.password);

      if (error) {
        toast.error(error.message);
        setIsLoading(false);
      } else {
        setUser(result.user);
        toast.success("Login successful!");
        router.push("/gallery");
        setIsLoading(false);
      }
    }
  };

  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  return (
    <>
      <header className="px-8 py-12 md:px-16 lg:px-24">
        <Link href="/">
          <Image src={Logo} alt="HelpMeOut Logo" width={120} />
        </Link>
      </header>
      <main className="flex justify-center mb-10">
        <div className="w-full px-8 md:px-0 md:w-[500px]">
          <div className="text-center w-[320px] mx-auto">
            <h2 className="text-[2rem] font-bold">Log In</h2>
            <p className="mt-2 text-gray-500 text-sm">
              Join millions of others in sharing successful moves on{" "}
              <span className="text-gray-600">HelpMeOut</span>
            </p>
          </div>
          <div className="mt-10">
            <div
              onClick={() =>
                toast.error(
                  "Sign in with Google isn't available at the moment.",
                )
              }
              className="flex justify-center py-3 border-[1.5px] border-[#120B48] rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <FcGoogle size="25px" className="mr-5" />
              Continue with Google
            </div>
            <div
              onClick={() =>
                toast.error(
                  "Sign in with Facebook isn't available at the moment.",
                )
              }
              className="mt-5 flex justify-center py-3 border-[1.5px] border-[#120B48] rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <FaFacebook size="23px" className="mr-3 text-[#1877F2]" />
              Continue with Facebook
            </div>
          </div>
          <div className="flex text-gray-400 my-4">
            <Image src={Or} width={500} alt="or" />
          </div>
          <form noValidate onSubmit={handleLogin}>
            <div className="mt-2 mb-4">
              <label className="block text-black" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-3 border border-gray-400 rounded-xl px-5 py-3 w-full bg-transparent focus:outline-none"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2 mb-4">
              <label className="block text-black" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-3 border border-gray-400 rounded-xl px-5 py-3 w-full bg-transparent focus:outline-none"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              disabled={isLoading}
              className="flex justify-center bg-[#120B48] hover:bg-[#34305A] active:bg-[#100A42] text-white font-semibold rounded-md py-3 px-14 w-full"
            >
              Log In
              {isLoading && <BiLoader className="ml-2 my-auto animate-spin" />}
            </button>
            <Link
              href="/signup"
              className="mt-5 block text-sm text-center font-medium hover:text-gray-900"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
