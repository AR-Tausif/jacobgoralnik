import { Search, Filter, Download, Printer } from "lucide-react"
import RecentOrdersTable from "../_components/recent--orders-table"


export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Order Management</h1>
          <p className="text-gray-500">Track and manage all orders across your marketplace.</p>
        </div>
        <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
          <Printer className="h-5 w-5" />
          <span>Print Orders</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4">
            <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Order Status Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm">All Orders</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Pending</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Processing</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Shipped</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Delivered</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Cancelled</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Refunded</button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <RecentOrdersTable />
      </div>
    </div>
  )
}
