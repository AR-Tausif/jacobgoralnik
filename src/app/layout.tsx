import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME } from "@/assets/data/home-static-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BRAND_NAME}`,
  description: `${BRAND_NAME} description here.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* Add any additional head elements here */}</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
