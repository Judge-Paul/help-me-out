import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HelpMeOut",
  description:
    "A chrome extension that allows you easily record videos and send to friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors position="top-right" />
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
