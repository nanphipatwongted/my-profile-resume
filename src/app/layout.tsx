import type { Metadata } from "next";

import { Teachers } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  subsets: ["latin"],
  variable: "--font-teachers",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "My REsume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teachers.className}>{children}</body>
    </html>
  );
}
