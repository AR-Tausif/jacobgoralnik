import { Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { MyCart } from "./my-cart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { updateQuantity, removeFromCart } from "@/lib/redux/features/cartSlice";
import { CartProduct } from "../cards/cart-product";

export const ShoppingCartSheetContent = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  // const increaseQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prev) => prev - 1);
  //   }
  // };

  const totalProductsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalProductsItem = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <SheetContent>
      <SheetTitle className="text-xl font-bold">My Cart</SheetTitle>
      {/* <SheetHeader>
        <SheetTitle>My Cart</SheetTitle>
      </SheetHeader>
      <MyCart /> */}

      <div className="overflow-y-auto">
        <div className="p-4">
          <div className="bg-pink-100 rounded-lg p-3 mb-4 flex items-center gap-3">
            <div className="bg-pink-500 rounded-full p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Want Free Delivery?</h3>
              <p className="text-sm">Spend £8.05 more for free delivery</p>
            </div>
          </div>

          <p className="text-xl uppercase font-bold tracking-tighter">
              Cart Items - {totalProductsItem} 
            </p>
          {cartItems.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="border-t p-4 mt-20">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">£{totalProductsPrice.toFixed(2)}</p>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-md transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </SheetContent>
  );
};
