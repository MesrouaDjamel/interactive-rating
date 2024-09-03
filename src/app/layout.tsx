import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Rating",
  description: "Challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
