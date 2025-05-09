import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BRAND_NAME } from "@/assets/data/home-static-data";
import Navbar from "@/components/widgets/navbar";
import { AppLayoutSidebar } from "@/components/layout/app-layout/app-layout-sidebar";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BRAND_NAME}`,
  description: `${BRAND_NAME} description here`,
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
          <main className="h-screen">
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
