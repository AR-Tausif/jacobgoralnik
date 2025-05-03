import Image from "next/image"

const vendors = [
  {
    id: 1,
    name: "Tech Gadgets Inc.",
    logo: "/placeholder.svg?height=40&width=40",
    sales: "$45,678",
    orders: 456,
    rating: 4.8,
    products: 123,
  },
  {
    id: 2,
    name: "Fashion Forward",
    logo: "/placeholder.svg?height=40&width=40",
    sales: "$32,450",
    orders: 321,
    rating: 4.5,
    products: 98,
  },
  {
    id: 3,
    name: "Home Essentials Co.",
    logo: "/placeholder.svg?height=40&width=40",
    sales: "$28,900",
    orders: 287,
    rating: 4.2,
    products: 76,
  },
  {
    id: 4,
    name: "Organic Foods Market",
    logo: "/placeholder.svg?height=40&width=40",
    sales: "$21,345",
    orders: 198,
    rating: 4.7,
    products: 54,
  },
]

export default function VendorPerformance() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="hover:bg-gray-50">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <Image
                      src={vendor.logo || "/placeholder.svg"}
                      width={32}
                      height={32}
                      alt={vendor.name}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{vendor.name}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{vendor.sales}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{vendor.orders}</td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 mr-2">{vendor.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.934l-6.18 3.254 1.18-6.875L.001 7.514l6.9-1.003L10 .342l3.1 6.17 6.9 1.003-4.999 4.799 1.18 6.875z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{vendor.products}</td>
              <td className="py-4 px-6 text-sm text-right">
                <button className="text-primary-600 hover:text-primary-900 font-medium">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
