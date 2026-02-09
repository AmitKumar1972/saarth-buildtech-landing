import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const fontStylesheetUrl =
//   "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500&display=swap";

export const metadata: Metadata = {
  title: "Inteo – Award Winning Studio",
  description: "We help bring your dream home to reality.",
  // links: [{ rel: "stylesheet", href: fontStylesheetUrl }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Replaces react-helmet script */}
        <Script
          src="https://gumroad.com/js/gumroad.js"
          strategy="afterInteractive"
        />

        {/* Gatsby Layout equivalents */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
