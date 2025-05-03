"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, Plus } from "lucide-react";
import { useAppDispatch } from "@/lib/redux/hooks/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";
import { toast } from "sonner";

interface ProductCardProps {
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
  isCartAdded?: boolean;
  slug: string;
}

const productTextSizes = {
  title: "md",
  description: "xs",
};

const ProductCard = ({
  id,
  title,
  price,
  compareAtPrice,
  imageUrl,
  rating,
  reviewCount,
  inStock,
  featured,
  featuredText,
  isCartAdded,
  slug,
}: ProductCardProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    setLoading(true);
    console.log(loading);
    // simulate delay or wait for server update if syncing with DB
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (!inStock) {
      toast.error("This product is out of stock");
      return;
    }

    dispatch(
      addToCart({
        id,
        name: title,
        price,
        quantity: 1,
        imageUrl,
      })
    );

    toast.success("Added to cart successfully");
    setLoading(false);
    console.log(loading);
  };

  // Calculate discount percentage if compareAtPrice exists
  const discountPercentage = compareAtPrice
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : null;

  return (
    <div
      className={`group relative bg-white border border-gray-200 rounded-${productTextSizes.title} overflow-hidden hover:shadow-md transition`}
    >
      {/* Featured badge */}
      {featured && (
        <div
          className={`absolute top-2 left-2 z-10 bg-red-600 text-white text-${productTextSizes.description} font-medium py-1 px-2 rounded`}
        >
          {featuredText || "NEW"}
        </div>
      )}

      {/* Discount badge */}
      {discountPercentage && (
        <div className="absolute top-2 right-2 z-10 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded">
          <span>{discountPercentage}% OFF</span>
        </div>
      )}

      {/* Product Image */}
      <Link href={`/products/${slug}`}>
        <div className="aspect-square relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="px-3 pt-3">
        <div className="bg-green-600 text-black font-bold text-sm text-center px-2 py-[0.1rem] uppercase">
          Deal
        </div>
        <div className="bg-red-700 text-white font-semibold text-sm text-center px-2 py-[0.1rem]">
          Any 5 for £10
        </div>
        {/* Status Badge */}
        {/* <div className="mb-2">
          {inStock ? (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
              IN STOCK
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">
              OUT OF STOCK
            </span>
          )}
        </div> */}
        <div className="pt-4"></div>
        <div className="flex justify-between items-center">
          <Link href={"/category/collection_name"}>
            <p className="mb-1.5 text-sm underline underline-offset-2">
              Category
            </p>
          </Link>

          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <Link href={`/products/${slug}`}>
          <h3 className="text-md font-semibold text-gray-950 line-clamp-2 h-14 mb-1">
            {title}
          </h3>
        </Link>

        <p className="text-gray-400 text-xs">Fruity, Lemon, Lime</p>

        {/* Action Buttons */}
        {/* <div className="flex items-center mt-3 space-x-2">
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`flex-1 text-white text-xs py-1.5 px-3 rounded flex items-center justify-center ${
              inStock
                ? "bg-[#d33246] hover:bg-[#b32a3a]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <Loader className="animate-spin h-4 w-4" />
            ) : (
              <>
                {" "}
                <ShoppingCart size={14} className="mr-1" />
                {inStock ? "Add to Cart" : "Out of Stock"}{" "}
              </>
            )}
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded"
            onClick={() => toast.info("Wishlist feature coming soon!")}
          >
            <Heart size={14} />
          </button>
        </div> */}

        <div className="py-2 border-t mt-4">
          <div className="flex justify-between">
            {/* Price */}
            <div className="flex items-center">
              <span className="text-md font-extrabold text-pink-600">
                £{price.toFixed(2)}
              </span>
              {compareAtPrice && (
                <span className="ml-2 text-xs font-semibold text-gray-500 line-through">
                  £{compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center mt-3 space-x-3 border ps-4 rounded-full"
            onClick={handleAddToCart}
            aria-disabled={!inStock}
            >
              <p className="uppercase text-xs font-bold text-gray-800">
                Buy now
              </p>
              {isCartAdded ? (
                <button
                  className="border-2 border-yellow-400 bg-yellow-400 p-2 rounded-full"
                  onClick={() => toast.info("Wishlist feature coming soon!")}
                >
                  <Check size={14} />
                </button>
              ) : (
                <button
                  className="border-2 border-yellow-400 bg-yellow-50 hover:bg-gray-200 p-2 rounded-full"
                  // onClick={() => toast.info("Wishlist feature coming soon!")}
                >
                  <Plus size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// <div className="group relative bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition">
//   {/* Featured badge */}
//   {featured && (
//     <div className="absolute top-2 left-2 z-10 bg-[#d33246] text-white text-xs font-medium py-1 px-2 rounded">
//       {featuredText || "NEW"}
//     </div>
//   )}

//   {/* Discount badge */}
//   {discountPercentage && (
//     <div className="absolute top-2 right-2 z-10 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded">
//       {discountPercentage}% OFF
//     </div>
//   )}

//   {/* Product Image */}
//   <Link href={`/products/${slug}`}>
//     <div className="aspect-square relative">
//       <Image
//         src={imageUrl}
//         alt={title}
//         fill
//         className="object-contain p-4"
//       />
//     </div>
//   </Link>

//   {/* Product Info */}
//   <div className="p-3">
//     {/* Status Badge */}
//     <div className="mb-2">
//       {inStock ? (
//         <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
//           IN STOCK
//         </span>
//       ) : (
//         <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">
//           OUT OF STOCK
//         </span>
//       )}
//     </div>

//     {/* Product Title */}
//     <Link href={`/products/${slug}`}>
//       <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 mb-1">
//         {title}
//       </h3>
//     </Link>

//     {/* Ratings */}
//     <div className="flex items-center mb-2">
//       <div className="flex">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             size={14}
//             className={`${
//               i < Math.floor(rating)
//                 ? "text-yellow-400 fill-yellow-400"
//                 : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//       <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
//     </div>

//     {/* Price */}
//     <div className="flex items-center">
//       <span className="text-lg font-bold text-gray-900">
//         £{price.toFixed(2)}
//       </span>
//       {compareAtPrice && (
//         <span className="ml-2 text-sm text-gray-500 line-through">
//           £{compareAtPrice.toFixed(2)}
//         </span>
//       )}
//     </div>

//     {/* Action Buttons */}
//     <div className="flex items-center mt-3 space-x-2">
//       <button
//         onClick={handleAddToCart}
//         disabled={!inStock}
//         className={`flex-1 text-white text-xs py-1.5 px-3 rounded flex items-center justify-center ${
//           inStock
//             ? "bg-[#d33246] hover:bg-[#b32a3a]"
//             : "bg-gray-400 cursor-not-allowed"
//         }`}
//       >
//         {loading ? (
//           <Loader className="animate-spin h-4 w-4" />
//         ) : (
//           <>
//             {" "}
//             <ShoppingCart size={14} className="mr-1" />
//             {inStock ? "Add to Cart" : "Out of Stock"}{" "}
//           </>
//         )}
//       </button>
//       <button
//         className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded"
//         onClick={() => toast.info("Wishlist feature coming soon!")}
//       >
//         <Heart size={14} />
//       </button>
//     </div>
//   </div>
// </div>
