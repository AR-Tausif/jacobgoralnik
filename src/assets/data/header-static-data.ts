import { Mail, Phone } from "lucide-react";

const brandName = "Desh Bazar";
const BRAND_NAME_FOR_EMAIL = brandName.split(" ").join("").toLowerCase();
export const headerData = {
  contactLinks: [
    {
      href: `mailto:info@${BRAND_NAME_FOR_EMAIL}.com`,
      icon: Mail,
      label: `info@${BRAND_NAME_FOR_EMAIL}.com`,
    },
    {
      href: "",
      icon: "",
      label: "|",
    },

    {
      href: "tel:+8801823771127",
      icon: Phone,
      label: "+880 1823 771127",
    },
  ],
  menuLinks: [
    {
      name: "Travel",
      href: "/collections/clearance-short-dated-stock",
    },
    {
      name: "Electronics",
      href: "/collections/clearance-short-dated-stock",
    },
    {
      name: "Fashion & Beauty",
      href: "/collections/fashion-beauty",
      // children: [
      //   { name: "Shortfills", href: "/collections/eliquid/product-type-shortfill" },
      //   { name: "Nicotine Salts", href: "/collections/nicotine-salt-notun-bazar" },
      //   { name: "10ml", href: "/collections/eliquid/pack-size-10ml" },
      //   { name: "50ml", href: "/collections/eliquid/pack-size-50ml" },
      //   { name: "80ml", href: "/collections/eliquid/pack-size-80ml" },
      //   { name: "100ml", href: "/collections/eliquid/pack-size-100ml" },
      //   { name: "50/50 Liquid", href: "/collections/notun-bazar/product-type-50-50" },
      //   { name: "E-liquid Flavours", href: "/pages/notun-bazar-flavours" },
      //   { name: "All Brands", href: "/pages/vape-brands" },
      // ]
    },
    {
      name: "Sports & Gym",
      href: "/collections/sports-gym",
      // children: [
      //   { name: "All Disposable Devices", href: "/collections/disposable-vape" },
      //   {
      //     name: "Hyola",
      //     href: "/products/hyola-pro-max-legal-big-puff-disposable-vape",
      //     featured: true,
      //     featured_text: "Hot"
      //   },
      //   { name: "Gold Bar", href: "/collections/gold-bar-disposable-vape" },
      //   {
      //     name: "Lost Mary",
      //     href: "/collections/lost-mary-disposable-vape",
      //     featured: true,
      //     featured_text: "Hot"
      //   },
      //   { name: "Al Fakher", href: "/collections/al-fakher-disposable-vape" },
      //   { name: "SKE Crystal Bar 600", href: "/collections/ske-crystal-bar-disposable-vape" },
      // ]
    },
    {
      name: "Kids & toy",
      href: "/collections/legal-big-puff-vape-devices",
    },
    {
      name: "Technology",
      href: "/collections/technology",
    },
    {
      name: "Gadgets",
      href: "/collections/gadgets",
    },
  ],
};
