"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  Menu,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import NavMenu from "@/components/navigation/nav-menu";
import SearchBar from "@/components/header/search-bar";
import { Sheet, SheetFooter, SheetTrigger } from "../ui/sheet";
import { headerData } from "@/assets/data/header-static-data";
import { useAppSelector } from "@/lib/redux/hooks/hooks";
import { BRAND_NAME } from "@/assets/data/home-static-data";
import Container from "../container";

const Header = () => {
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <header className="w-full">
      {/* Top Bar with Contact Info and Deals link */}
      <div className="bg-[#302c44] text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {headerData.contactLinks.map((link, index) =>
              link.icon ? (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center hover:underline"
                >
                  <link.icon size={14} className="mr-1" />
                  {link.label}
                </Link>
              ) : (
                <span key={index}>|</span>
              )
            )}
          </div>
          <Link
            href="/collections/vape-deals"
            className="font-medium hover:underline"
          >
            <strong>Weekly Deals</strong>
          </Link>
        </div>
      </div>

      {/* Main Header with Logo, Search and Icons */}
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-x-1">
            <Link href="/" className="">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnUvznK7I2_4YaNTZXctNwCyOu2E5YBAoVQ&s"
                alt={`${BRAND_NAME} logo`}
                width={46}
                height={46}
                priority
              />
            </Link>
            <p className="uppercase font-bold text-secondary text-xl mb-1">
              Notun Bazar
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-3xl mx-4 hidden md:block">
            <SearchBar />
          </div>

          {/* User Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/register">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User size={22} />
              </button>
            </Link>
            <Link href="/wishlist">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart size={22} />
              </button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-1 -right-1 bg-[#d33246] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                </button>
              </SheetTrigger>
            </Sheet>
            <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
              <Search size={22} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Only visible on mobile */}
      <div className="md:hidden px-4 py-2 border-b border-gray-200">
        <SearchBar />
      </div>

      {/* Navigation Menu */}
      <NavMenu navigationItems={headerData.menuLinks} />

      {/* Reward option */}
      <div className="bg-[#302c44] flex items-center justify-center gap-x-2 text-white text-sm py-2 px-4">
        <p className="text-center uppercase font-bold">{BRAND_NAME} rewards</p>
        <ChevronDown />
      </div>

      {/* Gain trust to user */}
      <GainTrustFromUser />
    </header>
  );
};

const GainTrustFromUser = () => {
  return (
    <Container>
      <div className="flex items-center justify-between text-sm py-2 p-4">
        <p className="text-lg tracking-tight font-bold">
          {BRAND_NAME} Online Shop{" "}
        </p>

        {/* Free delvery */}
        <p className="flex items-center gap-x-2">
          <Image
            height="20"
            width="20"
            src="//e-liquids.com/cdn/shop/t/404/assets/svg_delivery-van.svg?v=158528530152609669621714742055"
            alt="Free E-liquids delivery"
            loading="eager"
          />
          <span className="text-green-600">Free fast delivery</span>
          on orders over £20
        </p>

        {/* Same day dispatch*/}
        <p className="flex items-center gap-x-2">
          <Image
            height="20"
            width="20"
            src="//e-liquids.com/cdn/shop/t/404/assets/svg_delivery-parcel.svg?v=183064342667095515711714742055"
            alt="Same day E-liquids dispatch"
            loading="eager"
          />
          <span className="despatch-text text-red-600">Same day dispatch</span>
          <p> is by 6:30pm</p>
        </p>

        {/* Members earn loyality points */}
        <p className="flex items-center gap-x-2">
          <Image
            height="20"
            width="20"
            src="//e-liquids.com/cdn/shop/t/404/assets/svg_loyalty-points.svg?v=181831021194075558051714742054"
            alt="E-liquids loyalty points"
            loading="eager"
          />
          <Link href="/pages/e-liquid-loyalty-page">
            Members earn loyalty points
          </Link>
          on every product
        </p>
      </div>
    </Container>
  );
};

export default Header;
