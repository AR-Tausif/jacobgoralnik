"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerItem {
  id: number;
  imageUrl: string;
  alt: string;
  link: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    imageUrl: "https://ext.same-assets.com/3830457462/3907713618.jpeg",
    alt: "OXVA XLIM Pro 2 Pod Kit New Colours",
    link: "/collections/oxva-eliquid-vape",
  },
  {
    id: 2,
    imageUrl: "https://ext.same-assets.com/3830457462/436869225.jpeg",
    alt: "Bar Fuel Nic Salt E-Liquid",
    link: "/collections/bar-fuel-eliquid-vape",
  },
  {
    id: 3,
    imageUrl: "https://ext.same-assets.com/3830457462/2683768738.jpeg",
    alt: "Nic Salt Shortfills by Drifter",
    link: "/collections/drifter-eliquid-vape",
  },
  {
    id: 4,
    imageUrl: "https://ext.same-assets.com/3830457462/4007294065.jpeg",
    alt: "Voopoo Vinci E120 Pod Kits",
    link: "/collections/voopoo-eliquid-vape",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative w-full my-6 space-y-1">
      {/* <Carousel className="w-full">
        <CarouselContent>
          {bannerItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="p-1">
                <Link href={item.link}>
                  <div className="relative aspect-[3/1] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <img
          src="https://e-liquids.com/cdn/shop/files/pixl-duo-prefilled-pods.jpg?v=1741339324&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
        <img
          src="https://e-liquids.com/cdn/shop/files/hula-legal-big-puff-device-flavours-new.jpg?v=1742221470&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
        <img
          src="https://e-liquids.com/cdn/shop/files/gold-bar-600-disposables-price-drop.jpg?v=1743087489&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
        <img
          src="https://e-liquids.com/cdn/shop/files/xqs-nicotine-pouches-new.jpg?v=1743504424&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
        <img
          src="https://e-liquids.com/cdn/shop/files/voopoo-vinci-spark-220-pod-mod-kit.jpg?v=1743180075&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
        <img
          src="https://e-liquids.com/cdn/shop/files/nicsalt-shortfills-eliquids-by-drifter.jpg?v=1738751494&width=1200"
          alt="first banner"
          className="w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
