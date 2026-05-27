import { CRYPTO_POLYFILL_SCRIPT } from "@/lib/polyfill";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoomSlot — Book Spaces. Run Classes. Build Your Business.",
  description:
    "Find classrooms, gyms, dance studios, and activity spaces on flexible hourly bookings across India. Trusted by 10,000+ instructors and space owners.",
  keywords: [
    "room booking",
    "space rental",
    "hourly booking",
    "classroom rental",
    "dance studio",
    "gym rental",
    "India",
    "RoomSlot",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="crypto-polyfill"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CRYPTO_POLYFILL_SCRIPT }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
