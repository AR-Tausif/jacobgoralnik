"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "../section-heading";

interface Category {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "E-LIQUIDS",
    imageUrl: "/images/categories/eliquids.png",
    link: "/collections/eliquid",
  },
  {
    id: 2,
    name: "DISPOSABLES",
    imageUrl: "/images/categories/disposables.png",
    link: "/collections/disposable-vape",
  },
  {
    id: 3,
    name: "VAPE KITS",
    imageUrl: "/images/categories/vape-kits.png",
    link: "/collections/vape-kits",
  },
  {
    id: 4,
    name: "VAPE COILS",
    imageUrl: "/images/categories/vape-coils.png",
    link: "/collections/vape-coils",
  },
  {
    id: 5,
    name: "VAPE TANKS",
    imageUrl: "/images/categories/vape-tanks.png",
    link: "/collections/vape-tanks",
  },
  {
    id: 6,
    name: "VAPE PODS",
    imageUrl: "/images/categories/vape-pods.png",
    link: "/collections/vape-pods",
  },
  {
    id: 7,
    name: "VAPE BATTERIES",
    imageUrl: "/images/categories/vape-batteries.png",
    link: "/collections/vape-batteries",
  },
];

const CategoryNav = () => {
  return (
    <div className="py-6 space-y-6">
      {/* <h2 className="text-center text-xl font-semibold uppercase mb-6">SHOP BY CATEGORY</h2> */}
      <SectionHeading title="Shop by category"/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Link href={category.link} key={category.id}>
            <div className="flex flex-col items-center text-center hover:opacity-90 transition">
              <div className="w-16 h-16 md:w-20 md:h-20 relative mb-2">
                <Image
                  src="https://ext.same-assets.com/3830457462/166509041.png" // Using a placeholder image for now
                  alt={category.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
