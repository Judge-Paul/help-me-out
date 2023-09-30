import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ShareVideoLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
