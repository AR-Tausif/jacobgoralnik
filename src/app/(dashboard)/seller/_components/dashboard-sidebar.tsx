"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  Users,
  X,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function DashboardSidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()

  // Submenu states
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    products: false,
    orders: false,
    users: false,
    reports: false,
  })

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const isActive = (path: string) => {
    return pathname === path
  }



  const sidebarItems = [
    {
      href: "/seller",
      label: "Dashboard",
      icon: <Home className="h-5 w-5" />
    },
    {
      href: "/seller/products",
      label: "Products",
      icon:  <Package className="h-5 w-5" />
    },
    {
      href: "/seller/users/customers",
      label: "Customers",
      icon:   <Users className="h-5 w-5" />
    },
    {
      href: "/seller/orders",
      label: "Orders",
      icon:  <ShoppingBag className="h-5 w-5" />
    },
    {
      href: "/seller/transactions",
      label: "Transation",
      icon:  <CreditCard className="h-5 w-5" />
    },
    {
      href: "/seller/settings",
      label: "Settings",
      icon:  <Settings className="h-5 w-5" />
    },
  ]


  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
          } w-72`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="bg-primary-600 text-white p-1.5 rounded">
                <Store className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">E-LIQUIDE</span>
            </Link>
            <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {
                sidebarItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive(item.href) ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      {
                        item.icon
                      }
                      <span>{
                        item.label}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>


          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-primary-50 p-3 rounded-lg">
              <h4 className="font-medium text-primary-800 mb-1">Need Help?</h4>
              <p className="text-sm text-primary-700 mb-2">Contact our support team for assistance.</p>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-sm py-2 rounded-md">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

















const fun = () => {
  return (
    <div className="flex-1 overflow-y-auto py-4 px-3">
      {/* <ul className="space-y-1">
              <li>
                <Link
                  href="/seller"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard") ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>

               Products 
              <li>
                <button
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md ${pathname.includes("/dashboard/products")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => toggleMenu("products")}
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5" />
                    <span>Products</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.products ? "rotate-180" : ""}`} />
                </button>
                {openMenus.products && (
                  <ul className="mt-1 ml-8 space-y-1">
                    {
                      productsSidebarItems.map((item, index) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded-md ${isActive(item.href)
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))
                    }

                  </ul>
                )}
              </li>

               Orders 
              <li>
                <button
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md ${pathname.includes("/dashboard/orders")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => toggleMenu("orders")}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Orders</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.orders ? "rotate-180" : ""}`} />
                </button>
                {openMenus.orders && (
                  <ul className="mt-1 ml-8 space-y-1">
                    {
                      orderSidebarItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded-md ${isActive(item.href)
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))
                    }

                  </ul>
                )}
              </li>

               Users 
              <li>
                <button
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md ${pathname.includes("/dashboard/users")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => toggleMenu("users")}
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    <span>Users</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.users ? "rotate-180" : ""}`} />
                </button>
                {openMenus.users && (
                  <ul className="mt-1 ml-8 space-y-1">

                    {
                      userSidebarItems.map((item) => (
                        <li>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded-md ${isActive(item.href)
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {
                              item.label}
                          </Link>
                        </li>
                      ))
                    }

                  </ul>
                )}
              </li>

               Reviews 
              <li>
                <Link
                  href="/dashboard/reviews"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard/reviews")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Reviews</span>
                </Link>
              </li>

               Reports 
              <li>
                <button
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md ${pathname.includes("/dashboard/reports")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => toggleMenu("reports")}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5" />
                    <span>Reports</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.reports ? "rotate-180" : ""}`} />
                </button>
                {openMenus.reports && (
                  <ul className="mt-1 ml-8 space-y-1">
                    {
                      reportSidebarItems.map(item => (
                        <li>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 rounded-md ${isActive(item.href)
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {
                              item.label
                            }
                          </Link>
                        </li>
                      ))
                    }
                     <li>
                      <Link
                        href="/dashboard/reports/vendors"
                        className={`block px-3 py-2 rounded-md ${isActive("/dashboard/reports/vendors")
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        Vendor Performance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/reports/customers"
                        className={`block px-3 py-2 rounded-md ${isActive("/dashboard/reports/customers")
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        Customer Analytics
                      </Link>
                    </li> 
                  </ul>
                )}
              </li>

               Payments 
              <li>
                <Link
                  href="/dashboard/payments"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard/payments")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Payments</span>
                </Link>
              </li>

               Marketing 
              <li>
                <Link
                  href="/dashboard/marketing"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard/marketing")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Marketing</span>
                </Link>
              </li>

               Content 
              <li>
                <Link
                  href="/dashboard/content"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard/content")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Content</span>
                </Link>
              </li>

               Settings 
              <li>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${isActive("/dashboard/settings")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul> */}
    </div>

  )
}