"use client";

import React from "react";
import Link from "next/link";
import { BRAND_NAME } from "@/assets/data/home-static-data";

interface FlavorCategory {
  name: string;
  items: string[];
  viewAllLink: string;
}

const flavorCategories: FlavorCategory[] = [
  {
    name: "Desserts & Bakery",
    items: ["Cookies", "Buttercream", "Custard", "Caramel", "Cereal", "Vanilla All"],
    viewAllLink: "/collections/dessert-bakery-eliquid",
  },
  {
    name: "Fruits & Berries",
    items: ["Orange", "Apple", "Strawberry", "Grape", "Tropical", "Blueberry", "View All"],
    viewAllLink: "/collections/fruit-berry-eliquid",
  },
  {
    name: "Drinks & Menthol",
    items: ["Soda", "Energy", "Chocolate", "Coffee", "Menthol", "Bubblegum", "View All"],
    viewAllLink: "/collections/drinks-menthol-eliquid",
  },
  {
    name: "Sweets",
    items: ["Candy", "Sherbet", "Lemonade", "Fizzy", "Sour", "View All"],
    viewAllLink: "/collections/sweets-eliquid",
  },
  {
    name: "Tobacco",
    items: ["Mild", "Menthol", "Nutty", "Cherry", "Vanilla", "View All"],
    viewAllLink: "/collections/tobacco-eliquid",
  },
  {
    name: "Our Favourites",
    items: ["Blue Raspberry", "Strawberry", "Tropical Fruits", "Menthol", "Custard", "Sherbet", "View All"],
    viewAllLink: "/collections/our-favourites-eliquid",
  },
];

const FlavorCategories = () => {
  return (
    <div className="py-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-center mb-8 uppercase">EVERY DELICIOUS {BRAND_NAME} FLAVOUR</h2>
      <p className="text-center text-gray-600 mb-6 px-4 max-w-4xl mx-auto text-sm">
        notunbazar.com is one of the largest online vape stores in the UK, stocking a diverse range of liquid flavours, vape kits, tanks, and e-cig batteries, plus many vape accessories for everyday vaping.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {flavorCategories.map((category, index) => (
          <div key={index} className="px-4">
            <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
            <ul className="space-y-1">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm">
                  {item === "View All" ? (
                    <Link href={category.viewAllLink} className="text-blue-600 hover:underline">
                      {item}
                    </Link>
                  ) : (
                    <Link href={`${category.viewAllLink}/${item.toLowerCase().replace(" ", "-")}`} className="hover:underline">
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorCategories;
