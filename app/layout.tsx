import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "/assets/fonts/GeistVF.woff", // Corrected path
//   variable: "--font-geist-sans",
//   weight: "100 900",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "StreamVibe",
  description: "Your ultimate video streaming experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
