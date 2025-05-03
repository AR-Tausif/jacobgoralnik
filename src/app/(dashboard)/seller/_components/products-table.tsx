import Image from "next/image"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$129.99",
    stock: 45,
    vendor: "Tech Gadgets Inc.",
    status: "Active",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$199.99",
    stock: 28,
    vendor: "Tech Gadgets Inc.",
    status: "Active",
  },
  {
    id: 3,
    name: "Laptop Pro 16-inch",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$1,999.99",
    stock: 12,
    vendor: "Tech Gadgets Inc.",
    status: "Active",
  },
  {
    id: 4,
    name: "Smartphone Ultra",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$899.99",
    stock: 0,
    vendor: "Tech Gadgets Inc.",
    status: "Out of Stock",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$79.99",
    stock: 56,
    vendor: "Tech Gadgets Inc.",
    status: "Active",
  },
  {
    id: 6,
    name: "4K Smart TV 55-inch",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$599.99",
    stock: 8,
    vendor: "Tech Gadgets Inc.",
    status: "Active",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    category: "Electronics",
    price: "$49.99",
    stock: 0,
    vendor: "Tech Gadgets Inc.",
    status: "Draft",
  },
]

export default function ProductsTable() {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Out of Stock":
        return "bg-red-100 text-red-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      case "Archived":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      width={40}
                      height={40}
                      alt={product.name}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.name}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.category}</td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{product.price}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.stock}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.vendor}</td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(product.status)}`}
                >
                  {product.status}
                </span>
              </td>
              <td className="py-4 px-6 text-sm text-right">
                <div className="flex justify-end items-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Trash className="h-4 w-4" />
                  </button>
                  <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
