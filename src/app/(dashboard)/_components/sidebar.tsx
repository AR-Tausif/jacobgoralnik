"use client"

import { useSidebar } from "./sidebar-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingBag,
  Tag,
  Package,
  ShoppingCart,
  CreditCard,
  Store,
  Globe,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  Users,
  Mail,
  Footprints,
  Menu,
} from "lucide-react"
import { BRAND_NAME } from "@/assets/data/home-static-data"

const sidebarItems = [
  {
    section: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/",
    subsections: [],
  },
  {
    section: "Ecommerce",
    icon: <ShoppingBag size={20} />,
    subsections: [
      { name: "Manage Categories", href: "/admin/categories", icon: <Tag size={18} /> },
      { name: "Manage Products", href: "/admin/products", icon: <Package size={18} /> },
      { name: "Orders", href: "/admin/orders", icon: <ShoppingCart size={18} /> },
      { name: "Transactions", href: "/admin/transactions", icon: <CreditCard size={18} /> },
      { name: "Vendors", href: "/admin/vendors", icon: <Store size={18} /> },
      { name: "Manage Website", href: "/admin/website", icon: <Globe size={18} /> },
      { name: "Advertisement", href: "/admin/advertisements", icon: <FileText size={18} /> },
      { name: "Manage Blog", href: "/admin/blog", icon: <FileText size={18} /> },
    ],
  },
  {
    section: "Settings & More",
    icon: <Settings size={20} />,
    subsections: [
      { name: "Footer", href: "/admin/footer", icon: <Footprints size={18} /> },
      { name: "Users", href: "/admin/users", icon: <Users size={18} /> },
      { name: "Subscribers", href: "/admin/subscribers", icon: <Mail size={18} /> },
      { name: "Settings", href: "/admin/settings", icon: <Settings size={18} /> },
    ],
  },
]

export default function Sidebar() {
  const { isOpen, toggle, expandedSections, toggleSection } = useSidebar()
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" onClick={toggle} />}

      {/* Mobile toggle button */}
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center">
                <Store className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{BRAND_NAME}</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.section} className="mb-2">
                  {item.subsections.length > 0 ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.section)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-gray-500">{item.icon}</span>
                          {item.section}
                        </div>
                        {expandedSections.includes(item.section) ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>

                      {expandedSections.includes(item.section) && (
                        <ul className="mt-1 space-y-1 pl-10">
                          {item.subsections.map((subsection) => {
                            const isActive = pathname === subsection.href

                            return (
                              <li key={subsection.name}>
                                <Link
                                  href={subsection.href}
                                  className={`flex items-center rounded-md px-3 py-2 text-sm ${
                                    isActive
                                      ? "bg-indigo-50 text-indigo-600 font-medium"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                >
                                  <span className="mr-3 text-gray-500">{subsection.icon}</span>
                                  {subsection.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === item.href ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-3 text-gray-500">{item.icon}</span>
                      {item.section}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* User profile */}
          <div className="border-t p-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <Users size={16} className="text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@notunbazar.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
