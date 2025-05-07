import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME } from "@/assets/data/home-static-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BRAND_NAME} Online Multivendor Shop | Kits | FREE DELIVERY`,
  description: `${BRAND_NAME} is an online multivendor shop which offers largest range of premium eliquid flavours, vape kits, pods, tanks, coils and batteries.`,
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
