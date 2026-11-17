import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://portfolio-meriem-zemane.vercel.app"),
  title: {
    default: "Meriem ZEMANE – Cybersecurity Engineer",
    template: "%s | Meriem ZEMANE",
  },
  description:
    "Meriem ZEMANE is a Cybersecurity Engineer and Full-Stack Developer.",
  openGraph: {
    title: "Meriem ZEMANE – Cybersecurity Engineer",
    description: "Portfolio of Meriem ZEMANE.",
    url: "https://portfolio-meriem-zemane.vercel.app",
    siteName: "Meriem ZEMANE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
