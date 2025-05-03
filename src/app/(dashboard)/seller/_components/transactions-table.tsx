import { CheckCircle, Clock, Download, ExternalLink, XCircle } from "lucide-react"
import Image from "next/image"

const transactions = [
  {
    id: "TRX-78901",
    orderId: "ORD-12345",
    product: "Wireless Bluetooth Headphones",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "John Smith",
    date: "2023-04-08",
    amount: "$129.99",
    fee: "$13.00",
    netAmount: "$116.99",
    paymentMethod: "Credit Card",
    status: "Completed",
  },
  {
    id: "TRX-78902",
    orderId: "ORD-12346",
    product: "Smart Watch Series 5",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Sarah Johnson",
    date: "2023-04-08",
    amount: "$199.99",
    fee: "$20.00",
    netAmount: "$179.99",
    paymentMethod: "PayPal",
    status: "Completed",
  },
  {
    id: "TRX-78903",
    orderId: "ORD-12347",
    product: "Laptop Pro 16-inch",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Michael Brown",
    date: "2023-04-07",
    amount: "$1,999.99",
    fee: "$200.00",
    netAmount: "$1,799.99",
    paymentMethod: "Credit Card",
    status: "Pending",
  },
  {
    id: "TRX-78904",
    orderId: "ORD-12348",
    product: "Smartphone Ultra",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Emily Davis",
    date: "2023-04-07",
    amount: "$899.99",
    fee: "$90.00",
    netAmount: "$809.99",
    paymentMethod: "Apple Pay",
    status: "Processing",
  },
  {
    id: "TRX-78905",
    orderId: "ORD-12349",
    product: "Wireless Earbuds",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Robert Wilson",
    date: "2023-04-06",
    amount: "$79.99",
    fee: "$8.00",
    netAmount: "$71.99",
    paymentMethod: "Credit Card",
    status: "Completed",
  },
  {
    id: "TRX-78906",
    orderId: "ORD-12350",
    product: "4K Smart TV 55-inch",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Jennifer Taylor",
    date: "2023-04-06",
    amount: "$599.99",
    fee: "$60.00",
    netAmount: "$539.99",
    paymentMethod: "Google Pay",
    status: "Failed",
  },
  {
    id: "TRX-78907",
    orderId: "ORD-12351",
    product: "Portable Bluetooth Speaker",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "David Martinez",
    date: "2023-04-05",
    amount: "$49.99",
    fee: "$5.00",
    netAmount: "$44.99",
    paymentMethod: "Credit Card",
    status: "Refunded",
  },
  {
    id: "TRX-78908",
    orderId: "ORD-12352",
    product: "Gaming Console Pro",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Jessica Anderson",
    date: "2023-04-05",
    amount: "$499.99",
    fee: "$50.00",
    netAmount: "$449.99",
    paymentMethod: "PayPal",
    status: "Completed",
  },
  {
    id: "TRX-78909",
    orderId: "ORD-12353",
    product: "Digital Camera 4K",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Thomas Wilson",
    date: "2023-04-04",
    amount: "$349.99",
    fee: "$35.00",
    netAmount: "$314.99",
    paymentMethod: "Credit Card",
    status: "Completed",
  },
  {
    id: "TRX-78910",
    orderId: "ORD-12354",
    product: "Fitness Tracker",
    productImage: "/placeholder.svg?height=40&width=40",
    customer: "Amanda Lee",
    date: "2023-04-04",
    amount: "$89.99",
    fee: "$9.00",
    netAmount: "$80.99",
    paymentMethod: "Apple Pay",
    status: "Pending",
  },
]

export default function TransactionsTable() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Processing":
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Failed":
      case "Refunded":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Processing":
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
      case "Refunded":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "Credit Card":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
            <path d="M6 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "PayPal":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5 8.5C19.5 11.5 17 14 14 14H11L10 19H7L8.5 8.5H14C17 8.5 19.5 5.5 19.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 3.5C16.5 6.5 14 9 11 9H8L7 14H4L5.5 3.5H11C14 3.5 16.5 0.5 16.5 3.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "Apple Pay":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 5C11.5 5 10 5.5 9 6.5C8 7.5 7.5 9 7.5 10.5C7.5 12 8 13.5 9 14.5C10 15.5 11.5 16 12.5 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 5C16.5 5 15 5.5 14 6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14.5C15 15.5 16.5 16 17.5 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "Google Pay":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M10 8L14 12L10 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      default:
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Transaction ID
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Net Amount
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Method
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{transaction.id}</td>
              <td className="py-4 px-6 text-sm text-primary-600 hover:text-primary-800 font-medium">
                <a href="#" className="flex items-center gap-1">
                  {transaction.orderId}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <Image
                      src={transaction.productImage || "/placeholder.svg"}
                      width={32}
                      height={32}
                      alt={transaction.product}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-sm text-gray-900">{transaction.product}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{transaction.customer}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{transaction.amount}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{transaction.fee}</td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{transaction.netAmount}</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  {getPaymentMethodIcon(transaction.paymentMethod)}
                  <span>{transaction.paymentMethod}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(transaction.status)}`}
                >
                  {getStatusIcon(transaction.status)}
                  {transaction.status}
                </span>
              </td>
              <td className="py-4 px-6 text-sm text-right">
                <div className="flex justify-end items-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-700" title="Download Invoice">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="text-primary-600 hover:text-primary-900 font-medium">View</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                aria-current="page"
                className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </button>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </button>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                3
              </button>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                10
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
