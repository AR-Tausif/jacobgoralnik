import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Download, Filter, Search } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TRX-7352",
      orderId: "ORD-7352",
      customer: "Sarah Johnson",
      date: "2023-09-12",
      amount: "$129.99",
      method: "Credit Card",
      status: "Completed",
      vendor: "TechGadgets",
    },
    {
      id: "TRX-7351",
      orderId: "ORD-7351",
      customer: "Michael Chen",
      date: "2023-09-12",
      amount: "$89.50",
      method: "PayPal",
      status: "Completed",
      vendor: "HomeDecor",
    },
    {
      id: "TRX-7350",
      orderId: "ORD-7350",
      customer: "Emily Rodriguez",
      date: "2023-09-11",
      amount: "$245.00",
      method: "Credit Card",
      status: "Completed",
      vendor: "FashionHub",
    },
    {
      id: "TRX-7349",
      orderId: "ORD-7349",
      customer: "David Kim",
      date: "2023-09-11",
      amount: "$54.25",
      method: "Credit Card",
      status: "Pending",
      vendor: "KitchenPlus",
    },
    {
      id: "TRX-7348",
      orderId: "ORD-7348",
      customer: "Jessica Taylor",
      date: "2023-09-10",
      amount: "$175.50",
      method: "PayPal",
      status: "Completed",
      vendor: "SportEquip",
    },
    {
      id: "TRX-7347",
      orderId: "ORD-7347",
      customer: "Robert Johnson",
      date: "2023-09-10",
      amount: "$68.75",
      method: "Credit Card",
      status: "Failed",
      vendor: "BeautyStore",
    },
    {
      id: "TRX-7346",
      orderId: "ORD-7346",
      customer: "Amanda Lee",
      date: "2023-09-09",
      amount: "$112.30",
      method: "Credit Card",
      status: "Refunded",
      vendor: "ElectronicsPro",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Download size={16} />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="mt-2 text-3xl font-semibold">$45,231.89</p>
          <p className="mt-1 text-xs text-green-600">+20.1% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Completed</h3>
          <p className="mt-2 text-3xl font-semibold">$42,156.75</p>
          <p className="mt-1 text-xs text-green-600">+18.5% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Pending</h3>
          <p className="mt-2 text-3xl font-semibold">$2,845.25</p>
          <p className="mt-1 text-xs text-yellow-600">+5.7% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Refunded</h3>
          <p className="mt-2 text-3xl font-semibold">$1,245.50</p>
          <p className="mt-1 text-xs text-red-600">+2.3% from last month</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search transactions..."
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
              <option>Pending</option>
              <option>Failed</option>
              <option>Refunded</option>
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
                    Transaction ID
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
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
                  <div className="flex items-center">
                    Amount
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Method
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
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-indigo-600">{transaction.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.orderId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.vendor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : transaction.status === "Failed"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">View</button>
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
