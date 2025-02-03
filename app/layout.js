import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon Import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Ahtisham",
  description: "Graphic Designer | Social Media Management",
  icons: "/self",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923219350989"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-6 bg-green-500 text-white p-6 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse"
        >
          <FaWhatsapp size={50} />
        </a>
      </body>
    </html>
  );
}
