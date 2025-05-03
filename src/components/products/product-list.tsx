"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./product-card";
import { SectionHeading } from "../section-heading";

interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  featuredText?: string;
  slug: string;
}

interface ProductListProps {
  title: string;
  viewAllLink: string;
  products: Product[];
}

// Example product data
const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Aloe Grapes Nic Salt by Six Licks E-liquid",
    price: 4.99,
    compareAtPrice: 5.99,
    imageUrl: "https://ext.same-assets.com/3830457462/2683662776.jpeg",
    rating: 4.5,
    reviewCount: 42,
    inStock: true,
    featured: true,
    featuredText: "Hot",
    slug: "aloe-grapes-nic-salt-six-licks",
  },
  {
    id: "2",
    title: "Crystal Blue Nic Salt by Crystal Vape",
    price: 3.99,
    imageUrl: "https://ext.same-assets.com/3830457462/389722964.jpeg",
    rating: 4.0,
    reviewCount: 36,
    inStock: true,
    slug: "crystal-blue-nic-salt-crystal-vape",
  },
  {
    id: "3",
    title: "Lemon Twist Shortfill E-liquid 50ml",
    price: 10.99,
    compareAtPrice: 14.99,
    imageUrl: "https://ext.same-assets.com/3830457462/110591609.jpeg",
    rating: 5.0,
    reviewCount: 18,
    inStock: true,
    featured: true,
    featuredText: "New",
    slug: "lemon-twist-shortfill-eliquid-50ml",
  },
  {
    id: "4",
    title: "Blueberry Burst Nic Salt 10ml",
    price: 4.49,
    imageUrl: "https://ext.same-assets.com/3830457462/1103176172.jpeg",
    rating: 4.2,
    reviewCount: 28,
    inStock: true,
    slug: "blueberry-burst-nic-salt-10ml",
  },
  {
    id: "5",
    title: "Menthol Freeze 30ml Shortfill",
    price: 9.99,
    compareAtPrice: 12.99,
    imageUrl: "https://ext.same-assets.com/3830457462/1810603306.jpeg",
    rating: 3.8,
    reviewCount: 15,
    inStock: true,
    slug: "menthol-freeze-30ml-shortfill",
  },
];

const ProductList = ({ title, viewAllLink, products = sampleProducts }: ProductListProps) => {
  return (
    <div className="py-8 space-y-6">
      <SectionHeading title={title} link={viewAllLink} linkText="View All" />
      {/* <div className="flex justify-between items-center gap-3 mb-6">
        <h2 className="text-xl font-bold uppercase">{title}</h2>
  
        <Link
          href={viewAllLink}
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium border"
        >
          View all
        </Link>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* <div className="mt-6 text-center">
        <Link
          href={"/products"}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded text-sm font-medium"
        >
          View all products
        </Link>
      </div> */}
    </div>
  );
};

export default ProductList;
