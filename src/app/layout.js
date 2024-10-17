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

      <head>
      <meta name="google-site-verification" content="aH4oIny6w09xBIz2s7VqTqdLYe_UrnhsAY2emvdYe9U" />
      </head>
      
      <body className={inter.className}>
        <Navbar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}