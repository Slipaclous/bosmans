"use client";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { metadata } from "./metadata";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}