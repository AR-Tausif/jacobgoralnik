"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define navigation item structure
interface NavItem {
  name: string;
  href: string;
  featured?: boolean;
  featured_text?: string;
  children?: NavItem[];
}

// Main navigation data
// const navigationItems: NavItem[] = [
//   {
//     name: "Clearance",
//     href: "/collections/clearance-short-dated-stock",
//   },
//   {
//     name: "E-liquid",
//     href: "/collections/eliquid",
//     children: [
//       { name: "Shortfills", href: "/collections/eliquid/product-type-shortfill" },
//       { name: "Nicotine Salts", href: "/collections/nicotine-salt-e-liquids" },
//       { name: "10ml", href: "/collections/eliquid/pack-size-10ml" },
//       { name: "50ml", href: "/collections/eliquid/pack-size-50ml" },
//       { name: "80ml", href: "/collections/eliquid/pack-size-80ml" },
//       { name: "100ml", href: "/collections/eliquid/pack-size-100ml" },
//       { name: "50/50 Liquid", href: "/collections/eliquid/product-type-50-50" },
//       { name: "E-liquid Flavours", href: "/pages/e-liquid-flavours" },
//       { name: "All Brands", href: "/pages/vape-brands" },
//     ]
//   },
//   {
//     name: "Disposables",
//     href: "/collections/disposable-vape",
//     children: [
//       { name: "All Disposable Devices", href: "/collections/disposable-vape" },
//       {
//         name: "Hyola",
//         href: "/products/hyola-pro-max-legal-big-puff-disposable-vape",
//         featured: true,
//         featured_text: "Hot"
//       },
//       { name: "Gold Bar", href: "/collections/gold-bar-disposable-vape" },
//       {
//         name: "Lost Mary",
//         href: "/collections/lost-mary-disposable-vape",
//         featured: true,
//         featured_text: "Hot"
//       },
//       { name: "Al Fakher", href: "/collections/al-fakher-disposable-vape" },
//       { name: "SKE Crystal Bar 600", href: "/collections/ske-crystal-bar-disposable-vape" },
//     ]
//   },
//   {
//     name: "Legal Big Puff",
//     href: "/collections/legal-big-puff-vape-devices",
//   },
//   {
//     name: "Vape Kits",
//     href: "/collections/vape-kits",
//     children: [
//       { name: "Kit + Eliquid Bundles", href: "/collections/vape-kits-eliquids-bundle-deals" },
//       { name: "Vape Pen", href: "/collections/vape-kits/vape-kit-type-pen-style" },
//       { name: "Pod Style", href: "/collections/vape-kits/vape-kit-type-pod-style" },
//       { name: "Sub Ohm Vape Kits", href: "/collections/vape-kits/vape-kit-type-sub-ohm" },
//     ]
//   },
//   {
//     name: "Tanks",
//     href: "/collections/vape-tanks",
//   },
//   {
//     name: "Pods",
//     href: "/collections/vape-pods",
//   },
//   {
//     name: "Mods",
//     href: "/collections/vape-mods",
//   },
//   {
//     name: "Nicotine Pouches",
//     href: "/collections/nicotine-pouches",
//   },
//   {
//     name: "Heated Tobacco",
//     href: "/collections/heated-tobacco",
//   },
//   {
//     name: "Accessories",
//     href: "/collections/accessories",
//   },
// ];

const NavMenu = ({navigationItems}:{navigationItems:NavItem[]}) => {
  return (
    <nav className="hidden md:block border-b border-gray-200">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center space-x-6 py-3">
          {navigationItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-sm font-medium hover:text-[#d33246]">
                      {item.name}
                      <ChevronDown size={14} className="ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.children.map((child, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link href={child.href} className="w-full flex justify-between">
                          {child.name}
                          {child.featured && (
                            <span className="bg-[#d33246] text-white text-[10px] px-1 rounded">
                              {child.featured_text}
                            </span>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={item.href} className="text-sm font-medium hover:text-[#d33246]">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
