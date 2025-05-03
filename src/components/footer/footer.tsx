"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { BRAND_NAME } from "@/assets/data/home-static-data";

const Footer = () => {
  return (
    <footer className="bg-[#302c44] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Guides */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Guides</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/pages/how-to-vape-guide"
                  className="hover:text-white hover:underline"
                >
                  How to Vape Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/vape-coils"
                  className="hover:text-white hover:underline"
                >
                  About Vape Coils
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/e-liquid-flavours"
                  className="hover:text-white hover:underline"
                >
                  Notun Bazar Flavours
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/vape-guides"
                  className="hover:text-white hover:underline"
                >
                  Vape Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/vape-guides"
                  className="hover:text-white hover:underline"
                >
                  Vape Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Vaping */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Vaping</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/pages/vape-deals"
                  className="hover:text-white hover:underline"
                >
                  Vape Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/find-your-flavour"
                  className="hover:text-white hover:underline"
                >
                  Find Your Flavour
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/refunds-returns"
                  className="hover:text-white hover:underline"
                >
                  Refunds & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about-us"
                  className="hover:text-white hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/age-verification"
                  className="hover:text-white hover:underline"
                >
                  Age Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Service</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/pages/price-promise"
                  className="hover:text-white hover:underline"
                >
                  Price Promise
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/shipping-dispatch"
                  className="hover:text-white hover:underline"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/rewards-program"
                  className="hover:text-white hover:underline"
                >
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/careers"
                  className="hover:text-white hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/medical-disclaimer"
                  className="hover:text-white hover:underline"
                >
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/pages/terms-conditions"
                  className="hover:text-white hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/privacy-policy"
                  className="hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/cookie-policy"
                  className="hover:text-white hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/age-verification"
                  className="hover:text-white hover:underline"
                >
                  Age Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our weekly newsletter and never miss a beat!
            </p>

            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-3 text-black text-sm rounded-l-md focus:outline-none"
                />
              </div>
              <button className="bg-yellow-400 text-black px-3 py-2 rounded-r-md hover:bg-yellow-500">
                <Mail size={18} />
              </button>
            </div>

            <div className="mt-6">
              <Link
                href="/pages/vape-competition"
                className="text-sm text-gray-300 hover:text-white hover:underline"
              >
                View Competition
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <ul className="flex justify-center items-center gap-1">
            <li className="payment-icons-item">
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-visa"
              >
                <title id="pi-visa">Visa</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                  fill="#142688"
                ></path>
              </svg>
            </li>

            <li className="payment-icons-item">
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-master"
              >
                <title id="pi-master">Mastercard</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path
                  fill="#FF5F00"
                  d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                ></path>
              </svg>
            </li>

            <li className="payment-icons-item">
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-bitcoin"
              >
                <title id="pi-bitcoin">Bitcoin</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  fill="#EDA024"
                  d="M21.6 4.4c-4.2-1.4-8.7.8-10.2 5s.8 8.7 5 10.2 8.7-.8 10.2-5c1.4-4.2-.8-8.7-5-10.2z"
                ></path>
                <path
                  fill="#fff"
                  d="M16.1 8.3l.3-1c.6.2 1.3.4 1.9.7.2-.5.4-1 .5-1.6l.9.3-.5 1.5.8.3.5-1.5.9.3c-.2.5-.4 1-.5 1.6l.4.2c.3.2.6.4.9.7.3.3.4.6.5 1 0 .3 0 .6-.2.9-.2.5-.5.8-1.1.9h-.2c.2.1.3.2.4.4.4.4.5.8.4 1.4 0 .1 0 .2-.1.3 0 .1 0 .1-.1.2-.1.2-.2.3-.2.5-.3.5-.8.9-1.5.9-.5 0-1 0-1.4-.1l-.4-.1c-.2.5-.4 1-.5 1.6l-.9-.3c.2-.5.4-1 .5-1.5l-.8-.3c-.2.5-.4 1-.5 1.5l-.9-.3c.2-.5.4-1 .5-1.6l-1.9-.6.6-1.1c.2.1.5.2.7.2.2.1.4 0 .5-.2L17 9.3v-.1c0-.3-.1-.5-.4-.5 0-.2-.2-.3-.5-.4zm1.2 6c.5.2.9.3 1.3.4.3.1.5.1.8.1.2 0 .3 0 .5-.1.5-.3.6-1 .2-1.4l-.6-.5c-.3-.2-.7-.3-1.1-.4-.1 0-.3-.1-.4-.2l-.7 2.1zm1-3.1c.3.1.5.2.7.2.3.1.6.2.9.1.4 0 .7-.1.8-.5.1-.3.1-.6 0-.8-.1-.2-.3-.3-.5-.4-.3-.2-.6-.3-1-.4l-.3-.1c-.1.7-.4 1.3-.6 1.9z"
                ></path>
              </svg>
            </li>

            <li className="payment-icons-item">
              <svg
                width="38"
                height="24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 24"
                aria-labelledby="pi-bitcoin_cash"
              >
                <title id="pi-bitcoin_cash">Bitcoin Cash</title>
                <path
                  d="M35 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"
                  style={{ isolation: "isolate" }}
                  opacity=".07"
                ></path>
                <path
                  d="M35 1a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h32"
                  fill="#fff"
                ></path>
                <circle cx="19" cy="12" r="8" fill="#8dc451"></circle>
                <path
                  d="M21.22 11.43a1.79 1.79 0 0 0 .16-1.12 1.81 1.81 0 0 0-2.15-1.74L19 7a.1.1 0 0 0-.11-.09l-.58.09a.1.1 0 0 0-.07.12l.27 1.58-.72.13-.27-1.54a.1.1 0 0 0-.11-.09l-.54.1a.1.1 0 0 0-.07.11L17.08 9l-1.52.27a.1.1 0 0 0-.07.12l.1.61a.1.1 0 0 0 .11.09h.09a.78.78 0 0 1 .86.7l.58 3.21a.8.8 0 0 1-.51.93.1.1 0 0 0-.07.09v.64a.12.12 0 0 0 0 .09.09.09 0 0 0 .08 0l1.5-.26.27 1.54a.1.1 0 0 0 .11.08l.54-.1a.1.1 0 0 0 .07-.12l-.22-1.5.71-.13.27 1.54a.1.1 0 0 0 .11.08l.54-.09a.1.1 0 0 0 .07-.12l-.27-1.54.36-.06a1.8 1.8 0 0 0 1.43-2.37 1.7 1.7 0 0 0-1-1.28zM18 10.06l1.07-.19a.84.84 0 0 1 .29 1.64l-1.07.19-.29-1.64zm2.16 3.85l-1.43.25-.29-1.64 1.43-.25a.84.84 0 0 1 .29 1.64z"
                  fill="#fff"
                ></path>
              </svg>
            </li>

            <li className="payment-icons-item">
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-ethereum"
              >
                <title id="pi-ethereum">Ethereum</title>
                <g fill="none" fill-rule="evenodd">
                  <rect
                    fill-opacity=".07"
                    fill="#000"
                    width="38"
                    height="24"
                    rx="3"
                  ></rect>
                  <rect
                    fill="#FFF"
                    x="1"
                    y="1"
                    width="36"
                    height="22"
                    rx="2"
                  ></rect>
                  <g fill-rule="nonzero">
                    <path
                      fill="#343434"
                      d="M18.658 4.25l-.102.346V14.63l.102.101 4.657-2.753z"
                    ></path>
                    <path
                      fill="#8C8C8C"
                      d="M18.658 4.25L14 11.978l4.658 2.754v-4.87z"
                    ></path>
                    <path
                      fill="#3C3C3B"
                      d="M18.658 15.613l-.058.07v3.575l.058.167 4.66-6.563z"
                    ></path>
                    <path
                      fill="#8C8C8C"
                      d="M18.658 19.425v-3.812L14 12.862z"
                    ></path>
                    <path
                      fill="#141414"
                      d="M18.658 14.731l4.657-2.753-4.657-2.117z"
                    ></path>
                    <path
                      fill="#393939"
                      d="M14 11.978l4.658 2.753v-4.87z"
                    ></path>
                  </g>
                </g>
              </svg>
            </li>

            <li className="payment-icons-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                viewBox="-36 25 38 24"
                role="img"
                aria-labelledby="pi-litecoin"
              >
                <title id="pi-litecoin">Litecoin</title>
                <path
                  fill="#fff"
                  d="M-.4 49h-33.2c-1.3 0-2.4-1.1-2.4-2.4V27.4c0-1.3 1.1-2.4 2.4-2.4H-.4C.9 25 2 26.1 2 27.4v19.2C2 47.9.9 49-.4 49z"
                ></path>
                <path
                  opacity=".25"
                  fill="#A8AAAD"
                  d="M-.4 49h-33.2c-1.3 0-2.4-1.1-2.4-2.4V27.4c0-1.3 1.1-2.4 2.4-2.4H-.5C.9 25 2 26.1 2 27.4v19.2C2 47.9.9 49-.4 49zm-33.2-23c-.8 0-1.4.6-1.4 1.4v19.2c0 .8.6 1.4 1.4 1.4H-.5c.8 0 1.5-.6 1.5-1.4V27.4C1 26.6.4 26-.4 26h-33.2z"
                ></path>
                <circle fill="#58595B" cx="-17" cy="37" r="8.2"></circle>
                <path
                  fill="#fff"
                  d="M-17.8 32.5L-19 37l-1 .4-.3 1.1 1-.4-.7 2.7h6.9l.4-1.6H-17l.6-2.2 1.2-.4.3-1.1-1.2.5.9-3.5h-2.6z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>
            You have to be over 18 to purchase from this website. Registration
            is Free & Easy for NBV. Registered in England & Wales for Mighty
            Shop Expansion, Birmingham, West Midlands, England, B46 3BY.
            Registered in England & Wales No. 07631926
          </p>
          <p className="mt-2">© 2024 {BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
