import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekampreet Singh Bains",
  description: "Portfolio of Ekampreet Singh Bains, Software Developer",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center items-center h-max max-w-screen">
      <div className="max-w-screen mx-6 sm:max-w-2xl sm:px-8 sm:py-8 px-7 py-7">
        <Navbar />
        {children}
      </div>
    </div>
      </body>
    </html>
  );
}
