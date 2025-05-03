import type React from "react"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/app/(dashboard)/_components/sidebar-provider"
import Sidebar from "@/app/(dashboard)/_components/sidebar"
import Header  from "../_components/header" 

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard - Multivendor Ecommerce",
  description: "Admin dashboard for managing multivendor ecommerce platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

