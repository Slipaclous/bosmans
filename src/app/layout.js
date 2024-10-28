"use client";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { metadata } from "./metadata";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="aH4oIny6w09xBIz2s7VqTqdLYe_UrnhsAY2emvdYe9U" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>Bosmans Pneus - Votre garage de pneus</title>
        <meta name="description" content="Découvrez Bosmans Pneus, votre garage spécialisé dans les pneus de qualité." />
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
