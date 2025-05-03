"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  HelpCircle,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  ShoppingCart,
} from "lucide-react"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function DashboardHeader({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 w-full">
        {/* Mobile menu button */}
        <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Search */}
        <div className="hidden md:flex relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex items-center ml-auto gap-3">
          {/* Help */}
          <button className="text-gray-500 hover:text-gray-700 p-1.5">
            <HelpCircle className="h-5 w-5" />
          </button>

          {/* Messages */}
          <button className="text-gray-500 hover:text-gray-700 p-1.5 relative">
            <MessageSquare className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-accent-500 rounded-full"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              className="text-gray-500 hover:text-gray-700 p-1.5 relative"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-accent-500 rounded-full"></span>
            </button>

            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Notifications</h3>
                    <button className="text-primary-600 text-sm">Mark all as read</button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div className="flex gap-3">
                      <div className="bg-primary-100 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">New user registration</span> - John Doe has registered as a
                          vendor.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div className="flex gap-3">
                      <div className="bg-accent-100 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-accent-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">New review flagged</span> - A review has been reported for
                          inappropriate content.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div className="flex gap-3">
                      <div className="bg-secondary-100 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="h-5 w-5 text-secondary-600" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">New order received</span> - Order #12345 has been placed.
                        </p>
                        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center border-t border-gray-200">
                  <button className="text-primary-600 text-sm font-medium">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              className="flex items-center gap-2 hover:bg-gray-100 p-1.5 rounded-md"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">JD</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Tausif Ahmed</p>
                <p className="text-xs text-gray-500">Vendor</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* User dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                <div className="p-3 border-b border-gray-200">
                  <p className="font-medium">Tausif Ahmed</p>
                  <p className="text-sm text-gray-500">tausif.ritu1@gmail.com</p>
                </div>
                <div className="p-2">
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">My Profile</span>
                  </Link>
                  <Link
                    href="/seller/settings"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Settings</span>
                  </Link>
                  <button
                    className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-left"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <LogOut className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
