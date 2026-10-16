import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// TODO: change these to your app's name and description.
export const metadata: Metadata = {
  title: "Lakat Iloilo",
  description: "Your guide to exploring Iloilo City and Iloilo Province",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${fraunces.variable} ${inter.variable} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
