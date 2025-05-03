import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { BRAND_NAME } from "@/assets/data/home-static-data";
import Navbar from "@/components/widgets/navbar";
import { AppLayoutSidebar } from "@/components/layout/app-layout/app-layout-sidebar";

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
      <body className={inter.className}>
        <Providers>
          <main className="h-screen overflow-hidden">
            <div className="grid grid-cols-12 items-start">
              <AppLayoutSidebar className="col-span-2" />
              <div className="grid col-span-10">
                <Navbar />
                {/* main content */}
                <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-full">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
