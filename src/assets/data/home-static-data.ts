// data/productSections.ts

import {
  bestSellingProducts,
  bestSellingProductsTwo,
  hotDealsProducts,
  latestVapeProducts,
} from ".";

export const BRAND_NAME = "One Net App";
export const productSections = [
  {
    title: `BEST SELLING ${BRAND_NAME}`,
    viewAllLink: "/collections/best-selling-notunbazar",
    products: bestSellingProducts,
  },
  {
    title: `HOT DEALS - ${BRAND_NAME}`,
    viewAllLink: "/collections/hot-deals-notunbazar",
    products: hotDealsProducts,
  },
  {
    title: `BEST SELLING ${BRAND_NAME}`,
    viewAllLink: "/collections/best-selling-disposable-vapes",
    products: bestSellingProductsTwo,
  },
  {
    title: `HOT DEALS - ${BRAND_NAME}`,
    viewAllLink: "/collections/hot-deals-disposables",
    products: hotDealsProducts,
  },
  {
    title: "BEST SELLING VAPE KITS",
    viewAllLink: "/collections/best-selling-vape-kits",
    products: bestSellingProducts,
  },
  {
    title: "BEST SELLING NIC POUCHES",
    viewAllLink: "/collections/best-selling-nic-pouches",
    products: bestSellingProducts,
  },
  {
    title: "LATEST VAPE PRODUCTS",
    viewAllLink: "/collections/latest-vape-products",
    products: latestVapeProducts,
  },
];
