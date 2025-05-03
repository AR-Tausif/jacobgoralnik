export default function RecentOrdersTable() {
  const orders = [
    {
      id: "ORD-7352",
      customer: "Sarah Johnson",
      date: "2023-09-12",
      amount: "$129.99",
      status: "Completed",
      vendor: "TechGadgets",
    },
    {
      id: "ORD-7351",
      customer: "Michael Chen",
      date: "2023-09-12",
      amount: "$89.50",
      status: "Processing",
      vendor: "HomeDecor",
    },
    {
      id: "ORD-7350",
      customer: "Emily Rodriguez",
      date: "2023-09-11",
      amount: "$245.00",
      status: "Completed",
      vendor: "FashionHub",
    },
    {
      id: "ORD-7349",
      customer: "David Kim",
      date: "2023-09-11",
      amount: "$54.25",
      status: "Shipped",
      vendor: "KitchenPlus",
    },
    {
      id: "ORD-7348",
      customer: "Jessica Taylor",
      date: "2023-09-10",
      amount: "$175.50",
      status: "Processing",
      vendor: "SportEquip",
    },
  ]

  return (
    <div className="overflow-x-auto -mx-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.vendor}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
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
  )
}
