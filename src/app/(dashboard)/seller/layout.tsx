"use client"

import type React from "react"

import { useState } from "react"
import { Inter, Poppins, Roboto } from "next/font/google"
import DashboardSidebar from "./_components/dashboard-sidebar"
import DashboardHeader from "./_components/dashboard-header"


// const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className={`${roboto.className} min-h-screen bg-gray-50 text-gray-900 flex`}>
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
