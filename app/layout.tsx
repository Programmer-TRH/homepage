import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const gilory = localFont({
  src: [
    {
      path: "./../public/fonts/Gilroy-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/Gilroy-ExtraBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-gilory",
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "Exchange Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilory.variable} antialiased min-h-screen bg-background font-gilory`}
      >
        <Toaster position="top-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
