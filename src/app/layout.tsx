import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], weight : ["400", "500", "300"] });

export const metadata: Metadata = {
  title: "Time Tracking Dashboard",
  description: "Challenge time tracking dashboard from frontEndMentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
