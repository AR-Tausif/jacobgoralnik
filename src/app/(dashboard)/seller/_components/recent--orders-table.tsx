import { CheckCircle, Clock, Package, XCircle } from "lucide-react"

const orders = [
  {
    id: "ORD-12345",
    customer: "John Smith",
    date: "2023-04-08",
    amount: "$125.00",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "ORD-12344",
    customer: "Sarah Johnson",
    date: "2023-04-08",
    amount: "$245.99",
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "ORD-12343",
    customer: "Michael Brown",
    date: "2023-04-07",
    amount: "$79.50",
    status: "Shipped",
    payment: "Paid",
  },
  {
    id: "ORD-12342",
    customer: "Emily Davis",
    date: "2023-04-07",
    amount: "$189.00",
    status: "Cancelled",
    payment: "Refunded",
  },
  {
    id: "ORD-12341",
    customer: "Robert Wilson",
    date: "2023-04-06",
    amount: "$312.75",
    status: "Delivered",
    payment: "Paid",
  },
]

export default function RecentOrdersTable() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Shipped":
        return <Package className="h-4 w-4 text-blue-500" />
      case "Cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-yellow-100 text-yellow-800"
      case "Shipped":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentClass = (payment: string) => {
    switch (payment) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Refunded":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{order.id}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{order.customer}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{order.amount}</td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}
                >
                  {getStatusIcon(order.status)}
                  {order.status}
                </span>
              </td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentClass(order.payment)}`}
                >
                  {order.payment}
                </span>
              </td>
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
