"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { BRAND_NAME } from "@/assets/data/home-static-data";

export function CollectionLists() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("Tropical");

  const categories = [
    {
      title: "Desserts & Bakery",
      icon: "🍰",
      subcategories: [
        "Custards",
        "Butterscotch",
        "Caramel",
        "Cinnamon",
        "Cereal",
      ],
    },
    {
      title: "Fruits & Berries",
      icon: "🍋",
      subcategories: ["Grape", "Banana", "Apple", "Strawberry", "Tropical"],
    },
    {
      title: "Sweets & Chocolate",
      icon: "🍬",
      subcategories: ["Chocolate", "Sherbet", "Candy", "Fruity", "Bubblegum"],
    },
    {
      title: "Drink Flavours",
      icon: "🧃",
      subcategories: ["Cola", "Soda", "Heisenberg", "Milkshake", "Lemonade"],
    },
    {
      title: "Tobacco & Menthol",
      icon: "🍃",
      subcategories: ["Tobacco", "Ice", "Mint", "Menthol", "Mojito"],
    },
    {
      title: "Our Favourites",
      icon: "💗",
      subcategories: [
        "Blue Raspberry",
        "Nic Shots",
        "Tropical Fruits",
        "Sweets",
        "Sherbet",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
      <SectionHeading title="All Notun Bazar Collections" />

      <p className="text-gray-700 mb-8">
        {BRAND_NAME} is one of the largest online multi vendor stores in
        Bangladesh, stocking a diverse range of needed collectons, Cloths,
        Electronics, Gadgets, Technology, coils and vape accessories from
        leading vaping brands. Browse our vape juice collection below and
        prepare to be wowed!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="border-gray-200 rounded-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 font-medium">
              <span>{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div>
              {category.subcategories.map((subcategory, subIndex) => (
                <Link
                  href="#"
                  key={subIndex}
                  className={`flex items-center justify-between px-4 py-2 hover:bg-[#181238] hover:text-white`}
                  //   onClick={() => setSelectedSubcategory(subcategory)}
                >
                  <span>{subcategory}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
              <Link
                href="#"
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50"
              >
                <span className="text-gray-500">View All</span>
                <ChevronRight className="h-4 w-4 text-gray-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 flex items-center justify-between">
        <div className="mt-12 flex items-center">
          <h2 className="font-medium text-gray-800 tracking-wide whitespace-nowrap">
            BEST SELLING DISPOSABLE VAPES
          </h2>
          <div className="h-px bg-gray-300 flex-grow mx-4"></div>
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-700 border border-gray-300 rounded-full px-4 py-1 text-sm whitespace-nowrap"
          >
            View all
          </Link>
        </div>
      </div> */}
    </div>
  );
}
