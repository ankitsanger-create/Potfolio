import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ankit Sanger | Backend Developer",
  description:
    "Portfolio for Ankit Sanger, Backend Developer at Buddy4Study specializing in Java, Spring Boot, and resilient scholarship platforms.",
  openGraph: {
    title: "Ankit Sanger | Backend Developer",
    description:
      "Crafting resilient scholarship platforms with Java, Spring Boot, and a builder mindset.",
    url: "https://ankit-sanger.dev",
    siteName: "Ankit Sanger · Portfolio",
    locale: "en_IN",
    type: "profile",
  },
  metadataBase: new URL("https://ankit-sanger.dev"),
  authors: [{ name: "Ankit Sanger", url: "https://ankit-sanger.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
