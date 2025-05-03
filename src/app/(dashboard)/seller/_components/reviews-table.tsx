import { AlertTriangle, CheckCircle, Edit, MoreHorizontal, Trash, XCircle } from "lucide-react"

const reviews = [
  {
    id: 1,
    product: "Wireless Bluetooth Headphones",
    customer: "John Smith",
    rating: 5,
    content:
      "These headphones are amazing! The sound quality is excellent and they're very comfortable to wear for long periods.",
    date: "2023-04-05",
    status: "Approved",
    disputed: false,
  },
  {
    id: 2,
    product: "Smart Watch Series 5",
    customer: "Sarah Johnson",
    rating: 4,
    content: "Great watch with lots of features. Battery life could be better though.",
    date: "2023-04-04",
    status: "Approved",
    disputed: false,
  },
  {
    id: 3,
    product: "Laptop Pro 16-inch",
    customer: "Michael Brown",
    rating: 2,
    content: "Overpriced and overheats easily. The keyboard is also not comfortable for long typing sessions.",
    date: "2023-04-03",
    status: "Disputed",
    disputed: true,
    disputeReason: "Vendor claims review is inaccurate and customer never contacted support",
  },
  {
    id: 4,
    product: "Smartphone Ultra",
    customer: "Emily Davis",
    rating: 1,
    content: "Terrible product! It stopped working after just two weeks and customer service was unhelpful.",
    date: "2023-04-02",
    status: "Disputed",
    disputed: true,
    disputeReason: "Contains inappropriate language and false claims according to vendor",
  },
  {
    id: 5,
    product: "Wireless Earbuds",
    customer: "Robert Wilson",
    rating: 5,
    content: "Best earbuds I've ever owned. The noise cancellation is incredible and they fit perfectly.",
    date: "2023-04-01",
    status: "Pending",
    disputed: false,
  },
  {
    id: 6,
    product: "4K Smart TV 55-inch",
    customer: "Jennifer Taylor",
    rating: 3,
    content: "Picture quality is good but the smart features are slow and the interface is confusing.",
    date: "2023-03-31",
    status: "Rejected",
    disputed: false,
  },
]

export default function ReviewsTable() {
  const getStatusIcon = (status: string, disputed: boolean) => {
    if (disputed) return <AlertTriangle className="h-4 w-4 text-accent-600" />

    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Pending":
        return <div className="h-4 w-4 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusClass = (status: string, disputed: boolean) => {
    if (disputed) return "bg-accent-100 text-accent-800"

    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Rejected":
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
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reviews.map((review) => (
            <tr key={review.id} className={`hover:bg-gray-50 ${review.disputed ? "bg-accent-50" : ""}`}>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{review.product}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{review.customer}</td>
              <td className="py-4 px-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
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
              </td>
              <td className="py-4 px-6 text-sm text-gray-500 max-w-xs truncate">
                {review.content}
                {review.disputed && (
                  <div className="mt-1 text-xs text-accent-700 bg-accent-50 p-1 rounded">
                    <span className="font-medium">Dispute:</span> {review.disputeReason}
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(review.status, review.disputed)}`}
                >
                  {getStatusIcon(review.status, review.disputed)}
                  {review.disputed ? "Disputed" : review.status}
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
