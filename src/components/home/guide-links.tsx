"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const GuideLinks = () => {
  return (
    <div className="py-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Latest Vape Guides */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <Link href="/pages/vape-guides">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
              <Image
                src="https://ext.same-assets.com/3830457462/1232457151.svg"
                alt="Latest Vape Guides"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">View Latest Vape Products</h3>
          </Link>
        </div>

        {/* Best Selling E-liquids Brands */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <Link href="/pages/best-selling-eliquid-brands">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
              <Image
                src="https://ext.same-assets.com/3830457462/166509041.png"
                alt="Best Selling E-liquid Brands"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Best Selling E-liquid Brands</h3>
          </Link>
        </div>

        {/* E-liquid Ratios Explained */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <Link href="/pages/eliquid-ratios-explained">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
              <Image
                src="https://ext.same-assets.com/3830457462/3606729655.png"
                alt="E-liquid Ratios Explained"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">E-liquid Ratios Explained</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideLinks;
