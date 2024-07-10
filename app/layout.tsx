import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const asap = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MiniBlog",
  description: "ReactBootCamp NextJS Mastery",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
