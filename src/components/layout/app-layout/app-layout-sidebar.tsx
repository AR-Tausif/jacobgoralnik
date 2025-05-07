"use client";

import Image from "next/image";
import SidebarLinks from "./sidebar-links";
import {
  AlignVerticalSpaceAround,
  ArrowDown,
  BarChart,
  Bell,
  Calendar,
  ChevronDown,
  ChevronDownCircleIcon,
  DotSquare,
  Home,
  ListCollapse,
  LogOut,
  PieChart,
  Projector,
  ScanSearch,
  Search,
  Settings,
  User2,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const AppLayoutSidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen border space-y-8 px-8 py-4 rounded-lg ${className}`}
    >
      <div className="flex gap-x-2 items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/120933222?v=4"
          alt="profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="text-secondary font-semibold">Tausif Ahmed</p>
      </div>
      <p className="text-gray-500 text-sm">Dashboard</p>

      {/* sidebar links */}
      {/* <SidebarLinks /> */}
      <ResponsiveSidebar />
    </div>
  );
};

const ResponsiveSidebar = () => {
  const [isCollapse1, setIsCollapse1] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const sidebarLinks = [
    {
      icon: <PieChart className="p-1 text-gray-600" />,
      label: "Overview",
      href: "/",
    },
    {
      icon: <Calendar className="p-1 text-gray-600" />,
      label: "Categories",
      href: "/categories",
    },
    {
      icon: <User2 className="p-1 text-gray-600" />,
      label: "Users",
      href: "/users",
    },
    // {
    //   icon: <Settings className="p-1" />,
    //   label: "Settings",
    //   href: "/settings",
    // },
  ];

  const settingSubmenu = [
    {
      label: "Profile",
      href: "/settings/profile",
    },
    {
      label: "Change Password",
      href: "/settings/change-password",
    },
    {
      label: "Terms & Conditions",
      href: "/settings/terms-conditions",
    },
    {
      label: "Privacy Policy",
      href: "/settings/privacy-policy",
    },
    {
      label: "About Us",
      href: "/settings/about-us",
    },
  ];
  return (
    <aside
      className={`bg-white boxShadow rounded-md transition-all duration-300 ease`}
    >
      {/* general section */}
      <div
        className={`mt-6 ${
          isCollapse1 ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="mt-3 flex flex-col gap-[5px]">
          {sidebarLinks.map((links) => (
            <div
              key={links.label}
              className={`${
                isCollapse1 ? "justify-between" : "justify-center"
              } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
            >
              <Link
                href={links.href}
                className="flex items-center gap-[8px] w-full"
              >
                {links.icon}

                <p
                  className={`${
                    isCollapse1 ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  {links.label}
                </p>
              </Link>

              {/* tooltip */}
              <div
                className={`${
                  isCollapse1 ? "hidden" : "inline"
                } absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                  {links.label}
                </p>
              </div>
            </div>
          ))}

          {/* Settings */}
          <div
            className={`${isCollapse1 && "justify-center"} ${
              isDropdownOpen && "bg-gray-50"
            }  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div
              className={`${
                isCollapse1 ? " justify-between" : "justify-center"
              } flex items-center gap-[8px  w-full`}
            >
              <div className="flex items-center gap-[8px]">
                <Settings className="p-1 text-gray-600" />
                <p
                  className={`${
                    isCollapse1 ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  Settings
                </p>
              </div>

              <ChevronDown
                className={`${
                  isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                } ${
                  isCollapse1 ? "inline" : "hidden"
                } transition-all duration-300 text-[1rem] text-gray-500`}
              />
            </div>

            {!isCollapse1 && (
              <>
                {/* hover projects dropdown */}
                <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                  {settingSubmenu.map((submenu) => (
                    <li
                      key={submenu.label}
                      className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md"
                    >
                      <Link href={submenu.href}>{submenu.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* active projects dropdown (sub menus) */}
          <ul
            className={`${
              isDropdownOpen
                ? "h-auto my-1 opacity-100 z-[1]"
                : "opacity-0 z-[-1] h-0"
            } ${
              isCollapse1 ? "inline" : "hidden"
            } transition-all duration-300  ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500`}
          >
            {settingSubmenu.map((submenu) => (
              <li
                key={submenu.label}
                className="flex"
              >
                <Link className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md w-full" href={submenu.href}>{submenu.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
