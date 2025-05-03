import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Download, Filter, Search } from "lucide-react"

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-7352",
      customer: "Sarah Johnson",
      date: "2023-09-12",
      total: "$129.99",
      payment: "Credit Card",
      status: "Completed",
      vendor: "TechGadgets",
    },
    {
      id: "ORD-7351",
      customer: "Michael Chen",
      date: "2023-09-12",
      total: "$89.50",
      payment: "PayPal",
      status: "Processing",
      vendor: "HomeDecor",
    },
    {
      id: "ORD-7350",
      customer: "Emily Rodriguez",
      date: "2023-09-11",
      total: "$245.00",
      payment: "Credit Card",
      status: "Completed",
      vendor: "FashionHub",
    },
    {
      id: "ORD-7349",
      customer: "David Kim",
      date: "2023-09-11",
      total: "$54.25",
      payment: "Credit Card",
      status: "Shipped",
      vendor: "KitchenPlus",
    },
    {
      id: "ORD-7348",
      customer: "Jessica Taylor",
      date: "2023-09-10",
      total: "$175.50",
      payment: "PayPal",
      status: "Processing",
      vendor: "SportEquip",
    },
    {
      id: "ORD-7347",
      customer: "Robert Johnson",
      date: "2023-09-10",
      total: "$68.75",
      payment: "Credit Card",
      status: "Cancelled",
      vendor: "BeautyStore",
    },
    {
      id: "ORD-7346",
      customer: "Amanda Lee",
      date: "2023-09-09",
      total: "$112.30",
      payment: "Credit Card",
      status: "Refunded",
      vendor: "ElectronicsPro",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Download size={16} />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
          <p className="mt-2 text-3xl font-semibold">1,248</p>
          <p className="mt-1 text-xs text-green-600">+12.5% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Completed</h3>
          <p className="mt-2 text-3xl font-semibold">864</p>
          <p className="mt-1 text-xs text-green-600">+8.2% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Processing</h3>
          <p className="mt-2 text-3xl font-semibold">325</p>
          <p className="mt-1 text-xs text-yellow-600">+15.7% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Cancelled</h3>
          <p className="mt-2 text-3xl font-semibold">59</p>
          <p className="mt-1 text-xs text-red-600">+2.3% from last month</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search orders..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={14} />
              Filter
            </Button>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Status</option>
              <option>Completed</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Cancelled</option>
              <option>Refunded</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Vendors</option>
              <option>TechGadgets</option>
              <option>HomeDecor</option>
              <option>FashionHub</option>
              <option>KitchenPlus</option>
              <option>SportEquip</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Payment Methods</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Order ID
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Date
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Vendor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-indigo-600">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.total}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.payment}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.vendor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Cancelled"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of{" "}
            <span className="font-medium">1,248</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
