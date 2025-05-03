import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    sales: 245,
    revenue: "$12,250",
    growth: "+12%",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    sales: 190,
    revenue: "$9,500",
    growth: "+8%",
  },
  {
    id: 3,
    name: "Laptop Pro 16-inch",
    sales: 120,
    revenue: "$144,000",
    growth: "+5%",
  },
  {
    id: 4,
    name: "Smartphone Ultra",
    sales: 85,
    revenue: "$76,500",
    growth: "-2%",
  },
]

export default function TopSellingProducts() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
            <Image
              src={`https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg`}
              width={40}
              height={40}
              alt={product.name}
              className="                                                                                                         "
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium truncate">{product.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">{product.sales} sales</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{product.revenue}</span>
            </div>
          </div>
          <div className={`text-sm ${product.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
            {product.growth}
          </div>
        </div>
      ))}
    </div>
  )
}
