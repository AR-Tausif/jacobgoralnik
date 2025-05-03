"use client"

import { useSidebar } from "./sidebar-provider"
import { Bell, Search, Menu } from "lucide-react"

export default function Header() {
  const { toggle } = useSidebar()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-white px-4 md:px-6">
      <button onClick={toggle} className="mr-4 rounded-md p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden">
        <Menu size={22} />
      </button>

      <div className="relative hidden md:block flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative rounded-full p-1.5 text-gray-500 hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-sm font-medium text-indigo-600">AD</span>
          </div>
        </div>
      </div>
    </header>
  )
}
