import NewPages from "@/components/news";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Contacts from "@/components/contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Menu";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
