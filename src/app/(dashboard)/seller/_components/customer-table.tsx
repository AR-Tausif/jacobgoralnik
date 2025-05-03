import Image from "next/image"
import { Edit, Eye, MoreHorizontal, MoreVertical, Trash } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Tausif Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$129.99",
  },
  {
    id: 2,
    name: "Towkir Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$199.99",
  },
  {
    id: 3,
    name: "Samir Sadaf",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$1,999.99",
  },
  {
    id: 4,
    name: "Saffat Hossain",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$899.99",
  },
  {
    id: 5,
    name: "Foyzan Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$79.99",
  },
  {
    id: 6,
    name: "Nasif Ahmed",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$599.99",
  },
  {
    id: 7,
    name: "Sundarban Tikana",
    image: "https://avatars.githubusercontent.com/u/120933222?v=4",
    phone: "987-654-3210",
    location: "Dhaka, Bangladesh",
    orders: 10,
    spents: "$49.99",
  },
]

export default function CustomersTable() {
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
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name & Email</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spents</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      width={500}
                      height={500}
                      alt={product.name}
                      className="w-80 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.name}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.phone}</td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{product.location}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.orders}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{product.spents}</td>
              <td className="py-4 px-6 text-sm text-right">
                <div className="flex justify-end items-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Eye className="h-5 w-5" />
                  </button>
                  {/* <button className="text-gray-500 hover:text-gray-700">
                    <Trash className="h-4 w-4" />
                  </button> */}
                  <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreVertical className="h-5 w-5" />
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
